export const NEPALI_PROVINCES = [
  { id: 1, name: 'कोशी प्रदेश', nameEn: 'Koshi Province' },
  { id: 2, name: 'मधेश प्रदेश', nameEn: 'Madhesh Province' },
  { id: 3, name: 'बाग्मती प्रदेश', nameEn: 'Bagmati Province' },
  { id: 4, name: 'गण्डकी प्रदेश', nameEn: 'Gandaki Province' },
  { id: 5, name: 'लुम्बिनी प्रदेश', nameEn: 'Lumbini Province' },
  { id: 6, name: 'कर्णाली प्रदेश', nameEn: 'Karnali Province' },
  { id: 7, name: 'सुदूरपश्चिम प्रदेश', nameEn: 'Sudurpaschim Province' }
]

export const PROVINCE_DISTRICTS: Record<number, string[]> = {
  1: ['इलाम', 'झापा', 'पाँचथर', 'ताप्लेजुङ', 'भोजपुर', 'धनकुटा', 'तेह्रथुम', 'संखुवासभा', 'उदयपुर', 'सोलुखुम्बु', 'ओखलढुङ्गा', 'खोटाङ', 'सप्तरी', 'सिराहा'],
  2: ['धनुषा', 'महोत्तरी', 'सर्लाही', 'रौतहट', 'बारा', 'पर्सा', 'सिराहा'],
  3: ['काठमाडौँ', 'ललितपुर', 'भक्तपुर', 'चितवन', 'मकवानपुर', 'नुवाकोट', 'रसुवा', 'धादिङ', 'सिन्धुली', 'काभ्रेपलान्चोक', 'दोलखा', 'रामेछाप', 'सिन्धुपाल्चोक'],
  4: ['गोरखा', 'लमजुङ', 'तनहुँ', 'गुल्मी', 'पर्वत', 'स्याङ्गजा', 'मनाङ', 'मुस्ताङ', 'कास्की'],
  5: ['अर्घाखाँची', 'कपिलवस्तु', 'पाल्पा', 'नवलपरासी', 'रूपन्देही', 'बाँके', 'बर्दिया', 'दाङ', 'प्युठान', 'रोल्पा', 'रुकुम (पूर्व)', 'सल्यान'],
  6: ['सुर्खेत', 'दैलेख', 'जाजरकोट', 'जुम्ला', 'कालिकोट', 'मुगु', 'हुम्ला', 'डोल्पा', 'रुकुम (पश्चिम)', 'सल्यान'],
  7: ['कैलाली', 'कञ्चनपुर', 'डोटी', 'अछाम', 'बझाङ', 'बाजुरा', 'बैतडी', 'दार्चुला', 'डोल्पा']
}

export const NEPALI_DISTRICTS = [
  'इलाम', 'झापा', 'पाँचथर', 'ताप्लेजुङ', 'भोजपुर', 'धनकुटा', 'तेह्रथुम', 'संखुवासभा', 'उदयपुर', 'सोलुखुम्बु', 'ओखलढुङ्गा', 'खोटाङ', 'सप्तरी', 'सिराहा', 'धनुषा', 'महोत्तरी', 'सर्लाही', 'रौतहट', 'बारा', 'पर्सा', 'काठमाडौँ', 'ललितपुर', 'भक्तपुर', 'चितवन', 'मकवानपुर', 'नुवाकोट', 'रसुवा', 'धादिङ', 'सिन्धुली', 'काभ्रेपलान्चोक', 'दोलखा', 'रामेछाप', 'सिन्धुपाल्चोक', 'गोरखा', 'लमजुङ', 'तनहुँ', 'गुल्मी', 'पर्वत', 'स्याङ्गजा', 'मनाङ', 'मुस्ताङ', 'अर्घाखाँची', 'कपिलवस्तु', 'पाल्पा', 'नवलपरासी', 'रूपन्देही', 'बाँके', 'बर्दिया', 'कैलाली', 'कञ्चनपुर', 'डोटी', 'अछाम', 'बझाङ', 'बाजुरा', 'डोल्पा', 'बैतडी', 'दार्चुला', 'सुर्खेत', 'दैलेख', 'जाजरकोट', 'जुम्ला', 'कालिकोट', 'मुगु', 'हुम्ला', 'कास्की', 'दाङ', 'प्युठान', 'रोल्पा', 'रुकुम (पूर्व)', 'रुकुम (पश्चिम)', 'सल्यान'
]

