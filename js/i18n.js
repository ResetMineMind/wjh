var I18N = (function () {
    var T = {
        en: {
            page_title: 'PTSGI — Professional Translation & Interpretation Services',
            meta_desc: 'Asia\'s leading language service provider with 50+ years of experience and 13,600+ translators worldwide.',
            nav_about: 'About', nav_services: 'Services', nav_pricing: 'Pricing',
            nav_blog: 'Blog', nav_contact: 'Contact', nav_quote: 'Get Quote',

            hero_badge: 'CSA Research Top 5 Provider',
            hero_title: 'Bridging Languages,<br><span class="accent">Connecting Worlds</span>',
            hero_tagline: 'Asia\'s leading multilingual services company — backed by 13,600+ professional translators covering 145+ languages worldwide.',
            hero_cta1: 'Get Started', hero_cta2: 'Our Services',
            hero_stat_lang: 'Languages', hero_stat_years: 'Years Experience', hero_stat_clients: 'Global Clients',

            svc_label: 'Our Services', svc_title: 'Professional Language Solutions',
            svc_desc: 'From document translation to simultaneous interpretation, we deliver precision across every language pair.',
            svc_1_title: 'Document Translation', svc_1_desc: 'Contracts, manuals, reports — accurate and culturally adapted.',
            svc_2_title: 'Technical Translation', svc_2_desc: 'Engineering, IT, and scientific content with domain expertise.',
            svc_3_title: 'Legal & Patent', svc_3_desc: 'Certified translations for legal proceedings and IP filings.',
            svc_4_title: 'Simultaneous Interpretation', svc_4_desc: 'Real-time interpretation for conferences and large events.',
            svc_5_title: 'Consecutive Interpretation', svc_5_desc: 'Professional interpretation for meetings and negotiations.',
            svc_6_title: 'Remote Interpretation', svc_6_desc: 'On-demand video/phone interpretation anytime, anywhere.',
            svc_7_title: 'AI-Powered MTPE', svc_7_desc: 'Machine translation + human post-editing for speed & quality.',
            tag_translate: 'Translation', tag_interpret: 'Interpretation', tag_mt: 'AI / MT',

            blog_label: 'Blog', blog_title: 'Insights & Updates',
            blog_desc: 'Expert perspectives on translation, localization, and language technology.',
            blog_1_date: 'May 15, 2025', blog_1_title: 'How to Choose the Right Translation Service for Your Business',
            blog_1_excerpt: 'Selecting a translation partner is a critical decision. We break down the key factors — from quality certifications to turnaround times — that you should evaluate.',
            blog_2_date: 'Apr 28, 2025', blog_2_title: 'The Future of AI in Professional Translation',
            blog_2_excerpt: 'AI is transforming the translation industry. Explore how machine translation post-editing (MTPE) combines speed with human accuracy.',
            blog_3_date: 'Mar 10, 2025', blog_3_title: '5 Common Mistakes in Document Translation',
            blog_3_excerpt: 'Avoid costly errors in your multilingual projects. Here are the five pitfalls we see most often — and how to prevent them.',
            blog_readmore: 'Read More',

            price_label: 'Pricing', price_title: 'Transparent & Flexible Pricing',
            price_desc: 'Every project is unique. Tell us your requirements and we\'ll provide a detailed, no-obligation quotation within 24 hours.',
            price_source: 'Source Language', price_target: 'Target Language',
            price_type: 'Service Type', price_type_doc: 'Document Translation',
            price_type_tech: 'Technical Translation', price_type_legal: 'Legal / Patent',
            price_type_interp: 'Interpretation', price_type_mtpe: 'MTPE',
            price_count: 'Word Count / Duration', price_notes: 'Additional Notes',
            price_submit: 'Submit Request',
            price_note: 'We\'ll respond within 24 hours with a detailed quotation.',

            contact_label: 'Contact', contact_title: 'Get In Touch',
            contact_desc: 'Have a question or ready to start a project? Our team is here to help.',
            contact_email_label: 'Email', contact_email: 'Onlinequoteen@PTSGI.com',
            contact_phone_label: 'Phone', contact_phone: '+886-2-2191-4650',
            contact_addr_label: 'Address', contact_addr: 'Taipei, Taiwan',
            contact_card_title: 'Start Your Project', contact_card_desc: 'Send us your files and requirements for a free quotation.',
            contact_card_btn: 'Request Quotation',

            footer_desc: 'Asia\'s leading language service provider, delivering precision across 145+ languages since 1966.',
            footer_company: 'Company', footer_support: 'Support', footer_legal: 'Legal',
            footer_faq: 'FAQ', footer_terms: 'Terms', footer_privacy: 'Privacy', footer_cookie: 'Cookies',
            footer_copy: '© 2025 PTSGI, Inc. All rights reserved.',

            about_hero_title: 'About PTSGI', about_hero_desc: 'Over 50 years of bridging language barriers worldwide.',
            about_intro_title: 'Who We Are',
            about_intro_p1: 'Founded in 1966, PTSGI has grown into one of Asia\'s most trusted language service providers. With over 13,600 professional translators and interpreters worldwide, we cover 145+ languages and serve clients across every major industry.',
            about_intro_p2: 'We hold ISO 9001, ISO 17100, and ISO 27001 certifications — the gold standard for quality management, translation services, and information security. Our proprietary GTAIS system ensures efficient, high-quality delivery with zero time lag.',
            process_label: 'Process', process_title: 'Our Work Process',
            wf_1_title: 'Requirements Analysis', wf_1_desc: 'We carefully review your source materials, understand the target audience, and define the project scope, timeline, and quality requirements.',
            wf_2_title: 'Translator Matching', wf_2_desc: 'Our system matches your project with native-speaking translators who specialize in your industry and subject matter.',
            wf_3_title: 'Translation & Review', wf_3_desc: 'Translators deliver the initial translation, which is then reviewed by a second linguist for accuracy, consistency, and style.',
            wf_4_title: 'Quality Assurance', wf_4_desc: 'Our QA team runs automated and manual checks for terminology, formatting, and completeness before final delivery.',
            wf_5_title: 'Delivery & Follow-up', wf_5_desc: 'We deliver the final files in your preferred format and offer revisions to ensure your complete satisfaction.',
            org_title: 'Company Structure',
            org_p1: 'PTSGI operates through five core divisions: Translation Services, Interpretation Services, Project Management, Quality Assurance, and Technology & Innovation.',
            org_p2: 'Each division is led by industry veterans with deep expertise, ensuring that every project — from a single-page certificate to a million-word technical manual — receives the attention it deserves.',

            svc_hero_title: 'Our Services', svc_hero_desc: 'Comprehensive language solutions tailored to your needs.',
            adv_title: 'Why Choose Our Translation Services',
            adv_desc: 'We combine decades of human expertise with cutting-edge technology to deliver translations that are accurate, culturally appropriate, and on time.',
            adv_1: 'ISO 9001, 17100, 27001 certified',
            adv_2: '13,600+ professional translators worldwide',
            adv_3: '145+ languages supported',
            adv_4: '24/7 project management',
            adv_5: 'AI-powered quality assurance',
            adv_6: 'Competitive pricing with no hidden fees',
            detail_label: 'Services', detail_title: 'Comprehensive Language Solutions',
            detail_trans_title: 'Translation Services',
            detail_trans_desc: 'Professional human translation for all document types, with industry-specific expertise and rigorous quality control.',
            detail_trans_1: 'Document & Business Translation',
            detail_trans_2: 'Technical & Engineering Translation',
            detail_trans_3: 'Legal & Patent Translation',
            detail_interp_title: 'Interpretation Services',
            detail_interp_desc: 'Expert interpreters for every setting — from international conferences to private business meetings.',
            detail_interp_1: 'Simultaneous Interpretation',
            detail_interp_2: 'Consecutive Interpretation',
            detail_interp_3: 'Remote Video/Phone Interpretation',
            detail_mt_title: 'AI & Machine Translation',
            detail_mt_desc: 'Leverage the power of AI for high-volume projects while maintaining quality through human post-editing.',
            detail_mt_1: 'MTPE (Machine Translation Post-Editing)',
            detail_mt_2: 'Neural Machine Translation',
            detail_mt_3: 'Custom MT Model Training',
            svc_cta_title: 'Ready to Get Started?',
            svc_cta_desc: 'Tell us about your project and receive a free quotation within 24 hours.',
            svc_cta_btn: 'Request a Quote',

            blog_hero_title: 'Our Blog', blog_hero_desc: 'Insights, tips, and industry updates from our translation experts.',
            blog_tag_trans: 'Translation', blog_tag_tech: 'Technology', blog_tag_tips: 'Tips',
            blog_1_full: '<p>Choosing the right translation service provider is one of the most important decisions a business can make when expanding internationally. The quality of your translated content directly affects how your brand is perceived in new markets.</p><p>First, look for providers with recognized certifications such as ISO 17100, which specifically covers translation services. This ensures the provider follows internationally recognized processes for translation quality.</p><p>Second, consider the provider\'s specialization. A company that excels in legal translation may not be the best choice for marketing content. Ask about their experience in your specific industry.</p><p>Finally, evaluate their technology stack. Modern translation providers use CAT tools, translation memory, and terminology databases to ensure consistency across large projects while keeping costs manageable.</p>',
            blog_2_full: '<p>Artificial intelligence is fundamentally changing how translation services are delivered. Machine Translation Post-Editing (MTPE) has emerged as a game-changing approach that combines the speed of AI with the nuance of human expertise.</p><p>Neural machine translation (NMT) engines have improved dramatically in recent years, producing output that often requires minimal editing for straightforward content. This has opened up new possibilities for high-volume projects that were previously too expensive to translate entirely by humans.</p><p>However, AI is not replacing human translators — it\'s augmenting them. Creative content, marketing materials, and legally binding documents still require the cultural understanding and contextual awareness that only human translators can provide.</p><p>The future lies in a hybrid approach: AI handles the heavy lifting while human experts ensure quality, cultural appropriateness, and brand consistency.</p>',
            blog_3_full: '<p>Even experienced professionals make translation mistakes that can be costly. Here are the five most common pitfalls we encounter:</p><p><strong>1. Ignoring context.</strong> Words can have multiple meanings depending on context. A good translator considers the full document, not just individual sentences.</p><p><strong>2. Literal translation.</strong> Translating word-for-word often produces awkward or incorrect results. Professional translators convey meaning, not just words.</p><p><strong>3. Inconsistent terminology.</strong> Using different terms for the same concept confuses readers. A proper glossary and translation memory prevent this.</p><p><strong>4. Skipping proofreading.</strong> Every translation should be reviewed by a second linguist. Fresh eyes catch errors that the original translator might miss.</p><p><strong>5. Ignoring formatting.</strong> Different languages have different text lengths, reading directions, and formatting conventions. A professional provider handles these details.</p>'
        },

        zh: {
            page_title: 'PTSGI — 专业翻译与口译服务',
            meta_desc: '亚洲领先的语言服务供应商，拥有50余年经验及13,600+名专业译者。',
            nav_about: '关于我们', nav_services: '服务', nav_pricing: '定价',
            nav_blog: '博客', nav_contact: '联系', nav_quote: '获取报价',

            hero_badge: 'CSA Research 全球前五',
            hero_title: '跨越语言，<br><span class="accent">连接世界</span>',
            hero_tagline: '亚洲领先的多语言服务公司——拥有超过13,600名专业译者，覆盖全球145+种语言。',
            hero_cta1: '立即开始', hero_cta2: '查看服务',
            hero_stat_lang: '种语言', hero_stat_years: '年经验', hero_stat_clients: '全球客户',

            svc_label: '我们的服务', svc_title: '专业语言解决方案',
            svc_desc: '从文档翻译到同声传译，我们为每一个语言对提供精准服务。',
            svc_1_title: '文档翻译', svc_1_desc: '合同、手册、报告——准确且符合文化习惯。',
            svc_2_title: '技术翻译', svc_2_desc: '工程、IT和科学内容，具备专业领域知识。',
            svc_3_title: '法律与专利', svc_3_desc: '适用于法律程序和知识产权申请的认证翻译。',
            svc_4_title: '同声传译', svc_4_desc: '为会议和大型活动提供实时传译。',
            svc_5_title: '交替传译', svc_5_desc: '为会谈和商务谈判提供专业口译。',
            svc_6_title: '远程口译', svc_6_desc: '随时随地按需提供视频/电话口译。',
            svc_7_title: 'AI驱动的MTPE', svc_7_desc: '机器翻译+人工后编辑，兼顾速度与质量。',
            tag_translate: '笔译', tag_interpret: '口译', tag_mt: 'AI / 机翻',

            blog_label: '博客', blog_title: '洞察与动态',
            blog_desc: '来自翻译专家的专业见解、实用技巧与行业资讯。',
            blog_1_date: '2025年5月15日', blog_1_title: '如何为企业选择合适的翻译服务',
            blog_1_excerpt: '选择翻译合作伙伴是一个关键决策。我们梳理了您应该评估的关键因素——从质量认证到交付时间。',
            blog_2_date: '2025年4月28日', blog_2_title: 'AI在专业翻译中的未来',
            blog_2_excerpt: 'AI正在改变翻译行业。探索机器翻译后编辑(MTPE)如何将速度与人工准确性完美结合。',
            blog_3_date: '2025年3月10日', blog_3_title: '文档翻译中的5个常见错误',
            blog_3_excerpt: '避免多语言项目中的代价高昂的错误。以下是我们最常见的五个陷阱——以及如何预防。',
            blog_readmore: '阅读更多',

            price_label: '定价', price_title: '透明灵活的定价',
            price_desc: '每个项目都是独特的。告诉我们您的需求，我们将在24小时内提供详细的免费报价。',
            price_source: '源语言', price_target: '目标语言',
            price_type: '服务类型', price_type_doc: '文档翻译',
            price_type_tech: '技术翻译', price_type_legal: '法律/专利',
            price_type_interp: '口译', price_type_mtpe: 'MTPE',
            price_count: '字数/时长', price_notes: '补充说明',
            price_submit: '提交需求',
            price_note: '我们将在24小时内回复详细报价。',

            contact_label: '联系', contact_title: '联系我们',
            contact_desc: '有疑问或准备启动项目？我们的团队随时为您服务。',
            contact_email_label: '邮箱', contact_email: 'Onlinequoteen@PTSGI.com',
            contact_phone_label: '电话', contact_phone: '+886-2-2191-4650',
            contact_addr_label: '地址', contact_addr: '中国台湾 台北市',
            contact_card_title: '启动您的项目', contact_card_desc: '发送您的文件和需求，获取免费报价。',
            contact_card_btn: '索取报价',

            footer_desc: '亚洲领先的语言服务供应商，自1966年以来为全球145+种语言提供精准翻译。',
            footer_company: '公司', footer_support: '支持', footer_legal: '法律',
            footer_faq: '常见问题', footer_terms: '条款', footer_privacy: '隐私', footer_cookie: 'Cookie',
            footer_copy: '© 2025 统一数位翻译股份有限公司 版权所有。',

            about_hero_title: '关于我们', about_hero_desc: '50余年来，跨越全球语言障碍。',
            about_intro_title: '我们是谁',
            about_intro_p1: '统一数位翻译成立于1966年，现已发展成为亚洲最受信赖的语言服务供应商之一。我们拥有超过13,600名专业译者和口译员，覆盖145+种语言，服务于各大行业的客户。',
            about_intro_p2: '我们持有ISO 9001、ISO 17100和ISO 27001认证——品质管理、翻译服务和信息安全的最高标准。我们自主研发的GTAIS系统确保高效、高质量、零时差的服务交付。',
            process_label: '流程', process_title: '我们的工作流程',
            wf_1_title: '需求分析', wf_1_desc: '我们仔细审阅您的原始资料，了解目标受众，明确项目范围、时间表和质量要求。',
            wf_2_title: '译者匹配', wf_2_desc: '我们的系统将您的项目与专注于相关行业和专业领域的母语译者进行匹配。',
            wf_3_title: '翻译与审校', wf_3_desc: '译者完成初稿翻译，随后由第二位语言专家对准确性、一致性和风格进行审校。',
            wf_4_title: '质量保障', wf_4_desc: '我们的QA团队在最终交付前进行自动化和人工检查，确保术语、格式和完整性。',
            wf_5_title: '交付与跟进', wf_5_desc: '我们以您指定的格式交付最终文件，并提供修订服务以确保您的满意。',
            org_title: '公司架构',
            org_p1: 'PTSGI由五大核心部门运营：翻译服务部、口译服务部、项目管理部、质量保障部以及技术与创新部。',
            org_p2: '每个部门均由资深行业专家领导，确保从单页证书到百万字技术手册的每个项目都能获得应有的关注。',

            svc_hero_title: '服务项目', svc_hero_desc: '为您量身定制的全方位语言解决方案。',
            adv_title: '为什么选择我们的翻译服务', adv_desc: '我们将数十年的人工专业知识与尖端技术相结合，提供准确、符合文化、按时交付的翻译。',
            adv_1: 'ISO 9001、17100、27001认证', adv_2: '全球13,600+名专业译者',
            adv_3: '支持145+种语言', adv_4: '全天候项目管理',
            adv_5: 'AI驱动的质量保障', adv_6: '价格透明，无隐藏费用',
            detail_label: '服务', detail_title: '全方位语言解决方案',
            detail_trans_title: '翻译服务', detail_trans_desc: '专业人工翻译，涵盖所有文档类型，具备行业专长和严格的质量管控。',
            detail_trans_1: '文档与商务翻译', detail_trans_2: '技术与工程翻译', detail_trans_3: '法律与专利翻译',
            detail_interp_title: '口译服务', detail_interp_desc: '为各种场景提供专家口译——从国际会议到商务会谈。',
            detail_interp_1: '同声传译', detail_interp_2: '交替传译', detail_interp_3: '远程视频/电话口译',
            detail_mt_title: 'AI与机器翻译', detail_mt_desc: '借助AI力量处理大批量项目，通过人工后编辑确保质量。',
            detail_mt_1: 'MTPE（机器翻译后编辑）', detail_mt_2: '神经机器翻译', detail_mt_3: '定制MT模型训练',
            svc_cta_title: '准备好开始了吗？', svc_cta_desc: '告诉我们您的项目需求，24小时内获得免费报价。', svc_cta_btn: '索取报价',

            blog_hero_title: '博客', blog_hero_desc: '来自翻译专家的洞察、技巧与行业资讯。',
            blog_tag_trans: '翻译', blog_tag_tech: '技术', blog_tag_tips: '技巧',
            blog_1_full: '<p>选择合适的翻译服务供应商是企业国际化扩张中最重要的决策之一。翻译内容的质量直接影响您的品牌在新市场中的形象。</p><p>首先，寻找拥有ISO 17100等国际认证的供应商。这确保供应商遵循国际公认的翻译质量流程。</p><p>其次，考虑供应商的专业领域。擅长法律翻译的公司可能不是营销内容的最佳选择。请询问他们在您所在行业的经验。</p><p>最后，评估他们的技术能力。现代翻译供应商使用CAT工具、翻译记忆库和术语库来确保大型项目的一致性，同时控制成本。</p>',
            blog_2_full: '<p>人工智能正在从根本上改变翻译服务的交付方式。机器翻译后编辑(MTPE)已成为一种革命性方法，将AI的速度与人工的细腻结合在一起。</p><p>近年来，神经机器翻译(NMT)引擎取得了显著进步，对于简单直接的内容，其输出往往只需最少的编辑。这为之前因成本过高而无法完全人工翻译的大批量项目开辟了新的可能。</p><p>然而，AI并非要取代人工译者——而是增强他们的能力。创意内容、营销材料和具有法律效力的文件仍然需要只有人工译者才能提供的文化理解和语境意识。</p><p>未来在于混合方法：AI完成繁重工作，人工专家确保质量、文化适当性和品牌一致性。</p>',
            blog_3_full: '<p>即使是经验丰富的专业人士也会犯代价高昂的翻译错误。以下是我们遇到的五个最常见的陷阱：</p><p><strong>1. 忽略语境。</strong>词语可以根据语境有多种含义。优秀的译者会考虑完整的文档，而不仅仅是单独的句子。</p><p><strong>2. 逐字直译。</strong>逐字翻译往往会产生生硬或不正确的结果。专业译者传达的是含义，而不仅仅是文字。</p><p><strong>3. 术语不一致。</strong>对同一概念使用不同的术语会让读者困惑。适当的术语表和翻译记忆库可以防止这一问题。</p><p><strong>4. 跳过校对。</strong>每份翻译都应由第二位语言专家审阅。新鲜的眼光能发现原译者可能遗漏的错误。</p><p><strong>5. 忽视格式。</strong>不同语言有不同的文本长度、阅读方向和格式规范。专业供应商会处理这些细节。</p>'
        },

        ms: {
            page_title: 'PTSGI — Perkhidmatan Terjemahan & Interpretasi Profesional',
            meta_desc: 'Penyedia perkhidmatan bahasa terkemuka di Asia dengan pengalaman 50+ tahun dan 13,600+ penterjemah di seluruh dunia.',
            nav_about: 'Tentang Kami', nav_services: 'Perkhidmatan', nav_pricing: 'Harga',
            nav_blog: 'Blog', nav_contact: 'Hubungi', nav_quote: 'Dapatkan Sebut Harga',

            hero_badge: 'CSA Research Top 5 Dunia',
            hero_title: 'Menjambatani Bahasa,<br><span class="accent">Menghubungkan Dunia</span>',
            hero_tagline: 'Syarikat perkhidmatan pelbagai bahasa terkemuka di Asia — disokong oleh 13,600+ penterjemah profesional merangkumi 145+ bahasa.',
            hero_cta1: 'Mulakan', hero_cta2: 'Perkhidmatan Kami',
            hero_stat_lang: 'Bahasa', hero_stat_years: 'Tahun Pengalaman', hero_stat_clients: 'Pelanggan Global',

            svc_label: 'Perkhidmatan Kami', svc_title: 'Penyelesaian Bahasa Profesional',
            svc_desc: 'Dari terjemahan dokumen hingga interpretasi serentak, kami memberikan ketepatan merentasi setiap pasangan bahasa.',
            svc_1_title: 'Terjemahan Dokumen', svc_1_desc: 'Kontrak, manual, laporan — tepat dan disesuaikan mengikut budaya.',
            svc_2_title: 'Terjemahan Teknikal', svc_2_desc: 'Kandungan kejuruteraan, IT dan saintifik dengan kepakaran domain.',
            svc_3_title: 'Undang-undang & Paten', svc_3_desc: 'Terjemahan bertauliah untuk prosiding undang-undang dan pemfailan IP.',
            svc_4_title: 'Interpretasi Serentak', svc_4_desc: 'Interpretasi masa nyata untuk persidangan dan acara besar.',
            svc_5_title: 'Interpretasi Berturutan', svc_5_desc: 'Interpretasi profesional untuk mesyuarat dan rundingan.',
            svc_6_title: 'Interpretasi Jarak Jauh', svc_6_desc: 'Interpretasi video/telefon atas permintaan pada bila-bila masa.',
            svc_7_title: 'MTPE Berkuasa AI', svc_7_desc: 'Terjemahan mesin + suntingan pasca manusia untuk kelajuan & kualiti.',
            tag_translate: 'Terjemahan', tag_interpret: 'Interpretasi', tag_mt: 'AI / MT',

            blog_label: 'Blog', blog_title: 'Pandangan & Kemas Kini',
            blog_desc: 'Perspektif pakar mengenai terjemahan, penyetempatan dan teknologi bahasa.',
            blog_1_date: '15 Mei 2025', blog_1_title: 'Cara Memilih Perkhidmatan Terjemahan yang Tepat untuk Perniagaan Anda',
            blog_1_excerpt: 'Memilih rakan terjemahan adalah keputusan kritikal. Kami menguraikan faktor utama yang perlu anda nilai.',
            blog_2_date: '28 Apr 2025', blog_2_title: 'Masa Depan AI dalam Terjemahan Profesional',
            blog_2_excerpt: 'AI sedang mengubah industri terjemahan. Ketahui bagaimana MTPE menggabungkan kelajuan dengan ketepatan manusia.',
            blog_3_date: '10 Mac 2025', blog_3_title: '5 Kesilapan Biasa dalam Terjemahan Dokumen',
            blog_3_excerpt: 'Elakkan kesilapan mahal dalam projek pelbagai bahasa anda. Berikut adalah lima perangkap yang paling kerap kami lihat.',
            blog_readmore: 'Baca Lagi',

            price_label: 'Harga', price_title: 'Harga Telus & Fleksibel',
            price_desc: 'Setiap projek adalah unik. Beritahu kami keperluan anda dan kami akan memberikan sebut harga terperinci dalam masa 24 jam.',
            price_source: 'Bahasa Sumber', price_target: 'Bahasa Sasaran',
            price_type: 'Jenis Perkhidmatan', price_type_doc: 'Terjemahan Dokumen',
            price_type_tech: 'Terjemahan Teknikal', price_type_legal: 'Undang-undang / Paten',
            price_type_interp: 'Interpretasi', price_type_mtpe: 'MTPE',
            price_count: 'Bilangan Perkataan / Tempoh', price_notes: 'Nota Tambahan',
            price_submit: 'Hantar Permintaan',
            price_note: 'Kami akan membalas dalam masa 24 jam dengan sebut harga terperinci.',

            contact_label: 'Hubungi', contact_title: 'Hubungi Kami',
            contact_desc: 'Ada soalan atau bersedia memulakan projek? Pasukan kami sedia membantu.',
            contact_email_label: 'E-mel', contact_email: 'Onlinequoteen@PTSGI.com',
            contact_phone_label: 'Telefon', contact_phone: '+886-2-2191-4650',
            contact_addr_label: 'Alamat', contact_addr: 'Taipei, Taiwan',
            contact_card_title: 'Mulakan Projek Anda', contact_card_desc: 'Hantarkan fail dan keperluan anda untuk sebut harga percuma.',
            contact_card_btn: 'Minta Sebut Harga',

            footer_desc: 'Penyedia perkhidmatan bahasa terkemuka di Asia, memberikan ketepatan merentasi 145+ bahasa sejak 1966.',
            footer_company: 'Syarikat', footer_support: 'Sokongan', footer_legal: 'Undang-undang',
            footer_faq: 'Soalan Lazim', footer_terms: 'Terma', footer_privacy: 'Privasi', footer_cookie: 'Kuki',
            footer_copy: '© 2025 PTSGI, Inc. Hak cipta terpelihara.',

            about_hero_title: 'Tentang PTSGI', about_hero_desc: 'Lebih 50 tahun menjambatani halangan bahasa di seluruh dunia.',
            about_intro_title: 'Siapa Kami',
            about_intro_p1: 'Ditubuhkan pada 1966, PTSGI telah berkembang menjadi salah satu penyedia perkhidmatan bahasa paling dipercayai di Asia. Dengan lebih 13,600 penterjemah dan jurubahasa profesional, kami merangkumi 145+ bahasa.',
            about_intro_p2: 'Kami memegang pensijilan ISO 9001, ISO 17100, dan ISO 27001 — standard emas untuk pengurusan kualiti, perkhidmatan terjemahan, dan keselamatan maklumat.',
            process_label: 'Proses', process_title: 'Proses Kerja Kami',
            wf_1_title: 'Analisis Keperluan', wf_1_desc: 'Kami menyemak bahan sumber anda dengan teliti, memahami audiens sasaran, dan menentukan skop projek.',
            wf_2_title: 'Padanan Penterjemah', wf_2_desc: 'Sistem kami memadankan projek anda dengan penterjemah penutur asli yang pakar dalam industri anda.',
            wf_3_title: 'Terjemahan & Semakan', wf_3_desc: 'Penterjemah menyampaikan terjemahan awal, kemudian disemak oleh ahli bahasa kedua.',
            wf_4_title: 'Jaminan Kualiti', wf_4_desc: 'Pasukan QA kami menjalankan pemeriksaan automatik dan manual sebelum penghantaran akhir.',
            wf_5_title: 'Penghantaran & Susulan', wf_5_desc: 'Kami menghantar fail akhir dalam format pilihan anda dan menawarkan semakan.',
            org_title: 'Struktur Syarikat',
            org_p1: 'PTSGI beroperasi melalui lima bahagian teras: Perkhidmatan Terjemahan, Interpretasi, Pengurusan Projek, Jaminan Kualiti, dan Teknologi & Inovasi.',
            org_p2: 'Setiap bahagian diketuai oleh veteran industri dengan kepakaran mendalam.',

            svc_hero_title: 'Perkhidmatan Kami', svc_hero_desc: 'Penyelesaian bahasa komprehensif disesuaikan untuk keperluan anda.',
            adv_title: 'Mengapa Memilih Perkhidmatan Terjemahan Kami', adv_desc: 'Kami menggabungkan kepakaran manusia dengan teknologi canggih.',
            adv_1: 'Pensijilan ISO 9001, 17100, 27001', adv_2: '13,600+ penterjemah profesional',
            adv_3: '145+ bahasa disokong', adv_4: 'Pengurusan projek 24/7',
            adv_5: 'Jaminan kualiti berkuasa AI', adv_6: 'Harga kompetitif tanpa caj tersembunyi',
            detail_label: 'Perkhidmatan', detail_title: 'Penyelesaian Bahasa Komprehensif',
            detail_trans_title: 'Perkhidmatan Terjemahan', detail_trans_desc: 'Terjemahan manusia profesional untuk semua jenis dokumen.',
            detail_trans_1: 'Terjemahan Dokumen & Perniagaan', detail_trans_2: 'Terjemahan Teknikal & Kejuruteraan', detail_trans_3: 'Terjemahan Undang-undang & Paten',
            detail_interp_title: 'Perkhidmatan Interpretasi', detail_interp_desc: 'Jurubahasa pakar untuk setiap tetapan.',
            detail_interp_1: 'Interpretasi Serentak', detail_interp_2: 'Interpretasi Berturutan', detail_interp_3: 'Interpretasi Video/Telefon Jarak Jauh',
            detail_mt_title: 'AI & Terjemahan Mesin', detail_mt_desc: 'Manfaatkan kuasa AI untuk projek volum tinggi.',
            detail_mt_1: 'MTPE', detail_mt_2: 'Terjemahan Mesin Neural', detail_mt_3: 'Latihan Model MT Tersuai',
            svc_cta_title: 'Bersedia untuk Bermula?', svc_cta_desc: 'Beritahu kami tentang projek anda dan dapatkan sebut harga percuma.', svc_cta_btn: 'Minta Sebut Harga',

            blog_hero_title: 'Blog Kami', blog_hero_desc: 'Pandangan, petua dan kemas kini industri daripada pakar terjemahan kami.',
            blog_tag_trans: 'Terjemahan', blog_tag_tech: 'Teknologi', blog_tag_tips: 'Petua',
            blog_1_full: '<p>Memilih penyedia perkhidmatan terjemahan yang tepat adalah keputusan penting bagi perniagaan yang berkembang ke peringkat antarabangsa.</p><p>Pertama, cari penyedia dengan pensijilan seperti ISO 17100. Kedua, pertimbangkan pengkhususan mereka. Ketiga, nilai keupayaan teknologi mereka.</p>',
            blog_2_full: '<p>Kecerdasan buatan sedang mengubah cara perkhidmatan terjemahan disampaikan secara asas. MTPE menggabungkan kelajuan AI dengan kepakaran manusia.</p><p>Masa depan terletak pada pendekatan hibrid: AI mengendalikan kerja berat manakala pakar manusia memastikan kualiti.</p>',
            blog_3_full: '<p>Berikut adalah lima kesilapan paling biasa: 1) Mengabaikan konteks, 2) Terjemahan literal, 3) Terminologi tidak konsisten, 4) Melangkau proofreading, 5) Mengabaikan pemformatan.</p>'
        },

        ja: {
            page_title: 'PTSGI — プロフェッショナル翻訳・通訳サービス',
            meta_desc: 'アジアを代表する言語サービスプロバイダー。50年以上の実績と13,600名以上の翻訳者。',
            nav_about: '会社概要', nav_services: 'サービス', nav_pricing: '料金',
            nav_blog: 'ブログ', nav_contact: 'お問い合わせ', nav_quote: '見積もり',

            hero_badge: 'CSA Research 世界トップ5',
            hero_title: '言語の架け橋、<br><span class="accent">世界をつなぐ</span>',
            hero_tagline: 'アジアをリードする多言語サービス企業——13,600名以上のプロ翻訳者が145以上の言語をカバー。',
            hero_cta1: '始めましょう', hero_cta2: 'サービス一覧',
            hero_stat_lang: '言語', hero_stat_years: '年の実績', hero_stat_clients: 'グローバル顧客',

            svc_label: 'サービス', svc_title: 'プロフェッショナル言語ソリューション',
            svc_desc: 'ドキュメント翻訳から同時通訳まで、あらゆる言語ペアで精度の高いサービスを提供します。',
            svc_1_title: 'ドキュメント翻訳', svc_1_desc: '契約書、マニュアル、レポート——正確で文化に配慮した翻訳。',
            svc_2_title: '技術翻訳', svc_2_desc: 'エンジニアリング、IT、科学コンテンツの専門翻訳。',
            svc_3_title: '法律・特許翻訳', svc_3_desc: '法的手続きやIP出願のための認証翻訳。',
            svc_4_title: '同時通訳', svc_4_desc: '会議や大規模イベントのリアルタイム通訳。',
            svc_5_title: '逐次通訳', svc_5_desc: '会議や交渉のためのプロフェッショナル通訳。',
            svc_6_title: 'リモート通訳', svc_6_desc: 'いつでもどこでもオンデマンドのビデオ/電話通訳。',
            svc_7_title: 'AI搭載MTPE', svc_7_desc: '機械翻訳＋人間によるポストエディットでスピードと品質を両立。',
            tag_translate: '翻訳', tag_interpret: '通訳', tag_mt: 'AI / MT',

            blog_label: 'ブログ', blog_title: 'インサイト＆アップデート',
            blog_desc: '翻訳の専門家による見解、ヒント、業界ニュース。',
            blog_1_date: '2025年5月15日', blog_1_title: 'ビジネスに適した翻訳サービスの選び方',
            blog_1_excerpt: '翻訳パートナーの選択は重要な決断です。品質認証から納期まで、評価すべき主要な要素を解説します。',
            blog_2_date: '2025年4月28日', blog_2_title: 'プロ翻訳におけるAIの未来',
            blog_2_excerpt: 'AIは翻訳業界を変革しています。MTPEがいかにスピードと人間の正確さを融合させるかをご紹介。',
            blog_3_date: '2025年3月10日', blog_3_title: 'ドキュメント翻訳でよくある5つのミス',
            blog_3_excerpt: '多言語プロジェクトでのコストのかかるミスを回避。最も多い5つの落とし穴とその防止策。',
            blog_readmore: '続きを読む',

            price_label: '料金', price_title: '透明で柔軟な料金体系',
            price_desc: 'すべてのプロジェクトはユニークです。ご要件をお知らせいただければ、24時間以内に詳細なお見積もりをお送りします。',
            price_source: '原文言語', price_target: '翻訳先言語',
            price_type: 'サービスタイプ', price_type_doc: 'ドキュメント翻訳',
            price_type_tech: '技術翻訳', price_type_legal: '法律・特許',
            price_type_interp: '通訳', price_type_mtpe: 'MTPE',
            price_count: '文字数／所要時間', price_notes: '追加メモ',
            price_submit: '依頼を送信',
            price_note: '24時間以内に詳細なお見積もりをお送りします。',

            contact_label: 'お問い合わせ', contact_title: 'お問い合わせ',
            contact_desc: 'ご質問やプロジェクト開始のご相談など、お気軽にご連絡ください。',
            contact_email_label: 'メール', contact_email: 'Onlinequoteen@PTSGI.com',
            contact_phone_label: '電話', contact_phone: '+886-2-2191-4650',
            contact_addr_label: '住所', contact_addr: '台湾 台北市',
            contact_card_title: 'プロジェクトを始めましょう', contact_card_desc: 'ファイルとご要件をお送りください。無料でお見積もりします。',
            contact_card_btn: '見積もりを依頼',

            footer_desc: 'アジアを代表する言語サービスプロバイダー。1966年から145以上の言語で精度の高い翻訳を提供。',
            footer_company: '会社', footer_support: 'サポート', footer_legal: '法務',
            footer_faq: 'よくある質問', footer_terms: '利用規約', footer_privacy: 'プライバシー', footer_cookie: 'Cookie',
            footer_copy: '© 2025 PTSGI, Inc. All rights reserved.',

            about_hero_title: '会社概要', about_hero_desc: '50年以上にわたり、世界中の言語障壁を越えてきました。',
            about_intro_title: '私たちについて',
            about_intro_p1: '1966年に設立されたPTSGIは、アジアで最も信頼される言語サービスプロバイダーの一つに成長しました。13,600名以上のプロの翻訳者・通訳者が145以上の言語をカバーしています。',
            about_intro_p2: 'ISO 9001、ISO 17100、ISO 27001の認証を取得——品質管理、翻訳サービス、情報セキュリティのゴールドスタンダードです。',
            process_label: 'プロセス', process_title: '私たちのワークフロー',
            wf_1_title: '要件分析', wf_1_desc: 'ソース資料を慎重に確認し、ターゲットオーディエンスを理解し、プロジェクトの範囲を定義します。',
            wf_2_title: '翻訳者マッチング', wf_2_desc: 'お客様の業界と専門分野に精通したネイティブ翻訳者をマッチングします。',
            wf_3_title: '翻訳＆レビュー', wf_3_desc: '翻訳者が初稿を提出し、第二の言語専門家が正確性とスタイルをレビューします。',
            wf_4_title: '品質保証', wf_4_desc: 'QAチームが最終納品前に自動・手動チェックを実施します。',
            wf_5_title: '納品＆フォローアップ', wf_5_desc: 'ご希望のフォーマットで最終ファイルを納品し、修正対応も行います。',
            org_title: '組織構成',
            org_p1: 'PTSGIは5つのコア部門で運営：翻訳、通訳、プロジェクト管理、品質保証、テクノロジー＆イノベーション。',
            org_p2: '各部門は深い専門知識を持つ業界ベテランが率いています。',

            svc_hero_title: 'サービス一覧', svc_hero_desc: 'お客様のニーズに合わせた包括的な言語ソリューション。',
            adv_title: '当社の翻訳サービスを選ぶ理由', adv_desc: '数十年の人間の専門知識と最先端技術を組み合わせています。',
            adv_1: 'ISO 9001、17100、27001認証取得', adv_2: '世界13,600名以上のプロ翻訳者',
            adv_3: '145以上の言語に対応', adv_4: '24時間年中無休のプロジェクト管理',
            adv_5: 'AI搭載の品質保証', adv_6: '追加料金なしの競争力のある価格',
            detail_label: 'サービス', detail_title: '包括的な言語ソリューション',
            detail_trans_title: '翻訳サービス', detail_trans_desc: 'すべてのドキュメントタイプに対応するプロフェッショナル翻訳。',
            detail_trans_1: 'ドキュメント＆ビジネス翻訳', detail_trans_2: '技術＆エンジニアリング翻訳', detail_trans_3: '法律＆特許翻訳',
            detail_interp_title: '通訳サービス', detail_interp_desc: 'あらゆるシーンに対応するエキスパート通訳。',
            detail_interp_1: '同時通訳', detail_interp_2: '逐次通訳', detail_interp_3: 'リモートビデオ/電話通訳',
            detail_mt_title: 'AI＆機械翻訳', detail_mt_desc: '大量プロジェクトにAIの力を活用。',
            detail_mt_1: 'MTPE', detail_mt_2: 'ニューラル機械翻訳', detail_mt_3: 'カスタムMTモデルトレーニング',
            svc_cta_title: '始める準備はできましたか？', svc_cta_desc: 'プロジェクトについてお聞かせください。24時間以内に無料見積もりをお送りします。', svc_cta_btn: '見積もりを依頼',

            blog_hero_title: 'ブログ', blog_hero_desc: '翻訳の専門家によるインサイト、ヒント、業界アップデート。',
            blog_tag_trans: '翻訳', blog_tag_tech: 'テクノロジー', blog_tag_tips: 'ヒント',
            blog_1_full: '<p>適切な翻訳サービスプロバイダーを選ぶことは、国際展開を進める企業にとって最も重要な決断の一つです。</p><p>まず、ISO 17100などの認証を持つプロバイダーを探しましょう。次に、専門分野を考慮してください。最後に、技術力を評価しましょう。</p>',
            blog_2_full: '<p>AIは翻訳サービスの提供方法を根本的に変えています。MTPEはAIのスピードと人間の繊細さを組み合わせた画期的なアプローチです。</p><p>未来はハイブリッドアプローチにあります：AIが重労働を担い、人間の専門家が品質を確保します。</p>',
            blog_3_full: '<p>最もよくある5つの落とし穴：1）文脈の無視、2）逐語訳、3）用語の不一致、4）校正のスキップ、5）フォーマットの無視。</p>'
        }
    };

    var lang = 'en';
    var langLabels = { en: 'English', zh: '简体中文', ms: 'Bahasa Melayu', ja: '日本語' };
    var htmlLangs = { en: 'en', zh: 'zh-CN', ms: 'ms', ja: 'ja' };

    function apply(l) {
        if (!T[l]) return;
        lang = l;
        localStorage.setItem('ptsgi_lang', l);
        document.documentElement.lang = htmlLangs[l] || l;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n'), v = T[l][k];
            if (v === undefined) return;
            if (el.tagName === 'TITLE') document.title = v;
            else if (el.tagName === 'META') el.setAttribute('content', v);
            else el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var k = el.getAttribute('data-i18n-html'), v = T[l][k];
            if (v !== undefined) el.innerHTML = v;
        });

        var lb = document.getElementById('current-lang-label');
        if (lb) lb.textContent = langLabels[l] || l;
        document.querySelectorAll('.lang-dropdown [data-lang]').forEach(function (el) {
            el.classList.toggle('active', el.getAttribute('data-lang') === l);
        });
        var sw = document.querySelector('.lang-switcher');
        if (sw) sw.classList.remove('open');
    }

    function init() {
        var saved = localStorage.getItem('ptsgi_lang') || 'en';
        document.querySelectorAll('.lang-dropdown [data-lang]').forEach(function (el) {
            el.addEventListener('click', function (e) { e.preventDefault(); apply(this.getAttribute('data-lang')); });
        });
        apply(saved);
        document.body.classList.add('ready');
    }

    return { init: init, apply: apply, lang: function () { return lang; }, t: function (k) { return (T[lang] && T[lang][k]) || (T.en && T.en[k]) || k; } };
})();
