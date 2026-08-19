export const calculatorEn = {
  back: "← Back to home",
  badge: "Material catalog & house costing",
  heading: "How much will this house cost?",
  body: "Enter built-up area, pick a specification, then tune each material. The estimate updates with the catalog you select — structure, finishes, fittings, and labour.",
  step1: "1. Built-up area",
  areaLabel: "Total constructed area",
  areaAria: "Built-up area in square feet",
  sqft: "sq.ft",
  perSqftSuffix: "/sq.ft",
  storeys: "Storeys",
  floors: {
    ground: "Ground",
    g1: "G + 1",
    g2: "G + 2",
    g3: "G + 3",
  },
  step2: "2. Starting specification",
  step2Note: "Jump to a typical mix, then change any material below.",
  step3: "3. Material catalog",
  step3Note: "Cost follows the selected option in each category.",
  summaryTitle: "Approximate house cost",
  midEstimate: "mid estimate",
  customMix: "Custom mix",
  perSqftLabel: "Per sq.ft",
  builtUp: "Built-up",
  materials: "Materials",
  labour: "Labour",
  costBySelection: "Cost by selection",
  quantitiesTitle: "Approx. material quantities",
  disclaimer:
    "Indicative metro-India rates for a new RCC home. Final quote follows site survey, drawings, and approved brands. Excludes land, approvals, GST variation, and unusual soil or design conditions.",
  quoteCta: "Request a detailed quote",
  approxTotal: "Approx. total",
  extras: {
    sand: "River / M-sand",
    aggregate: "Coarse aggregate",
    cement: "Cement",
    steel: "TMT steel",
    masonry: "Masonry",
  },
  units: {
    bags: "bags",
    kg: "kg",
    bricks: "bricks",
    blocks: "blocks",
    cft: "cft",
    units: "units",
  },
  presets: {
    economy: {
      label: "Economy",
      tagline: "Solid basics, value-led finishes",
    },
    standard: {
      label: "Standard",
      tagline: "Most common home specification",
    },
    premium: {
      label: "Premium",
      tagline: "Better brands and lasting finishes",
    },
    luxury: {
      label: "Luxury",
      tagline: "Designer materials and detailing",
    },
  },
  categories: {
    masonry: { title: "Masonry & walls", hint: "What the house is built with" },
    cement: { title: "Cement", hint: "RCC, plaster and masonry" },
    steel: { title: "TMT steel", hint: "Beams, slabs and columns" },
    flooring: {
      title: "Flooring",
      hint: "Living, bedrooms and circulation",
    },
    walls: { title: "Wall finish", hint: "Putty, primer and paint" },
    openings: {
      title: "Doors & windows",
      hint: "Frames, shutters and hardware",
    },
    kitchen: { title: "Kitchen", hint: "Carcass, shutters and counter" },
    bath: { title: "Bath fittings", hint: "Sanitaryware and CP fittings" },
    electrical: { title: "Electrical", hint: "Wiring, boards and switches" },
    plumbing: { title: "Plumbing", hint: "Pipes, traps and concealed lines" },
    waterproof: {
      title: "Waterproofing",
      hint: "Terrace, wet areas and tanks",
    },
    labour: {
      title: "Labour & supervision",
      hint: "Civil, finishing and site coordination",
    },
  },
  options: {
    masonry: {
      "red-brick": {
        name: "Red clay bricks",
        note: "Traditional, widely available",
      },
      "fly-ash": {
        name: "Fly ash bricks",
        note: "Smoother face, lower water use",
      },
      aac: { name: "AAC blocks", note: "Lighter, better insulation" },
      concrete: {
        name: "Concrete blocks",
        note: "High strength, faster laying",
      },
    },
    cement: {
      ppc: { name: "PPC (blended)", note: "Everyday RCC & plaster" },
      opc43: { name: "OPC 43", note: "Standard structural grade" },
      opc53: { name: "OPC 53", note: "High-strength RCC" },
    },
    steel: {
      fe500: { name: "Fe 500 TMT", note: "Residential baseline" },
      fe550: { name: "Fe 550 D TMT", note: "Better ductility" },
      fe600: { name: "Fe 600 TMT", note: "Heavier / taller frames" },
    },
    flooring: {
      ceramic: { name: "Ceramic tiles", note: "Budget rooms & utilities" },
      vitrified: { name: "Vitrified 2×2", note: "Most common home floor" },
      "double-charge": {
        name: "Double-charge vitrified",
        note: "Denser, longer wear",
      },
      granite: { name: "Granite", note: "Hard stone, low upkeep" },
      marble: { name: "Italian marble", note: "Luxury living floors" },
    },
    walls: {
      distemper: { name: "Distemper", note: "Basic interior coat" },
      emulsion: { name: "Plastic emulsion", note: "Washable standard finish" },
      "luxury-paint": {
        name: "Luxury emulsion",
        note: "Richer sheen, better cover",
      },
      texture: {
        name: "Texture + luxury paint",
        note: "Feature walls & detailing",
      },
    },
    openings: {
      "flush-alu": {
        name: "Flush doors + aluminium",
        note: "Economy openings",
      },
      "laminate-alu": {
        name: "Laminate doors + aluminium",
        note: "Standard homes",
      },
      "teak-upvc": {
        name: "Teak doors + UPVC",
        note: "Better seal and life",
      },
      designer: {
        name: "Designer wood + premium UPVC",
        note: "Custom joinery",
      },
    },
    kitchen: {
      basic: { name: "Basic modular", note: "Plywood + laminate" },
      standard: { name: "BWP + laminate", note: "Moisture-resistant carcass" },
      premium: { name: "Marine ply + quartz", note: "Soft-close, stone top" },
      luxury: { name: "PU + imported fittings", note: "Designer kitchen" },
    },
    bath: {
      basic: { name: "Economy sanitaryware", note: "Essential fixtures" },
      standard: {
        name: "Standard branded",
        note: "Everyday Jaquar / Hindware class",
      },
      premium: { name: "Premium suite", note: "Better ceramics & CP" },
      luxury: { name: "Luxury suite", note: "Kohler / Grohe class" },
    },
    electrical: {
      basic: { name: "Basic wiring", note: "ISI cables & switches" },
      standard: { name: "Branded standard", note: "Havells-class hardware" },
      premium: { name: "Premium modular", note: "Legrand-class plates" },
      smart: {
        name: "Smart-home ready",
        note: "Extra circuits & automation",
      },
    },
    plumbing: {
      pvc: { name: "PVC", note: "Budget concealed lines" },
      cpvc: { name: "CPVC", note: "Hot & cold residential" },
      ppr: { name: "PPR / composite", note: "Longer life, fewer joints" },
    },
    waterproof: {
      bitumen: { name: "Bitumen coat", note: "Basic terrace protection" },
      chemical: {
        name: "Chemical waterproofing",
        note: "Bath, kitchen, terrace",
      },
      membrane: {
        name: "Membrane + chemical",
        note: "Premium terrace system",
      },
    },
    labour: {
      local: { name: "Local crew", note: "Trade labour only" },
      skilled: {
        name: "Skilled coordinated crew",
        note: "Single-point supervision",
      },
      premium: {
        name: "Premium finishing crew",
        note: "Tighter QA and snagging",
      },
    },
  },
};

