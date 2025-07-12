import React, { useState } from 'react';
import { Download, Share2, Edit, Send, Save, ImageIcon, Copy, Check } from 'lucide-react';

interface ArticlePreviewProps {
  article: {
    title: string;
    content: string;
    language: string;
    wordCount: number;
    sections: string[];
    featuredImage: string;
    generateTime: string;
  };
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(article.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const fullArticleContent = `
# ${article.title}

![${article.title}](${article.featuredImage})

## مقدمة

في عصر التطور التكنولوجي السريع، يعتبر هذا الموضوع من أهم المواضيع التي تحتاج إلى فهم عميق ومتخصص. سنستكشف في هذا المقال جميع الجوانب المهمة التي تحتاج لمعرفتها.

## الفصل الأول: أساسيات الموضوع

### ما هو التعريف الأساسي؟

يمكن تعريف هذا المفهوم كونه مجموعة من الممارسات والتقنيات التي تهدف إلى تحقيق أفضل النتائج في مجال محدد. هذا التعريف يشمل عدة عناصر أساسية:

- **العنصر الأول**: يركز على الأساسيات النظرية
- **العنصر الثاني**: يطبق المفاهيم عملياً
- **العنصر الثالث**: يقيس النتائج والتحسينات

### الأهمية والفوائد

تكمن أهمية هذا الموضوع في عدة نقاط محورية:

1. **تحسين الكفاءة**: يساعد على زيادة الإنتاجية بشكل ملحوظ
2. **توفير الوقت**: يقلل من الوقت المطلوب لإنجاز المهام
3. **ضمان الجودة**: يحافظ على معايير عالية من الجودة

## الفصل الثاني: التطبيق العملي

### الخطوات الأساسية للتنفيذ

#### الخطوة الأولى: التخطيط

يبدأ التطبيق العملي بوضع خطة شاملة تتضمن:
- تحديد الأهداف الواضحة
- وضع الجدول الزمني
- تحديد الموارد المطلوبة

#### الخطوة الثانية: التنفيذ

في هذه المرحلة، نبدأ بتطبيق الخطة المدروسة من خلال:
- اتباع المنهجية المحددة
- مراقبة التقدم المحرز
- إجراء التعديلات اللازمة

### أدوات ومصادر مفيدة

هناك العديد من الأدوات التي يمكن الاستفادة منها:

- **أدوات التحليل**: للحصول على رؤى دقيقة
- **منصات الإدارة**: لتنظيم العمليات
- **مصادر التعلم**: للتطوير المستمر

## الفصل الثالث: أفضل الممارسات

### نصائح للنجاح

لضمان تحقيق أفضل النتائج، يُنصح باتباع هذه الممارسات:

1. **البدء بالأساسيات**: فهم المبادئ الأساسية أولاً
2. **التطبيق التدريجي**: تطبيق المفاهيم خطوة بخطوة
3. **المراجعة المستمرة**: تقييم النتائج وتحسينها

### تجنب الأخطاء الشائعة

من أهم الأخطاء التي يجب تجنبها:
- إهمال مرحلة التخطيط
- عدم متابعة التقدم
- تجاهل التحديثات والتطورات

## الاتجاهات المستقبلية

يشهد هذا المجال تطوراً مستمراً، ومن المتوقع أن نرى:

- **تطوير تقنيات جديدة**: ستظهر أدوات أكثر تطوراً
- **زيادة الاعتماد على الذكاء الاصطناعي**: لتحسين الكفاءة
- **التوسع في التطبيقات**: لتشمل مجالات أوسع

## خاتمة

في الختام، يمكن القول أن هذا الموضوع يمثل أهمية كبيرة في عالم اليوم. من خلال فهم الأساسيات وتطبيق أفضل الممارسات، يمكن تحقيق نتائج متميزة. نشجع القراء على البدء بتطبيق هذه المفاهيم والاستفادة من الفرص المتاحة.

## الأسئلة الشائعة

### س1: ما هي أهم النصائح للمبتدئين؟

ينصح المبتدئين بالبدء بفهم الأساسيات النظرية قبل الانتقال للتطبيق العملي، مع الحرص على التعلم التدريجي.

### س2: كم من الوقت يحتاج التطبيق العملي؟

يختلف الوقت المطلوب حسب طبيعة المشروع وحجمه، لكن في المتوسط يمكن أن يتراوح من عدة أسابيع إلى عدة أشهر.

### س3: ما هي أفضل الموارد للتعلم؟

هناك العديد من المصادر المفيدة مثل الكتب المتخصصة، الدورات الإلكترونية، والمؤتمرات المهنية.

### س4: كيف يمكن قياس النجاح؟

يمكن قياس النجاح من خلال مؤشرات الأداء الرئيسية (KPIs) التي تم تحديدها في مرحلة التخطيط.

### س5: هل يمكن التطبيق في جميع المجالات؟

نعم، يمكن تطبيق هذه المفاهيم في معظم المجالات مع بعض التعديلات حسب طبيعة كل مجال.
  `;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            معاينة المقال
          </h2>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {article.wordCount} كلمة
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(article.generateTime).toLocaleString('ar')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors duration-200"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="text-sm font-medium">
              {copied ? 'تم النسخ!' : 'نسخ المحتوى'}
            </span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors duration-200">
            <Save className="h-4 w-4" />
            <span className="text-sm font-medium">حفظ كمسودة</span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors duration-200">
            <Send className="h-4 w-4" />
            <span className="text-sm font-medium">نشر في بلوجر</span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/30 transition-colors duration-200">
            <Edit className="h-4 w-4" />
            <span className="text-sm font-medium">تحرير</span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
            <Download className="h-4 w-4" />
            <span className="text-sm font-medium">تحميل</span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
            <Share2 className="h-4 w-4" />
            <span className="text-sm font-medium">مشاركة</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Featured Image */}
        <div className="mb-6">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center">
            <ImageIcon className="h-3 w-3 ml-1" />
            صورة من Pexels - الحقوق محفوظة للمصور الأصلي
          </p>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Article Sections */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
            {fullArticleContent}
          </div>
        </div>

        {/* Article Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {article.wordCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">كلمة</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {article.sections.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">قسم</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                1
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">صورة</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">أسئلة شائعة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;