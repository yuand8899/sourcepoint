// ============================================================================
// content.ts — 全站中英文文案中枢
// ============================================================================

export type Bi = { en: string; zh: string };

export const site = {
  name: { en: 'Sourcepoint Wellness', zh: '源真中医' },
  tagline: {
    en: 'Traditional Chinese Medicine · Acupuncture · Herbal Medicine · Wellness Education',
    zh: '针灸 · 中药 · 推拿 · 健康管理',
  },
  phone: '604-722-9799',
  email: 'info@sourcepointacu.com',
  wechat: 'YMLUCKY999',
  region: {
    en: 'Unit 203 1548 Johnston Road, White Rock, BC, V4B 3Z7',
    zh: 'Unit 203 1548 Johnston Road, White Rock, BC, V4B 3Z7',
  },
  legalName: {
    en: 'Sourcepoint Wellness',
    zh: '源真中医',
  },
};

export const nav: { id: string; label: Bi }[] = [
  { id: 'about', label: { en: 'About', zh: '关于我们' } },
  { id: 'founder', label: { en: 'Founder', zh: '创始人' } },
  { id: 'services', label: { en: 'Services', zh: '服务项目' } },
  { id: 'modalities', label: { en: 'Treatments', zh: '治疗方式' } },
  { id: 'education', label: { en: 'Education', zh: '健康教育' } },
  { id: 'billing', label: { en: 'Insurance', zh: '保险结算' } },
  { id: 'vision', label: { en: 'Vision', zh: '我们的愿景' } },
  { id: 'contact', label: { en: 'Contact', zh: '联系我们' } },
];

export const hero = {
  title: { en: 'Sourcepoint Wellness', zh: '源真中医' },
  subtitle: {
    en: 'Helping You Feel Better, Naturally',
    zh: '让健康回归自然，让生活重拾平衡',
  },
  body: {
    en: 'Personalized acupuncture and Traditional Chinese Medicine to relieve pain, restore balance, and support women\u2019s health, pediatric care, stress management, digestive health, cosmetic acupuncture, and lifelong wellness.',
    zh: [
      '源真中医相信，健康不仅是没有疾病，更是身心平衡、充满活力与幸福感的状态。我们致力于通过中医智慧帮助个人与家庭实现最佳健康状态。',
      '我们提供个性化针灸及传统中医治疗，专注于疼痛治疗、女性健康、儿童健康、压力管理、美容针灸及长期健康调理，为您和家人的健康保驾护航。'
    ],
  },
  values: {
    en: 'Evidence-Informed · Patient-Centered · Rooted in Tradition',
    zh: '循证实践 · 以患者为中心 · 传承中医精髓',
  },
  ctaBook: { en: 'Book a Consultation', zh: '预约咨询' },
  ctaContact: { en: 'Contact Us', zh: '联系我们' },
};

export const about = {
  eyebrow: { en: 'About Us', zh: '关于我们' },
  intro: [
    {
      en: 'Sourcepoint Wellness is a Canadian wellness clinic dedicated to the promotion and practice of Traditional Chinese Medicine, acupuncture, herbal medicine, and holistic health education.',
      zh: '源真中医是一家位于加拿大的专业健康机构，致力于中医、针灸、中药调理及健康教育的推广与实践。',
    },
    {
      en: 'Founded by Yuan Ding (Yolanda Ding), R.Ac., the clinic combines years of clinical experience, teaching, and international healthcare training to provide compassionate and individualized care.',
      zh: '由注册针灸师丁源（Yolanda Ding）创立，结合多年临床经验、教学经验及国际医疗培训背景，为患者提供个性化、专业化的健康服务。',
    },
  ] as Bi[],
  missionTitle: { en: 'Our Mission', zh: '我们的使命' },
  mission: [
    {
      en: 'At SourcePoint Wellness, our mission is to integrate the wisdom of Traditional Chinese Medicine with modern healthcare to provide compassionate, personalized, and evidence-informed care.',
      zh: '源真中医致力于将传统中医智慧与现代健康理念相结合，为每一位患者提供专业、个性化及循证实践的健康服务。',
    },
    {
      en: 'We are dedicated to helping individuals and families restore balance, improve health, prevent illness, and enhance their quality of life.',
      zh: '我们希望帮助个人和家庭恢复平衡、改善健康、预防疾病，并提升生活品质。',
    },
  ] as Bi[],
  philosophyTitle: { en: 'Our Philosophy', zh: '我们的理念' },
  philosophy: [
    {
      en: 'Traditional Chinese Medicine views the human body as an interconnected whole.',
      zh: '传统中医认为，人体是一个相互联系、协调统一的整体。',
    },
    {
      en: 'We believe lasting health comes from understanding and addressing the underlying causes of health concerns, rather than simply managing symptoms.',
      zh: '我们相信，真正持久的健康来自于发现并解决健康问题背后的根本原因，而不仅仅是缓解症状。',
    },
    {
      en: "Our approach emphasizes prevention, balance, and supporting the body's natural ability to heal.",
      zh: '我们的诊疗理念强调预防疾病、维持平衡，并激发人体自身的自然修复能力。',
    },
  ] as Bi[],
};

