export const ASSETS = {
      profileBoom: "/images/profile-boom.jpg",
      profileStanding: "/images/profile-standing.jpg",
      dcaUi: "/images/dca-ui-screenshot.jpg",
      dcaBooth: "/images/dca-team-booth.jpg",
      dcaBoard: "/images/dca-board-presentation.jpg",
      dcaStage: "/images/dca-stage-pitch.jpg",
      dcaTesting: "/images/dca-peer-testing.jpg",
      qrDcaWeb: "/images/qr-dca-website.png",
      qrDcaReport: "/images/qr-dca-report.png",
      certOrgan: "/images/cert-organ-donation.jpg",
      actOrgan: "/images/organ-donation-editing.jpg",
      qrOrgan: "/images/qr-organ-donation.png",
      skFbPage: "/images/sk-topstar-fb-page.jpg",
      skPosts: "/images/sk-topstar-posts.jpg",
      qrSkTopstar: "/images/qr-sk-topstar.png",
      photoCampGroup: "/images/photo-camp-group.jpg",
      photoAcademicHall: "/images/photo-academic-hall.jpg",
      qrPhoto1: "/images/qr-photo-portfolio-1.png",
      qrPhoto2: "/images/qr-photo-portfolio-2.png",
      certMahidol: "/images/cert-mahidol-ai-playground.jpg",
      actMahidol: "/images/act-mahidol-ai-playground.jpg",
      certFilm: "/images/cert-film-camp-9.jpg",
      actFilm: "/images/act-film-camp-9.jpg",
      certLab: "/images/cert-lab-to-launch.jpg",
      actLab: "/images/act-lab-to-launch.jpg",
      certTurtle: "/images/cert-sea-turtle-save.jpg",
      actTurtle1: "/images/act-sea-turtle-1.jpg",
      actTurtle2: "/images/act-sea-turtle-2.jpg"
    };

    // Complete Bilingual Data Dictionary (Zero Untranslated Strings)
    export const DATA: Record<'th' | 'en', any> = {
      th: {
        nav: {
          name: "นายพรหมพิริยะ เพชรยังพูล",
          nick: "บูม",
          subtitle: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) ม.ศิลปากร • AI for Digital Experience",
          caseStudies: "เจาะลึกผลงาน (4)",
          dropdownHeader: "หน้าเจาะลึกผลงาน (Case Studies)",
          auditBtn: "ตรวจสอบข้อมูล",
          backHome: "กลับสู่หน้าแรก (Overview)",
          tabs: [
            { id: "hero", label: "หน้าแรก", icon: "home" },
            { id: "about", label: "เกี่ยวกับผม", icon: "user" },
            { id: "education", label: "การศึกษา", icon: "grad" },
            { id: "projects", label: "ผลงานเด่น", icon: "folder" },
            { id: "skills", label: "ทักษะ", icon: "cpu" },
            { id: "activities", label: "กิจกรรม", icon: "activity" },
            { id: "certificates", label: "เกียรติบัตร", icon: "award" },
            { id: "statement", label: "เรียงความ", icon: "doc" },
            { id: "contact", label: "ติดต่อ", icon: "mail" }
          ]
        },
        hero: {
          badgeTarget: "มหาวิทยาลัยศิลปากร • คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
          badgeMajor: "สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล",
          greeting: "แฟ้มสะสมผลงานเพื่อยื่นสมัครเข้าศึกษาต่อระดับมหาวิทยาลัย • TCAS70",
          namePrimary: "นายพรหมพิริยะ ",
          nameLast: "เพชรยังพูล",
          nameSub: "Mr. Prompiriya Phetyangphul (บูม / Boom)",
          schoolTag: "โรงเรียนสระแก้ว • ห้องเรียนพิเศษ TOP STAR",
          interestsLabel: "ความสนใจและเป้าหมายในอนาคต (Career & Learning Goals)",
          roles: [
            "AI Developer (เป้าหมาย)",
            "AI Engineer (เป้าหมาย)",
            "AI Designer (เป้าหมาย)",
            "Creative Technologist",
            "Web Developer",
            "UI/UX & Digital Experience",
            "Data & AI Applications",
            "Digital Media Production"
          ],
          intro: "นักเรียนชั้นมัธยมศึกษาตอนปลายแผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ (ห้องเรียนพิเศษ TOP STAR) โรงเรียนสระแก้ว ผู้มีความมุ่งมั่นในการเรียนรู้การทำงานของปัญญาประดิษฐ์ (AI) เพื่อนำไปต่อยอดในการทำอาชีพและสร้างคุณค่าในอนาคต ผสานการพัฒนาเว็บแอปพลิเคชัน สื่อดิจิทัล และการออกแบบประสบการณ์ผู้ใช้ (UX/UI) ที่เข้าใจง่ายและแก้ปัญหาได้จริง",
          ctaPrimary: "สำรวจผลงานเด่น (4 โครงงาน)",
          ctaSecondary: "ทดลองระบบจำลอง DCA สด",
          authenticBadge: "อ้างอิงข้อมูลและภาพหลักฐานจริงจาก Portfolio PDF",
          portraitTop: "กำลังศึกษาชั้น ม.6 ปีการศึกษา 2569 • ยื่นสมัครรอบ TCAS70",
          portraitRole: "ผู้สมัครเข้าศึกษาต่อ TCAS70",
          portraitName: "นายพรหมพิริยะ เพชรยังพูล (บูม)",
          metricGpax: "เกรดเฉลี่ย 5 เทอม",
          metricSci: "วิทย์-เทคฯ",
          metricLang: "ภาษาต่างประเทศ",
          metricMath: "คณิตศาสตร์"
        },
        about: {
          eyebrow: "01 / ตัวตน ความสนใจ และมุมมองต่อ AI",
          title: "เกี่ยวกับผมและแนวคิดด้านเทคโนโลยี",
          subtitle: "ผสานการคิดวิเคราะห์อย่างเป็นระบบ การพัฒนาเว็บแอปพลิเคชัน และการเล่าเรื่องด้วยสื่อดิจิทัล",
          storyTag: "ผู้เรียนรู้ • นักทดลองสร้างเครื่องมือ • ผู้ผลิตสื่อดิจิทัล",
          storyHeading: "ใช้ AI เป็นเครื่องมือขยายศักยภาพ ไม่ใช่ให้ AI มาควบคุมแนวทางการทำงาน",
          p1: "ผมมีความสนใจในด้านเทคโนโลยีสารสนเทศและปัญญาประดิษฐ์ (AI) รวมถึงการนำ AI ไปประยุกต์ใช้ในการทำอาชีพและสร้างรายได้ด้วยทักษะเทคโนโลยี นอกจากการเรียนในห้องเรียนพิเศษ TOP STAR แล้ว ผมชอบศึกษาและลงมือทดลองด้วยตนเอง ตั้งแต่การพัฒนาเว็บแอปพลิเคชันและ Chrome Extension การใช้งานและปรับแต่ง Local AI (Ollama) บนเครื่อง ไปจนถึงการจัดการ Personal Cloud Server (CasaOS)",
          p2: "ในอีกด้านหนึ่ง ผมได้ฝึกฝนทักษะด้านการผลิตสื่อดิจิทัล ทั้งการตัดต่อและเกรดสีวิดีโอด้วย DaVinci Resolve การถ่ายภาพด้วยกล้อง Mirrorless (Sony) และการดูแลเพจประชาสัมพันธ์ Sk-Top STAR ประสบการณ์เหล่านี้ทำให้ผมเห็นว่า เทคโนโลยีที่ดีต้องควบคู่ไปกับ UX/UI และการสื่อสารที่เข้าถึงผู้คน",
          quote: "“แนวทางของผมคือการทำให้ AI ฉลาดและเข้าถึงคนได้ง่ายขึ้น จากการควบคุมหรือปรับแก้ในส่วนของการประมวลผล ปรับปรุง UX/UI หน้าต่างผู้ใช้งานให้ง่ายและน่าสนใจ เพื่อพัฒนาประสิทธิภาพโดยรวมของทั้งคนและ AI”",
          quoteCaption: "— คัดย่อจากเรียงความ (Statement) ของนายพรหมพิริยะ เพชรยังพูล, หน้า 12",
          factsTitle: "ข้อมูลส่วนตัวของผู้สมัคร (จากหน้า 4)",
          facts: [
            { k: "ชื่อ-สกุล", v: "นายพรหมพิริยะ เพชรยังพูล" },
            { k: "ชื่อเล่น", v: "บูม (Boom)" },
            { k: "เกิด / อายุ", v: "19 พฤศจิกายน 2551 (อายุ 17–18 ปี)" },
            { k: "สัญชาติ / ศาสนา", v: "ไทย / พุทธ" },
            { k: "แผนการเรียน", v: "วิทยาศาสตร์-คณิตศาสตร์ (TOP STAR)" },
            { k: "เป้าหมายในอนาคต", v: "AI Developer, AI Designer, Creative Technologist, AI Engineer" }
          ],
          hobbiesTitle: "ความสามารถและกิจกรรมยามว่าง (ครบทั้ง 9 ด้านจากหน้า 4)",
          hobbies: [
            { title: "1. Web App & Chrome Extension", desc: "พัฒนาเว็บแอปพลิเคชันและส่วนขยายเบราว์เซอร์" },
            { title: "2. Local AI (Ollama)", desc: "ใช้งานและปรับแต่งโมเดล AI ในเครื่องส่วนตัว" },
            { title: "3. Personal Cloud Server", desc: "จัดการระบบโฮมเซิร์ฟเวอร์ด้วย CasaOS" },
            { title: "4. ตัดต่อวิดีโอ (DaVinci Resolve)", desc: "ตัดต่อ ลำดับภาพ และเกรดสีวิดีโอ" },
            { title: "5. ถ่ายภาพ (Sony Mirrorless)", desc: "บันทึกภาพกิจกรรม จัดองค์ประกอบและคุมโทนสี" },
            { title: "6. ศึกษาวิศวกรรมยานยนต์", desc: "ค้นคว้ากลไกและเทคโนโลยีวิศวกรรมยานยนต์ด้วยตนเอง" },
            { title: "7. อ่านหนังสือพัฒนาตนเอง", desc: "ศึกษาแนวคิดใหม่ๆ เพื่อพัฒนาทักษะและการคิด" },
            { title: "8. ฟังเพลงคุณภาพสูง (Hi-Res Audio)", desc: "ฟังเพลงรายละเอียดสูงและศึกษาระบบเสียงดิจิทัล" },
            { title: "9. เล่นเกมออนไลน์และเกมเรโทร", desc: "สังเกตระบบกลไกเกมและประสบการณ์ผู้ใช้ (Game UX)" }
          ]
        },
        education: {
          eyebrow: "02 / ประวัติการศึกษา",
          title: "การศึกษาและผลการเรียน",
          subtitle: "ข้อมูลผลการเรียนจากใบแสดงผลการเรียน 5 ภาคเรียน โรงเรียนสระแก้ว (หน้า 5)",
          highBadge: "มัธยมศึกษาตอนปลาย (ม.4–ม.6) • ปีการศึกษา 2567–2569 (TCAS70)",
          highSchool: "โรงเรียนสระแก้ว — แผนการเรียนห้องเรียนพิเศษ TOP STAR",
          highDesc: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ มุ่งเน้นทักษะกระบวนการทางวิทยาศาสตร์ คณิตศาสตร์ประยุกต์ และนวัตกรรมเทคโนโลยี เกรดเฉลี่ยสะสม (5 ภาคเรียน): 3.58",
          jrBadge: "มัธยมศึกษาตอนต้น (ม.1–ม.3) • สำเร็จการศึกษา ปีการศึกษา 2566",
          jrSchool: "โรงเรียนสระแก้ว — แผนการเรียนห้องเรียนพิเศษ TOP STAR",
          jrDesc: "ปูพื้นฐานการคิดวิเคราะห์ทางวิทยาศาสตร์ คณิตศาสตร์ และการทำโครงงานร่วมกันเป็นทีม เกรดเฉลี่ยสะสม: 3.45",
          subjectsTitle: "ผลการเรียนเฉลี่ยตามกลุ่มสาระวิชา (ม.ปลาย 5 ภาคเรียน)",
          subjects: [
            { name: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี", gpa: "3.56", pct: 89, color: "bg-emerald", sub: "คอมพิวเตอร์ • ฟิสิกส์ • กระบวนการวิทยาศาสตร์" },
            { name: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ", gpa: "3.50", pct: 87.5, color: "bg-purple", sub: "การค้นคว้าสื่อสากล • การเขียนคำสั่ง Prompt ภาษาอังกฤษ" },
            { name: "กลุ่มสาระการเรียนรู้คณิตศาสตร์", gpa: "3.40", pct: 85, color: "bg-techblue", sub: "ลำดับและอนุกรมเรขาคณิต • สถิติ • การคิดเชิงตรรกะ" }
          ],
          noteText: "ข้อมูลอ้างอิงตรงจากแฟ้มสะสมผลงาน หน้า 5 (ฉบับวันที่ 29 ตุลาคม 2569) โดยสามารถตรวจสอบกับใบแสดงผลการเรียนฉบับจริงได้"
        },
        projectsSection: {
          eyebrow: "03 / ผลงานที่โดดเด่น (OUTSTANDING WORKS)",
          title: "ผลงานโครงงานและสื่อดิจิทัล",
          subtitle: "คลิกที่การ์ดผลงานแต่ละชิ้นเพื่อเปิดหน้าเจาะลึก (Dedicated Project Detail Page) พร้อมภาพหลักฐานและบทบาทที่รับผิดชอบจริง",
          roleLabel: "บทบาทและหน้าที่รับผิดชอบ:",
          readMoreBtn: "เปิดหน้าเจาะลึกผลงานนี้",
          trySimBtn: "ทดลองเล่น DCA Simulator สด"
        },
        skillsSection: {
          eyebrow: "04 / ทักษะและเครื่องมือ",
          title: "ทักษะทางเทคนิคและการสร้างสรรค์สื่อ",
          filterAll: "ทั้งหมด",
          filterApplied: "ใช้งานจริงในผลงาน",
          filterExploring: "กำลังศึกษาและทดลองเพิ่มเติม",
          honestyNote: "หมายเหตุความโปร่งใส: จัดหมวดหมู่ตามหลักฐานการใช้งานจริงในแฟ้มสะสมผลงาน โดยแยกชัดเจนระหว่างทักษะที่ใช้ทำโครงงานจริง กับทักษะที่กำลังศึกษาค้นคว้าด้วยตนเอง (ไม่ใช้แถบเปอร์เซ็นต์ที่ไม่มีเกณฑ์วัด)",
          categories: [
            {
              title: "การเขียนโปรแกรมและพัฒนาเว็บ",
              accent: "emerald",
              desc: "การสร้างหน้าเว็บจำลองการคำนวณ การจัดการโครงสร้าง และกราฟอินเทอร์แอคทีฟ",
              items: [
                { name: "HTML5 & CSS3", level: "applied", tag: "ใช้งานจริง (DCA Web)" },
                { name: "JavaScript (ES6+ Logic)", level: "applied", tag: "ตรรกะคำนวณจริง" },
                { name: "Chart.js", level: "applied", tag: "พล็อตกราฟ 3 เส้นเรียลไทม์" },
                { name: "Google Sites Deployment", level: "applied", tag: "เผยแพร่เว็บไซต์โครงงาน" },
                { name: "Chrome Extensions", level: "exploring", tag: "ทดลองพัฒนาด้วยตนเอง" }
              ]
            },
            {
              title: "ปัญญาประดิษฐ์ (AI Tools & Local AI)",
              accent: "purple",
              desc: "การออกแบบคำสั่ง Prompt เพื่อช่วยคิดสูตร เขียนโค้ด ตรวจสอบความถูกต้อง และรันโมเดลในเครื่อง",
              items: [
                { name: "Prompt Engineering", level: "applied", tag: "AI Playground & โครงงาน" },
                { name: "Google Gemini AI", level: "applied", tag: "ช่วยคิดสูตรและเขียนโค้ด" },
                { name: "Claude & ChatGPT", level: "applied", tag: "ช่วยตรวจสอบตรรกะโค้ด" },
                { name: "Ollama (Local AI)", level: "exploring", tag: "รันและปรับแต่งในเครื่อง" }
              ]
            },
            {
              title: "การออกแบบและผลิตสื่อดิจิทัล",
              accent: "techblue",
              desc: "การออกแบบหน้าตาผู้ใช้งาน การตัดต่อวิดีโอ การเกรดสี และการบริหารสื่อสังคมออนไลน์",
              items: [
                { name: "DaVinci Resolve", level: "applied", tag: "ตัดต่อและ Color Grading" },
                { name: "UI/UX & Web Layout", level: "applied", tag: "ออกแบบหน้าเว็บให้ใช้ง่าย" },
                { name: "Meta Business Suite", level: "applied", tag: "แอดมินเพจ Sk-Top STAR" },
                { name: "Visual Storytelling", level: "applied", tag: "ค่ายสร้างหนัง & สื่อรณรงค์" }
              ]
            },
            {
              title: "การถ่ายภาพ ระบบเซิร์ฟเวอร์ และการตรวจสอบข้อมูล",
              accent: "emerald",
              desc: "การควบคุมกล้อง Mirrorless การเทียบความแม่นยำด้วย Excel และการดูแลโฮมเซิร์ฟเวอร์",
              items: [
                { name: "กล้อง Mirrorless (Sony)", level: "applied", tag: "ช่างภาพหลักงานโรงเรียน" },
                { name: "Framing & Color Grading", level: "applied", tag: "จัดองค์ประกอบและคุมโทนภาพ" },
                { name: "Microsoft Excel Verification", level: "applied", tag: "เทียบผลคำนวณทีละช่อง" },
                { name: "Personal Cloud (CasaOS)", level: "exploring", tag: "จัดการเซิร์ฟเวอร์ส่วนตัว" }
              ]
            }
          ]
        },
        activitiesSection: {
          eyebrow: "05 / กิจกรรมและประสบการณ์ปฏิบัติจริง",
          title: "การทำกิจกรรมและการทำงานร่วมกับผู้อื่น",
          subtitle: "ประสบการณ์จากการดูแลเพจประชาสัมพันธ์ ช่างภาพกิจกรรม ค่ายวิชาการ และงานจิตอาสา",
          items: [
            {
              date: "15 ก.ย. 2569",
              title: "พัฒนาและนำเสนอเว็บไซต์จำลองการวางแผนการเงิน DCA ด้วยอนุกรมเรขาคณิต",
              role: "สมาชิกกลุ่ม 3 คน (ออกแบบ UI, ใช้ AI สร้างอัลกอริทึม, ทดสอบความแม่นยำและเก็บสถิติ)",
              desc: "ร่วมกับเพื่อนพัฒนาเว็บไซต์จำลองการออมและลงทุนแบบเรียลไทม์ ทดสอบความแม่นยำเทียบกับ MS Excel และนำไปให้เพื่อนทดลองใช้งานจริง ได้คะแนนความพึงพอใจเฉลี่ย 4.60/5.00",
              projectSlug: "dca-simulator"
            },
            {
              date: "พ.ค. 2567 – พ.ค. 2569",
              title: "Sk-Top STAR — Social Media Administrator & Content Creator",
              role: "ผู้ดูแลเพจ Facebook และผู้ผลิตคอนเทนต์ประชาสัมพันธ์",
              desc: "บริหารจัดการเพจ Facebook ประชาสัมพันธ์โครงการห้องเรียนพิเศษ TOP STAR ด้วย Meta Business Suite ควบคู่กับการสร้างสรรค์ภาพถ่าย กราฟิก และวิดีโอ",
              projectSlug: "sk-top-star"
            },
            {
              date: "พ.ค. 2567 – พ.ค. 2569",
              title: "ช่างภาพหลักในการบันทึกภาพและคุมโทนภาพกิจกรรม ค่ายวิชาการ และงานพิธีการ",
              role: "ช่างภาพหลักและผู้ปรับแต่งโทนสีภาพ",
              desc: "ควบคุมกล้อง Mirrorless (Sony) จัดองค์ประกอบภาพ (Framing) และแต่งโทนสีภาพ (Color Grading) สำหรับสื่อประชาสัมพันธ์ดิจิทัลของโรงเรียน",
              projectSlug: "photography-media"
            },
            {
              date: "28 พ.ค. 2569 (เกียรติบัตร 18 มิ.ย. 2568)",
              title: "เข้าร่วมกิจกรรม Organ Donation Media Contest (สภากาชาดไทย)",
              role: "ตัดต่อวิดีโอ เรียบเรียงลำดับภาพ คุมโทนสีและเสียง",
              desc: "ผลิตสื่อวิดีโอรณรงค์ส่งเสริมการบริจาคอวัยวะเพื่อสร้างการตระหนักรู้และปรับเปลี่ยนมุมมองในสังคมด้วยทักษะ Visual Storytelling",
              projectSlug: "organ-donation-media"
            }
          ]
        },
        certificatesSection: {
          eyebrow: "06 / เกียรติบัตรและรางวัล (CERTIFICATES)",
          title: "คลังเกียรติบัตรและหลักฐานการเข้าร่วมกิจกรรม",
          subtitle: "เกียรติบัตรฉบับจริงพร้อมภาพถ่ายขณะเข้าร่วมกิจกรรม (คลิกเพื่อดูภาพขยายและสลับดูภาพกิจกรรม)",
          certBadge: "เกียรติบัตร",
          actBadge: "ภาพกิจกรรม",
          filters: [
            { id: "all", label: "ทั้งหมด (5)" },
            { id: "ai", label: "AI & เทคโนโลยี" },
            { id: "media", label: "ภาพยนตร์ & สื่อดิจิทัล" },
            { id: "science", label: "วิทยาศาสตร์ & นวัตกรรม" },
            { id: "volunteer", label: "จิตอาสา & สังคม" }
          ],
          viewCertBtn: "ดูเกียรติบัตรขนาดใหญ่",
          viewPhotoBtn: "ดูภาพกิจกรรม",
          items: [
            {
              id: "cert-ai-playground",
              category: "ai",
              title: "ค่าย AI Playground — สนุกกับโลกเอไอง่าย ๆ แค่ปลายนิ้ว",
              issuer: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยมหิดล",
              date: "18 ธันวาคม 2568 (6 ชั่วโมง)",
              desc: "ผ่านการอบรมเชิงปฏิบัติการด้าน AI และเทคโนโลยีดิจิทัล ณ คณะ ICT มหาวิทยาลัยมหิดล พัฒนาทักษะ AI Literacy การออกแบบคำสั่ง (Prompt Engineering) และการนำเครื่องมือ AI มาประยุกต์ใช้สร้างนวัตกรรม",
              certImg: ASSETS.certMahidol,
              actImg: ASSETS.actMahidol,
              skills: ["AI Literacy", "Prompt Engineering", "Applied AI Innovation"]
            },
            {
              id: "cert-film-camp",
              category: "media",
              title: "ค่ายคบเด็กสร้างหนัง ปีที่ 9",
              issuer: "โรงเรียนสระแก้ว (ประจำปีการศึกษา 2568)",
              date: "10 สิงหาคม 2568",
              desc: "ผ่านการอบรมเชิงปฏิบัติการผลิตภาพยนตร์และสื่อวิดีโอสั้นแบบครบวงจร (Production Pipeline) ฝึกฝนทักษะการถ่ายทำ การลำดับภาพและตัดต่อวิดีโอ (Video Editing) การปรับแต่งสี (Color Grading) และการเล่าเรื่องด้วยภาพ",
              certImg: ASSETS.certFilm,
              actImg: ASSETS.actFilm,
              skills: ["Production Pipeline", "Video Editing", "Color Grading", "Visual Storytelling"]
            },
            {
              id: "cert-lab-to-launch",
              category: "science",
              title: "ค่าย Lab-to-Launch: ติดปีกไอเดียด้วยกระบวนการวิทยาศาสตร์",
              issuer: "ห้องเรียนพิเศษ TOP STAR โรงเรียนสระแก้ว (ร่วมกับวิทยากรโรงเรียนกำเนิดวิทย์)",
              date: "18 กุมภาพันธ์ 2569",
              desc: "เข้าร่วมค่ายส่งเสริมศักยภาพผู้เรียนประยุกต์กระบวนการทางวิทยาศาสตร์เพื่อเปลี่ยนทฤษฎีสู่การสร้างสรรค์นวัตกรรมจริง ฝึกการแก้ไขปัญหาเชิงวิทยาศาสตร์ (Scientific Problem Solving) การคิดเชิงออกแบบ (Design Thinking) และการนำเสนอผลงาน (Pitching)",
              certImg: ASSETS.certLab,
              actImg: ASSETS.actLab,
              skills: ["Scientific Problem Solving", "Design Thinking", "Pitching"]
            },
            {
              id: "cert-organ-contest",
              category: "media",
              title: "โครงการประกวดสื่อ Organ Donation Media Contest",
              issuer: "สำนักงานยุวกาชาดและอาสาสมัครกาชาด สภากาชาดไทย (GoLSE / Organ ToGo)",
              date: "18 มิถุนายน 2568 (เลขที่ 01/2568 • บันทึกแฟ้มฯ 28 พ.ค. 2569)",
              desc: "เข้าร่วมโครงการประกวดสื่อและภารกิจสื่อสาร แลกเปลี่ยนความคิดเห็นและมุมมองเพื่อส่งเสริมการบริจาคอวัยวะ โดยผลิตสื่อวิดีโอรณรงค์และถ่ายทอดเรื่องราวด้วยภาพและเสียง",
              certImg: ASSETS.certOrgan,
              actImg: ASSETS.actOrgan,
              skills: ["Video Editing", "Color Pacing", "Public Awareness Media"]
            },
            {
              id: "cert-sea-turtle",
              category: "volunteer",
              title: "โครงการจิตอาสา “Say Hi น้องเต่า เขาทิ้งเราเก็บ ช่วย SAVE สัตว์ทะเล รุ่น 53”",
              issuer: "กลุ่มมนตร์อาสา (ณ ชายหาดสัตหีบ จ.ชลบุรี)",
              date: "30 พฤษภาคม 2569 (8 ชั่วโมง)",
              desc: "เข้าร่วมเป็นจิตอาสาเพื่อปลูกจิตสำนึกและอนุรักษ์สิ่งมีชีวิตใต้ท้องทะเล ผ่านกิจกรรมเรียนรู้เกี่ยวกับการทำความสะอาดชายหาด ณ ชายหาดสัตหีบ จ.ชลบุรี เป็นเวลา 8 ชั่วโมง ส่งเสริมการทำงานร่วมกันเป็นทีมและความรับผิดชอบต่อสังคม",
              certImg: ASSETS.certTurtle,
              actImg: ASSETS.actTurtle1,
              extraImg: ASSETS.actTurtle2,
              skills: ["Teamwork", "Marine Conservation", "Social Responsibility"]
            }
          ]
        },
        statementSection: {
          eyebrow: "07 / คำนำและเรียงความ (PREFACE & PERSONAL STATEMENT)",
          title: "ทำไมจึงมุ่งมั่นศึกษาต่อสาขา AI for Digital Experience ณ คณะ ICT ม.ศิลปากร",
          subtitle: "สรุปแก่นความคิดจากคำนำ (หน้า 3) และเรียงความเป้าหมายในอนาคต (หน้า 12) พร้อมปุ่มเปิดอ่านข้อความต้นฉบับทุกตัวอักษร",
          prefaceBtn: "อ่านคำนำต้นฉบับ (หน้า 3)",
          toggleBtn: "อ่านเรียงความต้นฉบับ (หน้า 12)",
          prefaceHeader: "คำนำต้นฉบับจากแฟ้มสะสมผลงาน (หน้า 3 • 29 ตุลาคม 2569)",
          verbatimHeader: "ข้อความเรียงความต้นฉบับจากแฟ้มสะสมผลงาน (หน้า 12)",
          pillarPrefix: "ประเด็นหลักที่",
          pillars: [
            {
              num: "01",
              title: "แรงจูงใจในการศึกษาด้านปัญญาประดิษฐ์ (Motivation)",
              body: "ผมมองถึงอนาคตของการทำงานและเห็นว่ารอบตัวมีการใช้งาน AI มากขึ้นในทุกมิติ จึงต้องการศึกษาในคณะที่จะช่วยเพิ่มขีดความสามารถในการใช้ AI ได้อย่างลื่นไหล ลดข้อผิดพลาด และเข้าใจกลไกการทำงานอย่างแท้จริง"
            },
            {
              num: "02",
              title: "มุมมองต่อความสัมพันธ์ระหว่างมนุษย์กับ AI (Human-AI Relationship)",
              body: "เป้าหมายสำคัญคือ “ให้เราใช้และควบคุม AI ไม่ใช่ให้ AI มาควบคุมแนวทางในการทำงาน” เพราะปัจจุบันหลายคนใช้ AI แบบสำเร็จรูปจนงานดูซ้ำซากและขาดความประณีต ผมจึงอยากเป็นผู้ที่เข้าใจและควบคุม AI ได้อย่างมีคุณภาพ"
            },
            {
              num: "03",
              title: "การผสาน AI, Data และ UX/UI เพื่อผู้ใช้ทั่วไป (UX/UI & Accessibility)",
              body: "แนวทางของผมคือการปรับปรุงการประมวลผลของ AI ให้เข้าใจความต้องการที่ลึกซึ้งของผู้ใช้ ควบคู่กับการออกแบบหน้าต่างผู้ใช้งาน (UX/UI) ให้ง่าย น่าสนใจ และลดกำแพงการใช้งานสำหรับคนทั่วไป"
            },
            {
              num: "04",
              title: "ทิศทางในอนาคตกับการสร้างคุณค่าให้สังคม (Future Direction)",
              body: "ผมคาดหวังว่าจะนำความรู้ด้าน AI, Data และ UX/UI จากคณะ ICT มหาวิทยาลัยศิลปากร ไปต่อยอดสร้างสรรค์นวัตกรรมดิจิทัลที่แก้ปัญหาได้จริง และก้าวสู่การเป็น AI Developer / AI Designer / Creative Technologist / AI Engineer"
            }
          ],
          prefaceParagraphs: [
            "แฟ้มสะสมผลงาน (Portfolio) ฉบับนี้ จัดทำขึ้นเพื่อรวบรวมและนำเสนอประวัติส่วนตัว ประวัติการศึกษา ความรู้ความสามารถ ทักษะ ประสบการณ์ ตลอดจนกิจกรรมและผลงานที่สะท้อนถึงความสนใจและความมุ่งมั่นในการเรียนรู้และพัฒนาตนเอง โดยมีวัตถุประสงค์เพื่อใช้ประกอบการพิจารณาคัดเลือกเข้าศึกษาต่อในคณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล มหาวิทยาลัยศิลปากร",
            "ข้าพเจ้ามีความสนใจในด้านเทคโนโลยีสารสนเทศและปัญญาประดิษฐ์ ซึ่งเป็นเทคโนโลยีที่มีบทบาทสำคัญต่อการเปลี่ยนแปลงของโลกในปัจจุบัน ข้าพเจ้ามีความตั้งใจที่จะเรียนรู้และทำความเข้าใจเกี่ยวกับการทำงานของเทคโนโลยีปัญญาประดิษฐ์ รวมถึงการนำมาประยุกต์ใช้ในการพัฒนานวัตกรรมและสร้างสรรค์ประสบการณ์ดิจิทัลรูปแบบใหม่เพื่อให้เกิดประโยชน์ต่อการดำเนินชีวิตและตอบสนองความต้องการของสังคม",
            "ข้าพเจ้าเชื่อว่าการศึกษาในสาขาวิชานี้จะเป็นโอกาสสำคัญในการพัฒนาความรู้ ความสามารถ ทักษะการคิดวิเคราะห์ การแก้ไขปัญหาอย่างเป็นระบบ และความคิดสร้างสรรค์ ตลอดจนเปิดโอกาสให้ข้าพเจ้าได้เรียนรู้เทคโนโลยีใหม่ ๆ และนำองค์ความรู้ไปต่อยอดสู่การสร้างสรรค์ผลงานและนวัตกรรมที่เป็นประโยชน์ในอนาคต",
            "ข้าพเจ้าหวังเป็นอย่างยิ่งว่าแฟ้มสะสมผลงานฉบับนี้จะสามารถสะท้อนให้เห็นถึงความตั้งใจ ความสนใจ ความมุ่งมั่น และศักยภาพของข้าพเจ้า ตลอดจนเป็นส่วนหนึ่งในการแสดงความพร้อมสำหรับการเข้าศึกษาต่อในมหาวิทยาลัยศิลปากร สุดท้ายนี้ ขอขอบพระคุณคณะกรรมการทุกท่านที่กรุณาสละเวลาในการพิจารณาแฟ้มสะสมผลงานฉบับนี้ — นายพรหมพิริยะ เพชรยังพูล ผู้จัดทำ (29 ตุลาคม 2569)"
          ],
          verbatimParagraphs: [
            "ตัวผมเองได้มองถึงอนาคตของตนเองและการงานในอนาคต ผมอยากให้ความสำคัญกับการใช้ AI ในการต่อยอดหรือทำงานในอนาคต เพราะมองถึงปัจจุบัน ที่รอบตัวมีการใช้งาน AI มากขึ้นไม่ว่าจะทางที่ดีหรือไม่ดี ตัวผมเลยมองหาคณะที่จะสามารถเพิ่มความสามารถของผมได้ ทำให้ใช้ AI ได้ลื่นไหลมากขึ้น ควบคุมให้มีข้อผิดพลาดน้อยลง ให้เราใช้ AI ไม่ใช่ให้ AI มาควบคุมแนวทางในการทำงาน เพื่อสร้างคนที่ใช้และคุม AI จริงๆ หรือไม่ก็ ทำให้การใช้งาน AI ของคนทั่วไปใช้งานได้ง่ายขึ้น",
            "ผมสนใจสภาพสังคมและการทำงานในระบบต่างๆ ณ ปัจจุบัน เพราะรอบข้างไม่ว่าจะตัวเอง ครู เพื่อน และธุรกิจหลายๆที่ มีการใช้ AI จำนวนมาก แต่ส่วนใหญ่ใช้แบบทั่วไป พอใช้ได้บ้าง มีคำผิดเยอะ ดูออกง่าย ทำแทนคนจริงไม่ได้ AI บางประเภทในทุกวันนี้คนบางคนยังไม่ค่อยรู้ว่าเป็นปัญญาประดิษฐ์ ทำให้การทำงานในหลายรูปแบบไม่ค่อยลื่นไหล หรือดูซ้ำซาก และ จำเจ ทำให้คนที่ใช้งาน AI เก่งจริง มีอยู่ไม่กี่กลุ่ม ทำให้คุณภาพงานที่ออกมาตลอดช่วงเวลา สองถึงสามปีมานี้ มีคุณภาพที่ต่ำลงและคนมักง่ายมากขึ้น แต่ก็ทำให้มีคนกล้าแสดงออกและใช้ AI เป็นสื่อ ถ่ายทอดความสามารถ และความรู้",
            "แนวทางของผมคงเป็นการที่ทำให้ AI ฉลาดและเข้าถึงคนได้ง่ายขึ้น จากการควบคุมหรือปรับแก้ ในส่วนของการประมวลผล ให้อ่านและเข้าถึงความสนใจ ความต้องการ ที่ลึกซึ้ง ปรับรูปแบบการทำงานให้น่าสนใจมากขึ้น เข้าถึงง่ายมากขึ้น ในการปรับปรุง UX/UI หน้าต่างผู้ใช้งานให้ง่ายและน่าสนใจ และยังคงความเข้าใจในผู้ใช้ เพื่อพัฒนาประสิทธิภาพโดยรวมของทั้งคนและ AI",
            "ผมสนใจที่จะพัฒนาความสามารถตนเอง ในด้านของการเรียนรู้ และการใช้ปัญญาประดิษฐ์ ผมมุ่งมั่นที่จะพัฒนาตัวเองและควบคุม AI ไปพร้อมๆกัน ผมพร้อมที่จะออกแบบอะไรใหม่ๆ หรือปรับใช้กับสิ่งที่มีอยู่หรือเป็นอยู่เพื่อความง่ายในการพัฒนาตัวเองและผู้อื่น เพื่อให้ทำงานและตามทันสังคมในอนาคตได้",
            "ผมคาดหวังว่าจะสามารถนำความรู้และทักษะด้าน AI, Data และ UX/UI ไปต่อยอดในการพัฒนาเทคโนโลยีและสร้างสรรค์นวัตกรรมที่เป็นประโยชน์ต่อสังคม พร้อมทั้งพัฒนาศักยภาพของตนเองอย่างต่อเนื่อง เพื่อก้าวสู่การเป็นผู้พัฒนาเทคโนโลยีที่สามารถนำความรู้มาประยุกต์ใช้แก้ไขปัญหาและสร้างคุณค่าให้กับผู้อื่นในอนาคต"
          ]
        },
        simulator: {
          badge: "ระบบจำลองการคำนวณสด • อนุกรมเรขาคณิต & ทดสอบวิกฤติตลาด",
          heading: "GeoWealth — ระบบจำลองการออมและลงทุน DCA & Goal Seeker",
          subheading: "ทดลองปรับตัวแปรเพื่อเปรียบเทียบเส้นกราฟ 3 รูปแบบตามโครงงานจริง: (1) การเก็บเงินต้นแบบธรรมดา (2) การออมแบบเรขาคณิต และ (3) การลงทุนในหุ้นแบบ DCA พร้อมระบบ Stress Test และ Goal Seeker",
          resetBtn: "รีเซ็ตค่าเริ่มต้น",
          lblMonthly: "เงินออม/ลงทุนต่อเดือน (PMT)",
          lblRate: "ผลตอบแทนคาดการณ์ต่อปี (%)",
          lblYears: "ระยะเวลาการลงทุน (ปี)",
          lblStep: "อัตราเพิ่มเงินออมแบบเรขาคณิต (%/ปี)",
          lblShock: "Stress Test: จำลองตลาดติดลบกลางทาง",
          lblGoal: "Goal Seeker: เป้าหมายเงินรวม (฿)",
          reqPmtLbl: "ต้องลงทุน DCA เดือนละ:",
          curve1: "1. การเก็บเงินต้นแบบธรรมดา",
          curve1Sub: "ไม่คิดผลตอบแทนทบต้น (0%)",
          curve2: "2. การออมแบบเรขาคณิต",
          curve2Sub: "เพิ่มเงินออมตามลำดับเรขาคณิต",
          curve3: "3. การลงทุนในหุ้นแบบ DCA",
          formulaNote: "สูตรอนุกรมเรขาคณิต: FV = PMT × [((1 + r)^n - 1) / r] × (1 + r)",
          verifyNote: "✓ แม่นยำ 100% เมื่อเทียบกับตาราง Microsoft Excel FV()"
        },
        contact: {
          eyebrow: "08 / ช่องทางติดต่อ (CONTACT)",
          title: "ติดต่อและสอบถามข้อมูลเพิ่มเติม",
          desc: "คณะกรรมการพิจารณาแฟ้มสะสมผลงานสามารถติดต่อผ่านทางอีเมลหลัก หรือใช้เครื่องมือร่างข้อความด้านขวาเพื่อขอข้อมูลโครงงาน โค้ดต้นฉบับ หรือเอกสารรับรองผลการเรียนเพิ่มเติมได้ทันที",
          emailLbl: "อีเมลหลักสำหรับติดต่อเรื่อง Portfolio",
          copyBtn: "คัดลอกอีเมล",
          channels: [
            { label: "Facebook", val: "พรหมพิริยะ เพชรยังพูล", url: "https://www.facebook.com/phrhm.phiriya.phechr.yang.phul/", status: "verified" },
            { label: "LINE ID", val: "0632402734", status: "verified" }
          ],
          privacyNote: "นโยบายความเป็นส่วนตัว (Privacy & Accuracy): เว็บไซต์สาธารณะนี้ไม่แสดงที่อยู่บ้านและหมายเลขโทรศัพท์ส่วนตัวโดยค่าเริ่มต้น ตามแนวทางความปลอดภัยของผู้สมัคร",
          composerTitle: "เครื่องมือร่างข้อความติดต่อสำหรับคณะกรรมการ",
          composerSubtitle: "เลือกหัวข้อที่ต้องการสอบถาม ระบบจะเตรียมข้อความพร้อมส่งไปยัง brkg344@gmail.com",
          lblTopic: "หัวข้อที่ต้องการติดต่อ",
          optInterview: "สอบถามข้อมูลการสมัคร / การสัมภาษณ์ (Silpakorn ICT)",
          optCode: "ขอดูโค้ดต้นฉบับ / ลิงก์โครงงาน DCA Simulator",
          optDocs: "ขอเอกสารใบแสดงผลการเรียน / เกียรติบัตรฉบับจริง",
          lblSender: "ชื่อผู้ติดต่อ / คณะกรรมการ (ไม่บังคับ)",
          senderPlaceholder: "เช่น คณะกรรมการพิจารณาแฟ้มสะสมผลงาน คณะ ICT",
          lblMsg: "ข้อความที่จะส่ง",
          btnMailto: "เปิดแอปอีเมลเพื่อส่ง",
          btnCopyMsg: "คัดลอกข้อความ"
        },
        footer: {
          name: "นายพรหมพิริยะ เพชรยังพูล (บูม)",
          target: "แฟ้มสะสมผลงานเพื่อยื่นสมัคร คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศิลปากร",
          home: "หน้าแรก",
          dca: "ทดลอง DCA Simulator",
          audit: "ตรวจสอบข้อมูล & รายการรอยืนยัน",
          top: "ขึ้นด้านบน"
        },
        auditModal: {
          title: "รายงานตรวจสอบความถูกต้องของข้อมูลและรายการที่ยืนยันแล้ว (Data Audit & Verification)",
          sections: [
            {
              heading: "1. ข้อมูลที่ยืนยันแล้วจาก Portfolio PDF (12 หน้า) และภาพเกียรติบัตรฉบับจริง",
              items: [
                "ชื่อ-สกุล: นายพรหมพิริยะ เพชรยังพูล (Mr. Prompiriya Phetyangphul) ชื่อเล่น: บูม (Boom) เกิดวันที่ 19 พฤศจิกายน 2551 (อายุ 17–18 ปี) • ยื่นสมัครรอบ TCAS70",
                "เป้าหมายการศึกษาต่อ: สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศิลปากร",
                "การศึกษา: โรงเรียนสระแก้ว แผนการเรียนห้องเรียนพิเศษ TOP STAR (ม.ต้น GPA 3.45 จบปีการศึกษา 2566 / ม.ปลาย 5 ภาคเรียน GPA 3.58 ปีการศึกษา 2567–2569)",
                "เกรดเฉลี่ยรายกลุ่มสาระ (5 ภาคเรียน): คณิตศาสตร์ 3.40, วิทยาศาสตร์และเทคโนโลยี 3.56, ภาษาต่างประเทศ 3.50",
                "ตรวจสอบรายละเอียดเกียรติบัตรทั้ง 5 ใบตรงตามภาพจริง: AI Playground ม.มหิดล (18 ธ.ค. 2568 • 6 ชม.), ค่ายคบเด็กสร้างหนัง ปีที่ 9 (10 ส.ค. 2568), ค่าย Lab-to-Launch (18 ก.พ. 2569), Organ Donation Media Contest สภากาชาดไทย (เลขที่ 01/2568 • 18 มิ.ย. 2568), และจิตอาสาช่วย SAVE สัตว์ทะเล รุ่น 53 กลุ่มมนตร์อาสา (30 พ.ค. 2569 • 8 ชม.)"
              ]
            },
            {
              heading: "2. รายการช่องทางติดต่อและหลักฐานที่ยืนยันความโปร่งใส (Verified Channels & Transparency)",
              items: [
                "ลิงก์ Facebook URL: ยืนยันแล้ว https://www.facebook.com/phrhm.phiriya.phechr.yang.phul/ (เปิดลิงก์ไปยังโปรไฟล์จริงของผู้สมัครได้ทันที)",
                "ช่องทาง LINE ID: ยืนยันแล้ว LINE ID: 0632402734 และอีเมลหลัก brkg344@gmail.com เพื่อให้คณะกรรมการสามารถติดต่อสอบถามได้อย่างสะดวก",
                "ลิงก์ปลายทางของ QR Code จาก PDF: ถอดรหัส QR Code จาก PDF ได้เป็นลิงก์ Canva QR (เช่น canvaqr.com/RGWtfqOk9O สำหรับตัวเว็บ DCA และ canvaqr.com/RGWzMJVIPF สำหรับตัวเล่มโครงงาน) พร้อมระบบจำลอง Live DCA Simulator ที่ใช้งานได้จริงบนหน้าเว็บนี้",
                "การแบ่งหน้าที่รายบุคคลในงานกลุ่ม DCA Simulator: เอกสารหน้า 11 ระบุว่าเป็นงานกลุ่ม 3 คนที่ร่วมกันดำเนินการทุกส่วน เว็บไซต์จึงระบุชัดเจนว่าเป็นงานกลุ่ม 3 คน และแยกส่วนที่ผู้สมัครมีส่วนร่วมหลักไว้โดยไม่แอบอ้างว่าทำคนเดียวทั้งหมด"
              ]
            }
          ]
        }
      },
      en: {
        nav: {
          name: "Prompiriya Phetyangphul",
          nick: "Boom",
          subtitle: "Silpakorn University ICT • AI for Digital Experience",
          caseStudies: "Case Studies (4)",
          dropdownHeader: "Dedicated Project Pages",
          auditBtn: "Data Audit",
          backHome: "Back to Portfolio Overview",
          tabs: [
            { id: "hero", label: "Home", icon: "home" },
            { id: "about", label: "About", icon: "user" },
            { id: "education", label: "Education", icon: "grad" },
            { id: "projects", label: "Projects", icon: "folder" },
            { id: "skills", label: "Skills", icon: "cpu" },
            { id: "activities", label: "Activities", icon: "activity" },
            { id: "certificates", label: "Certificates", icon: "award" },
            { id: "statement", label: "Statement", icon: "doc" },
            { id: "contact", label: "Contact", icon: "mail" }
          ]
        },
        hero: {
          badgeTarget: "Silpakorn University • Faculty of ICT",
          badgeMajor: "Artificial Intelligence for Digital Experience Technology",
          greeting: "UNIVERSITY ADMISSION PORTFOLIO • TCAS70",
          namePrimary: "Prompiriya ",
          nameLast: "Phetyangphul",
          nameSub: "นายพรหมพิริยะ เพชรยังพูล (Boom / บูม)",
          schoolTag: "Sa Kaeo School • TOP STAR Special Program",
          interestsLabel: "Aspiring Focus & Areas of Practical Exploration",
          roles: [
            "Aspiring AI Developer",
            "Aspiring AI Engineer",
            "Aspiring AI Designer",
            "Creative Technologist",
            "Web Developer",
            "UI/UX & Digital Experience",
            "Data & AI Applications",
            "Digital Media Production"
          ],
          intro: "An upper-secondary Science-Mathematics student in the TOP STAR special program at Sa Kaeo School. Driven by curiosity about how Artificial Intelligence works and how it can power future careers, I combine web development, mathematical modeling, UX/UI design, and digital media storytelling to build tools that are intuitive and genuinely helpful.",
          ctaPrimary: "Explore Featured Projects (4)",
          ctaSecondary: "Try Live DCA Simulator",
          authenticBadge: "100% Grounded in Official Portfolio PDF Evidence",
          portraitTop: "Grade 12 (Academic Year 2569) • TCAS70 Applicant",
          portraitRole: "TCAS70 University Applicant",
          portraitName: "Mr. Prompiriya Phetyangphul (Boom)",
          metricGpax: "GPAX (5 Sem)",
          metricSci: "Sci & Tech",
          metricLang: "Foreign Lang",
          metricMath: "Mathematics"
        },
        about: {
          eyebrow: "01 / IDENTITY & PERSPECTIVE",
          title: "About Me & Perspective on AI",
          subtitle: "Connecting systematic analytical thinking, web application prototyping, and visual media storytelling.",
          storyTag: "Motivated Student • Hands-On Builder • Digital Media Creator",
          storyHeading: "Using and guiding AI intentionally—rather than letting AI dictate our workflow",
          p1: "I am deeply interested in Information Technology and Artificial Intelligence—and how AI skills can be applied practically in future careers. Alongside my studies in the TOP STAR program at Sa Kaeo School, I actively explore technology hands-on: building web applications and Chrome Extensions, running and tuning Local AI models (Ollama), and managing a Personal Cloud Server (CasaOS).",
          p2: "At the same time, my practical experience in video editing and color grading with DaVinci Resolve, event photography with Sony Mirrorless cameras, and managing the Sk-Top STAR Facebook page taught me that powerful technology must be paired with clear UX/UI and human empathy.",
          quote: "“My direction is to make AI smarter and easier for people to access—by refining how it processes deeper user needs and improving the UX/UI interface so humans and AI can work together effectively.”",
          quoteCaption: "— Excerpt from Personal Statement of Mr. Prompiriya Phetyangphul, Portfolio Page 12",
          factsTitle: "Verified Candidate Profile (Page 4)",
          facts: [
            { k: "Full Name", v: "Mr. Prompiriya Phetyangphul" },
            { k: "Nickname", v: "Boom (บูม)" },
            { k: "Birthdate / Age", v: "November 19, 2551 BE / 2008 (Age 17–18)" },
            { k: "Nationality / Religion", v: "Thai / Buddhism" },
            { k: "Academic Track", v: "Science-Mathematics (TOP STAR)" },
            { k: "Future Career Goals", v: "AI Developer, AI Designer, Creative Technologist, AI Engineer" }
          ],
          hobbiesTitle: "Capabilities & Self-Directed Explorations (All 9 Areas from Page 4)",
          hobbies: [
            { title: "1. Web Apps & Chrome Extensions", desc: "Building interactive web utilities and browser tools" },
            { title: "2. Local AI (Ollama)", desc: "Running and customizing local LLM inference" },
            { title: "3. Personal Cloud Server", desc: "Operating a home server environment via CasaOS" },
            { title: "4. Video Editing (DaVinci Resolve)", desc: "Non-linear editing, pacing, and color grading" },
            { title: "5. Photography (Sony Mirrorless)", desc: "Event documentation, framing, and color tone" },
            { title: "6. Automotive Engineering", desc: "Self-studying automotive mechanics and systems" },
            { title: "7. Self-Improvement Reading", desc: "Reading books on personal growth and technology" },
            { title: "8. High-Resolution Audio", desc: "Appreciating Hi-Res music and digital audio systems" },
            { title: "9. Online & Retro Gaming", desc: "Exploring interactive game mechanics and player UX" }
          ]
        },
        education: {
          eyebrow: "02 / ACADEMIC BACKGROUND",
          title: "Education & Academic Record",
          subtitle: "Verified 5-semester academic transcript metrics from Sa Kaeo School (Portfolio Page 5).",
          highBadge: "Upper Secondary (Grade 10–12) • Academic Year 2567–2569 (TCAS70)",
          highSchool: "Sa Kaeo School — TOP STAR Special Classroom Program",
          highDesc: "Science-Mathematics stream emphasizing scientific inquiry, applied mathematics, and technological innovation. Cumulative GPA (5 Semesters): 3.58",
          jrBadge: "Lower Secondary (Grade 7–9) • Graduated Academic Year 2566",
          jrSchool: "Sa Kaeo School — TOP STAR Special Classroom Program",
          jrDesc: "Built strong foundations in STEM problem-solving, collaborative lab work, and digital literacy. Cumulative GPA: 3.45",
          subjectsTitle: "5-Semester Core Subject Group GPAs (Upper Secondary)",
          subjects: [
            { name: "Science & Technology Subject Group", gpa: "3.56", pct: 89, color: "bg-emerald", sub: "Computing Science • Scientific Method • Innovation" },
            { name: "Foreign Languages Subject Group", gpa: "3.50", pct: 87.5, color: "bg-purple", sub: "English Technical Reading • AI Prompt Formulation" },
            { name: "Mathematics Subject Group", gpa: "3.40", pct: 85, color: "bg-techblue", sub: "Geometric Series • Statistics • Logical Modeling" }
          ],
          noteText: "All GPA figures are taken directly from Page 5 of the uploaded Portfolio PDF (dated October 29, 2569 BE)."
        },
        projectsSection: {
          eyebrow: "03 / OUTSTANDING WORKS & CASE STUDIES",
          title: "Featured Projects & Contributions",
          subtitle: "Click any project card to open its dedicated 13-part Case Study page with authentic photos, role transparency, and technical details.",
          roleLabel: "Role & Accountability:",
          readMoreBtn: "Open Dedicated Case Study",
          trySimBtn: "Launch Live DCA Simulator"
        },
        skillsSection: {
          eyebrow: "04 / SKILLS & TECHNOLOGIES",
          title: "Technical & Creative Capabilities",
          filterAll: "All Capabilities",
          filterApplied: "Applied in Projects",
          filterExploring: "Exploring & Self-Study",
          honestyNote: "Honesty & Transparency Note: Skills are grouped strictly by evidence in the portfolio—distinguishing tools directly applied in completed projects from technologies currently explored through self-study (no arbitrary percentage bars).",
          categories: [
            {
              title: "Programming & Web Development",
              accent: "emerald",
              desc: "Building web-based mathematical calculators, responsive layouts, and real-time charts.",
              items: [
                { name: "HTML5 & CSS3", level: "applied", tag: "Applied (DCA Simulator)" },
                { name: "JavaScript (ES6+ Logic)", level: "applied", tag: "Calculation Engine" },
                { name: "Chart.js", level: "applied", tag: "Real-Time 3-Line Plots" },
                { name: "Google Sites Deployment", level: "applied", tag: "Web Publishing" },
                { name: "Chrome Extensions", level: "exploring", tag: "Self-Directed Exploration" }
              ]
            },
            {
              title: "AI Tools & Applications",
              accent: "purple",
              desc: "Structured prompt design for formula derivation, code generation, verification, and local inference.",
              items: [
                { name: "Prompt Engineering", level: "applied", tag: "Mahidol Workshop & Projects" },
                { name: "Google Gemini AI", level: "applied", tag: "Formula & Code Co-Pilot" },
                { name: "Claude & ChatGPT", level: "applied", tag: "Logic Debugging & Review" },
                { name: "Ollama (Local AI)", level: "exploring", tag: "Local Model Experimentation" }
              ]
            },
            {
              title: "Design & Digital Media",
              accent: "techblue",
              desc: "User interface layout design, video editing, color grading, and social media administration.",
              items: [
                { name: "DaVinci Resolve", level: "applied", tag: "Video Editing & Color Grading" },
                { name: "UI/UX & Web Layout", level: "applied", tag: "Accessible Interface Design" },
                { name: "Meta Business Suite", level: "applied", tag: "Sk-Top STAR Page Admin" },
                { name: "Visual Storytelling", level: "applied", tag: "Film Camp & PSA Contest" }
              ]
            },
            {
              title: "Photography, Systems & Verification",
              accent: "emerald",
              desc: "Sony mirrorless camera operation, spreadsheet formula auditing, and home server management.",
              items: [
                { name: "Sony Mirrorless Cameras", level: "applied", tag: "Lead School Event Photographer" },
                { name: "Framing & Color Grading", level: "applied", tag: "Visual Tone & Composition" },
                { name: "Microsoft Excel Verification", level: "applied", tag: "Cell-by-Cell Math Auditing" },
                { name: "Personal Cloud (CasaOS)", level: "exploring", tag: "Self-Hosted Home Server" }
              ]
            }
          ]
        },
        activitiesSection: {
          eyebrow: "05 / ACTIVITIES & EXPERIENCE",
          title: "Activities & Leadership Experience",
          subtitle: "Practical contributions across school project exhibitions, social media management, photography, and public awareness campaigns.",
          items: [
            {
              date: "September 15, 2569 (2026)",
              title: "Co-Developed & Exhibited the DCA Geometric Series Investment Simulator Website",
              role: "3-Member Group Project (UI Design, AI Prompting for Algorithms, Excel Audit & User Survey)",
              desc: "Collaborated in a 3-student team to build a real-time financial planning web simulator, verified 100% calculation accuracy against Microsoft Excel, and gathered peer evaluations achieving a 4.60/5.00 satisfaction score.",
              projectSlug: "dca-simulator"
            },
            {
              date: "May 2567 – May 2569 (2024–2026)",
              title: "Sk-Top STAR — Social Media Administrator & Content Creator",
              role: "Facebook Page Administrator & Digital Content Creator",
              desc: "Managed the official Facebook page promoting the TOP STAR special classroom program using Meta Business Suite alongside creating photography, graphics, and PR videos.",
              projectSlug: "sk-top-star"
            },
            {
              date: "May 2567 – May 2569 (2024–2026)",
              title: "Lead Photographer for School Events, Academic Camps & Ceremonies",
              role: "Main Event Photographer & Colorist",
              desc: "Operated Sony Mirrorless camera systems, handled framing and composition, and performed color grading for official school digital public relations.",
              projectSlug: "photography-media"
            },
            {
              date: "May 28, 2569 (Certificate: June 18, 2568)",
              title: "Organ Donation Media Contest (Thai Red Cross Society)",
              role: "Video Editor, Visual Storyteller & Color/Audio Grader",
              desc: "Produced an awareness campaign video encouraging organ donation by applying video editing, visual sequencing, color grading, and sound design.",
              projectSlug: "organ-donation-media"
            }
          ]
        },
        certificatesSection: {
          eyebrow: "06 / CERTIFICATES & ACHIEVEMENTS",
          title: "Verified Certificates & Camp Milestones",
          subtitle: "Official certificate scans paired with authentic activity photographs (click any card to inspect in full resolution).",
          certBadge: "Certificate",
          actBadge: "Activity",
          filters: [
            { id: "all", label: "All Credentials (5)" },
            { id: "ai", label: "AI & Computing" },
            { id: "media", label: "Film & Digital Media" },
            { id: "science", label: "Science & Innovation" },
            { id: "volunteer", label: "Volunteer & Impact" }
          ],
          viewCertBtn: "Inspect Certificate",
          viewPhotoBtn: "View Activity Photo",
          items: [
            {
              id: "cert-ai-playground",
              category: "ai",
              title: "AI Playground Workshop — Easy AI at Your Fingertips",
              issuer: "Faculty of ICT, Mahidol University",
              date: "December 18, 2568 / 2025 (6 Hours)",
              desc: "Completed a 6-hour hands-on workshop on AI and digital technology at the Faculty of ICT, Mahidol University. Developed skills in AI Literacy, Prompt Engineering, and applying AI tools for innovation.",
              certImg: ASSETS.certMahidol,
              actImg: ASSETS.actMahidol,
              skills: ["AI Literacy", "Prompt Engineering", "Applied AI Innovation"]
            },
            {
              id: "cert-film-camp",
              category: "media",
              title: "Kob Dek Sang Nang Film Camp (Season 9)",
              issuer: "Sa Kaeo School (Academic Year 2568 / 2025)",
              date: "August 10, 2568 / 2025",
              desc: "Completed an end-to-end short film and video production workshop (Production Pipeline), practicing cinematography, video editing, color grading, and visual storytelling.",
              certImg: ASSETS.certFilm,
              actImg: ASSETS.actFilm,
              skills: ["Production Pipeline", "Video Editing", "Color Grading", "Visual Storytelling"]
            },
            {
              id: "cert-lab-to-launch",
              category: "science",
              title: "Lab-to-Launch: Scientific Innovation Camp",
              issuer: "TOP STAR Special Program, Sa Kaeo School (with KVIS Faculty)",
              date: "February 18, 2569 / 2026",
              desc: "Participated in an intensive camp applying scientific methodology to turn theoretical concepts into practical innovations through Scientific Problem Solving, Design Thinking, and Pitching.",
              certImg: ASSETS.certLab,
              actImg: ASSETS.actLab,
              skills: ["Scientific Problem Solving", "Design Thinking", "Pitching"]
            },
            {
              id: "cert-organ-contest",
              category: "media",
              title: "Organ Donation Media Contest",
              issuer: "Red Cross Youth & Volunteer Bureau, Thai Red Cross Society (GoLSE / Organ ToGo)",
              date: "June 18, 2568 / 2025 (Cert No. 01/2568 • Portfolio entry: May 28, 2569)",
              desc: "Awarded for participating in the media and communication contest promoting organ donation awareness through video storytelling and editing.",
              certImg: ASSETS.certOrgan,
              actImg: ASSETS.actOrgan,
              skills: ["Video Editing", "Color Pacing", "Public Awareness Media"]
            },
            {
              id: "cert-sea-turtle",
              category: "volunteer",
              title: "Volunteer Project: “Say Hi Sea Turtle, Help SAVE Marine Life (Batch 53)”",
              issuer: "Mon-Asa Volunteer Group (Sattahip Beach, Chonburi)",
              date: "May 30, 2569 / 2026 (8 Hours)",
              desc: "Joined an 8-hour marine ecosystem conservation and coastal cleanup initiative at Sattahip Beach, Chonburi, strengthening teamwork and environmental responsibility.",
              certImg: ASSETS.certTurtle,
              actImg: ASSETS.actTurtle1,
              extraImg: ASSETS.actTurtle2,
              skills: ["Teamwork", "Marine Conservation", "Social Responsibility"]
            }
          ]
        },
        statementSection: {
          eyebrow: "07 / PREFACE & PERSONAL STATEMENT",
          title: "Why AI for Digital Experience Technology at Silpakorn University ICT?",
          subtitle: "Core pillars distilled from the Preface (Page 3) and Personal Statement (Page 12), with full verbatim text toggles.",
          prefaceBtn: "Read Verbatim Preface (Page 3)",
          toggleBtn: "Read Verbatim Statement (Page 12)",
          prefaceHeader: "Authentic Preface from Portfolio PDF (Page 3 • October 29, 2569)",
          verbatimHeader: "Authentic Statement from Portfolio PDF (Page 12)",
          pillarPrefix: "PILLAR",
          pillars: [
            {
              num: "01",
              title: "Motivation for Studying AI",
              body: "Looking ahead at future careers and society, AI is increasingly woven into daily life and work. I want to study in a program that deepens my ability to work with AI fluently, minimize errors, and understand how intelligent systems operate."
            },
            {
              num: "02",
              title: "Human–AI Relationship: Controlling AI Intentionally",
              body: "My core conviction is that humans must guide and control AI rather than letting AI dictate our thinking. While casual, uncritical AI usage often leads to repetitive or low-quality outputs, thoughtful human direction turns AI into a powerful creative medium."
            },
            {
              num: "03",
              title: "Connecting AI, Data, and Human-Centered UX/UI",
              body: "I aim to help make AI smarter and more accessible by refining how systems interpret user needs and designing intuitive, engaging UX/UI interfaces so everyday people can benefit from AI effortlessly."
            },
            {
              num: "04",
              title: "Future Direction at Silpakorn ICT",
              body: "By combining AI, Data, and UX/UI at the Faculty of ICT, Silpakorn University, I aspire to grow into a capable AI Developer, AI Designer, Creative Technologist, and AI Engineer who builds meaningful digital experiences for society."
            }
          ],
          prefaceParagraphs: [
            "This portfolio was compiled to present my personal background, academic record, capabilities, skills, experiences, activities, and projects reflecting my dedication to continuous learning—submitted for admission consideration to the Faculty of Information and Communication Technology (ICT), Artificial Intelligence for Digital Experience Technology program at Silpakorn University.",
            "I am deeply interested in Information Technology and Artificial Intelligence, which play a vital role in shaping today's world. I am committed to studying how AI systems work and applying them to develop innovations and new digital experiences that benefit everyday life and address societal needs.",
            "I believe studying in this program will provide an essential opportunity to strengthen my analytical thinking, systematic problem-solving, and creativity—allowing me to build upon emerging technologies to create meaningful innovations in the future.",
            "I sincerely hope this portfolio reflects my determination, curiosity, and readiness to study at Silpakorn University. Thank you to the admissions committee for your time and consideration. — Mr. Prompiriya Phetyangphul (October 29, 2569 BE)"
          ],
          verbatimParagraphs: [
            "Looking toward my future and career path, I place great importance on applying AI in future work. Seeing how widely AI is used around me today—for better or worse—motivated me to seek a faculty that can elevate my abilities: enabling me to use AI more fluently, control it to minimize errors, and ensure that we use AI rather than letting AI control our workflow—ultimately empowering people who truly understand how to direct AI, and making AI easier for the general public to use.",
            "I observe current social and workplace realities around me—teachers, peers, and businesses use AI extensively, yet most use it superficially, resulting in typos, generic patterns, and repetitive outputs that cannot replace genuine human craft. At the same time, AI has empowered people to express their ideas and share knowledge more openly.",
            "My approach is to make AI smarter and more approachable by refining its processing to understand deeper human interests and needs, while improving UX/UI interfaces so interactions feel intuitive, engaging, and empathetic—enhancing the combined effectiveness of both humans and AI.",
            "I am committed to developing my learning capabilities alongside mastering AI—ready to design new solutions or adapt existing tools to help myself and others keep pace with our evolving society.",
            "I hope to build upon knowledge and skills in AI, Data, and UX/UI to create socially beneficial innovations and continuously grow into a technology creator who solves real problems and delivers value to others."
          ]
        },
        simulator: {
          badge: "INTERACTIVE LIVE ENGINE • GEOMETRIC SERIES & STRESS TEST",
          heading: "GeoWealth — Live DCA Investment Simulator & Goal Seeker",
          subheading: "Test the actual mathematical model described in the portfolio: compare Regular Principal Savings, Geometric Progression Savings, and DCA Compounding with instant Stress Test & Goal Seeker calculations.",
          resetBtn: "Reset Defaults",
          lblMonthly: "Monthly DCA Deposit (PMT)",
          lblRate: "Expected Annual Return (%)",
          lblYears: "Investment Horizon (Years)",
          lblStep: "Geometric Savings Step-Up (%/yr)",
          lblShock: "Stress Test: Mid-Term Market Shock",
          lblGoal: "Goal Seeker Target Sum (฿)",
          reqPmtLbl: "Required Monthly DCA:",
          curve1: "1. Plain Principal Savings",
          curve1Sub: "0% Compounding",
          curve2: "2. Geometric Savings Step-Up",
          curve2Sub: "Annual Deposit Growth",
          curve3: "3. DCA Geometric Compounding",
          formulaNote: "Formula: FV = PMT × [((1 + r)^n - 1) / r] × (1 + r)",
          verifyNote: "✓ Verified 100% Match vs. Microsoft Excel FV()"
        },
        contact: {
          eyebrow: "08 / CONTACT & VERIFICATION",
          title: "Contact & Admissions Correspondence",
          desc: "Admissions committee members and reviewers can reach out directly via my verified email or use the interactive message composer to request project files or academic verification.",
          emailLbl: "Primary Verified Portfolio Email",
          copyBtn: "Copy Email",
          channels: [
            { label: "Facebook", val: "Prompiriya Phetyangphul", url: "https://www.facebook.com/phrhm.phiriya.phechr.yang.phul/", status: "verified" },
            { label: "LINE ID", val: "0632402734", status: "verified" }
          ],
          privacyNote: "Privacy & Accuracy Policy: To protect personal privacy on a public portfolio website, my home address and personal phone number are omitted by default. Email (brkg344@gmail.com) serves as the primary contact channel.",
          composerTitle: "Admissions Committee Quick Inquiry Composer",
          composerSubtitle: "Select a topic below to pre-fill an inquiry addressed to brkg344@gmail.com",
          lblTopic: "Inquiry Topic",
          optInterview: "Silpakorn ICT Admission / Interview Inquiry",
          optCode: "Request Full Project Source Code / Demo Access",
          optDocs: "Request Official Transcripts / Original Certificates",
          lblSender: "Reviewer / Faculty Name (Optional)",
          senderPlaceholder: "e.g. Admissions Committee, Faculty of ICT",
          lblMsg: "Formatted Message",
          btnMailto: "Open in Email Client",
          btnCopyMsg: "Copy Message Text"
        },
        footer: {
          name: "Mr. Prompiriya Phetyangphul (Boom)",
          target: "Portfolio for Silpakorn University • Faculty of ICT (AI for Digital Experience Technology)",
          home: "Home",
          dca: "DCA Simulator",
          audit: "Missing Info & Audit",
          top: "Top"
        },
        auditModal: {
          title: "Portfolio Verification & Grounded Data Audit",
          sections: [
            {
              heading: "1. Verified Facts Grounded in Portfolio PDF (12 Pages) & Official Certificates",
              items: [
                "Candidate Name: Mr. Prompiriya Phetyangphul (นายพรหมพิริยะ เพชรยังพูล), Nickname: Boom (บูม), Born Nov 19, 2551 BE (Age 17–18) • TCAS70 Applicant",
                "Target University & Program: Silpakorn University, Faculty of ICT — Artificial Intelligence for Digital Experience Technology",
                "Education: Sa Kaeo School, TOP STAR Special Classroom (Lower Secondary GPA 3.45 graduated Academic Year 2566; Upper Secondary 5-Semester GPA 3.58 Academic Year 2567–2569)",
                "5-Semester Core Subject GPAs: Mathematics 3.40, Science & Technology 3.56, Foreign Languages 3.50",
                "Verified Certificate Details: Mahidol ICT AI Playground (Dec 18, 2568 • 6 hrs), Kob Dek Sang Nang Film Camp 9 (Aug 10, 2568), Lab-to-Launch Camp (Feb 18, 2569), Thai Red Cross Organ Donation Media Contest (Cert No. 01/2568 • Jun 18, 2568), and Mon-Asa Marine Conservation Batch 53 (May 30, 2569 • 8 hrs)"
              ]
            },
            {
              heading: "2. Verified Contact Channels & Role Transparency",
              items: [
                "Facebook Profile URL: Verified https://www.facebook.com/phrhm.phiriya.phechr.yang.phul/ (Direct link to the candidate's authentic profile)",
                "LINE ID & Email: Verified LINE ID: 0632402734 and primary email brkg344@gmail.com for direct admissions contact",
                "QR Code Destinations: The QR codes in the PDF decode to Canva QR shortlinks (e.g., https://www.canvaqr.com/RGWtfqOk9O for the DCA Simulator site and https://www.canvaqr.com/RGWzMJVIPF for the project book), complemented by a fully interactive Live DCA Simulator built directly into this website.",
                "Group vs. Individual Role on DCA Simulator: Page 11 of the PDF states that the 3 team members collaborated across all stages. The case study explicitly highlights the 3-member group nature and distinguishes collaborative work from Prompiriya's individual focus areas."
              ]
            }
          ]
        }
      }
    };

    // Detailed 13-Point Case Studies for All 4 Major Projects
    export const PROJECTS_CASE_STUDIES: any[] = [
      {
        slug: "dca-simulator",
        flagship: true,
        hasLiveSimulator: true,
        thumb: ASSETS.dcaUi,
        gallery: [
          { img: ASSETS.dcaUi, captionTh: "หน้าจอเว็บไซต์ GeoWealth — DCA Global Simulator & Risk Analytics ที่พัฒนาขึ้นจริง", captionEn: "Authentic screenshot of the GeoWealth — DCA Global Simulator & Risk Analytics web interface" },
          { img: ASSETS.dcaBooth, captionTh: "สมาชิกกลุ่มทั้ง 3 คนร่วมนำเสนอเว็บไซต์และบอร์ดโครงงานในงานนิทรรศการ (15 ก.ย. 69)", captionEn: "The 3 team members presenting the DCA Simulator website and display boards (Sep 15, 2569)" },
          { img: ASSETS.dcaBoard, captionTh: "การนำเสนอบอร์ดโครงงาน GeoWealth อธิบายที่มาและสูตรอนุกรมเรขาคณิต", captionEn: "Presenting the GeoWealth project board explaining the background and geometric series formula" },
          { img: ASSETS.dcaStage, captionTh: "การนำเสนอโครงงานและสาธิตระบบคำนวณบนเวทีต่อหน้าคณะครูและนักเรียน", captionEn: "On-stage presentation and live demonstration of the calculation system" },
          { img: ASSETS.dcaTesting, captionTh: "การนำเว็บไซต์ไปให้เพื่อนทดลองใช้งานจริงและเก็บคะแนนความพึงพอใจ", captionEn: "Peer user testing session and satisfaction survey collection at school" },
          { img: ASSETS.qrDcaWeb, captionTh: "QR Code ตัวเว็บไซต์จากแฟ้มสะสมผลงาน (canvaqr.com/RGWtfqOk9O — รอยืนยันลิงก์สาธารณะ)", captionEn: "Website QR Code from Portfolio PDF (canvaqr.com/RGWtfqOk9O — verify link before public release)" },
          { img: ASSETS.qrDcaReport, captionTh: "QR Code ตัวเล่มโครงงานจากแฟ้มสะสมผลงาน (canvaqr.com/RGWzMJVIPF)", captionEn: "Project Report Book QR Code from Portfolio PDF (canvaqr.com/RGWzMJVIPF)" }
        ],
        th: {
          badge: "ผลงานหลัก (FLAGSHIP PROJECT) • งานกลุ่ม 3 คน",
          date: "15 กันยายน 2569",
          category: "Web Application • Financial Mathematics × AI",
          title: "เว็บไซต์จำลองการวางแผนการเงินและการลงทุนด้วยอนุกรมเรขาคณิต (DCA Investment Simulator)",
          shortDesc: "เว็บไซต์จำลองการออมเงินและลงทุนแบบ DCA ด้วยอนุกรมเรขาคณิต ประมวลผลแบบ Real-time พร้อมระบบ Stress Test และ Goal Seeker พัฒนาด้วย HTML/CSS/JS, Chart.js และ AI-assisted development โดยมีความแม่นยำ 100% เทียบกับ MS Excel และได้คะแนนความพึงพอใจ 4.60/5.00",
          roleBadge: "งานกลุ่ม 3 คน (ร่วมออกแบบ UI, ใช้ AI สร้างอัลกอริทึม, ตรวจสอบกับ Excel และเก็บสถิติ)",
          tech: ["HTML5/CSS3", "JavaScript", "Chart.js", "Google Sites", "Gemini AI", "Claude", "ChatGPT", "MS Excel Verification"],
          metrics: [
            { label: "ความแม่นยำเทียบ MS Excel", value: "100%" },
            { label: "คะแนนความพึงพอใจผู้ใช้", value: "4.60 / 5.00" },
            { label: "เส้นกราฟเปรียบเทียบเรียลไทม์", value: "3 รูปแบบ" },
            { label: "รูปแบบการทำงาน", value: "งานกลุ่ม 3 คน" }
          ],
          overview: "เว็บไซต์จำลองการออมเงินและการลงทุนแบบถัวเฉลี่ยต้นทุน (Dollar-Cost Averaging: DCA) โดยประยุกต์ใช้สูตรอนุกรมเรขาคณิต (Geometric Series) ประมวลผลและพล็อตกราฟเปรียบเทียบแบบเรียลไทม์ พร้อมฟีเจอร์ Stress Test จำลองภาวะวิกฤติและ Goal Seeker คำนวณเป้าหมายทางการเงิน",
          backgroundProblem: "ปัญหาเริ่มต้นจากการสนทนากับเพื่อนในระดับชั้นมัธยมศึกษา ซึ่งทำให้เกิดข้อสังเกตว่าเหตุใดกลุ่มเพื่อนจึงไม่ค่อยนึกถึงการลงทุนหรือการวางแผนทางการเงิน เมื่อพิจารณาจากคนรอบข้างพบว่าเกิดจากการขาดเครื่องมือให้ความรู้ที่เห็นภาพชัดเจน หรือเข้าใจว่าต้องมีเงินก้อนใหญ่เท่านั้น คณะผู้จัดทำจึงค้นหาสูตรคณิตศาสตร์ที่เข้าเกณฑ์และพบสูตรอนุกรมเรขาคณิต จึงนำ AI มาช่วยต่อยอดพัฒนาเป็นเว็บไซต์ที่เข้าใจง่าย",
          objectives: [
            "พัฒนาเครื่องมือเว็บที่พล็อตกราฟเปรียบเทียบให้เห็นพลังของดอกเบี้ยทบต้นและอนุกรมเรขาคณิตอย่างชัดเจน",
            "กระตุ้นให้นักเรียนระดับชั้นมัธยมศึกษาปีที่ 4–6 หันมาสนใจและสามารถวางแผนการออมหรือการลงทุนด้วยตนเองได้",
            "สร้างระบบคำนวณที่มีความแม่นยำถูกต้องตรงตามหลักคณิตศาสตร์การเงินเมื่อเทียบกับโปรแกรมมาตรฐาน (Microsoft Excel)"
          ],
          targetUsers: "นักเรียนระดับชั้นมัธยมศึกษาปีที่ 4–6 และผู้เริ่มต้นวางแผนการออมเงินรายเดือนที่ต้องการเห็นภาพเปรียบเทียบผลตอบแทนในระยะยาว",
          roleAndResponsibilities: {
            groupNotice: "โครงงานนี้จัดทำโดยสมาชิกกลุ่มจำนวน 3 คน โดยเป็นการทำงานร่วมกันในทุกขั้นตอน ไม่ได้ทำคนเดียวทั้งหมด",
            groupScope: "สมาชิกทั้ง 3 คนร่วมกันค้นคว้าข้อมูลสถิติผลตอบแทนของตลาดหุ้น ออกแบบโครงสร้างเว็บไซต์ พัฒนาอัลกอริทึม ทดสอบความถูกต้อง และนำเว็บไซต์ไปทดสอบกับกลุ่มเพื่อนเพื่อเก็บคะแนนความพึงพอใจ",
            individualFocus: [
              "ร่วมออกแบบหน้าตาเว็บไซต์ (UI/UX) ให้ใช้งานง่าย เพียงกรอกตัวเลขก็แสดงผลกราฟทันทีโดยไม่ซับซ้อน",
              "ใช้ปัญญาประดิษฐ์ (Gemini, Claude และ ChatGPT) เป็นผู้ช่วยแปลงสูตรอนุกรมเรขาคณิตเป็นโค้ดตรรกะ JavaScript และ Chart.js",
              "ร่วมตรวจสอบและแก้ไขข้อผิดพลาดของโค้ดที่ AI สร้างขึ้น โดยคำนวณมือและเทียบผลลัพธ์กับตาราง Microsoft Excel ทีละช่อง",
              "ร่วมนำเสนอโครงงาน สาธิตการใช้งาน และเก็บข้อมูลแบบประเมินความพึงพอใจจากเพื่อนนักเรียน (ได้ค่าเฉลี่ย 4.60/5.00)"
            ]
          },
          process: [
            "ขั้นที่ 1 สำรวจปัญหาและค้นคว้าทฤษฎี: สังเกตพฤติกรรมการออมเงินรายเดือนของเพื่อน ม.ปลาย และศึกษาสูตรอนุกรมเรขาคณิตที่นำมาใช้กับการทบต้นรายงวด",
            "ขั้นที่ 2 ออกแบบอัลกอริทึมร่วมกับ AI: ใช้ AI ช่วยคิดและแปลงสูตรคณิตศาสตร์เป็นอัลกอริทึม JavaScript พร้อมออกแบบระบบ Stress Test และ Goal Seeker",
            "ขั้นที่ 3 พัฒนา UI และกราฟเปรียบเทียบ 3 เส้น: ใช้ HTML/CSS จัดรูปแบบหน้าเว็บ และใช้ไลบรารี Chart.js พล็อตกราฟเปรียบเทียบ 3 เส้นแบบเรียลไทม์ ได้แก่ (1) การเก็บเงินต้นแบบธรรมดา (2) การออมแบบเรขาคณิต และ (3) การลงทุนในหุ้นแบบ DCA",
            "ขั้นที่ 4 ตรวจสอบความแม่นยำและประเมินผล: นำผลลัพธ์จากเว็บไปเทียบกับ Microsoft Excel ทีละช่องจนแม่นยำ 100% เผยแพร่ผ่าน Google Sites และนำไปทดสอบกับเพื่อนเพื่อเก็บสถิติความพึงพอใจ"
          ],
          technologies: [
            { name: "HTML5 & CSS3", reason: "ใช้จัดโครงสร้างและตกแต่งหน้าตาเว็บแอปพลิเคชันให้สะอาดตาและใช้งานง่าย" },
            { name: "JavaScript", reason: "เขียนตรรกะการคำนวณอนุกรมเรขาคณิต Stress Test และ Goal Seeker บนเบราว์เซอร์โดยไม่ต้องพึ่งพาฐานข้อมูลภายนอก" },
            { name: "Chart.js", reason: "สร้างกราฟเส้นเปรียบเทียบ 3 รูปแบบการออมและลงทุนที่อัปเดตแบบ Real-time ทันทีที่เปลี่ยนตัวเลข" },
            { name: "Google Sites", reason: "ใช้เป็นแพลตฟอร์มหลักสำหรับเผยแพร่เว็บไซต์ เนื่องจากไม่มีค่าใช้จ่าย ใช้งานง่าย และทำงานร่วมกับโค้ดฝังตัวได้ดี" },
            { name: "Gemini, Claude & ChatGPT", reason: "ใช้เป็นผู้ช่วยเขียนโค้ด ลดระยะเวลาการพัฒนา และช่วยตรวจสอบสูตรคำนวณ" },
            { name: "Microsoft Excel", reason: "ใช้เป็นเกณฑ์อ้างอิงมาตรฐานสำหรับตรวจสอบความถูกต้องของผลลัพธ์ทีละช่อง" }
          ],
          designImplementation: "ออกแบบให้ผู้ใช้เพียงกรอกตัวเลขเงินออม ระยะเวลา และผลตอบแทน ระบบจะคำนวณและแสดงกราฟ 3 เส้นเปรียบเทียบแบบเรียลไทม์ พร้อมโมดูล Stress Test จำลองผลกระทบเมื่อตลาดผันผวน และ Goal Seeker ช่วยคำนวณย้อนกลับหาเป้าหมาย (คุณสามารถทดลองใช้งานจำลองแบบอินเทอร์แอคทีฟได้ในกล่องด้านล่างของหน้านี้)",
          challengesSolutions: {
            challenge: "การใช้ปัญญาประดิษฐ์ (AI) ช่วยเขียนโค้ดในระยะแรกก่อให้เกิดปัญหาทั้งในส่วนของโปรแกรมและโค้ดที่คำนวณผิดพลาด ขาดความแม่นยำตามหลักคณิตศาสตร์การเงิน",
            solution: "คณะผู้จัดทำไม่เชื่อผลลัพธ์จาก AI ทันที แต่คอยตรวจสอบและแก้ไขอยู่เสมอ โดยนำผลลัพธ์จากเว็บไซต์ไปคำนวณด้วยมือและเปรียบเทียบกับโปรแกรม Microsoft Excel ทีละช่อง จนมั่นใจว่าระบบคำนวณและให้ข้อมูลที่ถูกต้องแม่นยำ 100%"
          },
          resultsEvaluation: "อัลกอริทึมของเว็บไซต์มีความแม่นยำตรงกับ Microsoft Excel 100% และจากการนำไปให้เพื่อนนักเรียนทดลองใช้งานจริงและเก็บคะแนนความพึงพอใจเชิงสถิติ ได้คะแนนความพึงพอใจเฉลี่ย 4.60 / 5.00",
          lessonsLearned: "ได้รับทักษะการเขียนโปรแกรมเชิงตรรกะ การควบคุมและตรวจสอบความถูกต้องของโค้ดที่สร้างโดย AI ตลอดจนความรู้ด้านการวางแผนการเงินที่ทำให้เห็นภาพข้อดีและข้อจำกัดของการลงทุนชัดเจนยิ่งขึ้น",
          futureImprovements: "พัฒนาต่อยอดให้รองรับการจำลองสินทรัพย์การออมและการลงทุนที่หลากหลายขึ้น ปรับปรุง UX/UI ให้รองรับผู้ใช้งานในวงกว้าง และนำทักษะการพัฒนาเว็บจากโครงงานนี้ไปสร้างเครื่องมือดิจิทัลชิ้นต่อไป"
        },
        en: {
          badge: "FLAGSHIP PROJECT • 3-MEMBER GROUP PROJECT",
          date: "September 15, 2569 (2026)",
          category: "Web Application • Financial Mathematics × AI",
          title: "DCA Investment Simulator Using Geometric Series",
          shortDesc: "An interactive web application simulating savings and Dollar-Cost Averaging (DCA) investment using geometric series formulas. Features real-time calculations, Stress Test, Goal Seeker, and Chart.js visualizations—verified 100% against MS Excel with a 4.60/5.00 peer satisfaction score.",
          roleBadge: "3-Member Group Project (UI Design, AI Algorithm Prompting, Excel Verification & Peer Testing)",
          tech: ["HTML5/CSS3", "JavaScript", "Chart.js", "Google Sites", "Gemini AI", "Claude", "ChatGPT", "MS Excel Verification"],
          metrics: [
            { label: "Accuracy vs. MS Excel", value: "100%" },
            { label: "User Satisfaction Score", value: "4.60 / 5.00" },
            { label: "Real-Time Comparison Curves", value: "3 Trajectories" },
            { label: "Project Structure", value: "Team of 3" }
          ],
          overview: "A web-based financial planning simulator that applies the mathematical Geometric Series formula to model monthly savings and Dollar-Cost Averaging (DCA) investments in real time, complete with Stress Testing and Goal Seeker capabilities.",
          backgroundProblem: "The project began from conversations with high school peers, revealing that very few students thought about financial planning or investing—often due to a lack of approachable educational tools or misconceptions about needing large initial capital. Our team researched mathematical models and identified the geometric series formula, using AI assistance to turn abstract math into an interactive web simulator.",
          objectives: [
            "Develop a visual graphing tool that clearly illustrates the long-term power of compound interest and geometric series.",
            "Encourage Grade 10–12 (M.4–M.6) high school students to explore personal savings and investment planning.",
            "Ensure 100% mathematical accuracy by auditing all web outputs against Microsoft Excel financial tables."
          ],
          targetUsers: "Upper-secondary school students (Grades 10–12) and beginner savers seeking an intuitive way to compare monthly savings and investment strategies.",
          roleAndResponsibilities: {
            groupNotice: "IMPORTANT: This is a collaborative group project completed by 3 team members. I did not develop every component solo.",
            groupScope: "All 3 members collaborated across researching stock market return statistics, designing the website interface (UI), prompting AI to construct the calculation algorithms, auditing outputs against Excel, and conducting peer satisfaction testing.",
            individualFocus: [
              "Co-designed the clean, approachable web UI so users can input numbers and immediately understand the 3 comparison curves.",
              "Utilized AI tools (Gemini, Claude, and ChatGPT) to assist in translating geometric series equations into JavaScript logic and Chart.js visualizations.",
              "Participated in debugging AI-generated code errors by manually calculating results and cross-checking cell-by-cell against Microsoft Excel.",
              "Co-presented the project at the school exhibition and collected peer satisfaction survey data (achieving 4.60/5.00)."
            ]
          },
          process: [
            "Step 1 — Problem Discovery & Mathematical Research: Studied monthly saving habits among high school students and formulated geometric progression equations for periodic compounding.",
            "Step 2 — AI-Assisted Algorithm Design: Used Gemini, Claude, and ChatGPT to translate mathematical formulas into automated JavaScript routines, including Stress Test and Goal Seeker logic.",
            "Step 3 — UI & 3-Curve Real-Time Plotting: Built the interface with HTML/CSS and integrated Chart.js to plot 3 real-time comparison lines: (1) Plain Principal Savings, (2) Geometric Progression Savings, and (3) DCA Stock Investment.",
            "Step 4 — Cell-by-Cell Excel Audit & Peer Evaluation: Verified every calculation cell-by-cell against Microsoft Excel, published on Google Sites, and conducted hands-on testing with peers."
          ],
          technologies: [
            { name: "HTML5 & CSS3", reason: "Structured and styled the calculator interface for clarity and responsiveness." },
            { name: "JavaScript", reason: "Executed client-side geometric series, Stress Test, and Goal Seeker calculations without requiring an external database." },
            { name: "Chart.js", reason: "Rendered dynamic 3-line comparative growth charts that update instantaneously on user input." },
            { name: "Google Sites", reason: "Chosen as the zero-cost, accessible hosting platform that integrates smoothly with embedded web code." },
            { name: "Gemini, Claude & ChatGPT", reason: "Served as coding and mathematical verification assistants to accelerate development." },
            { name: "Microsoft Excel", reason: "Used as the ground-truth benchmark to verify calculation accuracy cell by cell." }
          ],
          designImplementation: "Designed for zero-friction usability: entering monthly savings, duration, and rate immediately renders 3 comparative trajectories alongside Stress Test and Goal Seeker modules. (You can test the live interactive simulation engine directly below on this page!)",
          challengesSolutions: {
            challenge: "Relying on AI to generate code initially introduced software bugs and mathematical inaccuracies in the compounding formula.",
            solution: "Rather than trusting AI outputs blindly, our team manually computed test cases and compared the website's output cell-by-cell against Microsoft Excel spreadsheets until the JavaScript algorithm achieved 100% accuracy."
          },
          resultsEvaluation: "Achieved 100% mathematical consistency with Microsoft Excel and earned a 4.60 / 5.00 user satisfaction rating from peer testing.",
          lessonsLearned: "Gained practical JavaScript programming skills, learned how to critically audit AI-generated code, and developed a much clearer understanding of financial planning and investment risks.",
          futureImprovements: "Expand the simulator to cover broader asset classes and inflation scenarios, and apply these web development workflows to future interactive projects."
        }
      },
      {
        slug: "organ-donation-media",
        flagship: false,
        hasLiveSimulator: false,
        thumb: ASSETS.actOrgan,
        gallery: [
          { img: ASSETS.actOrgan, captionTh: "ภาพการทำงานและการตัดต่อสื่อวิดีโอในกิจกรรม Organ Donation Media Contest", captionEn: "Working on video editing and production for the Organ Donation Media Contest" },
          { img: ASSETS.certOrgan, captionTh: "เกียรติบัตรการเข้าร่วมโครงการ Organ Donation Media Contest โดยสภากาชาดไทย", captionEn: "Official certificate from the Organ Donation Media Contest (Thai Red Cross Society)" },
          { img: ASSETS.qrOrgan, captionTh: "QR Code ผลงานสื่อวิดีโอ Organ Donation Media Contest จากแฟ้มสะสมผลงาน (หน้า 6)", captionEn: "Organ Donation Media Contest Video QR Code from Portfolio PDF (Page 6)" }
        ],
        th: {
          badge: "โครงการประกวดสื่อระดับประเทศ • สภากาชาดไทย",
          date: "28 พฤษภาคม 2569 (เกียรติบัตร 18 มิถุนายน 2568)",
          category: "Digital Media Production • Visual Storytelling",
          title: "การผลิตสื่อวิดีโอรณรงค์ Organ Donation Media Contest (สภากาชาดไทย)",
          shortDesc: "ผลิตสื่อวิดีโอรณรงค์ส่งเสริมการบริจาคอวัยวะ เพื่อสร้างการตระหนักรู้และปรับเปลี่ยนมุมมองในสังคม โดยประยุกต์ทักษะการตัดต่อวิดีโอ การเรียบเรียงลำดับภาพ การคุมโทนสี และงานเสียง",
          roleBadge: "ตัดต่อวิดีโอ (Video Editing) • ลำดับภาพ • คุมโทนสี (Color Grading) และเสียง",
          tech: ["DaVinci Resolve", "Video Editing", "Visual Storytelling", "Color Grading", "Audio Sequencing"],
          metrics: [
            { label: "หน่วยงานผู้จัด", value: "สภากาชาดไทย" },
            { label: "รูปแบบผลงาน", value: "วิดีโอรณรงค์" },
            { label: "ซอฟต์แวร์หลัก", value: "DaVinci Resolve" },
            { label: "จุดเน้นหลัก", value: "Visual Storytelling" }
          ],
          overview: "โครงการผลิตสื่อวิดีโอสร้างสรรค์เข้าร่วมการประกวด 'โครงการประกวดสื่อและการสื่อสาร แลกเปลี่ยนความคิดเห็นและมุมมองเพื่อส่งเสริมการบริจาคอวัยวะ (Organ Donation Media Contest)' ของสภากาชาดไทย",
          backgroundProblem: "การบริจาคอวัยวะเป็นเรื่องที่หลายคนในสังคมยังมีความเข้าใจคลาดเคลื่อนหรือรู้สึกไกลตัว โจทย์สำคัญคือการผลิตสื่อวิดีโอขนาดสั้นที่สามารถสื่อสารอารมณ์ สร้างความตระหนักรู้ และช่วยปรับเปลี่ยนมุมมองของผู้ชมให้เห็นคุณค่าของการเป็นผู้ให้",
          objectives: [
            "ผลิตสื่อวิดีโอรณรงค์ส่งเสริมการบริจาคอวัยวะที่เข้าถึงอารมณ์และความเข้าใจของผู้ชม",
            "ประยุกต์ใช้ทักษะการลำดับภาพ การคุมโทนสี (Color Grading) และจังหวะเสียง เพื่อถ่ายทอดเรื่องราว (Visual Storytelling) ให้ทรงพลัง"
          ],
          targetUsers: "เยาวชนและประชาชนทั่วไปที่รับชมสื่อรณรงค์ออนไลน์ของโครงการส่งเสริมการบริจาคอวัยวะ สภากาชาดไทย",
          roleAndResponsibilities: {
            groupNotice: "ผลงานการผลิตสื่อร่วมกับทีมนักเรียนในการประกวด Organ Donation Media Contest",
            groupScope: "ร่วมกันวางแนวคิดการเล่าเรื่อง ถ่ายทำ และผลิตสื่อวิดีโอรณรงค์ตามโจทย์ของโครงการ",
            individualFocus: [
              "รับผิดชอบการตัดต่อวิดีโอ (Video Editing) และการเรียบเรียงลำดับภาพให้ดำเนินเรื่องอย่างราบรื่น",
              "ควบคุมโทนสีของภาพ (Color Grading) ด้วยโปรแกรม DaVinci Resolve เพื่อให้สอดคล้องกับอารมณ์ของเรื่อง",
              "จัดการจังหวะเสียงและดนตรีประกอบ (Audio & Visual Sequencing) เพื่อเสริมพลังในการเล่าเรื่อง"
            ]
          },
          process: [
            "ขั้นที่ 1 วิเคราะห์โจทย์และวางโครงเรื่อง: ตีความประเด็นการบริจาคอวัยวะเพื่อสร้างมุมมองเชิงบวกและลดความกลัว",
            "ขั้นที่ 2 คัดเลือกฟุตเทจและเรียบเรียงลำดับภาพ (Offline Editing): จัดลำดับซีนเพื่อสร้างจังหวะการเล่าเรื่องที่น่าติดตาม",
            "ขั้นที่ 3 ปรับแต่งโทนสีและเสียง (Color Grading & Sound Pacing): ใช้ DaVinci Resolve ปรับโทนสีและมิกซ์เสียงให้สื่ออารมณ์ได้อย่างสมบูรณ์"
          ],
          technologies: [
            { name: "DaVinci Resolve", reason: "ใช้สำหรับตัดต่อ เรียบเรียงไทม์ไลน์ และปรับแต่งโทนสี (Color Grading) อย่างละเอียด" },
            { name: "Visual Storytelling Techniques", reason: "ใช้หลักการเล่าเรื่องด้วยภาพและจังหวะการตัดต่อเพื่อสื่อสารสาระสำคัญในเวลาจำกัด" },
            { name: "Audio Sequencing", reason: "ควบคุมจังหวะเสียงพูดและดนตรีประกอบให้สอดรับกับอารมณ์ของภาพ" }
          ],
          designImplementation: "ออกแบบจังหวะการตัดต่อและโทนสีให้มีความอบอุ่นและจริงใจ ช่วยเปลี่ยนเรื่องการบริจาคอวัยวะที่ดูหนักหน่วงให้กลายเป็นเรื่องของการส่งต่อโอกาสชีวิตใหม่",
          challengesSolutions: {
            challenge: "การเล่าเรื่องที่ละเอียดอ่อนอย่างการบริจาคอวัยวะให้กระชับและน่าสนใจโดยไม่ทำให้ผู้ชมรู้สึกอึดอัด",
            solution: "ใช้การจัดลำดับภาพควบคู่กับการปรับโทนสีและจังหวะเสียงที่ค่อยๆ สร้างความรู้สึกร่วม จนนำไปสู่สาระสำคัญในตอนท้ายได้อย่างลงตัว"
          },
          resultsEvaluation: "ผลงานผ่านการเข้าร่วมโครงการประกวดสื่อ Organ Donation Media Contest และได้รับเกียรติบัตรรับรองจากศูนย์รับบริจาคอวัยวะ สภากาชาดไทย",
          lessonsLearned: "ได้เรียนรู้ว่าการตัดต่อและเกรดสีไม่ใช่เพียงเรื่องเทคนิค แต่คือการออกแบบประสบการณ์ทางอารมณ์ (Emotional Experience) ให้ผู้ชมเข้าใจสารที่ต้องการสื่อ",
          futureImprovements: "ต่อยอดด้วยการผสานเทคนิค Motion Graphics และการใช้เครื่องมือ AI ด้านเสียง/ภาพเพื่อยกระดับคุณภาพงานโปรดักชันในอนาคต"
        },
        en: {
          badge: "NATIONAL MEDIA CONTEST • THAI RED CROSS SOCIETY",
          date: "May 28, 2569 (Certificate: June 18, 2568)",
          category: "Digital Media Production • Visual Storytelling",
          title: "Organ Donation Media Contest — Public Awareness Video Production",
          shortDesc: "Produced an awareness campaign video encouraging organ donation for the Thai Red Cross Society contest, applying video editing, visual storytelling, color grading, and audio sequencing.",
          roleBadge: "Video Editing • Visual Sequencing • Color Grading & Audio Pacing",
          tech: ["DaVinci Resolve", "Video Editing", "Visual Storytelling", "Color Grading", "Audio Sequencing"],
          metrics: [
            { label: "Organizer", value: "Thai Red Cross" },
            { label: "Deliverable", value: "Awareness Video" },
            { label: "Primary Tool", value: "DaVinci Resolve" },
            { label: "Core Craft", value: "Visual Storytelling" }
          ],
          overview: "A digital media production project created for the Organ Donation Media Contest organized by the Organ Donation Centre, Thai Red Cross Society, aimed at raising public awareness and shifting perspectives on organ donation.",
          backgroundProblem: "Organ donation is often misunderstood or viewed as distant by the general public. The challenge was to craft a compelling short video that communicates empathy, raises awareness, and inspires viewers to appreciate the value of giving life.",
          objectives: [
            "Produce an emotionally resonant awareness video promoting organ donation.",
            "Apply video editing, shot sequencing, color grading, and sound design to tell a clear, impactful visual story."
          ],
          targetUsers: "Youth and general audiences viewing online public awareness campaigns for organ donation.",
          roleAndResponsibilities: {
            groupNotice: "Completed as a collaborative student media team entry for the Organ Donation Media Contest.",
            groupScope: "Collaborated on story ideation, filming, and post-production assembly.",
            individualFocus: [
              "Handled video editing and timeline sequencing to establish clear narrative pacing.",
              "Performed color grading in DaVinci Resolve to shape the visual mood and emotional tone.",
              "Synchronized audio and visual cues so sound design reinforced the storytelling arc."
            ]
          },
          process: [
            "Step 1 — Concept & Narrative Structuring: Framed organ donation around empathy and passing on the gift of life.",
            "Step 2 — Timeline Assembly & Pacing: Sequenced shots to build emotional engagement within a concise runtime.",
            "Step 3 — Color Grading & Audio Finishing: Used DaVinci Resolve to unify color tones across scenes and balance dialogue with background music."
          ],
          technologies: [
            { name: "DaVinci Resolve", reason: "Used for non-linear video editing, timeline assembly, and professional color grading." },
            { name: "Visual Storytelling", reason: "Structured visual pacing and shot transitions to hold viewer attention." },
            { name: "Audio Sequencing", reason: "Aligned music swells and sound levels with key visual moments." }
          ],
          designImplementation: "Combined intentional color grading with rhythmic editing transitions so the message felt sincere, clear, and memorable.",
          challengesSolutions: {
            challenge: "Communicating a serious medical and social topic in a short format without overwhelming the viewer.",
            solution: "Used warm color grading transitions and measured audio pacing to guide the viewer naturally toward the campaign message."
          },
          resultsEvaluation: "Completed and submitted the campaign video, receiving an official Certificate of Participation from the Organ Donation Centre, Thai Red Cross Society.",
          lessonsLearned: "Learned how pacing, color temperature, and sound design work together to shape human perception—a principle directly transferable to digital experience design.",
          futureImprovements: "Integrate motion graphics and AI-assisted audio restoration/subtitling workflows for higher accessibility."
        }
      },
      {
        slug: "sk-top-star",
        flagship: false,
        hasLiveSimulator: false,
        thumb: ASSETS.skFbPage,
        gallery: [
          { img: ASSETS.skFbPage, captionTh: "หน้าเพจ Facebook 'Sk-Top STAR' ที่ดูแลและบริหารจัดการประชาสัมพันธ์โครงการ", captionEn: "The official 'Sk-Top STAR' Facebook page managed for the TOP STAR program" },
          { img: ASSETS.skPosts, captionTh: "ตัวอย่างโพสต์ กราฟิก และอัลบั้มภาพกิจกรรมที่เผยแพร่บนเพจ Sk-Top STAR", captionEn: "Examples of published posts, graphics, and event photo albums on Sk-Top STAR" },
          { img: ASSETS.qrSkTopstar, captionTh: "QR Code เพจ Sk-Top STAR จากแฟ้มสะสมผลงาน (canvaqr.com/RGWtufrzFG)", captionEn: "Sk-Top STAR Facebook Page QR Code from Portfolio PDF (canvaqr.com/RGWtufrzFG)" }
        ],
        th: {
          badge: "งานดูแลสื่อองค์กรต่อเนื่อง 2 ปี • โรงเรียนสระแก้ว",
          date: "พฤษภาคม 2567 – พฤษภาคม 2569",
          category: "Social Media Administration • Content Creation",
          title: "Sk-Top STAR — Social Media Administrator & Content Creator",
          shortDesc: "บริหารจัดการเพจ Facebook ประชาสัมพันธ์โครงการห้องเรียนพิเศษ TOP STAR ด้วย Meta Business Suite ควบคู่กับการสร้างสรรค์ภาพถ่าย กราฟิก และวิดีโอประชาสัมพันธ์องค์กร",
          roleBadge: "ผู้ดูแลเพจ (Social Media Admin) & ผู้ผลิตคอนเทนต์ (Content Creator)",
          tech: ["Meta Business Suite", "Facebook Page Admin", "Graphic Design", "Photography", "Video Production"],
          metrics: [
            { label: "ระยะเวลาปฏิบัติงาน", value: "พ.ค. 67 – พ.ค. 69" },
            { label: "แพลตฟอร์มหลัก", value: "Facebook / Meta" },
            { label: "ผู้ติดตามเพจ", value: "1.3 พัน+ คน" },
            { label: "ขอบเขตงาน", value: "Admin & Content" }
          ],
          overview: "การทำหน้าที่เป็นผู้ดูแลเพจ Facebook หลักของโครงการห้องเรียนพิเศษวิทยาศาสตร์-คณิตศาสตร์ TOP STAR โรงเรียนสระแก้ว ('Sk-Top STAR') รับผิดชอบทั้งการวางแผนเผยแพร่คอนเทนต์และการผลิตสื่อภาพถ่าย กราฟิก และวิดีโอ",
          backgroundProblem: "โครงการห้องเรียนพิเศษ TOP STAR มีกิจกรรมวิชาการ ค่ายพัฒนาศักยภาพ และผลงานของนักเรียนจำนวนมาก จึงต้องการช่องทางสื่อสารดิจิทัลที่อัปเดตสม่ำเสมอ มีภาพลักษณ์ที่น่าเชื่อถือ และเข้าถึงนักเรียน ผู้ปกครอง และบุคคลภายนอก",
          objectives: [
            "บริหารจัดการเพจ Facebook ประชาสัมพันธ์โครงการห้องเรียนพิเศษ TOP STAR ให้มีความเคลื่อนไหวและเป็นระบบ",
            "ผลิตและคัดสรรภาพถ่าย กราฟิกแสดงความยินดี และวิดีโอกิจกรรมที่มีคุณภาพเพื่อสื่อสารภาพลักษณ์ที่ดีของโครงการ"
          ],
          targetUsers: "นักเรียนโครงการ TOP STAR ผู้ปกครอง คณะครู และนักเรียนที่สนใจสมัครเข้าศึกษาต่อในโรงเรียนสระแก้ว",
          roleAndResponsibilities: {
            groupNotice: "ปฏิบัติหน้าที่ในฐานะผู้ดูแลเพจและผู้ผลิตสื่อประชาสัมพันธ์ของโครงการ TOP STAR",
            groupScope: "ทำงานร่วมกับคณะครูและทีมสื่อของโครงการในการรวบรวมข้อมูลกิจกรรมและประกาศสำคัญ",
            individualFocus: [
              "บริหารจัดการเพจ Facebook 'Sk-Top STAR' และตั้งค่าการเผยแพร่สื่อดิจิทัลผ่านระบบ Meta Business Suite",
              "สร้างสรรค์คอนเทนต์หลากหลายรูปแบบ ทั้งอัลบั้มภาพถ่ายกิจกรรม โปสเตอร์กราฟิกแสดงความยินดี และวิดีโอสั้น",
              "ดูแลความเรียบร้อยของข้อมูลและคุมโทนภาพลักษณ์ของเพจให้มีความทันสมัยและน่าสนใจ"
            ]
          },
          process: [
            "ขั้นที่ 1 รวบรวมข้อมูลและบันทึกภาพกิจกรรม: ลงพื้นที่ถ่ายภาพหรือรับข้อมูลผลงานนักเรียนจากกิจกรรมต่างๆ ของโครงการ",
            "ขั้นที่ 2 ออกแบบกราฟิกและคัดเลือกสื่อ: แต่งโทนสีภาพ ออกแบบกราฟิกประชาสัมพันธ์ และเรียบเรียงแคปชันที่เข้าใจง่าย",
            "ขั้นที่ 3 จัดตารางโพสต์และติดตามผลด้วย Meta Business Suite: เผยแพร่เนื้อหาให้ตรงจังหวะเวลาและดูแลการสื่อสารบนเพจ"
          ],
          technologies: [
            { name: "Meta Business Suite", reason: "ใช้บริหารจัดการโพสต์ จัดตารางเวลาเผยแพร่ และดูข้อมูลภาพรวมของเพจ Facebook" },
            { name: "Digital Graphic & Photo Tools", reason: "ใช้สร้างโปสเตอร์ประชาสัมพันธ์และปรับแต่งภาพถ่ายกิจกรรมก่อนนำขึ้นเพจ" },
            { name: "Video Editing Workflow", reason: "ใช้ตัดต่อคลิปสรุปกิจกรรมของห้องเรียนพิเศษ TOP STAR" }
          ],
          designImplementation: "ออกแบบเลย์เอาต์โพสต์และอัลบั้มภาพให้ดูสะอาดตา มีการใช้อัตลักษณ์ของโรงเรียนสระแก้วและโครงการ TOP STAR อย่างสม่ำเสมอ",
          challengesSolutions: {
            challenge: "กิจกรรมของโรงเรียนมีจำนวนมากและเกิดขึ้นต่อเนื่อง ทำให้ต้องจัดการไฟล์ภาพและข้อมูลจำนวนมากให้ทันต่อเวลา",
            solution: "วางระบบการคัดเลือกภาพ แยกหมวดหมู่งาน และใช้ Meta Business Suite ช่วยจัดการคิวการโพสต์อย่างเป็นระบบ"
          },
          resultsEvaluation: "เพจ Sk-Top STAR เป็นช่องทางประชาสัมพันธ์หลักที่คอยอัปเดตข่าวสาร กิจกรรมค่าย และความสำเร็จของนักเรียนอย่างต่อเนื่องตลอดปีการศึกษา 2567–2569",
          lessonsLearned: "ได้ฝึกความรับผิดชอบในการดูแลสื่อสาธารณะขององค์กร การสื่อสารกับผู้ชมหลากหลายกลุ่ม และการใช้เครื่องมือจัดการโซเชียลมีเดียอย่างเป็นระบบ",
          futureImprovements: "นำการวิเคราะห์ข้อมูล (Data Analytics) และ AI มาช่วยวิเคราะห์ช่วงเวลาโพสต์และรูปแบบคอนเทนต์ที่ผู้ชมให้ความสนใจสูงสุด"
        },
        en: {
          badge: "2-YEAR DIGITAL MEDIA OPERATIONS • SA KAEO SCHOOL",
          date: "May 2567 – May 2569 (2024–2026)",
          category: "Social Media Administration • Content Creation",
          title: "Sk-Top STAR — Social Media Administrator & Content Creator",
          shortDesc: "Managed the official Facebook page promoting the TOP STAR special classroom program using Meta Business Suite alongside producing photography, graphics, and promotional videos.",
          roleBadge: "Social Media Administrator & Digital Content Creator",
          tech: ["Meta Business Suite", "Facebook Page Admin", "Graphic Design", "Photography", "Video Production"],
          metrics: [
            { label: "Active Tenure", value: "2024 – 2026" },
            { label: "Core Platform", value: "Meta Business Suite" },
            { label: "Community Reach", value: "1.3K+ Followers" },
            { label: "Responsibility", value: "Admin & Creator" }
          ],
          overview: "Served as Social Media Administrator and Content Creator for the 'Sk-Top STAR' Facebook page, the official public relations channel of the TOP STAR Science-Math Gifted Program at Sa Kaeo School.",
          backgroundProblem: "With numerous academic camps, competitions, and student achievements taking place throughout the school year, the TOP STAR program needed a consistent, well-curated digital channel to communicate with students, parents, and the wider community.",
          objectives: [
            "Administer and maintain the Sk-Top STAR Facebook page with timely, accurate updates.",
            "Create cohesive photography albums, congratulatory graphics, and short videos showcasing student activities."
          ],
          targetUsers: "Current TOP STAR students, parents, teachers, and prospective students interested in Sa Kaeo School.",
          roleAndResponsibilities: {
            groupNotice: "Served as page administrator and media creator coordinating with program teachers and peers.",
            groupScope: "Coordinated with faculty advisors to gather event details and student achievement announcements.",
            individualFocus: [
              "Administered the Sk-Top STAR Facebook page and managed publishing workflows via Meta Business Suite.",
              "Created visual content including event photo albums, informational graphics, and promotional videos.",
              "Maintained visual consistency and clear copywriting across published posts."
            ]
          },
          process: [
            "Step 1 — Event Documentation & Information Gathering: Captured photos at school events and collected achievement details.",
            "Step 2 — Visual Production & Curation: Selected best shots, color-graded images, and designed announcement banners.",
            "Step 3 — Publishing & Page Management: Used Meta Business Suite to organize posts and maintain page engagement."
          ],
          technologies: [
            { name: "Meta Business Suite", reason: "Managed page publishing, media albums, and community communications." },
            { name: "Graphic & Photo Editing", reason: "Prepared congratulatory posters and color-corrected event albums." },
            { name: "Video Production", reason: "Produced highlight clips for academic camps and school events." }
          ],
          designImplementation: "Established a clean, recognizable visual style for TOP STAR announcements, pairing vibrant event photography with structured graphic templates.",
          challengesSolutions: {
            challenge: "Balancing rapid turnaround times during busy academic camp weeks with high visual quality.",
            solution: "Created repeatable graphic layouts and streamlined photo culling and grading workflows."
          },
          resultsEvaluation: "Sustained active digital public relations for the TOP STAR program from May 2567 to May 2569, building an engaged archive of student milestones.",
          lessonsLearned: "Developed practical experience in digital communication, audience awareness, and platform management.",
          futureImprovements: "Apply data analytics and AI content insights to optimize engagement timing and interactive media formats."
        }
      },
      {
        slug: "photography-media",
        flagship: false,
        hasLiveSimulator: false,
        thumb: ASSETS.photoCampGroup,
        gallery: [
          { img: ASSETS.photoCampGroup, captionTh: "ภาพถ่ายหมู่กิจกรรมค่ายวิชาการที่บันทึกและคุมโทนสีเพื่อใช้ในสื่อประชาสัมพันธ์", captionEn: "Group activity photograph captured and color-graded for official school PR" },
          { img: ASSETS.photoAcademicHall, captionTh: "ภาพบรรยากาศการอบรมวิชาการในหอประชุม จัดองค์ประกอบภาพให้เห็นทั้งผู้บรรยายและผู้เข้าร่วม", captionEn: "Academic camp lecture hall coverage demonstrating framing and depth composition" },
          { img: ASSETS.qrPhoto1, captionTh: "QR Code คลังภาพกิจกรรมที่ 1 จากแฟ้มสะสมผลงาน (canvaqr.com/RGWtyhKBST)", captionEn: "Photography Portfolio QR Code #1 from Portfolio PDF (canvaqr.com/RGWtyhKBST)" },
          { img: ASSETS.qrPhoto2, captionTh: "QR Code คลังภาพกิจกรรมที่ 2 จากแฟ้มสะสมผลงาน (canvaqr.com/RGWtyrwWry)", captionEn: "Photography Portfolio QR Code #2 from Portfolio PDF (canvaqr.com/RGWtyrwWry)" }
        ],
        th: {
          badge: "ช่างภาพหลักงานกิจกรรมโรงเรียน • พ.ค. 67 – พ.ค. 69",
          date: "พฤษภาคม 2567 – พฤษภาคม 2569",
          category: "Photography • Framing • Color Grading",
          title: "ช่างภาพหลักในการบันทึกภาพและคุมโทนภาพกิจกรรม ค่ายวิชาการ และงานพิธีการ",
          shortDesc: "ทำหน้าที่ช่างภาพหลักบันทึกภาพกิจกรรม ค่ายวิชาการ และพิธีการของโรงเรียนเพื่อใช้ในสื่อประชาสัมพันธ์องค์กร ด้วยทักษะการควบคุมกล้อง Mirrorless (Sony) การจัดองค์ประกอบภาพ (Framing) และการแต่งโทนสีภาพ (Color Grading)",
          roleBadge: "ช่างภาพหลัก (Lead Photographer) & ผู้ปรับแต่งโทนสีภาพ (Colorist)",
          tech: ["Sony Mirrorless System", "Framing & Composition", "Color Grading", "Digital PR Media"],
          metrics: [
            { label: "ระยะเวลาปฏิบัติงาน", value: "พ.ค. 67 – พ.ค. 69" },
            { label: "อุปกรณ์หลัก", value: "Sony Mirrorless" },
            { label: "ทักษะหลัก", value: "Framing & Grading" },
            { label: "การนำไปใช้", value: "สื่อประชาสัมพันธ์องค์กร" }
          ],
          overview: "การปฏิบัติหน้าที่ช่างภาพหลักในการบันทึกภาพกิจกรรมสำคัญ ค่ายวิชาการ และงานพิธีการของโรงเรียนสระแก้ว เพื่อนำไปใช้ในสื่อประชาสัมพันธ์ดิจิทัลขององค์กร",
          backgroundProblem: "งานกิจกรรมวิชาการและพิธีการของโรงเรียนมีสภาพแสงและสถานที่ที่หลากหลาย ตั้งแต่งานกลางแจ้งไปจนถึงหอประชุมที่มีแสงน้อย การจะได้ภาพที่คมชัด มีอารมณ์ร่วม และมีโทนสีเป็นไปในทิศทางเดียวกัน ต้องอาศัยความเข้าใจในการควบคุมกล้องและการเกรดสีหลังถ่ายทำ",
          objectives: [
            "บันทึกภาพกิจกรรม ค่ายวิชาการ และพิธีการให้ได้มุมมองที่สื่อความหมายและครบถ้วนตามวัตถุประสงค์ของงาน",
            "ควบคุมโทนสีภาพ (Color Grading) ให้มีความสวยงาม สม่ำเสมอ และพร้อมนำไปใช้ในสื่อประชาสัมพันธ์ดิจิทัลทันที"
          ],
          targetUsers: "งานประชาสัมพันธ์โรงเรียนสระแก้ว โครงการห้องเรียนพิเศษ TOP STAR คณะครู และนักเรียน",
          roleAndResponsibilities: {
            groupNotice: "ปฏิบัติหน้าที่ในฐานะช่างภาพหลักประจำกิจกรรมและผู้คัดเลือก/ปรับแต่งโทนสีภาพ",
            groupScope: "ประสานงานกับทีมผู้จัดงานและฝ่ายประชาสัมพันธ์เพื่อเก็บภาพบรรยากาศสำคัญให้ครบทุกช่วง",
            individualFocus: [
              "ควบคุมการตั้งค่ากล้อง Mirrorless (Sony) ให้เหมาะสมกับสภาพแสงและจังหวะการเคลื่อนไหวของกิจกรรม",
              "จัดองค์ประกอบภาพ (Framing) เพื่อดึงจุดสนใจและถ่ายทอดบรรยากาศของค่ายวิชาการและงานพิธีการ",
              "คัดเลือกภาพและปรับแต่งโทนสี (Color Grading) ให้พร้อมสำหรับเผยแพร่บนสื่อดิจิทัลขององค์กร"
            ]
          },
          process: [
            "ขั้นที่ 1 สำรวจสถานที่และสภาพแสง: ประเมินมุมถ่ายภาพในหอประชุมหรือลานกิจกรรมและตั้งค่ากล้อง Sony Mirrorless ล่วงหน้า",
            "ขั้นที่ 2 บันทึกภาพโดยเน้นจังหวะและองค์ประกอบ (Framing): เก็บทั้งภาพมุมกว้าง (Establishing Shots) และภาพเจาะอารมณ์ของผู้เข้าร่วม",
            "ขั้นที่ 3 คัดเลือกและเกรดสี (Culling & Color Grading): ปรับแสงและโทนสีให้ภาพทั้งอัลบั้มมีความกลมกลืนกันก่อนส่งมอบ"
          ],
          technologies: [
            { name: "Sony Mirrorless Camera System", reason: "ให้ความคล่องตัวสูง โฟกัสแม่นยำ และให้ไฟล์ภาพที่ยืดหยุ่นต่อการนำมาปรับโทนสี" },
            { name: "Framing & Composition", reason: "ช่วยจัดระเบียบองค์ประกอบในภาพหมู่และภาพบรรยากาศการบรรยายให้ดูน่าสนใจ" },
            { name: "Color Grading Workflow", reason: "ช่วยแก้ปัญหาสภาพแสงที่แตกต่างกันในแต่ละอาคารและสร้างโทนสีที่เป็นเอกลักษณ์" }
          ],
          designImplementation: "เน้นการจัดเฟรมที่มีมิติ (Foreground / Subject / Background) และการปรับโทนสีที่ดูสะอาด สดใส เหมาะกับภาพลักษณ์ทางวิชาการของโรงเรียน",
          challengesSolutions: {
            challenge: "สภาพแสงในหอประชุมและหน้าจอโปรเจกเตอร์ที่มีความเปรียบต่างของแสง (Contrast) สูง ทำให้ตัวบุคคลมืดหรือหน้าจอสว่างเกินไป",
            solution: "ควบคุมการวัดแสงแบบ Manual บนกล้อง Mirrorless ควบคู่กับการดึงรายละเอียดแสงเงาและปรับสมดุลสีในขั้นตอน Color Grading"
          },
          resultsEvaluation: "ภาพถ่ายถูกนำไปใช้เป็นสื่อประชาสัมพันธ์หลักของโครงการและโรงเรียนอย่างต่อเนื่องตลอดช่วงปี พ.ศ. 2567–2569",
          lessonsLearned: "ฝึกสายตาด้าน Visual Hierarchy การสังเกตอารมณ์ของผู้คน และการจัดการสี ซึ่งเป็นพื้นฐานสำคัญของการออกแบบประสบการณ์ดิจิทัล (Digital Experience Design)",
          futureImprovements: "ผสานเทคนิคการประมวลผลภาพด้วย AI (AI Image Enhancement & Culling) เพื่อช่วยให้การคัดแยกและปรับแต่งภาพจำนวนมากรวดเร็วยิ่งขึ้น"
        },
        en: {
          badge: "LEAD EVENT PHOTOGRAPHER • MAY 2024 – MAY 2026",
          date: "May 2567 – May 2569 (2024–2026)",
          category: "Photography • Framing • Color Grading",
          title: "Academic Event Photography & Visual Media Production",
          shortDesc: "Served as main photographer documenting school events, academic camps, and ceremonies for official digital PR, utilizing Sony Mirrorless cameras, intentional framing, and color grading.",
          roleBadge: "Lead Event Photographer & Colorist",
          tech: ["Sony Mirrorless System", "Framing & Composition", "Color Grading", "Digital PR Media"],
          metrics: [
            { label: "Active Period", value: "2024 – 2026" },
            { label: "Camera System", value: "Sony Mirrorless" },
            { label: "Core Craft", value: "Framing & Grading" },
            { label: "Purpose", value: "Institutional PR" }
          ],
          overview: "Served as a lead photographer capturing academic camps, school ceremonies, and student activities at Sa Kaeo School, delivering color-graded visual archives for institutional digital public relations.",
          backgroundProblem: "School ceremonies and academic camps take place across challenging lighting environments—from bright outdoor fields to dim auditoriums with harsh projector screens. Delivering cohesive, expressive public relations imagery requires manual camera mastery and consistent post-production color grading.",
          objectives: [
            "Capture authentic moments, speaker presentations, and group milestones across school events and academic camps.",
            "Apply consistent framing and color grading so photo albums strengthen the school's digital media presence."
          ],
          targetUsers: "Sa Kaeo School public relations channels, TOP STAR program archives, faculty, and students.",
          roleAndResponsibilities: {
            groupNotice: "Served as lead photographer and post-production colorist for school events and TOP STAR camps.",
            groupScope: "Coordinated with event organizers and PR administrators to cover key program moments.",
            individualFocus: [
              "Operated Sony Mirrorless cameras across diverse indoor and outdoor lighting conditions.",
              "Applied intentional framing and composition to highlight both human emotion and academic context.",
              "Performed post-shoot culling and color grading to prepare cohesive photo sets for digital publication."
            ]
          },
          process: [
            "Step 1 — Venue & Lighting Assessment: Evaluated auditorium and outdoor lighting setups to configure Sony Mirrorless exposure parameters.",
            "Step 2 — Event Coverage & Framing: Captured wide contextual compositions alongside candid student learning moments.",
            "Step 3 — Culling & Color Grading: Balanced exposure, white balance, and color tones across full event galleries."
          ],
          technologies: [
            { name: "Sony Mirrorless Cameras", reason: "Provided fast autofocus, low-light flexibility, and dynamic range for post-processing." },
            { name: "Framing & Visual Composition", reason: "Guided viewer attention naturally across complex group and lecture hall scenes." },
            { name: "Color Grading Tools", reason: "Unified mixed lighting conditions into a clean, professional visual tone." }
          ],
          designImplementation: "Focused on balanced geometric framing and natural, vibrant color grading tailored for online school publications.",
          challengesSolutions: {
            challenge: "High-contrast auditorium lighting where stage projectors often blow out highlights while leaving audiences in shadow.",
            solution: "Used manual exposure control to protect projector screen legibility and recovered shadow detail during color grading."
          },
          resultsEvaluation: "Delivered hundreds of curated, color-graded photographs used across Sa Kaeo School and Sk-Top STAR digital channels from 2024 to 2026.",
          lessonsLearned: "Sharpened my eye for visual hierarchy, composition, and color harmony—skills that directly inform my UI/UX and digital experience design work.",
          futureImprovements: "Explore AI-assisted photo culling and automated color-matching pipelines for faster large-event delivery."
        }
      }
    ];

    