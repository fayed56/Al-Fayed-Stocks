require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { getSaudiMarket } = require("./providers/saudi");
const { getUSMarket } = require("./providers/nasdaq");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

app.get("/api/health", (req,res) => {
  res.json({
    ok:true,
    liveMarketData: process.env.LIVE_MARKET_DATA === "true",
    saudiProvider: process.env.SAUDI_PROVIDER || "demo",
    nasdaqProvider: process.env.NASDAQ_PROVIDER || "demo"
  });
});

app.get("/api/saudi/market", async (req,res) => {
  try { res.json(await getSaudiMarket()); }
  catch (e) { res.status(502).json({ok:false,error:e.message}); }
});

app.get("/api/usa/market", async (req,res) => {
  try { res.json(await getUSMarket()); }
  catch (e) { res.status(502).json({ok:false,error:e.message}); }
});

app.get("/api/market", async (req,res) => {
  const [saudi, usa] = await Promise.all([getSaudiMarket(), getUSMarket()]);
  res.json({saudi, usa, updatedAt:new Date().toISOString()});
});

app.listen(PORT, () => {
  console.log(`Al Fayed Stocks server running on http://localhost:${PORT}`);
});