export const founder = {
  eyebrow: { en: 'Meet Our Founder', zh: '创始人介绍' },
  name: { en: 'Yuan Ding (Yolanda Ding)', zh: '丁源（Yolanda Ding）' },
  credentials: [
    {
      en: 'Registered Traditional Chinese Medicine Practitioner (BC)',
      zh: '加拿大BC省注册中医师',
    },
    { en: 'Registered Acupuncturist (BC)', zh: '加拿大BC省注册针灸师' },
    {
      en: 'Formerly Licensed Traditional Chinese Medicine Physician in China',
      zh: '中华人民共和国执业中医师',
    },
  ] as Bi[],
  bio: [
    {
      en: 'Yolanda Ding is a Registered Traditional Chinese Medicine Practitioner and Registered Acupuncturist in British Columbia, Canada. She holds a Master\u2019s Degree in Traditional Chinese Medicine and completed over eight years of formal medical education before becoming a licensed Traditional Chinese Medicine Physician in China. With over twenty years of clinical, teaching, and healthcare education experience, she combines the depth of Traditional Chinese Medicine with an evidence-informed, patient-centered approach to care.',
      zh: '丁源女士现为加拿大BC省注册中医师及注册针灸师。她拥有中医硕士学位，在成为中国执业中医师之前接受了八年以上系统、正规的中医专业教育。她拥有二十余年中医临床、医学教学及健康培训经验，将深厚的传统中医理论与循证医学理念相结合，坚持以患者为中心，为每位患者提供科学、个性化的中医诊疗服务。',
    },
    {
      en: 'Coming from a family with a multi-generational heritage in Traditional Chinese Medicine, Yolanda represents the third generation of TCM practitioners in her family.',
      zh: '丁医师出身于中医世家，为家族第三代中医传承人。自幼受到中医文化熏陶，对中医事业怀有深厚热爱与使命感。',
    },
    {
      en: 'In addition to clinical practice, she has dedicated many years to Traditional Chinese Medicine education and international healthcare training. She currently serves as a college instructor and clinical supervisor in British Columbia and has trained numerous healthcare professionals in Canada and internationally.',
      zh: '除临床工作外，她长期从事中医教育及国际医疗培训工作，目前担任加拿大中医学院课程讲师及临床指导老师，并培养了众多加拿大及国际医疗专业人员。',
    },
    {
      en: 'Her mission is to help individuals and families achieve lasting health through compassionate, personalized, and evidence-informed care.',
      zh: '她始终秉持以患者为中心的理念，希望通过富有同理心、个性化及循证医学实践的中医服务，帮助更多个人与家庭获得持久健康。',
    },
    {
      en: 'Outside of her professional work, Yolanda enjoys reading, writing, hiking, and painting. She believes that lifelong learning and maintaining balance in life are essential to lasting health\u2014a philosophy that also guides her approach to patient care.',
      zh: '工作之余，丁医师喜欢阅读、写作、徒步旅行及绘画。她相信持续学习以及保持身心平衡，是实现长期健康的重要基础，而这一理念也贯穿于她的临床实践之中。',
    },
  ] as Bi[],
};

