import React, { useState } from 'react';
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ScheduleCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const scheduledPosts = [
    { date: '2024-01-15', title: 'مقال عن الذكاء الاصطناعي', time: '10:00' },
    { date: '2024-01-16', title: 'دليل التسويق الرقمي', time: '14:30' },
    { date: '2024-01-18', title: 'تطوير المواقع الحديثة', time: '09:15' },
    { date: '2024-01-20', title: 'أمن المعلومات', time: '16:00' },
    { date: '2024-01-22', title: 'التجارة الإلكترونية', time: '11:45' }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // أيام فارغة في بداية الشهر
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // أيام الشهر
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getPostsForDate = (date: string) => {
    return scheduledPosts.filter(post => post.date === date);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  const dayNames = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Calendar className="h-5 w-5 text-green-600 ml-2" />
          جدولة المقالات
        </h3>
        <button className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors duration-200">
          <Plus className="h-4 w-4" />
          <span className="text-sm">جدولة جديدة</span>
        </button>
      </div>

      {/* تنقل الشهر */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigateMonth('prev')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </button>
        
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h4>
        
        <button 
          onClick={() => navigateMonth('next')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* أسماء الأيام */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* أيام الشهر */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day) {
            return <div key={index} className="h-10"></div>;
          }
          
          const dateString = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day);
          const postsForDay = getPostsForDate(dateString);
          const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
          
          return (
            <div 
              key={day} 
              className={`h-10 flex items-center justify-center text-sm relative cursor-pointer rounded-lg transition-colors duration-200 ${
                isToday 
                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {day}
              {postsForDay.length > 0 && (
                <div className="absolute bottom-0 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* المقالات المجدولة القادمة */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
          <Clock className="h-4 w-4 text-orange-600 ml-1" />
          المقالات القادمة
        </h4>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {scheduledPosts.slice(0, 3).map((post, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex-1">
                <div className="text-gray-900 dark:text-white font-medium truncate">
                  {post.title}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  {post.date} في {post.time}
                </div>
              </div>
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;