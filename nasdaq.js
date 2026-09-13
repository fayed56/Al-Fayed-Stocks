async function getUSMarket() {
  const live = process.env.LIVE_MARKET_DATA === "true" && process.env.NASDAQ_PROVIDER !== "demo";
  if (!live) {
    return {
      source:"demo",
      delayed:false,
      market:"US Market",
      index:{symbol:"NDX",name:"Nasdaq-100",value:null,change:null,changePct:null},
      message:"أضف بيانات Nasdaq/Data Link أو مزودًا معتمدًا ومفاتيح الاعتماد في ملف .env لتفعيل البيانات."
    };
  }

  // Provider-specific implementation goes here.
  // Nasdaq's current real-time/delayed APIs require provider onboarding
  // credentials such as client ID/client secret/base URL (or equivalent).
  throw new Error("Nasdaq provider adapter is not configured.");
}
module.exports={getUSMarket};
