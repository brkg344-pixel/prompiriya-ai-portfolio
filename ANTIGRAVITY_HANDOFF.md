# คู่มือส่งต่องานไปยัง Google Antigravity (Project Handoff Blueprint)

เอกสารฉบับนี้จัดเตรียมไว้สำหรับการนำโปรเจกต์ **Personal AI Portfolio Website ของนายพรหมพิริยะ เพชรยังพูล (บูม)** เข้าสู่ระบบ **Google Antigravity** (ทั้ง **Antigravity IDE**, **Antigravity 2.0 Desktop App**, **Antigravity VS Code Extension**, และ **Antigravity CLI / Remote Agents**) เพื่อให้ Agent ใน Google Antigravity รับช่วงต่อได้ทันทีโดยไม่ต้องเริ่มวิเคราะห์ไฟล์ใหม่ตั้งแต่ศูนย์

---

## 1. สิ่งที่บรรจุอยู่ในแพ็กเกจ `prompiriya-antigravity-workspace.zip`

ภายในไฟล์ ZIP ได้จัดโครงสร้างเป็น **Google Antigravity Project Workspace** ที่สมบูรณ์พร้อมไฟล์บริบทสำหรับ Agent ดังนี้:

| ไฟล์ / โฟลเดอร์ | บทบาทหน้าที่ใน Google Antigravity |
| :--- | :--- |
| `GEMINI.md` | ไฟล์กฎและบริบทหลักของโปรเจกต์ที่ Agent ใน Google Antigravity จะอ่านอัตโนมัติ (ระบุข้อมูลผู้สมัคร, เป้าหมาย ม.ศิลปากร ICT, กฎห้ามแต่งข้อมูล, กฎความเป็นส่วนตัว และระบบสองภาษา TH/EN) |
| `.antigravity/skills/portfolio-maintainer/SKILL.md` | Agent Skill เฉพาะสำหรับโปรเจกต์นี้ ช่วยให้ Agent รู้ขั้นตอนการอัปเดตข้อมูล TH/EN, การผูก URL จริง และการตรวจสอบความถูกต้องก่อน Deploy |
| `ANTIGRAVITY_HANDOFF.md` | เอกสารส่งต่องานฉบับนี้ พร้อม Prompt สำเร็จรูปสำหรับสั่งงาน Agent ใน Antigravity ต่อได้ทันที |
| `src/` & `public/images/` | โค้ดต้นฉบับ **Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion + Chart.js** พร้อมภาพจริงที่ปรับขนาดแล้วครบทั้ง 28 ไฟล์ |
| `standalone-preview/prompiriya_ai_portfolio.html` | เว็บแอปพลิเคชันฉบับสมบูรณ์แบบไฟล์เดียว (Single-File HTML พร้อมภาพฝังในตัว) สำหรับเปิดทดสอบผ่าน `/browser` ของ Antigravity หรือเปิดดูได้ทันทีโดยไม่ต้องรันเซิร์ฟเวอร์ |
| `docs/DESIGN.md` | เอกสารระบบการออกแบบ **Syntropic Intelligence** (`#080A12`, `#101522`, `#35E6A1`, `#9B7BFF`, `#4D8DFF`, `#F5F7FF`) |

---

## 2. วิธีนำโปรเจกต์เข้าสู่ Google Antigravity (3 ขั้นตอน)

### วิธีที่ 1: เปิดใช้งานใน Google Antigravity IDE หรือ Antigravity 2.0 (บนเครื่องคอมพิวเตอร์)
1. แตกไฟล์ `prompiriya-antigravity-workspace.zip` ลงในโฟลเดอร์บนเครื่องของคุณ
2. เปิดโปรแกรม **Google Antigravity** (หรือ **Antigravity IDE** / **VS Code ที่ติดตั้งส่วนขยาย Google Antigravity**) แล้วเลือก **Open Project / Add Workspace Folder** ไปยังโฟลเดอร์ `prompiriya-antigravity-workspace`
3. เปิดหน้าต่าง **Agent Panel** แล้ววาง **Prompt ส่งต่องาน (ด้านล่าง)** เพื่อให้ Agent ติดตั้งแพ็กเกจ รันเซิร์ฟเวอร์ และตรวจสอบโปรเจกต์ต่อได้ทันที

### วิธีที่ 2: รันผ่าน Antigravity CLI หรือ Remote Agents
- หากใช้งานผ่านเทอร์มินัล (`agy`):
  ```bash
  unzip prompiriya-antigravity-workspace.zip
  cd prompiriya-antigravity-workspace
  npm install
  npm run dev
  ```
