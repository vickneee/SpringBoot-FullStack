# FullStack Demo - Spring Boot + Vite React + TypeScript

This is a full-stack demo application that combines Spring Boot for the backend and Vite React with TypeScript for the frontend. The application demonstrates how to create a simple web application with a RESTful API and a responsive user interface.

⸻

FullStackDemo

This is a full-stack demo project with:
•	Backend: Spring Boot (Kotlin) running on port 8081
•	Frontend: React + TypeScript (Vite) running on port 5173
•	Preconfigured CORS so the frontend can call the backend without network errors

⸻

Project Structure

FullStackDemo/
├─ SpringBootDemo/           <-- Backend (Spring Boot Kotlin)
│  ├─ build.gradle.kts
│  ├─ settings.gradle.kts
│  └─ src/
│     └─ main/
│        ├─ kotlin/com/example/demo/
│        │   ├─ SpringbootBackendApplication.kt
│        │   └─ HelloController.kt
│        └─ resources/
│            └─ application.properties
└─ springboot-frontend/      <-- Frontend (Vite React TypeScript)
├─ package.json
├─ tsconfig.json
└─ src/
└─ App.tsx


⸻

How to Run

1. Start Backend

cd SpringBootDemo
./gradlew bootRun

	•	Backend will run on: http://localhost:8081
	•	Test endpoint: http://localhost:8081/hello → returns:

Hello from Backend! Spring Boot works!


⸻

2. Start Frontend

cd springboot-frontend
npm install
npm run dev

	•	Frontend runs on: http://localhost:5173
	•	It automatically fetches data from the backend /hello endpoint.

⸻

How It Works
•	React frontend calls Spring Boot backend using Axios:

axios.get('http://localhost:8081/hello')

	•	Spring Boot returns a simple string response.
	•	CORS is preconfigured in SpringbootBackendApplication.kt to allow requests from the frontend.

⸻

Notes
•	Ports: Frontend → 5173, Backend → 8081
•	You can add more endpoints in HelloController.kt and call them from React.
•	This setup is ideal for full-stack testing and development.

⸻

If you want, I can also make a super short “1-minute setup instructions” version for your README, so anyone can run both servers with just 2 commands.

Do you want me to do that?