export const CROP_TYPES = [
  { id: 1, name: 'अन्नबाली', nameEn: 'Cereals', icon: '🌾' },
  { id: 2, name: 'दलहन', nameEn: 'Legumes', icon: '🫘' },
  { id: 3, name: 'तरकारी', nameEn: 'Vegetables', icon: '🥬' },
  { id: 4, name: 'फलफूल', nameEn: 'Fruits', icon: '🍎' },
  { id: 5, name: 'मसला', nameEn: 'Spices', icon: '🌶️' },
  { id: 6, name: '�षधि', nameEn: 'Medicinal', icon: '🌿' },
  { id: 7, name: 'औद्योगिक', nameEn: 'Industrial', icon: '🏭' },
  { id: 8, name: 'फूलफुल्याउने', nameEn: 'Flowers', icon: '🌺' }
]

export const SEASONS = [
  { id: 1, name: 'वसन्त', nameEn: 'Spring', months: 'फागुन - बैशाख' },
  { id: 2, name: 'ग्रीष्म', nameEn: 'Summer', months: 'जेष्ठ - असार' },
  { id: 3, name: 'वर्षा', nameEn: 'Monsoon', months: 'श्रावण - भाद्र' },
  { id: 4, name: 'शरद्', nameEn: 'Autumn', months: 'आश्विन - कार्तिक' },
  { id: 5, name: 'हिउँद', nameEn: 'Winter', months: 'मंसिर - पुष' },
  { id: 6, name: 'शिशिर', nameEn: 'Pre-winter', months: 'माघ - फागुन' }
]

export const SOIL_TYPES = [
  { id: 1, name: 'कालो माटो', nameEn: 'Black Soil', ph: '6.0-7.5', crops: ['गहुँ', 'जौ', 'मकै', 'दाल'] },
  { id: 2, name: 'रातो माटो', nameEn: 'Red Soil', ph: '5.5-6.5', crops: ['चामल', 'गहुँ', 'तरकारी'] },
  { id: 3, name: 'बलौटे माटो', nameEn: 'Sandy Soil', ph: '6.0-7.0', crops: ['गहुँ', 'जौ', 'मकै', 'दलहन'] },
  { id: 4, name: 'चिल्ला माटो', nameEn: 'Clay Soil', ph: '6.0-7.5', crops: ['धान', 'गहुँ', 'तरकारी'] },
  { id: 5, name: 'दोमट माटो', nameEn: 'Loamy Soil', ph: '6.0-7.0', crops: ['सबै प्रकारको बाली'] }
]

export const LIVESTOCK_TYPES = [
  { id: 1, name: 'गाई', nameEn: 'Cow', icon: '🐄', products: ['दुध', 'दही', 'घ्यू', 'गोबर'] },
  { id: 2, name: 'भैंसी', nameEn: 'Buffalo', icon: '🐃', products: ['दुध', 'मासु', 'गोबर'] },
  { id: 3, name: 'बाख्रा', nameEn: 'Goat', icon: '🐐', products: ['दुध', 'मासु', 'ऊन'] },
  { id: 4, name: 'भेडा', nameEn: 'Sheep', icon: '🐑', products: ['ऊन', 'मासु'] },
  { id: 5, name: 'कुखुरा', nameEn: 'Chicken', icon: '🐔', products: ['अन्डा', 'मासु'] },
  { id: 6, name: 'बट्टाई', nameEn: 'Duck', icon: '🦆', products: ['अन्डा', 'मासु'] },
  { id: 7, name: 'माछा', nameEn: 'Fish', icon: '🐟', products: ['मासु'] }
]

export const FERTILIZER_TYPES = [
  { id: 1, name: 'यूरिया', nameEn: 'Urea', npk: '46-0-0', type: 'chemical' },
  { id: 2, name: 'डीएपी', nameEn: 'DAP', npk: '18-46-0', type: 'chemical' },
  { id: 3, name: 'एमओपी', nameEn: 'MOP', npk: '0-0-60', type: 'chemical' },
  { id: 4, name: 'गोबर', nameEn: 'Cow Dung', npk: '0.5-0.2-0.4', type: 'organic' },
  { id: 5, name: 'गोमूत्र', nameEn: 'Cow Urine', npk: '0.1-0.1-0.1', type: 'organic' },
  { id: 6, name: 'कम्पोस्ट', nameEn: 'Compost', npk: '1.5-0.5-1.0', type: 'organic' },
  { id: 7, name: 'भर्मी कम्पोस्ट', nameEn: 'Vermicompost', npk: '1.5-0.4-0.8', type: 'organic' }
]

export const PESTICIDE_TYPES = [
  { id: 1, name: 'कीटनाशक', nameEn: 'Insecticide', target: 'कीरा' },
  { id: 2, name: 'फफूंदनाशक', nameEn: 'Fungicide', target: 'फफूंद' },
  { id: 3, name: 'झारनाशक', nameEn: 'Herbicide', target: 'झार' },
  { id: 4, name: 'निमको अर्क', nameEn: 'Neem Extract', target: 'सबै', type: 'organic' },
  { id: 5, name: 'तोबाकोको अर्क', nameEn: 'Tobacco Extract', target: 'कीरा', type: 'organic' }
]
