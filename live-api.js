// Al Fayed Stocks live-data client.
// Use from dashboard pages to load backend data without exposing API keys.
async function loadAlFayedMarket() {
  const response = await fetch('/shmk_live_9381e30ba4106526b03b3fd302f87d21204d8302d7ab9fb7');
  if (!response.ok) throw new Error('Market API unavailable');
  return response.json();
}
