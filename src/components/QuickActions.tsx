import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Settings, Rss, FileText } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'مقال جديد',
      description: 'أنشئ مقالاً احترافياً بالذكاء الاصطناعي',
      icon: PenTool,
      link: '/generate',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'ربط بلوجر',
      description: 'اربط مدونتك للنشر التلقائي',
      icon: Rss,
      link: '/blogger',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'سجل المقالات',
      description: 'تصفح جميع مقالاتك المنشورة',
      icon: FileText,
      link: '/history',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'الإعدادات',
      description: 'تخصيص إعدادات النظام',
      icon: Settings,
      link: '/settings',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        الإجراءات السريعة
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.link}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors duration-200 ${action.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {action.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;