- หากใช้งาน **Remote Agents** บนคลาวด์ของ Google Antigravity: อัปโหลดโฟลเดอร์นี้ขึ้น GitHub Repository หรือ Google Drive Folder แล้วสร้าง Remote Project ชี้มายังโฟลเดอร์นี้ได้ทันที

---

## 3. Prompt สำหรับวางในช่องแชทของ Google Antigravity Agent

คัดลอกข้อความด้านล่างนี้ไปวางในช่องแชทของ **Google Antigravity** เพื่อสั่งให้ Agent รับช่วงต่องานได้ทันที:

> Read `@GEMINI.md`, `@ANTIGRAVITY_HANDOFF.md`, and `@.antigravity/skills/portfolio-maintainer/SKILL.md` to load full context for my Silpakorn University ICT (AI for Digital Experience Technology) admission portfolio website.
>
> Current status:
> - The complete Next.js App Router + TypeScript + Tailwind CSS project (`src/` and `public/images/` with all 28 authentic portfolio assets) and the standalone interactive build (`standalone-preview/prompiriya_ai_portfolio.html`) have already been built and QA-verified.
> - All 10 homepage sections, 4 dedicated 13-part project case studies (`/projects/[slug]`), the live Chart.js DCA Investment Simulator (`src/components/dca-interactive-sandbox.tsx`), the Certificate & Activity Lightbox (`src/components/lightbox-modal.tsx`), and 100% Thai/English (`TH`/`EN`) switching (`src/data/portfolio-data.ts`) are implemented.
>
> Please perform the following handoff verification steps:
> 1. Install dependencies (`npm install`) and run `npm run typecheck` and `npm run build` to verify the Next.js workspace builds cleanly in this environment.
> 2. Start the dev server (`npm run dev`) and use the `/browser` subagent to inspect both the homepage (`/`) and the DCA Simulator case study (`/projects/dca-simulator`) in Thai (`TH`) and English (`EN`).
> 3. Help me update any of the 3 remaining user-confirmation items in `@src/data/portfolio-data.ts` (Facebook profile URL, public LINE ID/QR, and public Canva QR destination links) or deploy the project to Vercel / Firebase Hosting when I am ready.

---

## 4. สรุปสถานะงานที่ส่งต่อ (QA Verified Status)

| หมวดหมู่ | สถานะ | รายละเอียด |
| :--- | :--- | :--- |
| **ข้อมูลจาก Portfolio PDF (12 หน้า)** | พร้อมใช้งาน 100% | ครบทั้งคำนำ (หน้า 3), ข้อมูลส่วนตัวและความสามารถ 9 ด้าน (หน้า 4), การศึกษา ม.ต้น 3.45 / ม.ปลาย 3.58 และเกรดรายวิชา (หน้า 5), ผลงานเด่น 4 ชิ้น (หน้า 6–7, 10–11), เกียรติบัตร 5 ใบ (หน้า 6, 8–9) และเรียงความ (หน้า 12) |
| **ไฟล์ภาพและหลักฐานจริง** | พร้อมใช้งาน 100% | นำภาพจริงจาก `โฟลเดอร์ใหม่.zip` ทั้ง 28 รายการเข้าสู่ `public/images/` และฝังในไฟล์ Standalone HTML เรียบร้อยแล้ว |
| **ระบบสองภาษา (TH / EN)** | พร้อมใช้งาน 100% | สลับภาษาได้ครบทุกส่วน รวมถึงป้ายกำกับกราฟ Chart.js, สไลเดอร์จำลอง DCA, ตัวเลือกหัวข้อติดต่อ และส่วนท้ายเว็บ |
| **ความเป็นส่วนตัว (Privacy Shield)** | ผ่านการตรวจ 100% | ไม่มีที่อยู่บ้านและไม่มีหมายเลขโทรศัพท์ส่วนตัวปรากฏในซอร์สโค้ดหรือหน้าเว็บสาธารณะ |
| **รายการรอเจ้าของข้อมูลยืนยันเพิ่ม** | 3 รายการ | (1) ลิงก์ URL เต็มของ Facebook, (2) LINE ID หรือ QR Code ที่ไม่ใช้เบอร์โทร, (3) ยืนยันสิทธิ์การเปิดสาธารณะของลิงก์ปลายทาง Canva QR |
