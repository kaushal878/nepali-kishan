const CACHE_NAME = 'nepali-kishan-v1'
const STATIC_CACHE_NAME = 'nepali-kishan-static-v1'
const DYNAMIC_CACHE_NAME = 'nepali-kishan-dynamic-v1'

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main-app.js',
  '/_next/static/chunks/app/_not-found.js',
  '/_next/static/chunks/app/page.js',
  '/_next/static/chunks/app/layout.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/weather',
  '/api/market-prices',
  '/api/crop-recommendations',
  '/api/disease-detection'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Static assets cached')
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests (different origin)
  if (url.origin !== self.location.origin) {
    return
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request)
        })
    )
    return
  }

  // Handle API requests with network-first strategy
  if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone)
              })
          }
          return response
        })
        .catch(() => {
          // Return cached response if network fails
          return caches.match(request)
        })
    )
    return
  }

  // Handle other requests with cache-first strategy
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          // Return cached version
          return response
        }

        // If not in cache, fetch from network
        return fetch(request)
          .then((response) => {
            // Cache successful responses
            if (response.ok) {
              const responseClone = response.clone()
              caches.open(DYNAMIC_CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseClone)
                })
            }
            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html')
            }
          })
      })
  )
})

// Push notification event
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New farming update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('नेपाली किसान', options)
  )
})

// Notification click event
self.addEventListener('notificationclick', (event) => {
  const notification = event.notification
  const action = event.action

  if (action === 'explore') {
    // Open the app to specific page
    event.waitUntil(
      clients.openWindow('/')
    )
  } else if (action === 'close') {
    // Just close the notification
    notification.close()
  } else {
    // Default: open the app
    event.waitUntil(
      clients.openWindow('/')
    )
  }

  notification.close()
})

// Background sync event
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Sync any pending data
      syncData()
    )
  }
})

// Sync pending data
async function syncData() {
  try {
    // Get pending data from IndexedDB
    const pendingData = await getPendingData()
    
    // Send to server
    for (const data of pendingData) {
      try {
        await sendDataToServer(data)
        await removePendingData(data.id)
      } catch (error) {
        console.error('Failed to sync data:', error)
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// IndexedDB helper functions
async function getPendingData() {
  // Implementation would depend on your IndexedDB setup
  return []
}

async function removePendingData(id) {
  // Implementation would depend on your IndexedDB setup
}

async function sendDataToServer(data) {
  // Implementation would depend on your API
}
