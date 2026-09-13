# ربط Al Fayed Stocks بـ Supabase

1. افتح `supabase-config.js`.
2. اترك `SUPABASE_URL` كما هو.
3. من Supabase افتح Project Settings → API.
4. انسخ **Publishable/Anon Key** فقط والصقه مكان `PASTE_YOUR_SUPABASE_ANON_KEY_HERE`.
5. لا تستخدم Service Role Key في الموقع.
6. ارفع كل الملفات إلى جذر GitHub repository `fayed56/Al-Fayed-Stocks`.
7. افتح `admin.html`، سجّل الدخول بالحساب الذي أنشأته، ثم أضف التوصيات.

مهم: جدول `admins` وجدول `recommendations` وRLS تم إعدادها في Supabase. يجب أن يكون user_id الخاص بحساب المدير موجودًا في `public.admins`.