export type CalculatorCopy = typeof calculatorEn;

export const calculatorHi: CalculatorCopy = {
  back: "← होम पर वापस जाएँ",
  badge: "सामग्री कैटलॉग और घर की लागत",
  heading: "इस घर की लागत कितनी होगी?",
  body: "बिल्ट-अप क्षेत्रफल डालें, स्पेसिफिकेशन चुनें, फिर हर सामग्री एडजस्ट करें। अनुमान आपके चुने कैटलॉग — स्ट्रक्चर, फिनिश, फिटिंग और मजदूरी — के साथ अपडेट होता है।",
  step1: "1. बिल्ट-अप क्षेत्रफल",
  areaLabel: "कुल निर्मित क्षेत्रफल",
  areaAria: "वर्ग फुट में बिल्ट-अप क्षेत्रफल",
  sqft: "वर्ग फुट",
  perSqftSuffix: "/वर्ग फुट",
  storeys: "मंज़िलें",
  floors: {
    ground: "ग्राउंड",
    g1: "G + 1",
    g2: "G + 2",
    g3: "G + 3",
  },
  step2: "2. शुरुआती स्पेसिफिकेशन",
  step2Note: "एक सामान्य मिक्स चुनें, फिर नीचे कोई भी सामग्री बदलें।",
  step3: "3. सामग्री कैटलॉग",
  step3Note: "लागत हर श्रेणी में चुने विकल्प के अनुसार है।",
  summaryTitle: "अनुमानित घर लागत",
  midEstimate: "मध्य अनुमान",
  customMix: "कस्टम मिक्स",
  perSqftLabel: "प्रति वर्ग फुट",
  builtUp: "बिल्ट-अप",
  materials: "सामग्री",
  labour: "मजदूरी",
  costBySelection: "चयन के अनुसार लागत",
  quantitiesTitle: "अनुमानित सामग्री मात्रा",
  disclaimer:
    "नए RCC घर के लिए मेट्रो-इंडिया के संकेतात्मक रेट। अंतिम कोट साइट सर्वे, ड्रॉइंग और स्वीकृत ब्रांड के बाद आता है। भूमि, अप्रूवल, GST अंतर और असामान्य मिट्टी या डिज़ाइन शामिल नहीं।",
  quoteCta: "विस्तृत कोटेशन माँगें",
  approxTotal: "अनुमानित कुल",
  extras: {
    sand: "नदी / एम-रेत",
    aggregate: "मोटी गिट्टी",
    cement: "सीमेंट",
    steel: "TMT स्टील",
    masonry: "चिनाई",
  },
  units: {
    bags: "बोरी",
    kg: "किग्रा",
    bricks: "ईंटें",
    blocks: "ब्लॉक",
    cft: "घन फुट",
    units: "इकाई",
  },
  presets: {
    economy: {
      label: "इकॉनमी",
      tagline: "मज़बूत बेसिक्स, किफायती फिनिश",
    },
    standard: {
      label: "स्टैंडर्ड",
      tagline: "सबसे आम घर स्पेसिफिकेशन",
    },
    premium: {
      label: "प्रीमियम",
      tagline: "बेहतर ब्रांड और टिकाऊ फिनिश",
    },
    luxury: {
      label: "लक्ज़री",
      tagline: "डिज़ाइनर सामग्री और डिटेलिंग",
    },
  },
  categories: {
    masonry: { title: "चिनाई और दीवारें", hint: "घर किससे बनेगा" },
    cement: { title: "सीमेंट", hint: "RCC, प्लास्टर और चिनाई" },
    steel: { title: "TMT स्टील", hint: "बीम, स्लैब और कॉलम" },
    flooring: {
      title: "फ़्लोरिंग",
      hint: "लिविंग, बेडरूम और कॉरिडोर",
    },
    walls: { title: "दीवार फिनिश", hint: "पुट्टी, प्राइमर और पेंट" },
    openings: {
      title: "दरवाज़े और खिड़कियाँ",
      hint: "फ्रेम, शटर और हार्डवेयर",
    },
    kitchen: { title: "किचन", hint: "कारकस, शटर और काउंटर" },
    bath: { title: "बाथ फिटिंग", hint: "सैनिटरीवेयर और CP फिटिंग" },
    electrical: { title: "इलेक्ट्रिकल", hint: "वायरिंग, बोर्ड और स्विच" },
    plumbing: { title: "प्लंबिंग", hint: "पाइप, ट्रैप और कंसील्ड लाइन" },
    waterproof: {
      title: "वाटरप्रूफिंग",
      hint: "छत, वेट एरिया और टैंक",
    },
    labour: {
      title: "मजदूरी और निगरानी",
      hint: "सिविल, फिनिशिंग और साइट समन्वय",
    },
  },
  options: {
    masonry: {
      "red-brick": {
        name: "लाल मिट्टी की ईंटें",
        note: "पारंपरिक, आसानी से उपलब्ध",
      },
      "fly-ash": {
        name: "फ्लाई ऐश ईंटें",
        note: "चिकनी सतह, कम पानी",
      },
      aac: { name: "AAC ब्लॉक", note: "हल्के, बेहतर इंसुलेशन" },
      concrete: {
        name: "कंक्रीट ब्लॉक",
        note: "ज़्यादा मज़बूती, तेज़ चिनाई",
      },
    },
    cement: {
      ppc: { name: "PPC (ब्लेंडेड)", note: "रोज़मर्रा RCC और प्लास्टर" },
      opc43: { name: "OPC 43", note: "स्टैंडर्ड स्ट्रक्चरल ग्रेड" },
      opc53: { name: "OPC 53", note: "हाई-स्ट्रेंथ RCC" },
    },
    steel: {
      fe500: { name: "Fe 500 TMT", note: "आवासीय बेसलाइन" },
      fe550: { name: "Fe 550 D TMT", note: "बेहतर डक्टिलिटी" },
      fe600: { name: "Fe 600 TMT", note: "भारी / ऊँचे फ्रेम" },
    },
    flooring: {
      ceramic: { name: "सिरेमिक टाइल", note: "बजट कमरे और यूटिलिटी" },
      vitrified: { name: "विट्रिफाइड 2×2", note: "सबसे आम घर का फ़र्श" },
      "double-charge": {
        name: "डबल-चार्ज विट्रिफाइड",
        note: "घना, ज़्यादा टिकाऊ",
      },
      granite: { name: "ग्रेनाइट", note: "कठोर पत्थर, कम रखरखाव" },
      marble: { name: "इटालियन मार्बल", note: "लक्ज़री लिविंग फ़र्श" },
    },
    walls: {
      distemper: { name: "डिस्टेंपर", note: "बेसिक इंटीरियर कोट" },
      emulsion: { name: "प्लास्टिक इमल्शन", note: "धुलने योग्य स्टैंडर्ड फिनिश" },
      "luxury-paint": {
        name: "लक्ज़री इमल्शन",
        note: "बेहतर चमक और कवर",
      },
      texture: {
        name: "टेक्सचर + लक्ज़री पेंट",
        note: "फीचर दीवारें और डिटेलिंग",
      },
    },
    openings: {
      "flush-alu": {
        name: "फ्लश दरवाज़े + एल्यूमीनियम",
        note: "इकॉनमी ओपनिंग्स",
      },
      "laminate-alu": {
        name: "लैमिनेट दरवाज़े + एल्यूमीनियम",
        note: "स्टैंडर्ड घर",
      },
      "teak-upvc": {
        name: "टीक दरवाज़े + UPVC",
        note: "बेहतर सील और जीवन",
      },
      designer: {
        name: "डिज़ाइनर लकड़ी + प्रीमियम UPVC",
        note: "कस्टम जॉइनरी",
      },
    },
    kitchen: {
      basic: { name: "बेसिक मॉड्यूलर", note: "प्लाईवुड + लैमिनेट" },
      standard: { name: "BWP + लैमिनेट", note: "नमी-रोधी कारकस" },
      premium: { name: "मरीन प्लाई + क्वार्ट्ज़", note: "सॉफ्ट-क्लोज, स्टोन टॉप" },
      luxury: { name: "PU + इम्पोर्टेड फिटिंग", note: "डिज़ाइनर किचन" },
    },
    bath: {
      basic: { name: "इकॉनमी सैनिटरीवेयर", note: "ज़रूरी फिक्स्चर" },
      standard: {
        name: "स्टैंडर्ड ब्रांडेड",
        note: "रोज़मर्रा Jaquar / Hindware क्लास",
      },
      premium: { name: "प्रीमियम सुइट", note: "बेहतर सिरेमिक और CP" },
      luxury: { name: "लक्ज़री सुइट", note: "Kohler / Grohe क्लास" },
    },
    electrical: {
      basic: { name: "बेसिक वायरिंग", note: "ISI केबल और स्विच" },
      standard: { name: "ब्रांडेड स्टैंडर्ड", note: "Havells-क्लास हार्डवेयर" },
      premium: { name: "प्रीमियम मॉड्यूलर", note: "Legrand-क्लास प्लेट्स" },
      smart: {
        name: "स्मार्ट-होम रेडी",
        note: "अतिरिक्त सर्किट और ऑटोमेशन",
      },
    },
    plumbing: {
      pvc: { name: "PVC", note: "बजट कंसील्ड लाइन" },
      cpvc: { name: "CPVC", note: "गर्म और ठंडा आवासीय" },
      ppr: { name: "PPR / कम्पोजिट", note: "लंबा जीवन, कम जोड़" },
    },
    waterproof: {
      bitumen: { name: "बिटुमेन कोट", note: "बेसिक छत सुरक्षा" },
      chemical: {
        name: "केमिकल वाटरप्रूफिंग",
        note: "बाथ, किचन, छत",
      },
      membrane: {
        name: "मेम्ब्रेन + केमिकल",
        note: "प्रीमियम छत सिस्टम",
      },
    },
    labour: {
      local: { name: "लोकल क्रू", note: "केवल ट्रेड मजदूरी" },
      skilled: {
        name: "कुशल समन्वित क्रू",
        note: "एक बिंदु से निगरानी",
      },
      premium: {
        name: "प्रीमियम फिनिशिंग क्रू",
        note: "सख्त QA और स्नैगिंग",
      },
    },
  },
};

