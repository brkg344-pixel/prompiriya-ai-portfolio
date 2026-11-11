# แผนพัฒนาเว็บไซต์ Personal Portfolio

> เอกสารแนวทางสำหรับพัฒนาเว็บไซต์ Portfolio แบบ Interactive โดยอ้างอิงจากแผนเดิมและ React components ที่ผู้ใช้ให้มา  
> **แนวทางภาพรวม:** Professional + Futuristic — Dark premium glass, มีความน่าเชื่อถือแบบผู้สมัครมหาวิทยาลัย ผสานความคิดสร้างสรรค์และเทคโนโลยี AI  
> **เทคโนโลยีหลัก:** Next.js, React, TypeScript, Tailwind CSS และ shadcn/ui

---

## 1. เป้าหมายของเว็บไซต์

สร้างเว็บไซต์ Portfolio เพื่อใช้ประกอบการสมัครเข้าศึกษาต่อระดับมหาวิทยาลัย โดยหน้าแรกเป็น One-page ที่เล่าเรื่องตัวตนและศักยภาพอย่างกระชับ และมีหน้า Project Detail แยกสำหรับอธิบายผลงานเชิงลึก โดยต้อง:

- สื่อภาพลักษณ์ Professional + Futuristic ให้เห็นมุม Developer, Designer, Creative Technologist และ AI Engineer โดยไม่กล่าวอ้างประสบการณ์เกินจริง
- ช่วยให้คณะกรรมการเห็นความสนใจด้าน AI, Data, UX/UI, การพัฒนาเว็บ และการสร้างสื่ออย่างเป็นรูปธรรม
- นำเสนอข้อมูลแบบไทยและอังกฤษ (TH/EN) โดยมีคุณภาพและความหมายสอดคล้องกัน
- ใช้งานได้ดีทั้ง Desktop, Tablet และ Mobile
- แสดงผลงานเป็นกรณีศึกษา (Project Case Study) ได้
- มี Interactive Effects และ Animation ในระดับจัดเต็ม แต่ต้องไม่บดบังผลงาน ไม่ทำให้การอ่านช้าลง และต้องมีทางเลือกสำหรับผู้ใช้ที่ลดการเคลื่อนไหว
- โหลดเร็วและเข้าถึงข้อมูลสำคัญได้ทันที แม้ปิด JavaScript หรือใช้เครือข่ายช้าในส่วนที่ทำได้
- แก้ไขข้อมูลและเพิ่มผลงานในอนาคตได้ง่าย
- ใช้ข้อมูลจริงจาก Portfolio ของเจ้าของเว็บไซต์เท่านั้น ห้ามแต่งประวัติ รางวัล ตัวเลข หรือผลงานขึ้นเอง

## 1.1 ข้อมูลยืนยันจากเจ้าของเว็บไซต์

| หัวข้อ | ข้อมูลที่ใช้ในแผน |
|---|---|
| ชื่อภาษาไทย | นายพรหมพิริยะ เพชรยังพูล |
| ชื่อภาษาอังกฤษ | Mr. Prompiriya Phetyangphul |
| ชื่อแสดงผลแบบสั้น | Prompiriya Phetyangphul |
| ชื่อเล่น | บูม / Boom |
| ภาพลักษณ์ | Professional + Futuristic |
| โครงสร้าง | Hybrid: One-page Homepage + Project Detail pages |
| Motion | จัดเต็ม พร้อม Interactive Effects และ Animation |
| ภาษา | ไทยและอังกฤษ |
| วัตถุประสงค์ | ใช้ยื่นสมัครเข้ามหาวิทยาลัย |
| กลุ่มผู้ชมหลัก | คณะกรรมการ/อาจารย์ผู้พิจารณาแฟ้มสะสมผลงาน และผู้สนใจผลงาน |

**แนวทางแนะนำตัว (ร่างเพื่อพัฒนาต่อ):**  
“ผมสนใจการประยุกต์ใช้ AI และเทคโนโลยีดิจิทัลเพื่อสร้างเครื่องมือและประสบการณ์ที่ใช้งานได้จริง โดยผสานการพัฒนาเว็บ การออกแบบ และความคิดสร้างสรรค์ เป้าหมายของผมคือพัฒนาตนเองไปสู่การเป็น AI Developer, AI Designer, Creative Technologist หรือ AI Engineer”

ข้อความนี้เป็นร่างจากข้อมูลที่ให้ไว้ ควรปรับให้เป็นน้ำเสียงของเจ้าของเว็บไซต์ก่อนเผยแพร่

## 1.2 ข้อมูลจาก Portfolio PDF ฉบับที่อัปโหลด

เอกสารชื่อ **Portfolio ศิลปากร (2).pdf** มี 12 หน้า และระบุเป้าหมายการสมัครใน **สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล คณะเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศิลปากร** (หน้าปกและคำนำ)

ข้อมูลที่นำไปจัดหน้าเว็บได้จากเอกสาร:
- **การศึกษา:** โรงเรียนสระแก้ว ห้องเรียนพิเศษ TOP STAR; มัธยมปลาย GPA 3.58 และมัธยมต้น GPA 3.45; เอกสารระบุคาดว่าจะสำเร็จการศึกษาปี 2569 (หน้า 5)
- **ผลการเรียนรายกลุ่มสาระ (5 ภาคเรียน):** คณิตศาสตร์ 3.40, วิทยาศาสตร์และเทคโนโลยี 3.56, ภาษาต่างประเทศ 3.50 (หน้า 5)
- **ทักษะ/ความสนใจที่ระบุ:** พัฒนาเว็บแอปพลิเคชันและ Chrome Extension, ใช้งานและปรับแต่ง Local AI, จัดการ Personal Cloud Server, ตัดต่อวิดีโอด้วย DaVinci Resolve, ถ่ายภาพ และศึกษาวิศวกรรมยานยนต์ (หน้า 4)
- **ผลงาน DCA Simulator:** เว็บไซต์จำลองการออมและลงทุนด้วยอนุกรมเรขาคณิต มี Real-time calculation, Stress Test และ Goal Seeker; ใช้ HTML/CSS/JavaScript, Chart.js และ AI tools ได้แก่ Gemini, Claude และ ChatGPT; เอกสารระบุคะแนนความพึงพอใจ 4.60/5.00 และการเทียบผลคำนวณกับ Microsoft Excel (หน้า 6, 10–11)
- **บทบาทใน DCA Simulator:** เป็นงานกลุ่ม 3 คน โดยเอกสารระบุว่าร่วมดำเนินการหลายส่วน ตั้งแต่ค้นคว้า ออกแบบ UI ใช้ AI ช่วยสร้างอัลกอริทึม ทดสอบกับเพื่อน และเก็บคะแนนความพึงพอใจ (หน้า 11) ควรอธิบายส่วนที่ผู้สมัครรับผิดชอบจริงให้ชัดก่อนทำเป็น case study
- **Organ Donation Media Contest:** ผลิตสื่อวิดีโอรณรงค์การบริจาคอวัยวะ โดยใช้ทักษะ Video Editing, Visual Storytelling, การคุมโทนสีและเสียง (หน้า 6)
- **Sk-Top STAR:** ดูแลเพจ Facebook ประชาสัมพันธ์โครงการห้องเรียนพิเศษ TOP STAR และใช้ Meta Business Suite สร้างสรรค์ภาพถ่าย กราฟิก และวิดีโอ (หน้า 7)
- **Photography / Media:** ถ่ายภาพกิจกรรม ค่ายวิชาการ และงานพิธีการ พร้อมทักษะกล้อง Mirrorless (Sony), Framing และ Color Grading (หน้า 7)
- **กิจกรรม/เกียรติบัตร:** AI Playground (ICT มหาวิทยาลัยมหิดล), ค่ายคบเด็กสร้างหนัง ปี 9, Lab-to-Launch (TOP STAR), และโครงการ “Say Hi น้องเต่า ช่วย SAVE สัตว์ทะเล” (หน้า 8–9)
- **แนวคิดใน Statement:** สนใจการทำให้ AI เข้าถึงคนง่ายขึ้น การควบคุม/ปรับปรุงการทำงานของ AI และการออกแบบ UX/UI ให้ใช้งานง่าย รวมถึงการต่อยอดความรู้ด้าน AI, Data และ UX/UI (หน้า 12)

