## Express.js Logging with Grafana Loki

This project sets up a simple **Express.js** backend with **Winston logging**. It supports structured logging to both **stdout** and optionally **Grafana Loki**, allowing log monitoring in real-time.

Additionally, an **Artillery load test script** is provided to simulate different traffic patterns for performance testing.

## 📌 Prerequisites

Ensure you have the following installed:

- **Node.js** (>=14.x)
- **npm** (Node Package Manager)
- **Grafana & Loki** (Optional, for log aggregation)

## 🛠️ Setup

### 1️⃣ Install Dependencies

Run the following command to install the required packages:

```sh
npm install
```

## 2️⃣ Configure Environment Variables

Create a .env file in the project root and define the following variables:

```
PORT=3000
LOKI_URL=http://localhost:3100
```

**PORT** – The port number where the Express server runs (default: 3000).
**LOKI_URL** – If provided, logs will be sent to Loki; otherwise, only stdout logging is enabled.

## 🚀 Running the Server

Start the express server with:

```sh
npm start
```

The server will run on http://localhost:3000

## 📊 Running the Load Test

The Artillery load test simulates real-world traffic with:

1. A **warm-up** phase
2. A **gradual increase** in load
3. A **sustained high traffic** period
4. A **sudden traffic** spike
5. A **cool-down** phase

To start the load test, run:

```sh
npm run load-test
```

This will execute requests against the /items endpoint, logging results in both stdout and Loki (if configured).

## 📜 Logs

- All logs are printed to the terminal (stdout).
- If LOKI_URL is set, logs are also sent to Grafana Loki for centralized monitoring.
- Errors (e.g., duplicate items) are logged as error messages in Winston.

## 🛠️ Troubleshooting

- Cannot connect to Loki? Ensure Loki is running and LOKI_URL is correctly set.
- Load test fails? Check if the server is running before executing npm run load-test.
- Duplicate item error? The backend prevents duplicate names, and logs an error if one exists.
