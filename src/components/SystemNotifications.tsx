import React, { useState } from 'react';
import { Bell, X, Info, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const SystemNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'تحديث جديد متاح',
      message: 'إصدار جديد من النظام متاح للتحميل',
      time: 'منذ 10 دقائق',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'اقتراب حد API',
      message: 'تم استخدام 85% من حصة OpenAI الشهرية',
      time: 'منذ ساعة',
      read: false
    },
    {
      id: 3,
      type: 'success',
      title: 'نسخ احتياطي مكتمل',
      message: 'تم إنشاء نسخة احتياطية من البيانات بنجاح',
      time: 'منذ 3 ساعات',
      read: true
    },
    {
      id: 4,
      type: 'info',
      title: 'مقال جديد مجدول',
      message: 'تم جدولة مقال "التسويق الرقمي" للنشر غداً',
      time: 'منذ 5 ساعات',
      read: true
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return CheckCircle;
      case 'warning':
        return AlertTriangle;
      case 'info':
        return Info;
      default:
        return Bell;
    }
  };

  const getNotificationColors = (type: string) => {
    switch (type) {
      case 'success':
        return {
          icon: 'text-green-600 dark:text-green-400',
          bg: 'bg-green-100 dark:bg-green-900/20'
        };
      case 'warning':
        return {
          icon: 'text-orange-600 dark:text-orange-400',
          bg: 'bg-orange-100 dark:bg-orange-900/20'
        };
      case 'info':
        return {
          icon: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-100 dark:bg-blue-900/20'
        };
      default:
        return {
          icon: 'text-gray-600 dark:text-gray-400',
          bg: 'bg-gray-100 dark:bg-gray-900/20'
        };
    }
  };

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Bell className="h-5 w-5 text-indigo-600 ml-2" />
          الإشعارات
          {unreadCount > 0 && (
            <span className="mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
          تعليم الكل كمقروء
        </button>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {notifications.map((notification) => {
          const Icon = getNotificationIcon(notification.type);
          const colors = getNotificationColors(notification.type);
          
          return (
            <div 
              key={notification.id} 
              className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                notification.read 
                  ? 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600' 
                  : 'bg-white dark:bg-gray-700 border-blue-200 dark:border-blue-700 shadow-sm'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                  <Icon className={`h-4 w-4 ${colors.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${
                        notification.read 
                          ? 'text-gray-600 dark:text-gray-400' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {notification.title}
                      </h4>
                      <p className={`text-xs mt-1 ${
                        notification.read 
                          ? 'text-gray-500 dark:text-gray-500' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {notification.message}
                      </p>
                      <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                        <Clock className="h-3 w-3 ml-1" />
                        {notification.time}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dismissNotification(notification.id);
                      }}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">لا توجد إشعارات جديدة</p>
        </div>
      )}
    </div>
  );
};

export default SystemNotifications;