**ข้อควรตรวจสอบก่อนเผยแพร่:** ข้อมูลใน PDF เป็นข้อมูล ณ วันที่จัดทำเอกสาร (คำนำลงวันที่ 29 ตุลาคม 2569) ควรตรวจสอบ GPA, สถานะการศึกษา, ลิงก์ QR/Demo และรายละเอียดผลงานอีกครั้งก่อนนำขึ้นเว็บ

## 1.3 ข้อมูลที่ยังรอการยืนยัน

- รายละเอียดความรับผิดชอบรายบุคคลในแต่ละผลงาน โดยเฉพาะงานกลุ่ม DCA Simulator
- ลิงก์ Demo/GitHub ที่ยังใช้งานได้จริง และสิทธิ์ในการเผยแพร่ภาพ/วิดีโอ
- Facebook URL ที่ถูกต้อง (ข้อความ ID ที่ให้มายังไม่ใช่ URL ที่ยืนยันได้)
- จะเปิดเผย LINE ผ่าน LINE ID หรือช่องทาง QR แทนเบอร์โทรหรือไม่
- รูปโปรไฟล์จาก ZIP ได้ระบุชื่อไฟล์ไว้แล้ว แต่ควรตรวจภาพและเลือก crop/เวอร์ชันที่เหมาะกับ Hero อีกครั้ง
- เนื้อหาภาษาอังกฤษควรผ่านการตรวจคำศัพท์และไวยากรณ์ก่อนเผยแพร่

---

## 2. Visual Direction และ Design System

### 2.1 โทนสี

ใช้สีดำเป็นพื้นหลัก และใช้สีอื่นเป็น accent ตามความเหมาะสม ไม่ควรใช้ทุกสีในสัดส่วนเท่ากัน

| บทบาท | สี | ตัวอย่าง |
|---|---|---|
| Main background | ดำอมกรมท่า | `#070910` |
| Surface / Card | ดำเทา | `#111522` |
| Green accent | เขียว | `#35E6A1` |
| Purple accent | ม่วง | `#9B7BFF` |
| Blue accent | น้ำเงิน | `#4D8DFF` |
| Primary text | ขาว | `#F5F7FF` |
| Secondary text | เทาอมฟ้า | `#A5AEC2` |
| Border | เทาเข้ม | `#293044` |

**กฎการใช้สี**
- พื้นหลังหลักต้องมืดและเรียบ เพื่อให้เนื้อหาเด่น
- ใช้เขียวกับสถานะสำเร็จ ปุ่มหลัก หรือจุดเน้นเล็กน้อย
- ใช้ม่วงและน้ำเงินกับแสง Ambient, Gradient และรายละเอียดตกแต่ง
- ใช้สีขาวกับหัวข้อและข้อความสำคัญ
- ตรวจสอบ contrast ให้อ่านได้จริง ห้ามใช้ข้อความสีจางบนพื้นหลังที่ใกล้เคียงกัน

### 2.2 รูปแบบภาพและองค์ประกอบ

- Glassmorphism แบบพอดี: พื้นผิวโปร่งใส เบลอ และเส้นขอบบาง
- Gradient glow สีเขียว/ม่วง/น้ำเงิน ใช้เป็นแสงด้านหลัง ไม่ใช้แทนพื้นผิวอ่านข้อความ
- Card มุมโค้งสม่ำเสมอ
- ใช้ whitespace เพื่อให้หน้าไม่อึดอัด
- ใช้ฟอนต์ที่รองรับภาษาไทยและอังกฤษ เช่น Noto Sans Thai หรือ IBM Plex Sans Thai
- ไอคอนใช้ `lucide-react` ให้เป็นชุดเดียวกัน

### 2.3 Motion Direction

ใช้ Animation และ Interactive Effects ในระดับจัดเต็ม โดยยังให้เนื้อหาเป็นพระเอก:
- Fade/slide เมื่อ section เข้าสู่ viewport
- Hover glow และยกการ์ดขึ้นเล็กน้อย
- Smooth scrolling
- Navbar เปลี่ยนพื้นผิวเมื่อเลื่อนหน้า
- Loading animation แบบสั้นและข้ามได้
- Interactive project cards, magnetic/tilt hover แบบพอดี, animated counters เฉพาะตัวเลขที่มีหลักฐาน, timeline reveal, image lightbox และ transition ระหว่างหน้า
- ใช้ Framer Motion อย่างมีระบบ แยก animation variants และหลีกเลี่ยงการทำ animation หนักกับทุก element พร้อมกัน

ต้องรองรับ `prefers-reduced-motion` และไม่ทำให้ผู้ใช้ต้องรอ Animation ก่อนเข้าถึงเนื้อหา

---

## 3. โครงสร้างเว็บไซต์และเนื้อหา

ใช้โครงสร้าง Hybrid: หน้าแรกเป็น One-page แบบ Section-based สำหรับภาพรวมทั้งหมด พร้อมหน้า Project Detail แยกแต่ละผลงานเพื่อเล่ากระบวนการคิดและบทบาทอย่างละเอียด

### 3.1 Home / Hero
- ชื่อไทย/อังกฤษ: นายพรหมพิริยะ เพชรยังพูล / Mr. Prompiriya Phetyangphul (ชื่อที่ใช้บนเว็บ: Prompiriya Phetyangphul)
- ชื่อเล่น: บูม / Boom
- บทบาทเชิงความสนใจ: AI, Software & Web Development, Design, Creative Technology
- ข้อความแนะนำตัวสั้น ๆ ที่สื่อว่าเป็นผู้เรียนรู้และทดลองนำ AI มาประยุกต์สร้างเครื่องมือและประสบการณ์ดิจิทัล
- คำแนะนำตัวสั้น ๆ ที่มาจากข้อมูลจริง
- CTA หลัก: “สำรวจผลงาน / Explore Projects” และ “ดาวน์โหลด Portfolio PDF”
- CTA รอง: “เกี่ยวกับผม / About Me” และ “ติดต่อ / Contact”
- รูปโปรไฟล์หรือภาพประกอบที่ได้รับอนุญาตให้ใช้
- ฉากหลัง Gradient glow แบบเคลื่อนไหวเบา ๆ

