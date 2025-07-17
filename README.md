---

# 🚀 Next.js Project - Alura Course

This is a Next.js project developed as part of the **Next.js course by Alura**. The goal of this project is to help learners understand how to build performant web applications using Next.js, with a strong focus on SEO, component-based architecture, data fetching, and deployment.

---

## 📚 What You'll Learn

* ✅ Understand the **benefits of Next.js**
* 🔍 Learn how **Next.js improves SEO**
* 🎨 Style a Next.js application using **styled-components**
* 📡 Fetch **static and dynamic data** using Next.js features
* ☁️ Deploy a Next.js app on **Vercel**

---

## 🧱 Project Structure

```
.
├── .next/                   # Next.js build output
├── node_modules/            # Dependencies
├── pages/                   # Routes
│   ├── _app.js              # Custom App component
│   ├── 404.js               # Custom 404 page
│   ├── faq.js               # FAQ route
│   └── index.js             # Home route
├── public/                  # Static files
│   └── images/              # Images used in the app
│       ├── alura-cases.png
│       └── alura-logo.svg
│   └── robots.txt
├── src/
│   ├── components/          # Reusable components
│   │   ├── Footer/
│   │   ├── Link/
│   │   └── patterns/Footer/
│   ├── screens/             # Page-level screens
│   │   ├── FAQScreen/
│   │   └── HomeScreen/
│   └── theme/               # Styling and themes
│       ├── components.js
│       ├── GlobalStyle.js
│       └── theme.js
├── .gitignore
├── .gitkeep
├── next.config.js           # Next.js config
├── package.json
└── README.md
```

---

## 🛠️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-alura-course.git
cd nextjs-alura-course
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Run the Development Server

```bash
yarn dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

This project can be deployed easily using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Connect the repo to Vercel
3. Set build command as `yarn build`
4. Set output directory as `.next`

Vercel will handle the rest ✨

---

## 📦 Technologies Used

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [Vercel](https://vercel.com/)
* [Yarn](https://yarnpkg.com/)

---

## 💡 Course Objective Summary (from Alura)

> * Recognize the benefits of Next.js
> * Understand how Next.js helps with your site's SEO
> * Learn how to style your Next.js application
> * Explore how Next.js fetches static and dynamic data
> * Deploy your project on Vercel

---

## 📄 License

This project is for educational purposes and may follow the license provided by Alura. Always respect copyright.

---