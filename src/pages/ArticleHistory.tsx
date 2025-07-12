import React, { useState } from 'react';
import { Calendar, Eye, Edit, Trash2, ExternalLink, Filter, Search } from 'lucide-react';

const ArticleHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'دليل شامل لتحسين محركات البحث في 2024',
      language: 'العربية',
      status: 'منشور',
      views: 1234,
      publishDate: '2024-01-15',
      category: 'تسويق رقمي',
      wordCount: 1500,
      bloggerUrl: 'https://example.blogspot.com/2024/01/seo-guide-2024.html'
    },
    {
      id: 2,
      title: 'How to Build a Successful E-commerce Business',
      language: 'English',
      status: 'مجدول',
      views: 0,
      publishDate: '2024-01-20',
      category: 'Business',
      wordCount: 2000,
      bloggerUrl: null
    },
    {
      id: 3,
      title: 'Les meilleures stratégies de marketing digital',
      language: 'Français',
      status: 'مسودة',
      views: 0,
      publishDate: null,
      category: 'Marketing',
      wordCount: 1200,
      bloggerUrl: null
    },
    {
      id: 4,
      title: 'أهمية الذكاء الاصطناعي في التجارة الإلكترونية',
      language: 'العربية',
      status: 'منشور',
      views: 2456,
      publishDate: '2024-01-10',
      category: 'تكنولوجيا',
      wordCount: 1800,
      bloggerUrl: 'https://example.blogspot.com/2024/01/ai-ecommerce.html'
    },
    {
      id: 5,
      title: 'Ultimate Guide to Social Media Marketing',
      language: 'English',
      status: 'فشل النشر',
      views: 0,
      publishDate: '2024-01-12',
      category: 'Marketing',
      wordCount: 1600,
      bloggerUrl: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'منشور':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'مجدول':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'مسودة':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'فشل النشر':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getLanguageFlag = (language: string) => {
    switch (language) {
      case 'العربية':
        return '🇸🇦';
      case 'English':
        return '🇺🇸';
      case 'Français':
        return '🇫🇷';
      case 'Español':
        return '🇪🇸';
      default:
        return '🌐';
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || article.status === filterStatus;
    const matchesLanguage = filterLanguage === 'all' || article.language === filterLanguage;
    
    return matchesSearch && matchesStatus && matchesLanguage;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          سجل المقالات
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          إدارة ومراجعة جميع المقالات المنشورة والمسودات
        </p>
      </div>

      {/* أدوات البحث والتصفية */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* البحث */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* تصفية بالحالة */}
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">جميع الحالات</option>
              <option value="منشور">منشور</option>
              <option value="مجدول">مجدول</option>
              <option value="مسودة">مسودة</option>
              <option value="فشل النشر">فشل النشر</option>
            </select>
          </div>

          {/* تصفية باللغة */}
          <div>
            <select
              value={filterLanguage}
              onChange={(e) => setFilterLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">جميع اللغات</option>
              <option value="العربية">العربية</option>
              <option value="English">English</option>
              <option value="Français">Français</option>
              <option value="Español">Español</option>
            </select>
          </div>
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {articles.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">إجمالي المقالات</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {articles.filter(a => a.status === 'منشور').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">منشور</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {articles.filter(a => a.status === 'مجدول').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">مجدول</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
            {articles.filter(a => a.status === 'مسودة').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">مسودة</div>
        </div>
      </div>

      {/* جدول المقالات */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  المقال
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  اللغة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  المشاهدات
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  تاريخ النشر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {article.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {article.category} • {article.wordCount} كلمة
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(article.status)}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900 dark:text-white">
                      {getLanguageFlag(article.language)} {article.language}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Eye className="h-4 w-4 ml-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 ml-1" />
                      {article.publishDate || 'غير محدد'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      {article.bloggerUrl && (
                        <a
                          href={article.bloggerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400">
              لا توجد مقالات تطابق معايير البحث
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleHistory;