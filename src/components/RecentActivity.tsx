import React from 'react';
import { Activity, FileText, Send, Edit, AlertCircle, CheckCircle } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'publish',
      title: 'تم نشر مقال "دليل الذكاء الاصطناعي"',
      time: 'منذ 5 دقائق',
      icon: Send,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      id: 2,
      type: 'generate',
      title: 'تم توليد مقال جديد عن "التسويق الرقمي"',
      time: 'منذ 15 دقيقة',
      icon: FileText,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      id: 3,
      type: 'edit',
      title: 'تم تحرير مقال "أمن المعلومات"',
      time: 'منذ 30 دقيقة',
      icon: Edit,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      id: 4,
      type: 'success',
      title: 'تم ربط مدونة جديدة بنجاح',
      time: 'منذ ساعة',
      icon: CheckCircle,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      id: 5,
      type: 'error',
      title: 'فشل في نشر مقال "التجارة الإلكترونية"',
      time: 'منذ ساعتين',
      icon: AlertCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      id: 6,
      type: 'generate',
      title: 'تم توليد 3 مقالات بنجاح',
      time: 'منذ 3 ساعات',
      icon: FileText,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="h-5 w-5 text-purple-600 ml-2" />
          النشاط الحديث
        </h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
          عرض الكل
        </button>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.bgColor}`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* إحصائيات سريعة للنشاط */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              {activities.filter(a => a.type === 'publish' || a.type === 'success').length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">نجح</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {activities.filter(a => a.type === 'generate').length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">مولد</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-600 dark:text-red-400">
              {activities.filter(a => a.type === 'error').length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">فشل</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;