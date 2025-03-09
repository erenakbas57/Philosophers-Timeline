
export interface Philosopher {
  id: string;
  name: string;
  birthYear: number;
  deathYear: number | null;
  era: string;
  mainIdeas: string[];
  bio: string;
  quote: string;
  imageSrc: string;
  nationality: string;
  notableWorks: string[];
}

export const philosophers: Philosopher[] = [
  {
    id: "socrates",
    name: "Sokrat",
    birthYear: -469,
    deathYear: -399,
    era: "Antik Yunan",
    mainIdeas: ["Sokratik yöntem", "Kendini bilme", "Erdem etiği"],
    bio: "Sokrat, Batı felsefesinin kurucularından biri olarak kabul edilir. Atina'da doğdu ve yaşadı. Yazılı eser bırakmamış olsa da, öğrencisi Platon'un diyalogları aracılığıyla düşünceleri günümüze ulaşmıştır. Bilginin doğasını sorgulayan ve eleştirel düşünceyi teşvik eden Sokratik yöntemi geliştirmiştir. 'Sorgulanmamış bir hayat yaşanmaya değmez' sözü onun felsefesini özetler. MÖ 399'da Atina devletine karşı gençleri yoldan çıkardığı ve tanrıları reddettiği suçlamalarıyla yargılanıp baldıran zehri içerek idam edilmiştir.",
    quote: "Sorgulanmamış bir hayat yaşanmaya değmez.",
    imageSrc: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop",
    nationality: "Yunan",
    notableWorks: ["Yazılı bir eser bırakmamıştır, fikirleri Platon'un diyaloglarında yer alır"]
  },
  {
    id: "plato",
    name: "Platon",
    birthYear: -428,
    deathYear: -348,
    era: "Antik Yunan",
    mainIdeas: ["İdealar teorisi", "Devlet teorisi", "Ruh-beden düalizmi"],
    bio: "Platon, Sokrat'ın öğrencisi ve Aristoteles'in hocası olarak antik Yunan felsefesinin en önemli isimlerinden biridir. Atina'da aristokrat bir ailede doğdu. Akademi adlı ilk yüksek öğrenim kurumunu kurdu. İdealar teorisiyle gerçek bilginin duyusal dünyada değil, değişmez idealar dünyasında bulunduğunu savundu. Diyalog şeklinde yazdığı eserleri felsefi düşüncenin gelişimini derinden etkiledi. Adaleti temel alan ideal devlet teorisini 'Devlet' adlı eserinde geliştirmiştir.",
    quote: "İyi fikir sahibi olmak yetmez, onu ifade etmeyi de bilmelisiniz.",
    imageSrc: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=1000&auto=format&fit=crop",
    nationality: "Yunan",
    notableWorks: ["Devlet", "Şölen", "Savunma", "Phaidon", "Timaios"]
  },
  {
    id: "aristotle",
    name: "Aristoteles",
    birthYear: -384,
    deathYear: -322,
    era: "Antik Yunan",
    mainIdeas: ["Mantık", "Metafizik", "Etik", "Doğa bilimleri"],
    bio: "Aristoteles, Platon'un öğrencisi ve Büyük İskender'in eğitmeni olarak felsefe tarihinin en etkili düşünürlerinden biridir. Stagira'da doğdu ve Atina'da Lise'yi (Lyceum) kurdu. Hemen hemen bütün bilim dallarında çalışmalar yaptı; mantık, fizik, biyoloji, etik, politika, estetik gibi. Hocası Platon'un idealizmine karşılık daha deneyci ve gerçekçi bir yaklaşım benimsedi. Mantığın kurucusu olarak bilinir ve bilimsel yöntemin temellerini atmıştır. Erdemli yaşamın 'altın orta'da bulunduğunu savundu.",
    quote: "Bütün insanlar doğal olarak bilmek isterler.",
    imageSrc: "https://images.unsplash.com/photo-1693595754056-70eafcba677f?q=80&w=1000&auto=format&fit=crop",
    nationality: "Yunan",
    notableWorks: ["Organon", "Metafizik", "Nikomakhos'a Etik", "Politika", "Poetika"]
  },
  {
    id: "descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    era: "Modern Felsefe",
    mainIdeas: ["Rasyonalizm", "Metodolojik şüphe", "Düalizm"],
    bio: "René Descartes, modern felsefenin ve rasyonalizmin kurucusu kabul edilir. Fransa'da doğdu, matematik ve bilimde de önemli katkılar sağladı. 'Düşünüyorum, öyleyse varım' (Cogito, ergo sum) sözüyle tanınır. Kartezyen koordinat sistemini geliştirmiştir. Metodolojik şüphe yöntemini kullanan Descartes, bilginin kaynağını sorgulayarak kesinliğe ulaşmaya çalıştı. Zihin ve beden arasında keskin bir ayrım yapan düalist bir varlık anlayışına sahipti.",
    quote: "Düşünüyorum, öyleyse varım.",
    imageSrc: "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?q=80&w=1000&auto=format&fit=crop",
    nationality: "Fransız",
    notableWorks: ["Yöntem Üzerine Konuşma", "Metafizik Meditasyonlar", "Felsefenin İlkeleri"]
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    era: "Aydınlanma",
    mainIdeas: ["Kritisizm", "Transandantal idealizm", "Kategorik imperatif"],
    bio: "Immanuel Kant, Alman Aydınlanmasının en önemli filozofudur. Königsberg'de doğdu ve yaşamı boyunca bu şehirden neredeyse hiç ayrılmadı. Felsefede 'Kopernik Devrimi' diye adlandırılan epistemolojik yaklaşımıyla, bilginin nasıl mümkün olduğunu sistematik bir şekilde inceledi. 'Salt Aklın Eleştirisi', 'Pratik Aklın Eleştirisi' ve 'Yargı Gücünün Eleştirisi' adlı üç büyük eleştirel eseriyle modern felsefenin seyrini değiştirdi. Ahlak felsefesinde evrenselleştirilebilir ilkelere dayalı deontolojik etik anlayışı ve kategorik imperatif kavramını geliştirdi.",
    quote: "İki şey ruhumu hayranlıkla ve saygıyla dolduruyor: Üzerimdeki yıldızlı gökyüzü ve içimdeki ahlak yasası.",
    imageSrc: "https://images.unsplash.com/photo-1607273195904-0ff41bb18c2a?q=80&w=1000&auto=format&fit=crop",
    nationality: "Alman",
    notableWorks: ["Salt Aklın Eleştirisi", "Pratik Aklın Eleştirisi", "Yargı Gücünün Eleştirisi", "Ahlak Metafiziğinin Temellendirilmesi"]
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    era: "19. Yüzyıl",
    mainIdeas: ["Nihilizm", "Üstinsan", "Güç istenci", "Ebedi dönüş"],
    bio: "Friedrich Nietzsche, 19. yüzyılın en etkili ve tartışmalı filozoflarından biridir. Prusya'da doğdu, genç yaşta Basel Üniversitesi'nde profesör oldu ancak sağlık sorunları nedeniyle akademik kariyerini bırakmak zorunda kaldı. Ahlaki ve dini değerlerin radikal bir eleştirisini yaptı, özellikle 'Tanrı öldü' ifadesiyle dini değerlerin çöküşünü ilan etti. Nihilizmi aşmak için 'üstinsan' ve 'güç istenci' kavramlarını önerdi. Üslubu genellikle aforistik ve şiirseldir. Son yıllarını akıl hastalığıyla geçirdi ve eserlerinin çoğunun değeri ölümünden sonra anlaşıldı.",
    quote: "Uçuruma uzun süre bakarsanız, uçurum da size bakar.",
    imageSrc: "https://images.unsplash.com/photo-1581002129613-883fd1f48cfa?q=80&w=1000&auto=format&fit=crop",
    nationality: "Alman",
    notableWorks: ["Böyle Buyurdu Zerdüşt", "İyinin ve Kötünün Ötesinde", "Ahlakın Soykütüğü Üzerine", "Ecce Homo"]
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    era: "20. Yüzyıl",
    mainIdeas: ["Varoluşçuluk", "Özgürlük", "Otantiklik", "Kendinde-varlık ve kendi-için-varlık"],
    bio: "Jean-Paul Sartre, Fransız varoluşçu felsefenin en önemli temsilcisidir. Paris'te doğdu, II. Dünya Savaşı sırasında Fransız Direniş Hareketi'nde yer aldı. 'Varlık ve Hiçlik' adlı eseriyle varoluşçu felsefeyi sistematik bir şekilde ortaya koydu. 'Varoluş özden önce gelir' ilkesiyle insanın önce var olduğunu, sonra kendini tanımladığını savundu. İnsanın radikal özgürlüğünü vurgulayarak, her seçimin büyük bir sorumluluk getirdiğini belirtti. Simone de Beauvoir ile yaşam boyu süren entelektüel bir ilişkisi oldu. Edebiyatta da önemli eserler verdi ve 1964'te Nobel Edebiyat Ödülü'nü reddetti.",
    quote: "İnsan özgürlüğe mahkûmdur.",
    imageSrc: "https://images.unsplash.com/photo-1633683914272-efe18129ce2c?q=80&w=1000&auto=format&fit=crop",
    nationality: "Fransız",
    notableWorks: ["Varlık ve Hiçlik", "Varoluşçuluk Bir Hümanizmdir", "Bulantı", "Akıl Çağı"]
  },
  {
    id: "confucius",
    name: "Konfüçyüs",
    birthYear: -551,
    deathYear: -479,
    era: "Antik Çin",
    mainIdeas: ["Ahlak", "Ritüel", "Toplumsal düzen", "Erdem"],
    bio: "Konfüçyüs (Çince: Kong Fuzi), Çin felsefesinin en etkili düşünürüdür. Lu eyaletinde doğdu ve yaşadı. Düşünceleri, Konfüçyüsçülük olarak bilinen bir etik ve siyaset felsefesine dönüştü. Çin tarihinde 2000 yıldan fazla bir süre resmi devlet ideolojisi olarak kabul edildi. Ailenin, toplumun ve devletin uyum içinde yaşamasını sağlayacak ahlaki ilkeler ve ritüeller üzerinde durdu. Özgün metinleri kendisi tarafından yazılmamış, öğrencileri tarafından derlenmiştir. En önemli derlemelerden biri 'Konuşmalar' (Lun Yu) kitabıdır.",
    quote: "Bilmediğini bilmek, bilgeliğin başlangıcıdır.",
    imageSrc: "https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?q=80&w=1000&auto=format&fit=crop",
    nationality: "Çinli",
    notableWorks: ["Analektler (Lun Yu)"]
  },
  {
    id: "ibn-sina",
    name: "İbn-i Sina",
    birthYear: 980,
    deathYear: 1037,
    era: "İslam Altın Çağı",
    mainIdeas: ["İslam felsefesi", "Tıp", "Mantık", "Metafizik"],
    bio: "İbn-i Sina (Latince: Avicenna), Orta Çağ'ın en önemli filozoflarından ve bilim insanlarından biridir. Bugünkü Özbekistan'da doğdu. Hem İslam dünyasında hem de Batı'da büyük etki yarattı. 'Tıbbın Kanunu' (El-Kanun fi't-Tıbb) adlı eseri yüzyıllarca tıp eğitiminde standart ders kitabı olarak kullanıldı. Aristo ve Platon felsefesini İslami düşünceyle uzlaştırmaya çalıştı. Varlık felsefesinde zorunlu varlık-mümkün varlık ayrımını geliştirdi. 200'den fazla eser yazdığı söylenir.",
    quote: "Bilim ve felsefe insanın kanatlarıdır.",
    imageSrc: "https://images.unsplash.com/photo-1565023183961-e195e8f789d0?q=80&w=1000&auto=format&fit=crop",
    nationality: "Özbek/Fars",
    notableWorks: ["El-Kanun fi't-Tıbb (Tıbbın Kanunu)", "Kitâbü'ş-Şifa (Şifa Kitabı)", "El-İşârât ve't-Tenbihât", "Kitâbü'n-Necât"]
  },
];

export const getPhilosopherByName = (name: string): Philosopher | undefined => {
  return philosophers.find(p => p.name.toLowerCase() === name.toLowerCase());
};

export const getPhilosopherById = (id: string): Philosopher | undefined => {
  return philosophers.find(p => p.id === id);
};

// Sort philosophers by birth year (chronological order)
export const sortedPhilosophers = [...philosophers].sort((a, b) => a.birthYear - b.birthYear);

// Format year to display BC/AD appropriately in Turkish
export const formatYear = (year: number): string => {
  if (year < 0) {
    return `MÖ ${Math.abs(year)}`;
  }
  return `MS ${year}`;
};

// Get philosopher life span as a string
export const getLifeSpan = (philosopher: Philosopher): string => {
  const birthYear = formatYear(philosopher.birthYear);
  const deathYear = philosopher.deathYear ? formatYear(philosopher.deathYear) : "günümüz";
  return `${birthYear} - ${deathYear}`;
};
