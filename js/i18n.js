/*  =========================================
    i18n – English / 简体中文 language switcher
    ========================================= */
var I18N = (function () {

    var translations = {

        en: {
            page_title: 'Top Translation Company in Asia | Professional Translation Services',
            meta_desc: 'PTSGI brings more than 50 years of translation resource management experience to the table, and has built up a pool of 11,267 translators!',
            select_page: 'Select Page',

            nav_about: 'About PTSGI',
            nav_certs: 'Global Certifications and Trademarks',
            nav_benefits: 'Employee Benefits',
            nav_jobs: 'Jobs',
            nav_photos: 'Office Photos',
            nav_services: 'Services',
            nav_clients: 'Our Clients',
            nav_faq: 'FAQ',
            nav_blog: 'Blog',
            nav_contact: 'Contact Us',
            nav_quote: 'Quotation',

            svc_software: 'Translation of software and applications',
            svc_game: 'Game Localization',
            svc_web: 'Multilingual Website',
            svc_doc: 'Professional Document Translation',
            svc_patent: 'Patent Translation & Consultation',
            svc_writing: 'Technical Writing',
            svc_project: 'Large-scale Project Management',
            svc_interpret: 'Consecutive/Simultaneous Interpretation',
            svc_media: 'Multimedia Subtitling & Voice Dubbing',
            svc_mtpe: 'MTPE (Machine Translation Post Editing)',

            hero_title: 'Global Language Service Provider',
            hero_desc: "Asia's leading multilingual services company and among the top 5 of global providers — backed by 13,600+ translators worldwide.",
            typed_text: 'The World Speaks, We Translate.',
            btn_learn_more: 'Learn More',
            btn_get_quote: 'Get your quotation today',

            svg_global: 'Global Translation',
            svg_stats: '145+ Languages · 13,600+ Translators',

            cert_9001: '&nbsp;ISO 9001 Certified<br>(Quality <br>Management)',
            cert_17100: 'ISO 17100 Certified<br>(Translation <br>Services)',
            cert_27001: 'ISO 27001 Certified<br>(Information <br>Security)',

            svc_heading: 'Ranked among the Top 5 Global Language Service Providers by CSA Research',
            svc_desc: 'PTSGI is certified\u00a0ISO 9001, ISO 17100, and ISO 27001 — the international standards for quality, translation services, and information security management. We provide comprehensive services and operate 24/7 worldwide to deliver customized solutions to our clients, to deliver world-class translation services, we leverage our proprietary GTAIS Intelligent Case Management System and AI-powered big data tools, ensuring efficient, high-quality solutions with zero time lag for clients worldwide.',

            stats_title: 'TRANSLATORS<br>TEAM',
            team_tech: 'Technical writing team',
            team_auto: 'Automotive translation team',
            team_game: 'Game localization team',
            team_med: 'Medical translation team',
            team_it: 'IT translation team',
            team_patent: 'Patent translation team',
            team_cosm: 'Cosmetics translation team',
            team_fin: 'Finance translation team',
            team_elec: 'Electrical engineering translation team',
            team_const: 'Public construction translation team',
            team_legal: 'Legal translation team',

            counter_years: 'Years of Experience',
            counter_langs: 'Languages Translated',
            counter_translators: 'Translators',
            btn_peek: 'A peek behind the scenes of PTSGI',

            lang_heading: '145 Languages Translated Around The World',
            lang_desc: 'To date, PTSGI has provided translation services in over 145 languages, setting a benchmark in the industry.',

            faq_q1: 'Q.How does PTSGI select its translators?',
            faq_a1: 'PTSGI selects only native speakers with expertise in their respected fields.',
            faq_q2: 'Q.How is the translation cost calculated?',
            faq_a2: 'We usually charge based on the number of words in the source file. Prices vary depending on the difficulty and turnaround time.<br>Additional costs may be charged for recreating materials such as charts, tables, or images that require extra time, technical know-how, or labor.',
            faq_q3: 'Q.I want to check the quality level of your translation. Can I request a trial translation?',
            faq_a3: 'We offer free translations of about 300 words.',
            faq_q4: 'Q.Can I choose a translator to meet my quality requirements?',
            faq_a4: 'We offer trial translations from multiple translators, so that you can choose the translator that suits you best.',

            blog_title_1: '[Professional Translators Speaking from Experience] Things to Note for Translation into Taiwanese (Traditional Chinese)',
            blog_excerpt_1: 'Hello, everyone. In this article, we share important tips and considerations when translating content into Taiwanese Traditional Chinese...',
            blog_title_2: '[Professional Translators Speaking from Experience] Techniques for Translating Marketing Documents and Three Key Points to Keep in Mind',
            blog_excerpt_2: 'Hello, everyone. When a company is expanding into new markets, marketing document translation becomes essential...',
            blog_title_3: 'The importance of proofreading by native speakers – Translations must be proofread by native speakers!',
            blog_excerpt_3: 'Have you ever felt that sentences in a translated document sound unnatural or awkward? This is why native proofreading matters...',
            blog_title_4: "Dos and Don'ts for Subtitle Translation: Note for Clients",
            blog_excerpt_4: 'When watching films on Netflix or other streaming platforms, subtitle quality makes all the difference in the viewing experience...',
            blog_readmore: 'read more',

            contact_title: 'CONTACT US',
            contact_desc: 'With offices and representatives in most of the major cities in Taiwan and all over the world, PTSGI is all set to provide speedy and quality translation services for you.',
            btn_request_quote: 'Request a quotation now',

            footer_home: 'Home',
            footer_terms: 'Terms & Conditions and Privacy Policy',
            footer_cookie: 'Cookie Policy',
            footer_copy: '2025 PTSGI, Inc. All rights reserved.'
        },

        zh: {
            page_title: '亚洲顶尖翻译公司 | 专业翻译服务',
            meta_desc: '统一数位翻译拥有超过50年的翻译资源管理经验，已建立11,267名译者人才库！',
            select_page: '选择页面',

            nav_about: '关于统一数位',
            nav_certs: '全球认证与商标',
            nav_benefits: '员工福利',
            nav_jobs: '人才招募',
            nav_photos: '办公室照片',
            nav_services: '服务项目',
            nav_clients: '我们的客户',
            nav_faq: '常见问题',
            nav_blog: '博客',
            nav_contact: '联系我们',
            nav_quote: '在线报价',

            svc_software: '软件与应用程序翻译',
            svc_game: '游戏本地化',
            svc_web: '多语言网站',
            svc_doc: '专业文件翻译',
            svc_patent: '专利翻译与咨询',
            svc_writing: '技术文档撰写',
            svc_project: '大型项目管理',
            svc_interpret: '交替/同声传译',
            svc_media: '多媒体字幕与配音',
            svc_mtpe: 'MTPE（机器翻译后编辑）',

            hero_title: '全球语言服务供应商',
            hero_desc: '亚洲领先的多语言服务公司，名列全球前五大语言服务供应商——拥有超过13,600名专业译者。',
            typed_text: '世界在说话，我们来翻译。',
            btn_learn_more: '了解更多',
            btn_get_quote: '立即获取报价',

            svg_global: '全球翻译',
            svg_stats: '145+ 语言 · 13,600+ 译者',

            cert_9001: '&nbsp;ISO 9001 认证<br>（质量<br>管理）',
            cert_17100: 'ISO 17100 认证<br>（翻译<br>服务）',
            cert_27001: 'ISO 27001 认证<br>（信息<br>安全）',

            svc_heading: '获 CSA Research 评选为全球前五大语言服务供应商',
            svc_desc: '统一数位翻译取得 ISO 9001、ISO 17100 及 ISO 27001 认证——符合质量管理、翻译服务及信息安全管理的国际标准。我们提供全方位服务，全年无休、全球运营，运用自主研发的 GTAIS 智能案件管理系统与 AI 大数据工具，为全球客户提供高效率、高品质、零时差的定制化翻译解决方案。',

            stats_title: '翻译<br>团队',
            team_tech: '技术文档撰写团队',
            team_auto: '汽车翻译团队',
            team_game: '游戏本地化团队',
            team_med: '医药翻译团队',
            team_it: 'IT 翻译团队',
            team_patent: '专利翻译团队',
            team_cosm: '化妆品翻译团队',
            team_fin: '金融翻译团队',
            team_elec: '电气工程翻译团队',
            team_const: '公共工程翻译团队',
            team_legal: '法律翻译团队',

            counter_years: '年经验',
            counter_langs: '种翻译语言',
            counter_translators: '名译者',
            btn_peek: '一窥统一数位的幕后花絮',

            lang_heading: '翻译遍及全球 145 种语言',
            lang_desc: '迄今为止，统一数位翻译已提供超过 145 种语言的翻译服务，树立了行业标杆。',

            faq_q1: 'Q.统一数位翻译如何挑选译者？',
            faq_a1: '统一数位翻译仅挑选具备专业领域知识的母语人士。',
            faq_q2: 'Q.翻译费用如何计算？',
            faq_a2: '我们通常依据原始文件字数计费，价格根据难度及交稿时间而有所不同。<br>若需额外处理图表、表格或图片等需要花费额外时间、技术或人力的素材，可能会收取额外费用。',
            faq_q3: 'Q.我想确认翻译品质，可以要求试译吗？',
            faq_a3: '我们提供约 300 字的免费试译服务。',
            faq_q4: 'Q.我可以指定译者来满足我的质量要求吗？',
            faq_a4: '我们提供多位译者的试译，让您选择最适合您的译者。',

            blog_title_1: '【专业译者经验分享】翻译成台湾繁体中文的注意事项',
            blog_excerpt_1: '大家好，在这篇文章中，我们分享翻译内容成台湾繁体中文时的重要技巧和注意事项……',
            blog_title_2: '【专业译者经验分享】营销文件翻译技巧与三大要点',
            blog_excerpt_2: '大家好，当企业拓展新市场时，营销文件翻译是不可或缺的……',
            blog_title_3: '母语人士校对的重要性——翻译必须由母语人士审校！',
            blog_excerpt_3: '您是否曾觉得翻译文件中的句子读起来不自然或别扭？这正是母语校对的重要性所在……',
            blog_title_4: '字幕翻译的注意事项：给客户的重要提醒',
            blog_excerpt_4: '在 Netflix 或其他流媒体平台观看影片时，字幕质量对观影体验有极大影响……',
            blog_readmore: '阅读更多',

            contact_title: '联系我们',
            contact_desc: '统一数位翻译在台湾各主要城市及全球各地均设有办公室与代表处，随时为您提供快速且高品质的翻译服务。',
            btn_request_quote: '立即索取报价',

            footer_home: '首页',
            footer_terms: '服务条款及隐私权政策',
            footer_cookie: 'Cookie 政策',
            footer_copy: '2025 统一数位翻译股份有限公司 版权所有。'
        }
    };

    var currentLang = 'en';

    function setLang(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('ptsgi_lang', lang);

        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var text = translations[lang][key];
            if (text === undefined) return;

            if (el.tagName === 'TITLE') {
                document.title = text;
            } else if (el.tagName === 'META') {
                el.setAttribute('content', text);
            } else if (el.tagName === 'text') {
                el.textContent = text;
            } else {
                el.textContent = text;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            var html = translations[lang][key];
            if (html === undefined) return;
            el.innerHTML = html;
        });

        var label = document.getElementById('current-lang-label');
        if (label) label.textContent = lang === 'zh' ? '简体中文' : 'English';

        document.querySelectorAll('#lang-menu a[data-lang]').forEach(function (a) {
            a.classList.toggle('current', a.getAttribute('data-lang') === lang);
        });

        restartTyping(lang);
    }

    function restartTyping(lang) {
        var target = document.getElementById('typing-target');
        if (!target) return;
        target.textContent = '';
        var text = translations[lang].typed_text;
        var i = 0;
        function tick() {
            if (i < text.length) {
                target.textContent += text.charAt(i);
                i++;
                setTimeout(tick, 80);
            }
        }
        setTimeout(tick, 300);
    }

    function getLang() { return currentLang; }
    function getTypedText() { return translations[currentLang].typed_text; }

    function init() {
        var saved = localStorage.getItem('ptsgi_lang');
        var initial = saved || 'en';

        document.querySelectorAll('#lang-menu a[data-lang]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                setLang(this.getAttribute('data-lang'));
            });
        });

        if (initial !== 'en') {
            setLang(initial);
        }
    }

    return { init: init, setLang: setLang, getLang: getLang, getTypedText: getTypedText };
})();
