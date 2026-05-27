# CI/CD Demo Pipeline

A simple Node.js REST API with a fully automated CI/CD pipeline using **GitHub Actions**, **Docker**, and **Render**.

---

## Pipeline Flow

```
Git Push (main)
      │
      ▼
┌─────────────┐
│  Stage 1    │  Install deps → Run Jest tests
│    TEST     │  ✅ Pass → continue   ❌ Fail → pipeline stops
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Stage 2    │  Build Docker image → Push to Docker Hub
│    BUILD    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Stage 3    │  Trigger Render deploy hook → App goes live
│   DEPLOY    │
└─────────────┘
```

---

## API Endpoints

| Method | Route      | Description              |
|--------|------------|--------------------------|
| GET    | `/`        | Health check             |
| POST   | `/add`     | Add two numbers          |
| POST   | `/reverse` | Reverse a string         |

### Example Requests

```bash
# Health check
curl https://your-app.onrender.com/

# Add numbers
curl -X POST https://your-app.onrender.com/add \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'
# → {"result": 8}

# Reverse string
curl -X POST https://your-app.onrender.com/reverse \
  -H "Content-Type: application/json" \
  -d '{"text": "hello"}'
# → {"result": "olleh"}
```

---

## Local Setup

```bash
git clone https://github.com/yourusername/cicd-demo-api.git
cd cicd-demo-api
npm install
npm test       # run tests
npm start      # start server on port 3000
```

### Run with Docker

```bash
docker build -t cicd-demo-api .
docker run -p 3000:3000 cicd-demo-api
```

---

## GitHub Secrets Required

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret Name          | Value                                  |
|----------------------|----------------------------------------|
| `DOCKER_USERNAME`    | Your Docker Hub username               |
| `DOCKER_PASSWORD`    | Your Docker Hub access token           |
| `RENDER_DEPLOY_HOOK` | Deploy hook URL from Render dashboard  |

---

## Tech Stack

- **Runtime:** Node.js 18
- **Framework:** Express.js
- **Testing:** Jest + Supertest
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Deployment:** Render.com