export const calculatorHinglish: CalculatorCopy = {
  back: "← Home par wapas jao",
  badge: "Material catalog & house costing",
  heading: "Is ghar ki cost kitni hogi?",
  body: "Built-up area daalo, specification choose karo, phir har material tune karo. Estimate aapke selected catalog — structure, finishes, fittings aur labour — ke saath update hota hai.",
  step1: "1. Built-up area",
  areaLabel: "Total constructed area",
  areaAria: "Built-up area square feet mein",
  sqft: "sq.ft",
  perSqftSuffix: "/sq.ft",
  storeys: "Storeys",
  floors: {
    ground: "Ground",
    g1: "G + 1",
    g2: "G + 2",
    g3: "G + 3",
  },
  step2: "2. Starting specification",
  step2Note: "Typical mix choose karo, phir neeche koi bhi material change karo.",
  step3: "3. Material catalog",
  step3Note: "Cost har category ke selected option ke hisaab se aati hai.",
  summaryTitle: "Approximate house cost",
  midEstimate: "mid estimate",
  customMix: "Custom mix",
  perSqftLabel: "Per sq.ft",
  builtUp: "Built-up",
  materials: "Materials",
  labour: "Labour",
  costBySelection: "Cost by selection",
  quantitiesTitle: "Approx. material quantities",
  disclaimer:
    "Naye RCC home ke liye metro-India ke indicative rates. Final quote site survey, drawings aur approved brands ke baad aata hai. Land, approvals, GST variation aur unusual soil ya design include nahi.",
  quoteCta: "Detailed quote request karein",
  approxTotal: "Approx. total",
  extras: {
    sand: "River / M-sand",
    aggregate: "Coarse aggregate",
    cement: "Cement",
    steel: "TMT steel",
    masonry: "Masonry",
  },
  units: {
    bags: "bags",
    kg: "kg",
    bricks: "bricks",
    blocks: "blocks",
    cft: "cft",
    units: "units",
  },
  presets: {
    economy: {
      label: "Economy",
      tagline: "Solid basics, value-led finishes",
    },
    standard: {
      label: "Standard",
      tagline: "Sabse common home specification",
    },
    premium: {
      label: "Premium",
      tagline: "Better brands aur lasting finishes",
    },
    luxury: {
      label: "Luxury",
      tagline: "Designer materials aur detailing",
    },
  },
  categories: {
    masonry: { title: "Masonry & walls", hint: "Ghar kis cheez se banega" },
    cement: { title: "Cement", hint: "RCC, plaster aur masonry" },
    steel: { title: "TMT steel", hint: "Beams, slabs aur columns" },
    flooring: {
      title: "Flooring",
      hint: "Living, bedrooms aur circulation",
    },
    walls: { title: "Wall finish", hint: "Putty, primer aur paint" },
    openings: {
      title: "Doors & windows",
      hint: "Frames, shutters aur hardware",
    },
    kitchen: { title: "Kitchen", hint: "Carcass, shutters aur counter" },
    bath: { title: "Bath fittings", hint: "Sanitaryware aur CP fittings" },
    electrical: { title: "Electrical", hint: "Wiring, boards aur switches" },
    plumbing: { title: "Plumbing", hint: "Pipes, traps aur concealed lines" },
    waterproof: {
      title: "Waterproofing",
      hint: "Terrace, wet areas aur tanks",
    },
    labour: {
      title: "Labour & supervision",
      hint: "Civil, finishing aur site coordination",
    },
  },
  options: {
    masonry: {
      "red-brick": {
        name: "Red clay bricks",
        note: "Traditional, easily available",
      },
      "fly-ash": {
        name: "Fly ash bricks",
        note: "Smoother face, kam paani",
      },
      aac: { name: "AAC blocks", note: "Halki, better insulation" },
      concrete: {
        name: "Concrete blocks",
        note: "High strength, tez laying",
      },
    },
    cement: {
      ppc: { name: "PPC (blended)", note: "Rozmarra RCC & plaster" },
      opc43: { name: "OPC 43", note: "Standard structural grade" },
      opc53: { name: "OPC 53", note: "High-strength RCC" },
    },
    steel: {
      fe500: { name: "Fe 500 TMT", note: "Residential baseline" },
      fe550: { name: "Fe 550 D TMT", note: "Better ductility" },
      fe600: { name: "Fe 600 TMT", note: "Heavier / taller frames" },
    },
    flooring: {
      ceramic: { name: "Ceramic tiles", note: "Budget rooms & utilities" },
      vitrified: { name: "Vitrified 2×2", note: "Sabse common home floor" },
      "double-charge": {
        name: "Double-charge vitrified",
        note: "Denser, longer wear",
      },
      granite: { name: "Granite", note: "Hard stone, kam upkeep" },
      marble: { name: "Italian marble", note: "Luxury living floors" },
    },
    walls: {
      distemper: { name: "Distemper", note: "Basic interior coat" },
      emulsion: { name: "Plastic emulsion", note: "Washable standard finish" },
      "luxury-paint": {
        name: "Luxury emulsion",
        note: "Richer sheen, better cover",
      },
      texture: {
        name: "Texture + luxury paint",
        note: "Feature walls & detailing",
      },
    },
    openings: {
      "flush-alu": {
        name: "Flush doors + aluminium",
        note: "Economy openings",
      },
      "laminate-alu": {
        name: "Laminate doors + aluminium",
        note: "Standard homes",
      },
      "teak-upvc": {
        name: "Teak doors + UPVC",
        note: "Better seal aur life",
      },
      designer: {
        name: "Designer wood + premium UPVC",
        note: "Custom joinery",
      },
    },
    kitchen: {
      basic: { name: "Basic modular", note: "Plywood + laminate" },
      standard: { name: "BWP + laminate", note: "Moisture-resistant carcass" },
      premium: { name: "Marine ply + quartz", note: "Soft-close, stone top" },
      luxury: { name: "PU + imported fittings", note: "Designer kitchen" },
    },
    bath: {
      basic: { name: "Economy sanitaryware", note: "Essential fixtures" },
      standard: {
        name: "Standard branded",
        note: "Rozmarra Jaquar / Hindware class",
      },
      premium: { name: "Premium suite", note: "Better ceramics & CP" },
      luxury: { name: "Luxury suite", note: "Kohler / Grohe class" },
    },
    electrical: {
      basic: { name: "Basic wiring", note: "ISI cables & switches" },
      standard: { name: "Branded standard", note: "Havells-class hardware" },
      premium: { name: "Premium modular", note: "Legrand-class plates" },
      smart: {
        name: "Smart-home ready",
        note: "Extra circuits & automation",
      },
    },
    plumbing: {
      pvc: { name: "PVC", note: "Budget concealed lines" },
      cpvc: { name: "CPVC", note: "Hot & cold residential" },
      ppr: { name: "PPR / composite", note: "Lamba life, kam joints" },
    },
    waterproof: {
      bitumen: { name: "Bitumen coat", note: "Basic terrace protection" },
      chemical: {
        name: "Chemical waterproofing",
        note: "Bath, kitchen, terrace",
      },
      membrane: {
        name: "Membrane + chemical",
        note: "Premium terrace system",
      },
    },
    labour: {
      local: { name: "Local crew", note: "Sirf trade labour" },
      skilled: {
        name: "Skilled coordinated crew",
        note: "Single-point supervision",
      },
      premium: {
        name: "Premium finishing crew",
        note: "Tighter QA aur snagging",
      },
    },
  },
};