export const servicesEyebrow = { en: 'Our Services', zh: '我们的服务' };
export const services: { icon: string; title: Bi; body: Bi }[] = [
  {
    icon: 'pain',
    title: { en: 'Pain Management', zh: '疼痛管理' },
    body: {
      en: 'Neck Pain · Shoulder Pain · Back Pain · Sciatica · Arthritis · Sports Injuries · Headaches & Migraines',
      zh: '颈肩腰腿痛 · 坐骨神经痛 · 关节疼痛 · 运动损伤 · 头痛及偏头痛',
    },
  },
  {
    icon: 'women',
    title: { en: "Women's Health & Fertility", zh: '女性健康与生育支持' },
    body: {
      en: 'Menstrual Health · Fertility Support · Pregnancy Wellness · Postpartum Recovery · Menopause Care',
      zh: '月经调理 · 备孕支持 · 孕期保健 · 产后恢复 · 更年期调理',
    },
  },
  {
    icon: 'sleep',
    title: { en: 'Sleep & Stress Management', zh: '睡眠与压力管理' },
    body: {
      en: 'Insomnia · Stress · Anxiety · Fatigue · Emotional Wellness',
      zh: '失眠 · 焦虑 · 压力 · 疲劳 · 情绪调节',
    },
  },
  {
    icon: 'beauty',
    title: { en: 'Cosmetic Acupuncture', zh: '美容针灸' },
    body: {
      en: 'Natural Facial Rejuvenation · Skin Health · Collagen Stimulation · Facial Muscle Toning',
      zh: '自然美容 · 面部年轻化 · 改善皮肤状态 · 面部肌肉提升 · 健康美学管理',
    },
  },
  {
    icon: 'child',
    title: { en: 'Pediatric Care & Tuina', zh: '儿童健康与小儿推拿' },
    body: {
      en: 'Immunity · Digestion · Sleep · Development Support · Recurring Colds',
      zh: '免疫力调理 · 消化调理 · 睡眠改善 · 生长发育支持 · 反复感冒咳嗽',
    },
  },
  {
    icon: 'digest',
    title: { en: 'Digestive Health', zh: '消化健康' },
    body: {
      en: 'Indigestion · Bloating · Acid Reflux · IBS · Digestive Imbalance',
      zh: '消化不良 · 腹胀 · 胃食管反流 · 肠易激综合征（IBS） · 胃肠功能失调',
    },
  },
  {
    icon: 'weight',
    title: { en: 'Weight Management', zh: '体重管理' },
    body: {
      en: 'Metabolic Health & Lifestyle Guidance',
      zh: '个性化体重管理与健康生活方式指导',
    },
  },
  {
    icon: 'consult',
    title: { en: 'TCM Consultation', zh: '中医问诊' },
    body: {
      en: 'Comprehensive TCM Assessment & Personalized Treatment Planning',
      zh: '中医整体辨证评估与个性化治疗方案制定',
    },
  },
  {
    icon: 'herb',
    title: { en: 'Chinese Herbal Medicine', zh: '中药调理' },
    body: {
      en: 'Personalized Herbal Prescriptions',
      zh: '个性化中药处方及调理建议',
    },
  },
  {
    icon: 'massage',
    title: { en: 'TCM Massage & Acupressure', zh: '中医经络推拿' },
    body: {
      en: 'Traditional Chinese Medicine massage and acupressure techniques help promote circulation, relieve pain, reduce muscle tension, improve mobility, and support overall wellness.',
      zh: '通过经络推拿、穴位调理及软组织手法促进气血循环、缓解疼痛、放松肌肉、改善身体功能。',
    },
  },
];

export const modalitiesEyebrow = { en: 'Treatment Modalities', zh: '治疗方式' };
export const modalities: Bi[] = [
  { en: 'Acupuncture', zh: '针灸' },
  { en: 'Chinese Herbal Medicine', zh: '中药调理' },
  { en: 'Acupressure & Tuina', zh: '穴位按压与中医经络推拿' },
  { en: 'Pediatric Tuina', zh: '小儿推拿' },
  { en: 'Moxibustion', zh: '艾灸疗法' },
  { en: 'Cupping Therapy', zh: '拔罐疗法' },
  { en: 'Gua Sha', zh: '刮痧疗法' },
  { en: 'Lifestyle & Wellness Guidance', zh: '健康生活方式指导' },
];