### 3.2 About Me
- ประวัติย่อ
- ความสนใจ
- จุดเด่นและแนวทางการเรียนรู้
- ความสนใจ: การประยุกต์ใช้ AI ในการทำงาน การสร้างอาชีพ และการสร้างรายได้ด้วยทักษะเทคโนโลยี
- เป้าหมายอาชีพที่สนใจ: AI Developer, AI Designer, Creative Technologist และ AI Engineer (นำเสนอเป็นเป้าหมายการพัฒนา ไม่ใช่ตำแหน่งงานที่เคยทำ)

### 3.3 Education
- สถานศึกษา
- ระดับชั้น/หลักสูตร
- ช่วงปีการศึกษา
- ข้อมูลอื่นที่มีอยู่ในเอกสารต้นฉบับเท่านั้น

### 3.4 Skills
จัดกลุ่มทักษะตามข้อมูลจริง เช่น:
- Technical Skills
- Creative / Media Skills
- Communication
- Tools & Software

ไม่ควรใส่เปอร์เซ็นต์ความสามารถโดยไม่มีหลักฐานหรือเกณฑ์วัดที่ชัดเจน

### 3.5 Projects
แสดงเป็น Card พร้อม:
- ชื่อโครงงาน
- ประเภท
- คำอธิบายสั้น
- บทบาทที่ทำจริง
- เทคโนโลยี/เครื่องมือที่ใช้จริง
- ภาพตัวอย่าง
- ลิงก์ Demo หรือ Repository ถ้ามี

หน้า Project Detail ควรอธิบาย:
1. ปัญหาหรือโจทย์
2. แนวคิดและเป้าหมาย
3. กระบวนการทำงาน
4. บทบาทและสิ่งที่รับผิดชอบ
5. เครื่องมือที่ใช้
6. ผลลัพธ์และสิ่งที่ได้เรียนรู้

### 3.6 Certificates & Activities
- แสดงภาพเกียรติบัตรหรือกิจกรรม
- กดภาพเพื่อดูขนาดใหญ่ได้
- แสดงชื่อ วันที่ และหน่วยงานเฉพาะเมื่อมีข้อมูลยืนยัน
- มีตัวกรองหมวดหมู่ได้เมื่อมีรายการมากพอ
- รองรับภาษาไทย/อังกฤษสำหรับชื่อ คำอธิบาย และ metadata
- เปิดดูภาพเกียรติบัตรแบบ Lightbox ได้ และมีคำอธิบายข้อความเพื่อการเข้าถึง

### 3.7 Contact
- อีเมลหรือช่องทางที่เจ้าของต้องการเผยแพร่
- Social links ที่ตรวจสอบแล้ว (Facebook ID/URL ต้องยืนยันให้ชัดก่อนเปิดใช้งาน)
- อีเมลที่ผู้ใช้ระบุ: `brkg344@gmail.com`
- ไม่แสดงที่อยู่ วันเกิด หรือเบอร์โทรส่วนตัวในหน้าเว็บสาธารณะโดยอัตโนมัติ; ใช้อีเมลหรือแบบฟอร์มติดต่อเป็นช่องทางหลัก
- ปุ่ม Copy email
- Contact form เฉพาะเมื่อมี backend หรือบริการรับข้อความที่ตั้งค่าแล้ว

### 3.8 Footer
- ชื่อ/โลโก้ย่อ
- ลิงก์นำทาง
- Copyright
- กลับขึ้นด้านบน

---

### 3.9 แนวทางสองภาษา (Thai / English)

- ใช้ระบบ locale เช่น `/th` และ `/en` หรือใช้ routing ที่กำหนด locale ชัดเจนตั้งแต่ต้น
- มี language switcher ที่เห็นได้ชัดใน Navbar และจดจำภาษาที่ผู้ใช้เลือกใน session/cookie ตามความเหมาะสม
- แยกเนื้อหาออกจาก component เป็น data dictionary เช่น `src/messages/th.json` และ `src/messages/en.json`
- ไม่ใช้การแปลอัตโนมัติแบบสดบนหน้าเว็บสำหรับข้อความสำคัญ เช่น Statement, Project Case Study และคำอธิบายบทบาท
- รักษาความหมายของข้อมูลทั้งสองภาษาให้ตรงกัน โดยภาษาไทยเป็นต้นฉบับหลักได้
- ตั้งค่า `lang`, metadata, canonical และ `hreflang` ให้ถูกต้องสำหรับแต่ละภาษา

### 3.10 ลำดับการเล่าเรื่องสำหรับการยื่นมหาวิทยาลัย

ลำดับที่แนะนำบนหน้าแรก:
1. **Hero:** ชื่อ, ภาพโปรไฟล์, ความสนใจด้าน AI/Technology และ CTA
2. **About / Direction:** แรงจูงใจและเป้าหมายการเรียนรู้
3. **Featured Projects:** เน้น DCA Simulator เป็นผลงานหลัก พร้อมลิงก์อ่านรายละเอียด
4. **Other Works:** Media Contest, Sk-Top STAR และ Photography
5. **Education:** โรงเรียน แผนการเรียน และผลการเรียนที่ยืนยันแล้ว
6. **Skills & Tools:** แสดงเป็นหมวดหมู่ ไม่ใช้แถบเปอร์เซ็นต์ที่ไม่มีหลักฐาน
7. **Certificates & Activities:** หลักฐานการเข้าร่วมและการเรียนรู้
8. **Statement / Future Direction:** เชื่อมความสนใจ AI, Data, UX/UI กับสาขาที่สมัคร
9. **Contact / Download:** อีเมลและดาวน์โหลด Portfolio PDF

หน้าแรกต้องทำให้กรรมการเข้าใจภายในเวลาไม่นานว่าเจ้าของเว็บเป็นใคร สนใจอะไร มีผลงานอะไร และเพราะเหตุใดผลงานเหล่านั้นจึงเกี่ยวข้องกับสาขาที่สมัคร

## 4. Navigation

ใช้ Floating Glass Navbar ที่อยู่ด้านบนของหน้า:
- Desktop: โลโก้ทางซ้าย เมนูทางขวา
- Mobile: เมนูย่อหรือ Expandable Tabs
- แสดง Active Section
- คลิกแล้วเลื่อนไปยัง section ที่เกี่ยวข้อง
- เมื่อ scroll ให้เพิ่มพื้นหลังโปร่งแสงและ blur
- ทุกปุ่มต้องมีชื่อที่ screen reader เข้าใจ และใช้งานด้วย keyboard ได้

