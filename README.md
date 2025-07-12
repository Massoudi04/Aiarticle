# مولد المقالات الذكي - AI Article Generator

منصة متكاملة لتوليد المقالات الاحترافية باستخدام الذكاء الاصطناعي مع إمكانية النشر التلقائي في مدونات بلوجر.

## 🚀 الميزات الرئيسية

### 📝 توليد المقالات
- **توليد ذكي**: استخدام أحدث نماذج الذكاء الاصطناعي (GPT-4, Gemini, Claude)
- **دعم متعدد اللغات**: العربية، الإنجليزية، الفرنسية، الإسبانية، الألمانية، الإيطالية
- **تخصيص النبرة**: احترافي، غير رسمي، ودود، موثوق، حواري
- **طول متغير**: من 500 إلى 3000 كلمة
- **محتوى شامل**: عناوين فرعية، خاتمة، أسئلة شائعة

### 🖼️ إدارة الصور
- **صور تلقائية**: جلب الصور من محركات البحث
- **حقوق الطبع**: إضافة وصف الحقوق تلقائياً
- **تحسين SEO**: أوصاف بديلة للصور

### 📊 لوحة التحكم المتقدمة
- **إحصائيات شاملة**: تتبع الأداء والمشاهدات
- **رسوم بيانية تفاعلية**: تحليل الأداء الأسبوعي
- **تقويم الجدولة**: عرض المقالات المجدولة
- **النشاط الحديث**: متابعة آخر العمليات
- **إشعارات النظام**: تنبيهات مهمة

### 🔗 ربط بلوجر
- **ربط آمن**: استخدام Google API
- **نشر تلقائي**: جدولة النشر في أوقات محددة
- **إدارة متعددة**: ربط عدة مدونات
- **تخصيص النشر**: تحكم في حالة المقال والتصنيفات

### ⚙️ إعدادات متقدمة
- **تخصيص شامل**: إعدادات المحتوى والأمان
- **دعم API متعدد**: OpenAI, Google Gemini, Claude
- **أمان محسن**: مصادقة ثنائية وإدارة الجلسات
- **واجهة متجاوبة**: دعم الوضع المظلم والفاتح

## 🛠️ التقنيات المستخدمة

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: PostCSS, Autoprefixer

## 📦 التثبيت والتشغيل

### متطلبات النظام
- Node.js 18+ 
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/your-username/ai-article-generator.git
cd ai-article-generator
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **تشغيل الخادم المحلي**
```bash
npm run dev
```

4. **بناء للإنتاج**
```bash
npm run build
```

## 🔧 الإعداد والتكوين

### متغيرات البيئة
أنشئ ملف `.env` في جذر المشروع:

```env
# OpenAI API
VITE_OPENAI_API_KEY=your_openai_api_key

# Google APIs
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GOOGLE_CLIENT_SECRET=your_google_client_secret

# Gemini API
VITE_GEMINI_API_KEY=your_gemini_api_key

# Claude API
VITE_CLAUDE_API_KEY=your_claude_api_key
```

### إعداد Google API

1. اذهب إلى [Google Cloud Console](https://console.cloud.google.com)
2. أنشئ مشروع جديد أو اختر مشروع موجود
3. فعّل Blogger API v3
4. أنشئ OAuth 2.0 credentials
5. أضف redirect URIs المطلوبة

## 📁 هيكل المشروع

```
src/
├── components/          # المكونات القابلة لإعادة الاستخدام
│   ├── Navbar.tsx      # شريط التنقل
│   ├── StatsCard.tsx   # بطاقات الإحصائيات
│   ├── AnalyticsChart.tsx  # الرسوم البيانية
│   └── ...
├── pages/              # صفحات التطبيق
│   ├── Dashboard.tsx   # لوحة التحكم
│   ├── ArticleGenerator.tsx  # مولد المقالات
│   ├── BloggerIntegration.tsx # ربط بلوجر
│   └── ...
├── hooks/              # React Hooks مخصصة
├── utils/              # وظائف مساعدة
├── types/              # تعريفات TypeScript
└── styles/             # ملفات التنسيق
```

## 🎨 التخصيص

### الألوان والثيمات
يمكن تخصيص الألوان من خلال ملف `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### إضافة لغات جديدة
لإضافة لغة جديدة، عدّل ملف `src/utils/languages.ts`:

```typescript
export const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  // أضف لغة جديدة هنا
];
```

## 🔌 ربط Backend

هذا المشروع هو واجهة أمامية جاهزة للربط مع خادم PHP. لإكمال الوظائف:

1. **إنشاء API endpoints** لتوليد المقالات
2. **ربط قاعدة البيانات** لحفظ المقالات
3. **تنفيذ Google APIs** للنشر في بلوجر
4. **إضافة نظام المصادقة** للمستخدمين

## 📱 التوافق

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ جميع الأجهزة المحمولة

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع هذه الخطوات:

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 الدعم

- **البريد الإلكتروني**: support@ai-article-generator.com
- **GitHub Issues**: [إنشاء issue جديد](https://github.com/your-username/ai-article-generator/issues)
- **التوثيق**: [docs.ai-article-generator.com](https://docs.ai-article-generator.com)

## 🙏 شكر وتقدير

- [OpenAI](https://openai.com) لتوفير GPT APIs
- [Google](https://developers.google.com) لـ Blogger API
- [Tailwind CSS](https://tailwindcss.com) للتصميم
- [Lucide](https://lucide.dev) للأيقونات

---

**تم تطويره بـ ❤️ للمجتمع العربي**