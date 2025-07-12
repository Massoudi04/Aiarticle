import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  Users, 
  ArrowUpRight, 
  Calendar,
  Bell,
  Activity,
  BarChart3,
  PieChart,
  Globe,
  Zap
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import RecentArticles from '../components/RecentArticles';
import QuickActions from '../components/QuickActions';
import AnalyticsChart from '../components/AnalyticsChart';
import ScheduleCalendar from '../components/ScheduleCalendar';
import RecentActivity from '../components/RecentActivity';
import SystemNotifications from '../components/SystemNotifications';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'إجمالي المقالات',
      value: '1,247',
      change: '+12.5%',
      icon: FileText,
      color: 'blue' as const
    },
    {
      title: 'المنشور هذا الشهر',
      value: '89',
      change: '+8.2%',
      icon: TrendingUp,
      color: 'green' as const
    },
    {
      title: 'المجدولة للنشر',
      value: '23',
      change: '+5.1%',
      icon: Clock,
      color: 'orange' as const
    },
    {
      title: 'المقروءات الشهرية',
      value: '45,672',
      change: '+15.3%',
      icon: Users,
      color: 'purple' as const
    }
  ];

  const performanceStats = [
    {
      title: 'معدل النجاح',
      value: '98.5%',
      change: '+2.1%',
      icon: Zap,
      color: 'green' as const
    },
    {
      title: 'متوسط وقت التوليد',
      value: '45 ثانية',
      change: '-12%',
      icon: Clock,
      color: 'blue' as const
    },
    {
      title: 'اللغات المدعومة',
      value: '12',
      change: '+3',
      icon: Globe,
      color: 'purple' as const
    },
    {
      title: 'مدونات مربوطة',
      value: '5',
      change: '+1',
      icon: Activity,
      color: 'orange' as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              لوحة التحكم الرئيسية
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              مرحباً بك في مولد المقالات الذكي - نظرة شاملة على أداء منصتك
            </p>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">آخر تحديث</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {new Date().toLocaleString('ar-SA')}
              </p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* إحصائيات رئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* إحصائيات الأداء */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BarChart3 className="h-5 w-5 text-blue-600 ml-2" />
          مؤشرات الأداء
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceStats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* الرسوم البيانية والتحليلات */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <AnalyticsChart />
        <ScheduleCalendar />
      </div>

      {/* الصف الثاني من المحتوى */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* الإجراءات السريعة */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* النشاط الحديث */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>

        {/* إشعارات النظام */}
        <div className="lg:col-span-1">
          <SystemNotifications />
        </div>
      </div>

      {/* المقالات الحديثة */}
      <div className="mb-8">
        <RecentArticles />
      </div>

      {/* نصائح وإرشادات محسنة */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                نصائح لتحسين جودة المقالات
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• استخدم كلمات مفتاحية محددة وواضحة</li>
                <li>• اختر اللغة المناسبة لجمهورك المستهدف</li>
                <li>• راجع المقالات قبل النشر للتأكد من جودتها</li>
                <li>• استخدم الجدولة الزمنية للنشر المنتظم</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <PieChart className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                تحسين الأداء والسرعة
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• استخدم النماذج المناسبة لكل نوع محتوى</li>
                <li>• فعّل الحفظ التلقائي لتجنب فقدان البيانات</li>
                <li>• راقب استهلاك API لتجنب تجاوز الحدود</li>
                <li>• استخدم الجدولة لتوزيع الحمولة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;