`ExpandableTabs` ในเอกสารนี้เป็น component สำหรับแถบเมนูแบบขยายชื่อเมื่อเลือก ไม่ใช่ระบบ routing โดยอัตโนมัติ ต้องเชื่อม `onChange` เข้ากับการเลื่อน section หรือ navigation เอง

---

## 5. เทคโนโลยีและการตั้งค่าโปรเจกต์

### 5.1 Stack ที่แนะนำ

- **Next.js App Router:** โครงสร้างแอปและ routing
- **React + TypeScript:** Component และ type safety
- **Tailwind CSS:** Styling และ responsive layout
- **shadcn/ui:** แนวทางจัดเก็บและปรับแต่ง UI components
- **Motion for React (`framer-motion`):** Animation
- **lucide-react:** Icons
- **usehooks-ts:** Utility hooks เช่น click outside
- **Vercel:** Deployment (เลือกใช้ได้)

### 5.2 ตรวจสอบโปรเจกต์เดิมก่อนแก้ไข

อย่าสร้างโปรเจกต์ใหม่ทับของเดิม ให้ตรวจสอบ:
- `package.json`
- `src/app` หรือ `app`
- `src/components` หรือ `components`
- `src/app/globals.css` หรือไฟล์ CSS หลัก
- `tsconfig.json`
- `components.json` (ถ้ามี)
- Tailwind config ตามเวอร์ชันที่ใช้อยู่

หากโปรเจกต์เดิมเป็น Next.js + TypeScript + Tailwind อยู่แล้ว ให้คงโครงสร้างเดิมและติดตั้งเฉพาะ dependency ที่ขาด

### 5.3 shadcn/ui และโฟลเดอร์ `/components/ui`

ใช้ shadcn CLI เพื่อกำหนดโครงสร้างและ utility ให้ตรงกับโปรเจกต์ปัจจุบัน โดยตรวจสอบคำสั่งล่าสุดจากเอกสาร shadcn หาก CLI รุ่นที่ติดตั้งมี syntax ต่างออกไป

