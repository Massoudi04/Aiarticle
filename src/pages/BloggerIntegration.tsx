import React, { useState } from 'react';
import { Rss, Key, Settings, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

const BloggerIntegration: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [credentials, setCredentials] = useState({
    clientId: '',
    clientSecret: '',
    blogUrl: '',
    email: ''
  });

  const handleConnect = () => {
    // محاكاة عملية الاتصال
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  const handleDisconnect = () => {
    setConnectionStatus('disconnected');
    setCredentials({
      clientId: '',
      clientSecret: '',
      blogUrl: '',
      email: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          ربط مدونة بلوجر
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          اربط مدونتك في بلوجر لنشر المقالات تلقائياً
        </p>
      </div>

      {/* حالة الاتصال */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              connectionStatus === 'connected' 
                ? 'bg-green-100 dark:bg-green-900/20'
                : connectionStatus === 'connecting'
                ? 'bg-orange-100 dark:bg-orange-900/20'
                : 'bg-red-100 dark:bg-red-900/20'
            }`}>
              {connectionStatus === 'connected' ? (
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              ) : connectionStatus === 'connecting' ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
              ) : (
                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {connectionStatus === 'connected' 
                  ? 'متصل بنجاح'
                  : connectionStatus === 'connecting'
                  ? 'جاري الاتصال...'
                  : 'غير متصل'
                }
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {connectionStatus === 'connected' 
                  ? 'يمكنك الآن نشر المقالات تلقائياً'
                  : connectionStatus === 'connecting'
                  ? 'يرجى الانتظار بينما نتصل بـ Google API'
                  : 'يجب ربط حساب بلوجر أولاً'
                }
              </p>
            </div>
          </div>
          
          {connectionStatus === 'connected' && (
            <button
              onClick={handleDisconnect}
              className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors duration-200"
            >
              قطع الاتصال
            </button>
          )}
        </div>
      </div>

      {connectionStatus !== 'connected' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* طريقة 1: Google API */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <Key className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Google API (مستحسن)
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Client ID
                </label>
                <input
                  type="text"
                  value={credentials.clientId}
                  onChange={(e) => setCredentials(prev => ({ ...prev, clientId: e.target.value }))}
                  placeholder="xxxxxxxxx.apps.googleusercontent.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Client Secret
                </label>
                <input
                  type="password"
                  value={credentials.clientSecret}
                  onChange={(e) => setCredentials(prev => ({ ...prev, clientSecret: e.target.value }))}
                  placeholder="GOCSPX-xxxxxxxxxxxxxxx"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                  كيفية الحصول على Google API credentials:
                </h4>
                <ol className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>1. اذهب إلى <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Console</a></li>
                  <li>2. أنشئ مشروع جديد أو اختر مشروع موجود</li>
                  <li>3. فعّل Blogger API</li>
                  <li>4. أنشئ OAuth 2.0 credentials</li>
                  <li>5. أضف redirect URI المطلوب</li>
                </ol>
              </div>

              <button
                onClick={handleConnect}
                disabled={!credentials.clientId || !credentials.clientSecret || connectionStatus === 'connecting'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {connectionStatus === 'connecting' ? 'جاري الاتصال...' : 'الاتصال عبر Google API'}
              </button>
            </div>
          </div>

          {/* طريقة 2: تسجيل دخول مباشر */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <Rss className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                تسجيل دخول مباشر
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your-email@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  رابط المدونة
                </label>
                <input
                  type="url"
                  value={credentials.blogUrl}
                  onChange={(e) => setCredentials(prev => ({ ...prev, blogUrl: e.target.value }))}
                  placeholder="https://your-blog.blogspot.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                  ملاحظة مهمة:
                </h4>
                <p className="text-sm text-orange-800 dark:text-orange-400">
                  هذه الطريقة أقل أماناً وقد تتطلب تفعيل "الوصول للتطبيقات الأقل أماناً" في إعدادات حساب Google الخاص بك.
                </p>
              </div>

              <button
                onClick={handleConnect}
                disabled={!credentials.email || !credentials.blogUrl || connectionStatus === 'connecting'}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                الاتصال المباشر
              </button>
            </div>
          </div>
        </div>
      )}

      {connectionStatus === 'connected' && (
        <div className="space-y-8">
          {/* إعدادات النشر */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <Settings className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                إعدادات النشر التلقائي
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  حالة المقال عند النشر
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white">
                  <option value="LIVE">منشور مباشرة</option>
                  <option value="DRAFT">مسودة</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  إضافة تلقائية للتصنيفات
                </label>
                <input
                  type="text"
                  placeholder="مثال: تقنية، ذكاء اصطناعي"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    defaultChecked
                  />
                  <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
                    إضافة رابط المصدر تلقائياً في نهاية المقال
                  </span>
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    defaultChecked
                  />
                  <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
                    إرسال إشعار عند نجاح النشر
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                حفظ الإعدادات
              </button>
            </div>
          </div>

          {/* احصائيات النشر */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              إحصائيات النشر
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">مقال منشور</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">مجدول للنشر</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">فشل في النشر</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">معدل النجاح</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloggerIntegration;