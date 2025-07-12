import React from 'react';
import { Calendar, Eye, Clock } from 'lucide-react';

const RecentArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'دليل شامل لتحسين محركات البحث في 2024',
      language: 'العربية',
      status: 'منشور',
      views: '1,234',
      publishDate: '2024-01-15',
      category: 'تسويق رقمي'
    },
    {
      id: 2,
      title: 'How to Build a Successful E-commerce Business',
      language: 'English',
      status: 'مجدول',
      views: '0',
      publishDate: '2024-01-20',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Les meilleures stratégies de marketing digital',
      language: 'Français',
      status: 'مسودة',
      views: '0',
      publishDate: '-',
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'أهمية الذكاء الاصطناعي في التجارة الإلكترونية',
      language: 'العربية',
      status: 'منشور',
      views: '2,456',
      publishDate: '2024-01-10',
      category: 'تكنولوجيا'
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
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        المقالات الحديثة
      </h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h4>
              <span className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap mr-2 ${getStatusColor(article.status)}`}>
                {article.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                  {article.language}
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 px-2 py-1 rounded text-xs">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {article.publishDate !== '-' && (
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Calendar className="h-4 w-4" />
                    <span>{article.publishDate}</span>
                  </div>
                )}
                {article.views !== '0' && (
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                )}
              </div>
              <Clock className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;