import React, { useState } from 'react';
import { User, Globe, Bell, Shield, Palette, Database, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    // إعدادات الملف الشخصي
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    avatar: '',
    
    // إعدادات اللغة والمنطقة
    defaultLanguage: 'ar',
    timezone: 'Asia/Riyadh',
    dateFormat: 'DD/MM/YYYY',
    
    // إعدادات الإشعارات
    emailNotifications: true,
    publishNotifications: true,
    errorNotifications: true,
    weeklyReport: false,
    
    // إعدادات المحتوى
    defaultTone: 'professional',
    defaultWordCount: '1000',
    autoSaveInterval: '30',
    
    // إعدادات التصميم
    theme: 'system',
    fontSize: 'medium',
    
    // إعدادات الأمان
    twoFactorAuth: false,
    sessionTimeout: '120',
    
    // إعدادات API
    openaiApiKey: '',
    geminiApiKey: '',
    defaultAiModel: 'gpt-4'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setSettings(prev => ({ ...prev, [name]: checked }));
    } else {
      setSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    // حفظ الإعدادات
    console.log('Settings saved:', settings);
    alert('تم حفظ الإعدادات بنجاح!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          الإعدادات
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          تخصيص إعدادات النظام والحساب الشخصي
        </p>
      </div>

      <div className="space-y-8">
        {/* إعدادات الملف الشخصي */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <User className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              الملف الشخصي
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                value={settings.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* إعدادات اللغة والمنطقة */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <Globe className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              اللغة والمنطقة
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                اللغة الافتراضية
              </label>
              <select
                name="defaultLanguage"
                value={settings.defaultLanguage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                المنطقة الزمنية
              </label>
              <select
                name="timezone"
                value={settings.timezone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="Asia/Riyadh">الرياض (GMT+3)</option>
                <option value="Asia/Dubai">دبي (GMT+4)</option>
                <option value="Africa/Cairo">القاهرة (GMT+2)</option>
                <option value="UTC">UTC (GMT+0)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                تنسيق التاريخ
              </label>
              <select
                name="dateFormat"
                value={settings.dateFormat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        {/* إعدادات الإشعارات */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <Bell className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              الإشعارات
            </h3>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">إشعارات البريد الإلكتروني</span>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">إشعار نجاح النشر</span>
              <input
                type="checkbox"
                name="publishNotifications"
                checked={settings.publishNotifications}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">إشعارات الأخطاء</span>
              <input
                type="checkbox"
                name="errorNotifications"
                checked={settings.errorNotifications}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">تقرير أسبوعي</span>
              <input
                type="checkbox"
                name="weeklyReport"
                checked={settings.weeklyReport}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </label>
          </div>
        </div>

        {/* إعدادات المحتوى */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <Palette className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              إعدادات المحتوى
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                النبرة الافتراضية
              </label>
              <select
                name="defaultTone"
                value={settings.defaultTone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="professional">احترافي</option>
                <option value="casual">غير رسمي</option>
                <option value="friendly">ودود</option>
                <option value="authoritative">موثوق</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                عدد الكلمات الافتراضي
              </label>
              <select
                name="defaultWordCount"
                value={settings.defaultWordCount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="500">500 كلمة</option>
                <option value="1000">1000 كلمة</option>
                <option value="1500">1500 كلمة</option>
                <option value="2000">2000 كلمة</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                فترة الحفظ التلقائي (ثانية)
              </label>
              <input
                type="number"
                name="autoSaveInterval"
                value={settings.autoSaveInterval}
                onChange={handleInputChange}
                min="10"
                max="300"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* إعدادات الأمان */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <Shield className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              الأمان والخصوصية
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">المصادقة الثنائية</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">حماية إضافية لحسابك</p>
              </div>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                انتهاء الجلسة (دقيقة)
              </label>
              <select
                name="sessionTimeout"
                value={settings.sessionTimeout}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="30">30 دقيقة</option>
                <option value="60">ساعة واحدة</option>
                <option value="120">ساعتان</option>
                <option value="240">4 ساعات</option>
                <option value="480">8 ساعات</option>
              </select>
            </div>
          </div>
        </div>

        {/* إعدادات API */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <Database className="h-6 w-6 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              إعدادات API للذكاء الاصطناعي
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OpenAI API Key
              </label>
              <input
                type="password"
                name="openaiApiKey"
                value={settings.openaiApiKey}
                onChange={handleInputChange}
                placeholder="sk-..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Google Gemini API Key
              </label>
              <input
                type="password"
                name="geminiApiKey"
                value={settings.geminiApiKey}
                onChange={handleInputChange}
                placeholder="AI..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                النموذج الافتراضي
              </label>
              <select
                name="defaultAiModel"
                value={settings.defaultAiModel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="gemini-pro">Gemini Pro</option>
                <option value="claude-3">Claude 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* زر الحفظ */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Save className="h-5 w-5" />
            <span>حفظ جميع الإعدادات</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;