# **Studl Frontend (React + Vite) README**

## **📌 Project Overview**
Studl is a **scalable, modular, and customizable** college management web application built with **React (Vite) and Tailwind CSS**. It integrates **authentication, role-based dashboards, scheduling, attendance tracking, messaging, payments, and more** to create a seamless digital campus experience.

---

## **📌 Tech Stack**
- **Frontend:** React (Vite), Tailwind CSS, React Router, Redux Toolkit
- **Backend:** Spring Boot (Java)
- **Database:** PostgreSQL
- **Auth & API Calls:** Firebase/Supabase, Axios
- **State Management:** Redux Toolkit
- **Messaging & Notifications:** WebSockets (Socket.io)
- **Storage:** AWS S3 / Supabase Storage
- **Deployment:** Vercel / AWS

---

## **📌 Branching Strategy**
This repository follows a structured **Git branching model** to ensure a smooth development workflow.

### **🔴 Main Branch (`main`)**
- This is the **stable production branch**.
- Only **fully tested and approved** features are merged here.
- **DO NOT** push directly to `main`.

### **🟡 Development Branch (`dev`)**
- This is the **working branch** where all feature branches are merged after review.
- **All feature branches should branch off from `dev` and merge back into `dev`.**
- Regularly rebased with `main` to stay updated.

### **🟢 Feature Branches (`feature/<feature-name>`)**
- Each new feature gets a separate branch.
- **Naming convention:** `feature/login-auth`, `feature/dashboard-ui`, `feature/chat-module`, etc.
- Feature branches should be **branched from `dev`**.
- A **Pull Request (PR) must be created** to merge into `dev`.

### **🔵 Hotfix Branches (`hotfix/<bug-name>`)**
- Used for urgent bug fixes.
- Branched from `main` and merged back into `main` and `dev`.
- Example: `hotfix/login-crash`, `hotfix/payment-issue`.

---

## **📌 Workflow for Pull Requests (PRs) & Code Reviews**
### **1️⃣ Creating a PR**
- **Always create a branch from `dev`**:
  ```sh
  git checkout dev
  git pull origin dev
  git checkout -b feature/<feature-name>
  ```
- Make your changes, **commit them**:
  ```sh
  git add .
  git commit -m "Added login authentication"
  ```
- **Push your branch to GitHub**:
  ```sh
  git push origin feature/<feature-name>
  ```
- **Open a PR** to merge into `dev`.
- Assign at least **one reviewer**.

### **2️⃣ Reviewing & Merging PRs**
- **Every PR must be reviewed by at least 1 other developer.**
- Use GitHub’s review system to **approve or request changes**.
- If changes are requested, update the branch and push the changes.
- Once approved, **squash & merge into `dev`**.

### **3️⃣ Merging `dev` into `main` (Releases)**
- Once a milestone is reached, `dev` is **merged into `main`**.
- A final round of testing is done before release.

---

## **📌 Setting Up the Project**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-org/studl-frontend.git
cd studl-frontend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env.local` file in the root directory:
```
VITE_API_URL=http://localhost:8080/api
```

### **4️⃣ Run the Project Locally**
```sh
npm run dev
```
This starts the frontend at `http://localhost:5173`

---

## **📌 Code Guidelines & Best Practices**
### **1️⃣ Folder Structure**
```
src/
│── components/   # Reusable UI components
│── features/     # Feature-based structure
│── hooks/        # Custom hooks
│── layouts/      # Page layouts
│── pages/        # React Router pages
│── redux/        # State management
│── services/     # API calls
│── utils/        # Helper functions
```

### **2️⃣ Code Formatting**
- Use **Prettier & ESLint** for consistent formatting.
- Run `npm run lint` before pushing changes.

### **3️⃣ Commit Message Format**
Follow **conventional commit messages**:
```
feat: added login authentication
fix: resolved API call issue
refactor: optimized dashboard UI
```

---

## **📌 Deployment Workflow**
### **1️⃣ Deploy to Vercel (Auto Deployment)**
- Push to `main` triggers **Vercel automatic deployment**.
- PRs to `dev` trigger **preview deployments**.

### **2️⃣ Manual Deployment**
```sh
git pull origin main
npm install
npm run build
vercel --prod
```

---

## **📌 License**
This project is licensed under the **MIT License**.

