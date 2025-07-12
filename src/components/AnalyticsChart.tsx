import React from 'react';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

const AnalyticsChart: React.FC = () => {
  const chartData = [
    { day: 'السبت', articles: 12, views: 1200 },
    { day: 'الأحد', articles: 8, views: 800 },
    { day: 'الاثنين', articles: 15, views: 1500 },
    { day: 'الثلاثاء', articles: 10, views: 1000 },
    { day: 'الأربعاء', articles: 18, views: 1800 },
    { day: 'الخميس', articles: 14, views: 1400 },
    { day: 'الجمعة', articles: 6, views: 600 }
  ];

  const maxArticles = Math.max(...chartData.map(d => d.articles));
  const maxViews = Math.max(...chartData.map(d => d.views));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <BarChart3 className="h-5 w-5 text-blue-600 ml-2" />
          تحليلات الأداء الأسبوعي
        </h3>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">المقالات</span>
          </div>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">المشاهدات</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-16 text-sm text-gray-600 dark:text-gray-400 text-right">
              {data.day}
            </div>
            
            <div className="flex-1 space-y-2">
              {/* شريط المقالات */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(data.articles / maxArticles) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 w-8 text-right">
                  {data.articles}
                </span>
              </div>
              
              {/* شريط المشاهدات */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(data.views / maxViews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 w-8 text-right">
                  {data.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {chartData.reduce((sum, d) => sum + d.articles, 0)}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">إجمالي المقالات</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              {chartData.reduce((sum, d) => sum + d.views, 0).toLocaleString()}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">إجمالي المشاهدات</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
              {Math.round(chartData.reduce((sum, d) => sum + d.views, 0) / chartData.reduce((sum, d) => sum + d.articles, 0))}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">متوسط المشاهدات</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
