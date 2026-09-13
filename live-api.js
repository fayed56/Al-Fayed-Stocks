// Al Fayed Stocks live-data client.
// Use from dashboard pages to load backend data without exposing API keys.
async function loadAlFayedMarket() {
  const response = await fetch('/api/market');
  if (!response.ok) throw new Error('Market API unavailable');
  return response.json();
}
