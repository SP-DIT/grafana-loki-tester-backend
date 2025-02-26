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

## Useful resources

1. Background 
  1. [What is Observability? | Grafana for Beginners Ep. 1](https://www.youtube.com/watch?v=TQur9GJHIIQ&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=3)
⁠  2. [What is DevOps? | Grafana for Beginners Ep.2](https://www.youtube.com/watch?v=gmrbHD6UbAE&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=4)
2. Setting up:
  1. [⁠Set up a new Grafana Cloud Account | Grafana for Beginners Ep. 5 - YouTube](https://www.youtube.com/watch?v=nVdeKPRYmmQ&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=6)
  2. Loki - To store logs
     1. [How to Get Started with Loki | Zero to Hero: Loki | Grafana - YouTube](https://www.youtube.com/watch?v=1uk8LtQqsZQ&list=PLDGkOdUX1Ujr9QOsM--ogwJAYu6JD48W7)
     2. [⁠Intro to Logging | Zero to Hero: Loki | Grafana](https://www.youtube.com/watch?v=TLnH7efQNd0&list=PLDGkOdUX1Ujr9QOsM--ogwJAYu6JD48W7&index=3)
  3. Sending logs to Loki
     1. [⁠Winston - Logging in JavaScript & Node.js applications](https://www.youtube.com/watch?v=YjEqmINAQpI&t=127s)
     2. Winston-Loki transport:
       1. [winston - npm](https://www.npmjs.com/package/winston)
       2. [winston-loki - npm](https://www.npmjs.com/package/winston-loki)
  4. Connecting Grafana to Loki
     1. [Adding data sources to Grafana (Loki, Tempo, & Mimir) | Grafana for Beginners Ep. 6](https://www.youtube.com/watch?v=cqHO0oYW6Ic&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=7)
3. Creating dashboard:
  1. [⁠Exploring logs, metrics, and traces with Grafana | Grafana for Beginners Ep. 7](https://www.youtube.com/watch?v=1q3YzX2DDM4&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=8)
  2. ⁠[Most commonly used visualizations in Grafana | Grafana for Beginners Ep. 8](https://www.youtube.com/watch?v=JwF6FgeotaU&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=9)
  3. ⁠[Creating visualizations with Grafana | Grafana for Beginners Ep. 9](https://www.youtube.com/watch?v=yNRnLyVntUw&list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&index=10)


