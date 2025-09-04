# 🛍️ R3F 3D E-Commerce Application

An interactive **3D E-Commerce application** built with **React Three Fiber(R3F)** and **Three.js**.  
This project demonstrates how 3D graphics can enhance shopping experiences by allowing users to explore products in detail.  

---

## 🚀 Features
- Browse multiple 3D items (smartphones, furniture, pots, etc.)
- Built-in **camera controls** and **lights** for realistic viewing
- **Rotate** and **zoom** each product in real-time
- Change **product color** or **variant**
- Add products to **Cart** and manage them
- Dockerized with Nginx for production-ready deployment


<img width="1419" height="674" alt="Screenshot 2025-09-03 at 12 25 54 PM" src="https://github.com/user-attachments/assets/ba1c1906-ffae-4b63-b787-eb8aa31b6a01" />

---

## 🛠️ Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management

---

## 📦 Getting Started

### Steps to run the application
🖥️ Run Locally

Clone the repository

git clone https://github.com/your-username/ecom-3d.git
cd ecom-3d


Install dependencies

npm install


Start the dev server (Vite)

npm run dev


Your app will be running at http://localhost:5173


🐳 Run with Docker
1. Pull the pre-built Docker image
docker pull tiasha123/ecom-nginx:latest

2. Run the container
docker run -p 8080:80 tiasha123/ecom-nginx:latest


Now open 👉 http://localhost:8080 to view the app inside Docker.

☁️ Deployment

The Docker image is hosted on DockerHub.

Deployed using Render free tier cloud with Nginx serving the built app.

🔗 Live Demo: https://r3f-3d-docker-nginx.onrender.com/

✨ That’s it! You can either run it locally with Vite, or pull the Docker image and run it in a container.
