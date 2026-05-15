import "dotenv/config";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint for lead submission
app.post("/api/lead", (req, res) => {
  const { fullName, phone, email, deliveryCity } = req.body?.contact || req.body || {};

  if (!email && !phone) {
    return res.status(400).json({ error: "Требуется email или телефон" });
  }

  console.log("=== NEW LEAD ===");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("================");

  res.json({ ok: true });
});

// Serve static files from dist
app.use(express.static(join(__dirname, "..", "dist")));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
