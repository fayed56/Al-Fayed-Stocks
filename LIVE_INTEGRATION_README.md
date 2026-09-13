# Al Fayed Stocks — Live Integration Ready

هذه النسخة جهزت الموقع ليعمل خلف Backend آمن بدل وضع مفاتيح API داخل JavaScript الخاص بالواجهة.

## التشغيل
1. ثبّت Node.js 18+.
2. نفّذ:
   npm install
3. انسخ `.env.example` إلى `.env`.
4. ضع بيانات مزود السوق في `.env`.
5. شغّل:
   npm start
6. افتح:
   http://localhost:3000

## مهم
النسخة الحالية تعمل بوضع Demo حتى لا نخترع API أو نضع مفاتيح وهمية.
- السعودي: يحتاج مزود بيانات/ترخيص مناسب من Saudi Exchange أو موزع بيانات معتمد.
- الأمريكي: يحتاج بيانات Nasdaq/Data Link أو موزعًا معتمدًا وبيانات اعتماد.
- بعد استلام بيانات المزود، يتم تنفيذ adapter داخل `server/providers/`.

## نقاط API جاهزة للموقع
GET /api/health
GET /api/saudi/market
GET /api/usa/market
GET /api/market

## أمان
لا تضع API keys داخل `public/` أو ملفات HTML/JS.
المفاتيح توضع في `.env` على السيرفر فقط.
