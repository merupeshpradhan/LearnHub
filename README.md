# 🎓 Next-Gen Learning Dashboard

A modern and responsive student learning dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Framer Motion**. This project provides an interactive learning experience with course tracking, progress visualization, activity monitoring, and smooth animations.

---

## 🚀 Live Demo

🔗 Live Website: https://learn-hub-five-tan.vercel.app

🔗 GitHub Repository: https://github.com/merupeshpradhan/LearnHub

---

## 📸 Screenshots

### Dashboard Overview

```md
![Dashboard](https://github.com/user-attachments/assets/7fde3356-2184-4c95-a761-8d8aad2e9770
)
```

### Responsive Tablet View

```md
![Tablet View](https://github.com/user-attachments/assets/12068365-1c7a-4d85-af7f-caf6b9631000
)
```

### Mobile Vie

```md
![Mobile View](https://github.com/user-attachments/assets/28cc5662-6a46-4918-8ba0-ab9aefda9a96
)
```

---

## ✨ Features

* Responsive Dashboard UI
* Sidebar Navigation
* Hero Welcome Section
* Dynamic Course Cards
* Activity Tracking Section
* Learning Progress Visualization
* Supabase Database Integration
* Loading Skeleton UI
* Smooth Framer Motion Animations
* Mobile, Tablet, and Desktop Support
* Modern Bento Grid Layout

---

## 🛠 Tech Stack

### Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

### Backend & Database

* Supabase

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
src
├── app
│   ├── page.tsx
│   └── loading.tsx
│
├── components
│   ├── Sidebar.tsx
│   ├── HeroCard.tsx
│   ├── ActivityCard.tsx
│   └── CourseCard.tsx
│
├── lib
│   └── supabase.ts
│
└── types
    └── course.ts
```

---

## 🗄 Database Schema

### Courses Table

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

Example Data:

```sql
insert into courses (title, progress, icon_name)
values
('Advanced React Patterns', 75, 'Code'),
('Next.js App Router', 90, 'Rocket'),
('TypeScript Mastery', 60, 'FileCode');
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project folder:

```bash
cd learning-dashboard
```

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open:

```bash
http://localhost:3000
```

---

## 🎨 Animations

Implemented using Framer Motion:

* Fade In Animations
* Hover Effects
* Scale Transitions
* Progress Bar Animations
* Smooth Page Experience

---

## 📱 Responsive Design

Supports:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

## 🚀 Deployment

This project is deployed using Vercel.

Build command:

```bash
pnpm build
```

Production start:

```bash
pnpm start
```

---

## 🧠 Challenges Faced

* Integrating Supabase with Next.js
* Designing a responsive dashboard layout
* Implementing loading skeletons
* Creating smooth UI animations
* Managing dynamic data rendering

---

## 👨‍💻 Author

**Rupesh Pradhan**

Frontend Developer

GitHub: https://github.com/merupeshpradhan

LinkedIn: https://www.linkedin.com/in/merupeshpradhan

---

## 📄 License

This project is created for educational and internship assessment purposes.