ตัวอย่างเริ่มต้นสำหรับโปรเจกต์ใหม่:

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app
cd portfolio
npx shadcn@latest init
```

ถ้ามีโปรเจกต์ Next.js อยู่แล้ว ให้รันจากโฟลเดอร์โปรเจกต์:

```bash
npx shadcn@latest init
```

จากนั้นตรวจสอบ `components.json` และ alias ใน `tsconfig.json` ให้ตรงกัน เช่น `@/*` ชี้ไปที่ `./src/*` หรือ `./*` ตามโครงสร้างจริง

**เหตุผลที่แนะนำ `/components/ui`:**
- เป็นที่เก็บ UI primitives ที่นำกลับมาใช้ซ้ำได้
- แยก component ทั่วไปออกจาก section เฉพาะของ Portfolio
- import path สม่ำเสมอ เช่น `@/components/ui/liquid-glass-button`
- สอดคล้องกับ convention ที่ shadcn/ui ใช้กันทั่วไป

ถ้าโปรเจกต์ใช้ `src/` ให้ใช้ `src/components/ui/` ได้ ไม่จำเป็นต้องย้ายโฟลเดอร์ทั้งหมด เพียงตั้ง alias และ import ให้ตรงกัน

### 5.4 Dependencies

ติดตั้งเฉพาะแพ็กเกจที่ component ใช้:

```bash
npm install @radix-ui/react-slot class-variance-authority framer-motion usehooks-ts lucide-react
```

shadcn project มักมี `clsx`, `tailwind-merge` และ utility `cn` อยู่แล้ว หากไม่มีให้ติดตั้ง:

```bash
npm install clsx tailwind-merge
```

ตรวจสอบว่ามี `cn` ใน `src/lib/utils.ts` หรือ `lib/utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 6. การติดตั้ง React Components

### 6.1 Liquid Glass Button และ Metal Button

บันทึกไฟล์เป็น:

`src/components/ui/liquid-glass-button.tsx`

โค้ดด้านล่างปรับจากต้นฉบับให้ใช้งานได้เป็นระเบียบขึ้น:
- ตัด export ที่อ้างถึงตัวแปรซึ่งประกาศภายหลังออกจากตำแหน่งเดิม
- ใช้ `forwardRef` กับ LiquidButton
- ส่งต่อ event handlers ของ MetalButton โดยไม่เขียนทับ handler จากผู้ใช้
- เพิ่ม `type="button"` เป็นค่าเริ่มต้นเพื่อป้องกันการ submit form โดยไม่ตั้งใจ
- ยังคงใช้ SVG filter สำหรับเอฟเฟกต์ glass แต่ควรทดสอบ browser support จริง

```tsx
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "border border-primary/50 bg-gradient-to-t from-primary to-primary/85 text-primary-foreground shadow-md shadow-primary/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow,transform] focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent text-primary transition duration-300 hover:scale-105",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 gap-1.5 px-4 text-xs",
        lg: "h-10 px-6",
        xl: "h-12 px-8",
        xxl: "h-14 px-10",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "xxl" },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        data-slot="liquid-button"
        className={cn("relative isolate overflow-hidden rounded-md", liquidbuttonVariants({ variant, size, className }))}
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/20 bg-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_18px_rgba(0,0,0,0.18)] backdrop-blur-xl"
        />
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/20 via-transparent to-primary/10 opacity-70" />
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

type ColorVariant = "default" | "primary" | "success" | "error" | "gold" | "bronze";

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const colorVariants: Record<ColorVariant, { outer: string; inner: string; button: string; textColor: string; textShadow: string }> = {
  default: {
    outer: "bg-gradient-to-b from-black to-zinc-400",
    inner: "bg-gradient-to-b from-zinc-100 via-zinc-700 to-zinc-200",
    button: "bg-gradient-to-b from-zinc-400 to-zinc-500",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
  },
  primary: {
    outer: "bg-gradient-to-b from-blue-950 to-blue-400",
    inner: "bg-gradient-to-b from-blue-200 via-blue-900 to-blue-100",
    button: "bg-gradient-to-b from-blue-500 to-blue-800",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]",
  },
  success: {
    outer: "bg-gradient-to-b from-emerald-950 to-emerald-300",
    inner: "bg-gradient-to-b from-emerald-100 via-emerald-900 to-emerald-100",
    button: "bg-gradient-to-b from-emerald-300 to-emerald-700",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]",
  },
  error: {
    outer: "bg-gradient-to-b from-red-950 to-red-300",
    inner: "bg-gradient-to-b from-red-100 via-red-900 to-red-100",
    button: "bg-gradient-to-b from-red-300 to-red-700",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(127_29_29_/_100%)]",
  },
  gold: {
    outer: "bg-gradient-to-b from-yellow-900 to-yellow-200",
    inner: "bg-gradient-to-b from-yellow-100 via-yellow-800 to-yellow-100",
    button: "bg-gradient-to-b from-yellow-200 to-yellow-700",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(120_80_0_/_100%)]",
  },
  bronze: {
    outer: "bg-gradient-to-b from-amber-950 to-orange-300",
    inner: "bg-gradient-to-b from-orange-100 via-amber-900 to-orange-100",
    button: "bg-gradient-to-b from-orange-200 to-amber-700",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]",
  },
};

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", type = "button", onMouseDown, onMouseUp, onMouseLeave, onMouseEnter, onTouchStart, onTouchEnd, onTouchCancel, ...props }, ref) => {
    const [pressed, setPressed] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);
    const colors = colorVariants[variant];

    React.useEffect(() => {
      setIsTouchDevice(
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
      );
    }, []);

    return (
      <span
        className={cn("relative inline-flex rounded-md p-[1.25px] transition-transform duration-200", colors.outer)}
        style={{
          transform: pressed ? "translateY(2px) scale(.99)" : "translateY(0) scale(1)",
          boxShadow: pressed ? "0 1px 2px rgba(0,0,0,.15)" : hovered && !isTouchDevice ? "0 4px 12px rgba(0,0,0,.12)" : "0 3px 8px rgba(0,0,0,.08)",
        }}
      >
        <span aria-hidden="true" className={cn("absolute inset-[1px] rounded-md", colors.inner)} />
        <button
          ref={ref}
          type={type}
          className={cn("relative z-10 m-px inline-flex h-11 items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-white", colors.button, colors.textColor, colors.textShadow, className)}
          style={{ transform: pressed ? "scale(.97)" : "scale(1)", transition: "transform 250ms cubic-bezier(.1,.4,.2,1)" }}
          onMouseDown={(event) => { setPressed(true); onMouseDown?.(event); }}
          onMouseUp={(event) => { setPressed(false); onMouseUp?.(event); }}
          onMouseLeave={(event) => { setPressed(false); setHovered(false); onMouseLeave?.(event); }}
          onMouseEnter={(event) => { if (!isTouchDevice) setHovered(true); onMouseEnter?.(event); }}
          onTouchStart={(event) => { setPressed(true); onTouchStart?.(event); }}
          onTouchEnd={(event) => { setPressed(false); onTouchEnd?.(event); }}
          onTouchCancel={(event) => { setPressed(false); onTouchCancel?.(event); }}
          {...props}
        >
          <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300", pressed ? "opacity-20" : "opacity-0")} />
          <span className="relative">{children ?? "Button"}</span>
          {hovered && !pressed && !isTouchDevice && (
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-t from-transparent to-white/10" />
          )}
        </button>
      </span>
    );
  }
);
MetalButton.displayName = "MetalButton";

export { buttonVariants, liquidbuttonVariants };
```

**หมายเหตุการปรับ Liquid Glass:** โค้ดต้นฉบับใช้ SVG displacement filter ผ่าน `backdrop-filter: url("#container-glass")` ซึ่ง browser support ไม่สม่ำเสมอ และ filter อาจไม่ให้ผลเหมือนกันทุกเครื่อง เวอร์ชันในเอกสารนี้ใช้ `backdrop-blur` และ highlight แบบ CSS เพื่อความเสถียรและประสิทธิภาพ หากต้องการ distortion แบบ SVG จริง ให้ทดลองแยกเป็น progressive enhancement และมี fallback เสมอ

### 6.2 Expandable Tabs

บันทึกไฟล์เป็น:

`src/components/ui/expandable-tabs.tsx`

ติดตั้ง dependencies ที่เกี่ยวข้องตามข้อ 5.4 (`framer-motion`, `usehooks-ts`, `lucide-react`)

```tsx
"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

export type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  ariaLabel?: string;
}

const buttonVariants = {
  initial: { gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" },
  animate: (selected: boolean) => ({
    gap: selected ? ".5rem" : 0,
    paddingLeft: selected ? "1rem" : ".5rem",
    paddingRight: selected ? "1rem" : ".5rem",
  }),
};

const labelVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { type: "spring" as const, bounce: 0, duration: 0.45 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
  ariaLabel = "Main navigation",
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(rootRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected((current) => {
      const next = current === index ? null : index;
      onChange?.(next);
      return next;
    });
  };

  return (
    <nav
      ref={rootRef}
      aria-label={ariaLabel}
      className={cn(
        "flex flex-wrap items-center gap-1 rounded-2xl border border-white/10 bg-zinc-950/70 p-1 shadow-lg shadow-black/20 backdrop-blur-xl",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <span
              key={`separator-${index}`}
              aria-hidden="true"
              className="mx-1 h-6 w-px bg-white/15"
            />
          );
        }

        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <motion.button
            key={`${tab.title}-${index}`}
            type="button"
            aria-pressed={isSelected}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            custom={isSelected}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex min-h-10 items-center rounded-xl px-3 py-2 text-sm font-medium transition-colors",
              isSelected
                ? cn("bg-white/10", activeColor)
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon size={20} aria-hidden="true" />
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
            <span className="sr-only">{tab.title}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
```

**การใช้งานตัวอย่าง**

สร้างไฟล์ตัวอย่างในตำแหน่งที่เหมาะสม เช่น `src/components/navigation/portfolio-tabs.tsx`:

```tsx
"use client";

import { useCallback } from "react";
import { Home, User, GraduationCap, BriefcaseBusiness, Award, Mail } from "lucide-react";
import { ExpandableTabs, type TabItem } from "@/components/ui/expandable-tabs";

const tabs: TabItem[] = [
  { title: "Home", icon: Home },
  { title: "About", icon: User },
  { title: "Education", icon: GraduationCap },
  { title: "Projects", icon: BriefcaseBusiness },
  { title: "Certificates", icon: Award },
  { title: "Contact", icon: Mail },
];

export function PortfolioTabs() {
  const handleChange = useCallback((index: number | null) => {
    if (index === null) return;
    const tab = tabs[index];
    if (!tab || tab.type === "separator") return;

    const sectionId: Record<string, string> = {
      Home: "home",
      About: "about",
      Education: "education",
      Projects: "projects",
      Certificates: "certificates",
      Contact: "contact",
    };

    document.getElementById(sectionId[tab.title])?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 sm:w-auto">
      <ExpandableTabs tabs={tabs} onChange={handleChange} />
    </div>
  );
}
```

ตัวอย่าง section ต้องมี `id` ตรงกับที่กำหนด เช่น:

```tsx
<section id="home">...</section>
<section id="about">...</section>
<section id="education">...</section>
<section id="projects">...</section>
<section id="certificates">...</section>
<section id="contact">...</section>
```

**ข้อควรพิจารณา:** บนจอเล็กมาก แถบเมนู 6 รายการอาจกว้างเกินไป ให้ทดสอบจริงและอาจเปลี่ยนเป็นเมนูแบบ drawer หรือ horizontal scroll แทน

---

## 7. การนำ Liquid / Metal Buttons ไปใช้ใน Portfolio

ตัวอย่างปุ่ม Hero:

```tsx
import { ArrowDown, Download } from "lucide-react";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <LiquidButton variant="default" size="xl">
        <ArrowDown aria-hidden="true" />
        View Projects
      </LiquidButton>

      <MetalButton variant="primary">
        <Download className="mr-2 size-4" aria-hidden="true" />
        Download Portfolio
      </MetalButton>
    </div>
  );
}
```

ก่อนใช้งานปุ่ม Download ต้องมีไฟล์จริงอยู่ใน `public/documents/portfolio.pdf` และลิงก์ควรชี้ไปยังไฟล์นั้น เช่น `<a href="/documents/portfolio.pdf" download>` หากต้องการให้ดาวน์โหลดโดยตรง ควรใช้ anchor แทน button ที่ไม่มี action

ไม่ควรใช้ MetalButton กับทุกปุ่ม เพราะรูปแบบโลหะมีความเด่นสูง ให้ใช้กับ CTA สำคัญเพียงหนึ่งหรือสองตำแหน่ง ส่วนปุ่มทั่วไปใช้ style ที่เรียบง่ายกว่า

---

## 8. โครงสร้างไฟล์แนะนำ

ตัวอย่างนี้สมมติว่าใช้ `src/` หากโปรเจกต์เดิมไม่มี `src/` ให้ปรับ path ให้ตรงกับของจริง:

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── certificates/
│   │   └── activities/
│   ├── documents/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── liquid-glass-button.tsx
│   │   │   └── expandable-tabs.tsx
│   │   ├── navigation/
│   │   │   └── portfolio-tabs.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── education.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── certificates.tsx
│   │   │   └── contact.tsx
│   │   └── project-card.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── certificates.ts
│   └── lib/
│       └── utils.ts
├── components.json
├── package.json
└── tsconfig.json
```

### การแยกข้อมูลออกจาก UI

เก็บเนื้อหาใน `src/data/` เพื่อให้แก้ข้อมูลได้โดยไม่ต้องแก้โครงสร้าง component ตัวอย่าง:

```ts
export const projects = [
  {
    slug: "project-slug",
    title: "ชื่อโครงงานจาก Portfolio จริง",
    category: "Web Development",
    description: "คำอธิบายที่ตรวจสอบจากเอกสารต้นฉบับ",
    role: ["ระบุบทบาทที่ทำจริง"],
    technologies: ["เครื่องมือที่ใช้จริง"],
    cover: "/images/projects/project-cover.webp",
    links: {
      demo: "",
      repository: "",
    },
  },
];
```

อย่าใช้ตัวอย่างนี้เป็นข้อมูลจริงโดยตรง ให้แทน placeholder ด้วยข้อมูลจาก Portfolio PDF

---

## 9. การเตรียมภาพและวิดีโอ

- ใช้ภาพที่เจ้าของ Portfolio มีสิทธิ์ใช้งาน
- ภาพบุคคลและเอกสารควรได้รับอนุญาตก่อนเผยแพร่
- แปลงภาพเป็น WebP หรือ AVIF เมื่อเหมาะสม
- ใช้ `next/image` สำหรับภาพทั่วไป
- กำหนด `width`, `height` หรือ `fill` ให้ถูกต้อง
- ใช้ภาพปกที่มีขนาดและอัตราส่วนสม่ำเสมอ
- วิดีโอควรมี poster, controls และไม่ autoplay พร้อมเสียง
- หลีกเลี่ยงการโหลดภาพความละเอียดสูงทั้งหมดตั้งแต่หน้าแรก

หากใช้ภาพจาก Unsplash ให้เลือกภาพที่มี URL และ license/เงื่อนไขการใช้งานตรวจสอบได้ อย่าเดา URL ของภาพ และอย่าใช้ภาพ stock แทนภาพผลงานจริงในส่วนที่ต้องแสดงหลักฐาน

---

### 9.1 ไฟล์สื่อที่ได้รับแล้ว

ได้รับไฟล์ ZIP `โฟลเดอร์ใหม่.zip` ซึ่งมีภาพจำนวน 29 ไฟล์โดยประมาณ รวมถึงไฟล์ที่ระบุชัดว่าเป็นรูปโปรไฟล์:
- `รูปโปรไฟล์ที่ต้องการใช้บนหน้าแรก.png`
- ไฟล์ภาพอื่น ๆ เช่น `image2.jpeg`, `image25.png` ถึง `image55.png` (ชื่อไฟล์ต้นฉบับบางเลขไม่ต่อเนื่อง)

**ขั้นตอนก่อนนำขึ้นเว็บไซต์**
1. ทำ contact sheet เพื่อดูภาพทั้งหมดและจัดหมวดหมู่ (Profile, Projects, Activities, Certificates, Screenshots)
2. ตรวจว่าภาพใดเป็นภาพที่ผู้ใช้มีสิทธิ์เผยแพร่ และมีบุคคลอื่นที่ต้องคำนึงถึงความเป็นส่วนตัวหรือไม่
3. เปลี่ยนชื่อไฟล์เป็นชื่อที่สื่อความหมาย และบันทึก alt text ไทย/อังกฤษ
4. แยกภาพต้นฉบับความละเอียดสูงไว้ในโฟลเดอร์ archive; ใช้ภาพ WebP/AVIF ที่ปรับขนาดแล้วบนหน้าเว็บ
5. ไม่ใช้ QR code ใน PDF เป็นลิงก์จริงจนกว่าจะสแกนและตรวจปลายทางทุกอัน

### 9.2 ความเป็นส่วนตัวและข้อมูลติดต่อ

- ใช้อีเมล `brkg344@gmail.com` เป็นช่องทางติดต่อหลักได้ตามที่เจ้าของระบุ
- ยังไม่ควรแสดงเบอร์โทร/เบอร์ที่ใช้กับ LINE บนเว็บไซต์สาธารณะ โดยเฉพาะเมื่อเว็บไซต์เปิดให้บุคคลทั่วไปเข้าถึงได้; เลือกใช้อีเมล, contact form หรือ LINE ID/QR ที่ไม่เปิดเผยหมายเลขแทน
- ข้อความ Facebook ที่ให้มายังไม่ชัดเจนว่าเป็น username หรือชื่อบัญชี ต้องยืนยัน URL ก่อนทำปุ่ม
- ห้ามนำที่อยู่บ้าน วันเกิด เลขประจำตัว หรือข้อมูลส่วนบุคคลที่ไม่จำเป็นจาก PDF ขึ้นเว็บไซต์
- ดาวน์โหลด PDF ฉบับเต็มควรตรวจและทำสำเนาสำหรับเผยแพร่ โดยลบข้อมูลส่วนบุคคลที่ไม่ต้องการเปิดเผยก่อน

## 10. Performance, Accessibility และ SEO

### Performance
- โหลด animation และภาพขนาดใหญ่แบบ lazy เมื่อจำเป็น; หลีกเลี่ยง video background ที่เล่นอัตโนมัติบนมือถือ
- ใช้ `next/image`, responsive sizes, WebP/AVIF และกำหนดขนาดภาพเพื่อลด layout shift
- Animation ที่ซับซ้อนควรใช้ transform/opacity เป็นหลัก และไม่ผูก scroll handler หนัก ๆ
- ใช้ dynamic import กับส่วนที่หนักและไม่จำเป็นต้องโหลดทันที
- จำกัดจำนวน animation ที่ทำงานพร้อมกัน
- ใช้ CSS transform/opacity แทนการ animate layout เมื่อทำได้
- หลีกเลี่ยง video background ขนาดใหญ่
- ตรวจสอบ Lighthouse และ Core Web Vitals
- ใช้ `next/image` และกำหนดขนาดภาพ

### Accessibility
- language switcher ต้องใช้งานด้วย keyboard และมี accessible label
- ปุ่มควบคุม animation หรือ carousel ต้องมีชื่อที่โปรแกรมอ่านหน้าจอเข้าใจ
- เคารพ `prefers-reduced-motion`; ในโหมดนี้ลด/ปิด parallax, auto-play และ transition ที่ไม่จำเป็น
- ใช้ semantic HTML เช่น `header`, `nav`, `main`, `section`, `footer`
- ปุ่มทุกปุ่มต้องมี action และ accessible name
- ภาพที่มีความหมายต้องมี alt text
- ตรวจสอบ keyboard focus
- สีข้อความต้องมี contrast เพียงพอ
- รองรับ `prefers-reduced-motion`
- อย่าใช้สีเพียงอย่างเดียวในการสื่อความหมาย

### SEO
- ทำ metadata แยกภาษาและ Open Graph image สำหรับการแชร์ลิงก์ Portfolio
- ใส่ชื่อผู้สมัคร ชื่อสาขาที่มุ่งสมัคร และคำอธิบายเว็บอย่างเหมาะสม โดยไม่ยัด keyword
- เพิ่ม sitemap, robots และ canonical/hreflang ตามโครงสร้างภาษา
- ตั้ง `title` และ `description` ให้แต่ละหน้า
- ตั้ง Open Graph metadata
- ใช้ heading hierarchy อย่างถูกต้อง
- เพิ่ม favicon
- ตรวจสอบ canonical URL เมื่อมี domain จริง
- ไม่ใส่ข้อมูลส่วนตัวที่ไม่ต้องการเผยแพร่ใน metadata

---

## 11. แผนการพัฒนาเป็น Phase

### Phase 1 — Audit & Content Preparation
- ตรวจ ZIP รูปภาพที่ได้รับและทำ asset manifest ตั้งชื่อไฟล์ใหม่ตามเนื้อหา เช่น `profile`, `dca-dashboard`, `certificate-ai-playground` หลังตรวจภาพจริง
- ตรวจ Portfolio PDF 12 หน้า และยืนยันข้อมูลที่เปลี่ยนแปลงได้ เช่น GPA/สถานะการศึกษา/ลิงก์ผลงาน
- สรุปเนื้อหาไทยและอังกฤษ รวมถึงคำอธิบายบทบาทที่ทำจริง
- ตรวจสอบโครงสร้าง Next.js เดิม
- ตรวจสอบ Tailwind, TypeScript และ shadcn
- อ่านและจัดหมวดหมู่ข้อมูลจาก Portfolio
- เตรียมภาพ เอกสาร และลิงก์
- สรุป Design System

**ผลลัพธ์:** โปรเจกต์เดิมพร้อมพัฒนา และมีข้อมูลที่ตรวจสอบแล้ว

### Phase 2 — Core Layout
- ทำ global styles และ typography
- ทำ Navbar
- ทำ Hero
- ทำ About และ Education
- วาง responsive layout

**ผลลัพธ์:** โครงสร้างหน้าหลักครบ

### Phase 3 — Portfolio Content
- ทำ Skills
- ทำ Project Cards และ Project Detail
- ทำ Certificates Gallery
- ทำ Contact และ Footer
- เชื่อมข้อมูลจาก data files

**ผลลัพธ์:** เนื้อหาจริงแสดงครบ

### Phase 4 — UI Components & Motion
- เพิ่ม interactive effects อย่างเป็นลำดับความสำคัญ และทดสอบบนอุปกรณ์จริง
- ทำ language switcher และตรวจความสอดคล้องของข้อความ TH/EN
- เพิ่ม LiquidButton / MetalButton เฉพาะจุดสำคัญ
- เพิ่ม ExpandableTabs หรือ navigation ที่เหมาะกับจอ
- เพิ่ม hover/fade/reveal animation
- เพิ่ม lightbox หากจำเป็น

**ผลลัพธ์:** เว็บไซต์มี interaction ที่สม่ำเสมอ

### Phase 5 — Testing & Optimization
- ทดสอบ Desktop / Tablet / Mobile
- ทดสอบ keyboard และ screen reader เบื้องต้น
- ตรวจสอบ console errors
- ตรวจสอบ broken links และภาพ
- ตรวจสอบ Lighthouse
- ทดสอบ reduced motion

**ผลลัพธ์:** เว็บไซต์พร้อมเผยแพร่

### Phase 6 — Deployment
- Push ไป GitHub
- ตั้งค่า Vercel
- ตั้งค่า Environment Variables เฉพาะที่จำเป็น
- ตั้งค่า domain หากมี
- ทดสอบ URL จริงทุกหน้า

**ผลลัพธ์:** Portfolio ออนไลน์

---

## 12. คำถามที่ต้องตอบก่อนเริ่ม Integrate

ให้ตรวจสอบคำถามเหล่านี้จาก codebase และข้อมูล Portfolio ก่อนตัดสินใจ ไม่จำเป็นต้องถามผู้ใช้ซ้ำหากคำตอบมีอยู่แล้ว:

1. **ข้อมูล/props:** แต่ละ component ต้องรับข้อมูลอะไรบ้าง? ปุ่มมี label, href หรือ callback?
2. **State:** แท็บที่เลือกต้อง sync กับ section ที่กำลังดูหรือไม่? ต้องปิดเมื่อคลิกนอก component หรือไม่?
3. **Assets:** มีรูปโปรไฟล์ ภาพผลงาน PDF และวิดีโอที่ได้รับอนุญาตให้ใช้แล้วหรือยัง?
4. **Responsive:** Navbar บนมือถือควรเป็น expandable tabs, drawer หรือ menu แบบอื่น?
5. **ตำแหน่งใช้งาน:** LiquidButton ควรใช้กับ CTA ใด? ExpandableTabs ควรใช้เป็น Navbar หรือเมนูเฉพาะส่วน?
6. **Navigation:** ต้องเลื่อน section ในหน้าเดียว หรือเปลี่ยน route ไปหน้าอื่น?
7. **Download:** มี Portfolio PDF เวอร์ชันเผยแพร่จริงแล้วหรือยัง?
8. **Contact:** มี backend หรือ service สำหรับรับข้อความหรือยัง?

---

## 13. Prompt สำหรับมอบหมายให้ AI Coding Agent

คัดลอก prompt นี้ไปใช้กับ AI ที่สามารถอ่านและแก้ไข repository ได้:

```text
You are working on an existing personal portfolio website codebase.

GOAL
Build a polished, responsive personal portfolio website based strictly on the user's supplied portfolio document and the existing project structure.

DESIGN
- Dark futuristic premium visual direction.
- Near-black background with green, purple, blue, and white accents.
- Use restrained glassmorphism, subtle ambient gradients, clean typography, and generous spacing.
- Prioritize readability and real portfolio content over decorative effects.
- Support desktop, tablet, and mobile.
- Respect prefers-reduced-motion.

TECH STACK
- Reuse the existing Next.js, React, TypeScript, and Tailwind setup.
- Follow shadcn/ui conventions.
- Put reusable primitives in components/ui (or src/components/ui when the project uses src).
- Use lucide-react for icons.
- Use framer-motion for motion only where it adds value.
- Use the existing cn utility from lib/utils.
- Do not replace or recreate the project if the current setup already works.

FIRST: AUDIT THE REPOSITORY
1. Inspect package.json, tsconfig.json, components.json, Tailwind configuration, app structure, aliases, and existing components.
2. Identify the actual component and stylesheet paths.
3. Check whether shadcn/ui, Tailwind CSS, and TypeScript are configured.
4. If something is missing, explain the minimal setup steps before changing files.
5. Avoid duplicate dependencies and do not overwrite working configuration.

COMPONENT INTEGRATION
1. Integrate the supplied LiquidButton, MetalButton, and ExpandableTabs components.
2. Place reusable components in the correct components/ui directory.
3. Install only missing dependencies:
   @radix-ui/react-slot, class-variance-authority, framer-motion,
   usehooks-ts, lucide-react, clsx, tailwind-merge.
4. Verify imports, TypeScript types, refs, event handlers, and client component boundaries.
5. Fix compile/runtime issues rather than copying broken exports blindly.
6. Add accessible labels, keyboard focus, semantic elements, and button types.
7. Use LiquidButton or MetalButton sparingly for important calls to action.
8. Use ExpandableTabs only if it works well at the target viewport sizes; otherwise provide a mobile-friendly navigation alternative.

CONTENT
Create sections for:
- Home / Hero
- About
- Education
- Skills
- Projects
- Certificates and Activities
- Contact
- Footer

Use only facts supported by the supplied portfolio. Do not invent names, awards, dates, project results, skills, links, or statistics. If information is missing, use a clearly marked TODO placeholder and report it.

PROJECT DETAIL
Each project should be presented as a case study when source material supports it:
- Overview
- Goal/problem
- Process
- User's actual role
- Tools/technologies
- Outcome
- Media and links

ASSETS
- Use supplied portfolio images first.
- Do not fabricate image URLs.
- If stock imagery is necessary, use verified image sources and keep it out of evidence-sensitive portfolio content.
- Optimize images and use Next.js image handling appropriately.
- Do not autoplay videos with sound.

QUALITY
- Test responsive layouts.
- Test navigation and all button actions.
- Check missing assets and broken links.
- Check TypeScript/build errors.
- Check accessibility, color contrast, reduced motion, metadata, and performance.
- Avoid excessive animation and unnecessary dependencies.

WORKFLOW
1. Report the repository audit.
2. Propose a short implementation plan.
3. Implement in small, coherent steps.
4. Run available lint/typecheck/build commands.
5. Fix issues found.
6. Summarize files changed, dependencies added, tests run, and any remaining TODOs.

Do not stop after creating a visual mockup. Implement working navigation and real interactions.
```

---

## 14. Definition of Done / Checklist

- [ ] ตรวจสอบและใช้โครงสร้างโปรเจกต์เดิมได้
- [ ] TypeScript และ Tailwind ทำงาน
- [ ] shadcn/ui config และ alias ถูกต้อง
- [ ] Components อยู่ใน path ที่ถูกต้อง
- [ ] LiquidButton และ MetalButton compile ผ่าน
- [ ] ExpandableTabs compile และ navigation ทำงาน
- [ ] ข้อมูล Portfolio มาจากเอกสารจริง
- [ ] ทุก section แสดงผลครบ
- [ ] ภาพและ PDF ใช้งานได้
- [ ] ปุ่มทุกปุ่มมี action จริง
- [ ] Responsive ผ่านทั้งมือถือและ Desktop
- [ ] Accessibility และ reduced motion ผ่านการตรวจ
- [ ] ไม่มี console/build errors ที่ยังไม่แก้
- [ ] Deploy และทดสอบ URL จริงแล้ว

---

## 15. ข้อสรุป

ให้เริ่มจากการตรวจสอบโปรเจกต์ Next.js เดิมและจัดข้อมูล Portfolio ให้ถูกต้องก่อน จากนั้นพัฒนาหน้า Home และระบบ Navigation แล้วจึงเพิ่มส่วนผลงานและ Animation

**ลำดับความสำคัญ:** ความถูกต้องของเนื้อหา → UX และ Responsive → ความเร็ว → Visual effects

เว็บไซต์ที่ดีควรทำให้ผู้เข้าชมเข้าใจว่าเจ้าของ Portfolio เป็นใคร ทำอะไรได้ และมีผลงานใดเป็นหลักฐาน ไม่ใช่เพียงมีเอฟเฟกต์ที่สวยงาม


---

## ภาคผนวก A — ข้อมูลติดต่อที่ใช้ในฉบับพัฒนา

- Email: `brkg344@gmail.com`
- Facebook: รอผู้ใช้ยืนยัน URL/username ที่ถูกต้อง
- LINE: รอเลือกวิธีเผยแพร่ที่ปลอดภัยกว่าเบอร์โทร เช่น LINE ID หรือ QR สำหรับเพิ่มเพื่อน
- ไม่ใส่หมายเลขโทรศัพท์หรือที่อยู่บ้านในหน้าเว็บสาธารณะโดยค่าเริ่มต้น

## ภาคผนวก B — สิ่งที่ต้องทำต่อก่อนเริ่มเขียนเว็บไซต์จริง

1. จัดทำ contact sheet จากภาพใน ZIP แล้วจับคู่กับ Projects/Certificates/Activities
2. ตรวจรูปโปรไฟล์และเตรียม crop สำหรับ desktop/mobile
3. ยืนยันบทบาทของตนเองใน DCA Simulator และผลงานกลุ่มอื่น ๆ
4. ส่ง URL Demo/GitHub และยืนยันว่าเปิดเผยต่อสาธารณะได้
5. ยืนยัน Facebook URL และรูปแบบ LINE contact
6. ทำ Portfolio PDF ฉบับ public ที่ไม่มีที่อยู่บ้าน/เบอร์ส่วนตัว/ข้อมูลที่ไม่ต้องการเผยแพร่
7. ตรวจข้อมูลการศึกษาและผลการเรียนล่าสุดก่อน publish
