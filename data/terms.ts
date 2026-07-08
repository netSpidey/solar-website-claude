// Solar plant Terms & Conditions from the S.P. Enterprises proposal document.
// Kept as a locale-keyed data file (not in locales/messages.ts) because vue-i18n's
// tm() is only reliable for flat string arrays in this codebase, and ~150 lines of
// legal text doesn't belong in the translation bundle.
// Deliberately excludes bank account details — those stay on quotations/invoices only.

export interface TermsSection {
  title: string
  points: string[]
}

type TermsLocale = 'en' | 'mr' | 'hi'

export const termsAcceptanceNote: Record<TermsLocale, string> = {
  en: 'By accepting a proposal from S.P. Enterprises, Nashik Solar, the customer agrees to the above Terms & Conditions.',
  mr: 'एस.पी. एन्टरप्रायजेस, नाशिक सोलरचा प्रस्ताव स्वीकारून ग्राहक वरील अटी व शर्तींना मान्यता देतो.',
  hi: 'एस.पी. एंटरप्राइजेस, नाशिक सोलर का प्रस्ताव स्वीकार करके ग्राहक उपरोक्त नियम और शर्तों से सहमत होता है.',
}

export const termsSections: Record<TermsLocale, TermsSection[]> = {
  en: [
    {
      title: 'General',
      points: [
        'All installations are carried out as per MNRE & MSEDCL guidelines.',
        'The system is designed to generate electricity from solar energy. Generation depends on sunlight availability, weather conditions, shading, dust, and seasonal variations.',
      ],
    },
    {
      title: 'Scope of Work',
      points: [
        'The scope includes supply, installation, testing, and commissioning of the solar plant as per the agreed proposal.',
        'Any additional civil work, roof repair, waterproofing, structural reinforcement, extra wiring, or any work outside the agreed scope will be chargeable.',
      ],
    },
    {
      title: 'After Handover',
      points: [
        "After successful testing and handover, the plant is under the customer's care and responsibility.",
        'The customer must keep the solar panels clean for optimum performance.',
        'Damage due to natural calamities, fire, theft, vandalism, animals, negligence, improper use, or unauthorised modification is not covered under warranty.',
      ],
    },
    {
      title: 'Warranty',
      points: [
        'Solar panels: as per manufacturer warranty (up to 25–30 years performance warranty).',
        'Solar inverter: as per manufacturer warranty (typically 5–10 years, depending on brand).',
        'Installation workmanship: 1 year against installation defects.',
        "Warranty is applicable as per the manufacturer's terms and conditions.",
      ],
    },
    {
      title: 'Customer Responsibilities',
      points: [
        'Ensure regular cleaning of the solar panels.',
        'Keep the inverter and electrical panel dry, well ventilated, and protected.',
        'Do not allow unauthorised persons to repair or alter the system.',
        'Inform the company immediately in case of any fault or abnormality.',
      ],
    },
    {
      title: 'Performance Disclaimer',
      points: [
        'Power generation is an estimation and may vary. We do not guarantee a fixed number of units per day or month.',
      ],
    },
    {
      title: 'Free Services',
      points: [
        'System commissioning & testing.',
        'Customer training on system operation.',
        'Assistance with warranty registration.',
        'Support for MSEDCL net metering documentation (if included in the contract).',
      ],
    },
    {
      title: 'Paid Services',
      points: [
        'Annual Maintenance Contract (AMC).',
        'Additional service visits after the free service period.',
        'Relocation / shifting of the system.',
        'Replacement of parts not covered under warranty.',
        'System upgrades / capacity expansion.',
      ],
    },
    {
      title: 'Payment Terms',
      points: [
        'Payments as per the agreed quotation.',
        'Delay in payments may affect warranty & service support.',
      ],
    },
  ],
  mr: [
    {
      title: 'सामान्य',
      points: [
        'सर्व इन्स्टॉलेशन MNRE आणि MSEDCL मार्गदर्शक तत्त्वांनुसार केले जातात.',
        'ही सिस्टम सौरऊर्जेपासून वीज निर्माण करण्यासाठी डिझाइन केलेली आहे. वीज निर्मिती सूर्यप्रकाश, हवामान, सावली, धूळ आणि हंगामी बदलांवर अवलंबून असते.',
      ],
    },
    {
      title: 'कामाची व्याप्ती',
      points: [
        'मान्य प्रस्तावानुसार सोलर प्लांटचा पुरवठा, स्थापना, चाचणी व कार्यान्वयन यांचा समावेश आहे.',
        'अतिरिक्त सिव्हिल काम, छत दुरुस्ती, वॉटरप्रूफिंग, स्ट्रक्चरल मजबुतीकरण, अतिरिक्त वायरिंग किंवा मान्य व्याप्तीबाहेरील कोणतेही काम स्वतंत्रपणे आकारले जाईल.',
      ],
    },
    {
      title: 'हस्तांतरणानंतर',
      points: [
        'यशस्वी चाचणी आणि हस्तांतरणानंतर प्लांटची काळजी व जबाबदारी ग्राहकाची असते.',
        'उत्तम कामगिरीसाठी ग्राहकाने सोलर पॅनल स्वच्छ ठेवावेत.',
        'नैसर्गिक आपत्ती, आग, चोरी, तोडफोड, प्राणी, निष्काळजीपणा, चुकीचा वापर किंवा अनधिकृत बदलांमुळे झालेले नुकसान वॉरंटीमध्ये येत नाही.',
      ],
    },
    {
      title: 'वॉरंटी',
      points: [
        'सोलर पॅनल: उत्पादक वॉरंटीनुसार (25–30 वर्षांपर्यंत परफॉर्मन्स वॉरंटी).',
        'सोलर इन्व्हर्टर: उत्पादक वॉरंटीनुसार (ब्रँडनुसार साधारण 5–10 वर्षे).',
        'इन्स्टॉलेशन वर्कमनशिप: इन्स्टॉलेशन दोषांसाठी 1 वर्ष.',
        'वॉरंटी उत्पादकाच्या अटी व शर्तींनुसार लागू.',
      ],
    },
    {
      title: 'ग्राहकाच्या जबाबदाऱ्या',
      points: [
        'सोलर पॅनलची नियमित स्वच्छता करावी.',
        'इन्व्हर्टर आणि इलेक्ट्रिकल पॅनल कोरडे, हवेशीर आणि सुरक्षित ठेवावे.',
        'अनधिकृत व्यक्तींकडून सिस्टमची दुरुस्ती किंवा बदल करू देऊ नये.',
        'कोणताही दोष किंवा असामान्यता आढळल्यास त्वरित कंपनीला कळवावे.',
      ],
    },
    {
      title: 'परफॉर्मन्स अस्वीकरण',
      points: [
        'वीज निर्मिती हा अंदाज असून ती बदलू शकते. दररोज किंवा दरमहा ठराविक युनिट्सची हमी दिली जात नाही.',
      ],
    },
    {
      title: 'मोफत सेवा',
      points: [
        'सिस्टम कार्यान्वयन व चाचणी.',
        'सिस्टम वापराबाबत ग्राहक प्रशिक्षण.',
        'वॉरंटी नोंदणीसाठी मदत.',
        'MSEDCL नेट मीटरिंग कागदपत्रांसाठी मदत (करारात समाविष्ट असल्यास).',
      ],
    },
    {
      title: 'सशुल्क सेवा',
      points: [
        'वार्षिक देखभाल करार (AMC).',
        'मोफत सेवा कालावधीनंतरच्या अतिरिक्त सर्व्हिस भेटी.',
        'सिस्टमचे स्थलांतर / शिफ्टिंग.',
        'वॉरंटीमध्ये नसलेल्या भागांची बदली.',
        'सिस्टम अपग्रेड / क्षमता वाढ.',
      ],
    },
    {
      title: 'पेमेंट अटी',
      points: [
        'मान्य कोटेशननुसार पेमेंट.',
        'पेमेंटला उशीर झाल्यास वॉरंटी व सेवा सपोर्टवर परिणाम होऊ शकतो.',
      ],
    },
  ],
  hi: [
    {
      title: 'सामान्य',
      points: [
        'सभी इंस्टॉलेशन MNRE और MSEDCL दिशानिर्देशों के अनुसार किए जाते हैं.',
        'यह सिस्टम सौर ऊर्जा से बिजली उत्पादन के लिए डिजाइन किया गया है. उत्पादन धूप की उपलब्धता, मौसम, छाया, धूल और मौसमी बदलावों पर निर्भर करता है.',
      ],
    },
    {
      title: 'कार्य की सीमा',
      points: [
        'सहमत प्रस्ताव के अनुसार सोलर प्लांट की आपूर्ति, इंस्टॉलेशन, टेस्टिंग और कमीशनिंग शामिल है.',
        'अतिरिक्त सिविल कार्य, छत की मरम्मत, वॉटरप्रूफिंग, स्ट्रक्चरल मजबूती, अतिरिक्त वायरिंग या सहमत सीमा से बाहर का कोई भी कार्य अलग से शुल्क योग्य होगा.',
      ],
    },
    {
      title: 'हैंडओवर के बाद',
      points: [
        'सफल टेस्टिंग और हैंडओवर के बाद प्लांट की देखभाल और जिम्मेदारी ग्राहक की होती है.',
        'बेहतर प्रदर्शन के लिए ग्राहक को सोलर पैनल साफ रखने चाहिए.',
        'प्राकृतिक आपदा, आग, चोरी, तोड़फोड़, जानवरों, लापरवाही, गलत उपयोग या अनधिकृत बदलाव से हुआ नुकसान वारंटी में शामिल नहीं है.',
      ],
    },
    {
      title: 'वारंटी',
      points: [
        'सोलर पैनल: निर्माता वारंटी के अनुसार (25–30 साल तक परफॉर्मेंस वारंटी).',
        'सोलर इन्वर्टर: निर्माता वारंटी के अनुसार (ब्रांड के अनुसार सामान्यतः 5–10 साल).',
        'इंस्टॉलेशन वर्कमैनशिप: इंस्टॉलेशन दोषों के लिए 1 साल.',
        'वारंटी निर्माता के नियम और शर्तों के अनुसार लागू.',
      ],
    },
    {
      title: 'ग्राहक की जिम्मेदारियां',
      points: [
        'सोलर पैनलों की नियमित सफाई सुनिश्चित करें.',
        'इन्वर्टर और इलेक्ट्रिकल पैनल को सूखा, हवादार और सुरक्षित रखें.',
        'अनधिकृत व्यक्तियों से सिस्टम की मरम्मत या बदलाव न कराएं.',
        'किसी भी खराबी या असामान्यता की स्थिति में तुरंत कंपनी को सूचित करें.',
      ],
    },
    {
      title: 'परफॉर्मेंस अस्वीकरण',
      points: [
        'बिजली उत्पादन एक अनुमान है और बदल सकता है. हम प्रतिदिन या प्रतिमाह निश्चित यूनिट की गारंटी नहीं देते.',
      ],
    },
    {
      title: 'मुफ्त सेवाएं',
      points: [
        'सिस्टम कमीशनिंग और टेस्टिंग.',
        'सिस्टम संचालन पर ग्राहक प्रशिक्षण.',
        'वारंटी पंजीकरण में सहायता.',
        'MSEDCL नेट मीटरिंग दस्तावेजों में सहायता (अनुबंध में शामिल होने पर).',
      ],
    },
    {
      title: 'सशुल्क सेवाएं',
      points: [
        'वार्षिक रखरखाव अनुबंध (AMC).',
        'मुफ्त सेवा अवधि के बाद अतिरिक्त सर्विस विजिट.',
        'सिस्टम का स्थानांतरण / शिफ्टिंग.',
        'वारंटी में शामिल न होने वाले पुर्जों की बदली.',
        'सिस्टम अपग्रेड / क्षमता विस्तार.',
      ],
    },
    {
      title: 'भुगतान शर्तें',
      points: [
        'सहमत कोटेशन के अनुसार भुगतान.',
        'भुगतान में देरी से वारंटी और सेवा सहायता प्रभावित हो सकती है.',
      ],
    },
  ],
}
