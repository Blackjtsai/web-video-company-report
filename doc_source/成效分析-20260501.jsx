import React, { useState, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart
} from 'recharts';
import {
  TrendingUp, Clock, Zap, Users, Code, CheckCircle,
  ArrowUpRight, BarChart3, LayoutDashboard
} from 'lucide-react';

// 從 Excel 提取的核心數據
const rawData = [
  { name: '系統公告列表 (WEB)', manual: 60, ai_exec: 2, ai_review: 5, multiplier: 8.5, dev: 'Ken' },
  { name: '告警通知 (API)', manual: 30, ai_exec: 3, ai_review: 3, multiplier: 5.0, dev: 'Ken' },
  { name: 'Job_16 (Job)', manual: 60, ai_exec: 2, ai_review: 5, multiplier: 8.5, dev: 'Ken' },
  { name: 'I_026 元件 (WEB)', manual: 60, ai_exec: 3, ai_review: 5, multiplier: 7.5, dev: 'Allen' },
  { name: '系統檢查 (API)', manual: 60, ai_exec: 6, ai_review: 4, multiplier: 6.0, dev: 'Allen' },
  { name: '系統檢測主檔 (Backend)', manual: 90, ai_exec: 5, ai_review: 10, multiplier: 6.0, dev: 'Allen' },
  { name: 'Job_12 (Job)', manual: 90, ai_exec: 8, ai_review: 10, multiplier: 5.0, dev: 'Allen' },
  { name: '資費查詢 (WEB)', manual: 60, ai_exec: 2, ai_review: 10, multiplier: 5.0, dev: 'Michael' },
  { name: '資費 API (API)', manual: 40, ai_exec: 3, ai_review: 5, multiplier: 5.0, dev: 'Michael' },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const App = () => {
  // 計算總體指標
  const stats = useMemo(() => {
    const totalManual = rawData.reduce((acc, curr) => acc + curr.manual, 0);
    const totalAI = rawData.reduce((acc, curr) => acc + curr.ai_exec + curr.ai_review, 0);
    const avgMultiplier = (rawData.reduce((acc, curr) => acc + curr.multiplier, 0) / rawData.length).toFixed(1);
    const totalReview = rawData.reduce((acc, curr) => acc + curr.ai_review, 0);
    const reviewRatio = ((totalReview / totalAI) * 100).toFixed(0);

    return { totalManual, totalAI, avgMultiplier, reviewRatio };
  }, []);

  const chartData = rawData.map(item => ({
    ...item,
    ai_total: item.ai_exec + item.ai_review,
    saving: item.manual - (item.ai_exec + item.ai_review)
  }));

  // 類別彙整數據
  const categoryData = [
    { name: 'WEB', avg_m: 7.0, count: 3 },
    { name: 'API', avg_m: 5.3, count: 3 },
    { name: 'Job', avg_m: 6.8, count: 2 },
    { name: 'Backend', avg_m: 6.0, count: 1 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      {/* 標題區域 */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
            <LayoutDashboard className="text-blue-600" />
            TAI-Builder AI 協作開發效能分析
          </h1>
          <p className="text-slate-500 mt-1">基於 Cursor 與 Claude Code 導入之開發數據追蹤</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">數據來源：AI協作分析資料.xlsx</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">狀態：已標準化</span>
        </div>
      </header>

      {/* 核心指標卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<TrendingUp className="text-blue-600" />}
          title="平均效能提升"
          value={`${stats.avgMultiplier}x`}
          desc="對比純人工開發效率"
          trend="+540%↑"
        />
        <StatCard
          icon={<Clock className="text-emerald-600" />}
          title="開發時間節省"
          value={`${stats.totalManual - stats.totalAI} min`}
          desc="累計節省人力工時"
          trend="84.3%↓"
        />
        <StatCard
          icon={<Zap className="text-amber-600" />}
          title="AI 執行時間佔比"
          value={`${100 - stats.reviewRatio}%`}
          desc="純代碼生成耗時比例"
          trend="極速生成"
        />
        <StatCard
          icon={<CheckCircle className="text-purple-600" />}
          title="人工審核比重"
          value={`${stats.reviewRatio}%`}
          desc="AI 生成後的人工 Review"
          trend="品質保障"
        />
      </div>

      {/* 圖表區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* 開發時間對比 (人工 vs AI) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <BarChart3 size={20} className="text-blue-500" />
            開發耗時對比 (傳統人工 vs AI 總耗時)
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                  height={60}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend verticalAlign="top" align="right" />
                <Bar name="傳統人工 (min)" dataKey="manual" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar name="AI 協作總時長 (min)" dataKey="ai_total" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 效能提升倍數分佈 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-emerald-500" />
            各項目效能提升倍數 (Multiplier)
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                <defs>
                  <linearGradient id="colorMul" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                  height={60}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis domain={[0, 10]} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip />
                <Area
                  type="monotone"
                  name="提升倍數"
                  dataKey="multiplier"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorMul)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI 執行 vs Review 佔比堆疊圖 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <Users size={20} className="text-purple-500" />
            AI 生成與人工 Review 耗時結構
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  width={100}
                />
                <Tooltip />
                <Legend />
                <Bar name="AI 執行時間 (min)" dataKey="ai_exec" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar name="Review 時間 (min)" dataKey="ai_review" stackId="a" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 類別平均提升 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <Code size={20} className="text-amber-500" />
            不同類別平均效能提升 (倍)
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="avg_m"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* 底部摘要 */}
      <footer className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 bg-blue-900 text-blue-50 p-6 rounded-2xl flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">關鍵洞察：TAI-Builder 已初步達成開發工業化</h4>
            <p className="opacity-80 max-w-md">
              透過 Prompt 工程將開發任務碎片化，使得 Job 與 WEB 類別達成最高 8.5 倍的增長。目前瓶頸在於 Review 耗時，約佔總開發時間的 60% 以上。
            </p>
          </div>
          <Zap size={120} className="absolute -right-8 -bottom-8 opacity-20 text-white" />
        </div>
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-center">
          <div className="text-sm text-slate-500 mb-1">團隊效率領先指標</div>
          <div className="text-4xl font-black text-slate-800">84.3%</div>
          <div className="text-sm text-green-600 font-bold flex items-center gap-1 mt-1">
            <ArrowUpRight size={16} /> 節省開發人力開銷
          </div>
        </div>
      </footer>
    </div>
  );
};

// 封裝統計卡片組件
const StatCard = ({ icon, title, value, desc, trend }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-xl">{icon}</div>
      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
        {trend}
      </span>
    </div>
    <h4 className="text-slate-500 text-sm font-medium">{title}</h4>
    <div className="text-2xl font-bold text-slate-800 my-1">{value}</div>
    <p className="text-slate-400 text-xs">{desc}</p>
  </div>
);

export default App;