# MediCare – Cloud-Native Healthcare Platform

MediCare is a full-stack, containerized healthcare appointment booking platform. Engineered with a microservices-oriented approach, the system relies on a MERN stack backend, automated CI/CD deployment pipelines, and a dedicated observability layer for real-time monitoring.

---

## 🏗️ System Architecture & Infrastructure

The platform is designed for scalability and high availability, utilizing modern DevOps practices for deployment and monitoring.

### 1. Application Tier (MERN Stack)
* **Frontend:** Built with React.js and Tailwind CSS for a highly responsive UI. Communicates with the backend via Axios using JWT-based Bearer tokens.
* **Backend API:** Node.js and Express.js REST API providing secure endpoints for user registration, authentication (bcryptjs), and appointment scheduling. 
* **Database:** MongoDB Atlas acts as the cloud database layer, managing relational mappings between Users, Doctors, and Appointment time slots.

### 2. CI/CD & Deployment Pipeline
* **Continuous Integration:** A Jenkins pipeline is configured via a `Jenkinsfile`. It listens for webhook triggers from GitHub, builds the application artifacts, and runs automated integration checks.
* **Containerization:** The frontend and backend are completely decoupled and containerized using Docker. Multi-container orchestration is handled via `docker-compose`.
* **Cloud Hosting:** Deployed on an AWS EC2 (Ubuntu) instance with strict security group configurations limiting access to essential ports (HTTP/HTTPS, SSH, and monitoring ports).

### 3. Observability & Monitoring
* **Metrics Aggregation:** Prometheus is configured (`prometheus.yml`) to scrape real-time telemetry and resource usage metrics from the backend Node.js containers.
* **Data Visualization:** Grafana interfaces directly with Prometheus to display live dashboards monitoring container health, API response latencies, and EC2 system metrics.

---

## ⚙️ Local Development Setup

To run this project locally, you must configure your environment variables. 

### 1. Environment Configuration
Create a `.env` file in the `/backend` directory and add the following keys:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret_key
NODE_ENV=development

### 2. Standard Execution
Start the Backend:
cd backend
npm install
npm run dev

#Start the Frontend:
cd frontend
npm install
npm run dev

### 3. Dockerized Execution (Recommended)
To test the production-ready containerized environment locally:
docker compose up --build
The API will be available on localhost:5000
The Frontend will be available on localhost:3000

## 🔐 Security Implementations
Authentication: Stateless session management via JSON Web Tokens (JWT).

Data Protection: Passwords are mathematically hashed using bcryptjs with a secure salt round before database insertion.

Cloud Security: AWS EC2 deployment utilizes IAM roles and strictly bound Security Groups, ensuring the MongoDB Atlas cluster only accepts connections from the whitelisted EC2 IP address.