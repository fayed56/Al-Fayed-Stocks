async function getSaudiMarket() {
  const live = process.env.LIVE_MARKET_DATA === "true" && process.env.SAUDI_PROVIDER !== "demo";
  if (!live) {
    return {
      source:"demo",
      delayed:false,
      market:"Saudi Exchange",
      index:{symbol:"TASI",name:"تاسي",value:null,change:null,changePct:null},
      message:"أضف مزود بيانات سعودي مرخص ومفتاح API في ملف .env لتفعيل البيانات."
    };
  }

  // Provider-specific implementation goes here.
  // Do NOT scrape or invent an endpoint. Saudi Exchange offers real-time/delayed
  // market-data services through licensed feeds/providers.
  throw new Error("Saudi provider adapter is not configured.");
}
module.exports={getSaudiMarket};