export const educationEyebrow = { en: 'Wellness Education', zh: '健康教育' };
export const education: Bi[] = [
  { en: 'Community Health Lectures', zh: '社区健康讲座' },
  { en: 'Professional Continuing Education', zh: '专业继续教育' },
  { en: 'Traditional Chinese Medicine Courses', zh: '中医课程培训' },
  { en: 'Pediatric Tuina Training', zh: '小儿推拿培训' },
  { en: 'Canadian Red Cross First Aid Training', zh: '加拿大红十字急救培训' },
  { en: 'International Educational Collaboration', zh: '国际教育合作' },
];

export const whyEyebrow = { en: 'Why Choose Sourcepoint Wellness', zh: '为什么选择源真中医' };
export const why: Bi[] = [
  {
    en: 'Registered Traditional Chinese Medicine Practitioner & Acupuncturist in BC',
    zh: '加拿大BC省注册中医师及注册针灸师',
  },
  { en: 'Over 20 Years of Clinical and Teaching Experience', zh: '20余年临床及教学经验' },
  {
    en: 'Master\u2019s Degree in Traditional Chinese Medicine',
    zh: '中医学硕士，八年以上系统中医专业教育',
  },
  {
    en: 'Formerly Licensed Traditional Chinese Medicine Physician in China',
    zh: '中华人民共和国执业中医师',
  },
  {
    en: 'College Instructor & Clinical Supervisor in British Columbia',
    zh: '加拿大中医学院课程讲师及临床指导老师',
  },
  { en: 'Third Generation TCM Family Heritage', zh: '中医世家第三代传承人' },
  { en: 'International Healthcare Training Experience', zh: '丰富的国际医疗培训经验' },
  { en: 'Evidence-Informed Practice', zh: '循证医学理念指导临床实践' },
  { en: 'Personalized Treatment Plans', zh: '个性化治疗方案' },
  { en: 'English & Chinese Services', zh: '提供中英文双语服务' },
];

export const billingEyebrow = { en: 'Insurance & Direct Billing', zh: '保险及直接结算' };
export const billing: Bi[] = [
  { en: 'ICBC', zh: 'ICBC（卑诗省机动车事故保险）' },
  { en: 'WCB', zh: 'WCB（工伤保险）' },
  { en: 'Extended Health Plans', zh: '各类商业医疗保险' },
  { en: 'Direct Billing Available', zh: '提供直接保险结算（Direct Billing）' },
];

export const vision = {
  eyebrow: { en: 'Our Vision', zh: '我们的愿景' },
  body: {
    en: 'To become a trusted center for Traditional Chinese Medicine, Acupuncture, Wellness Education, and Community Health Promotion while building bridges between Eastern healing wisdom and modern healthcare.',
    zh: '成为一家值得信赖的传统中医、针灸、健康教育及社区健康促进中心，搭建东方医学智慧与现代医疗之间的桥梁，为更多家庭提供高质量的健康服务。',
  },
};

export const contact = {
  eyebrow: { en: 'Contact Us', zh: '联系我们' },
  hours: {
    en: 'Mon–Sun 9:00 AM – 5:00 PM (By Appointment)',
    zh: '周一至周日 9:00–17:00（预约制）',
  },
  emailBtn: { en: 'Email Us', zh: '发送邮件' },
  callBtn: { en: 'Call Now', zh: '电话联系' },
  bookBtn: { en: 'Book a Consultation Today', zh: '立即预约咨询' },
  labels: {
    address: { en: 'Location', zh: '地址' },
    phone: { en: 'Phone', zh: '电话' },
    email: { en: 'Email', zh: '邮箱' },
    wechat: { en: 'WeChat', zh: '微信' },
  },
};

export const footer = {
  rights: {
    en: '© 2026 Sourcepoint Wellness Inc. All rights reserved.',
    zh: '© 2026 源真中医. 版权所有。',
  },
  disclaimer: {
    en: 'This website is for informational purposes only and does not constitute medical advice.',
    zh: '本网站仅供参考，不构成医疗建议。',
  },
};

export const langToggle = {
  toEn: 'EN',
  toZh: '中',
  aria: { en: 'Switch to Chinese', zh: '切换到英文' },
};
