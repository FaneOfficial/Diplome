import {
  MessageSquare,
  FileText,
  Calendar,
  Users,
  Bell,
  Send,
  Download,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("requests");
  const [newMessage, setNewMessage] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

  const requests = [
    {
      id: 1,
      from: "МГТУ",
      type: "university",
      title: "Запрос на практику студентов",
      date: "2026-03-28",
      status: "pending",
      description: "Требуется 15 мест для практики студентов направления 'Машиностроение'",
      priority: "high",
    },
    {
      id: 2,
      from: "ТехноПром",
      type: "partner",
      title: "Поиск специалистов в области автоматизации",
      date: "2026-03-27",
      status: "pending",
      description: "Ищем выпускников для работы над проектом автоматизации производства",
      priority: "high",
    },
    {
      id: 3,
      from: "СПбПУ",
      type: "university",
      title: "Предложение о совместном исследовании",
      date: "2026-03-25",
      status: "approved",
      description: "Предлагаем совместное исследование в области искусственного интеллекта",
      priority: "medium",
    },
    {
      id: 4,
      from: "ИнноСофт",
      type: "partner",
      title: "Приглашение на открытую лекцию",
      date: "2026-03-24",
      status: "approved",
      description: "Приглашаем студентов на лекцию о современных тенденциях в IT",
      priority: "low",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "ТехноПром",
      text: "Добрый день! Готовы обсудить условия проведения практики для ваших студентов.",
      time: "10:30",
      isMine: false,
    },
    {
      id: 2,
      sender: "Вы",
      text: "Здравствуйте! Отлично, нам нужно 15 мест для студентов 3 курса. Какие сроки вы можете предложить?",
      time: "10:45",
      isMine: true,
    },
    {
      id: 3,
      sender: "ТехноПром",
      text: "Мы можем принять студентов с 15 апреля по 15 июня. Практика будет проходить в нашем центре автоматизации.",
      time: "11:00",
      isMine: false,
    },
  ];

  const documents = [
    {
      id: 1,
      name: "Соглашение о сотрудничестве.pdf",
      type: "Договор",
      date: "2026-03-20",
      size: "2.4 MB",
      status: "signed",
    },
    {
      id: 2,
      name: "План практики 2026.docx",
      type: "План",
      date: "2026-03-18",
      size: "156 KB",
      status: "draft",
    },
    {
      id: 3,
      name: "Отчет о проекте Q1.xlsx",
      type: "Отчет",
      date: "2026-03-15",
      size: "890 KB",
      status: "signed",
    },
  ];

  const meetings = [
    {
      id: 1,
      title: "Планирование совместного проекта",
      partner: "ТехноПром",
      date: "2026-04-05",
      time: "14:00",
      type: "online",
    },
    {
      id: 2,
      title: "Обсуждение программы практики",
      partner: "ИнноСофт",
      date: "2026-04-08",
      time: "10:00",
      type: "offline",
    },
    {
      id: 3,
      title: "Презентация новых технологий",
      partner: "РобоТех",
      date: "2026-04-12",
      time: "15:30",
      type: "online",
    },
  ];

  const stats = [
    { label: "Активных заявок", value: "8", icon: Clock, color: "blue" },
    { label: "Одобренных", value: "24", icon: CheckCircle, color: "green" },
    { label: "Новых сообщений", value: "5", icon: MessageSquare, color: "purple" },
    { label: "Предстоящих встреч", value: "3", icon: Calendar, color: "orange" },
  ];

  const monthlyData = [
    { month: "Янв", заявки: 12, одобрено: 8, отклонено: 4 },
    { month: "Фев", заявки: 19, одобрено: 14, отклонено: 5 },
    { month: "Мар", заявки: 25, одобрено: 18, отклонено: 7 },
    { month: "Апр", заявки: 8, одобрено: 5, отклонено: 3 },
  ];

  const cooperationTypes = [
    { name: "Практика студентов", value: 35, color: "#3B82F6" },
    { name: "Совместные исследования", value: 28, color: "#8B5CF6" },
    { name: "Лекции и мероприятия", value: 22, color: "#10B981" },
    { name: "Трудоустройство", value: 15, color: "#F59E0B" },
  ];

  const trendsData = [
    { month: "Окт", университеты: 45, предприятия: 52 },
    { month: "Ноя", университеты: 52, предприятия: 61 },
    { month: "Дек", университеты: 61, предприятия: 73 },
    { month: "Янв", университеты: 75, предприятия: 88 },
    { month: "Фев", университеты: 88, предприятия: 102 },
    { month: "Мар", университеты: 102, предприятия: 118 },
  ];

  const analyticsStats = [
    {
      label: "Общий рост",
      value: "+45%",
      change: "↑ 12% к прошлому месяцу",
      icon: TrendingUp,
      trend: "up",
    },
    {
      label: "Конверсия заявок",
      value: "72%",
      change: "↑ 5% к прошлому месяцу",
      icon: CheckCircle,
      trend: "up",
    },
    {
      label: "Активных партнеров",
      value: "128",
      change: "↑ 18 новых за месяц",
      icon: Users,
      trend: "up",
    },
    {
      label: "Средний отклик",
      value: "2.4 дня",
      change: "↓ 0.3 дня",
      icon: Clock,
      trend: "down",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Ожидает</span>;
      case "approved":
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Одобрено</span>;
      case "signed":
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Подписано</span>;
      case "draft":
        return <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Черновик</span>;
      default:
        return null;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "medium":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "low":
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Панель взаимодействия
          </h1>
          <p className="text-gray-600">Управляйте совместной деятельностью и коммуникацией</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-8 h-8 text-${stat.color}-600`} />
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 rounded-none border-b bg-gray-50 p-0 gap-0">
              <TabsTrigger
                value="requests"
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 py-3 px-2 sm:px-4 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Заявки</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 py-3 px-2 sm:px-4 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
              >
                <BarChart3 className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Аналитика</span>
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 py-3 px-2 sm:px-4 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Сообщения</span>
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 py-3 px-2 sm:px-4 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Документы</span>
              </TabsTrigger>
              <TabsTrigger
                value="meetings"
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-600 py-3 px-2 sm:px-4 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Встречи</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="requests" className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Заявки на сотрудничество</h2>
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  <Plus className="w-4 h-4" />
                  Создать заявку
                </button>
              </div>
              <div className="space-y-4">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => setSelectedRequest(selectedRequest === request.id ? null : request.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {request.from.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{request.title}</h3>
                          <p className="text-sm text-gray-600">От: {request.from}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getPriorityIcon(request.priority)}
                        {getStatusBadge(request.status)}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{request.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(request.date).toLocaleDateString('ru-RU')}</span>
                      {selectedRequest === request.id && (
                        <div className="flex gap-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Принять
                          </button>
                          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                            Отклонить
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Аналитика и статистика</h2>
                <p className="text-gray-600">Подробная информация о взаимодействии и эффективности</p>
              </div>

              {/* Analytics Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {analyticsStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start justify-between mb-3">
                        <Icon className="w-8 h-8 text-blue-600" />
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            stat.trend === "up"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {stat.trend === "up" ? "Рост" : "Улучшение"}
                        </span>
                      </div>
                      <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-gray-700 text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-xs text-gray-600">{stat.change}</p>
                    </div>
                  );
                })}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Monthly Activity Bar Chart */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Активность по месяцам</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="заявки" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="одобрено" fill="#10B981" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="отклонено" fill="#EF4444" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Cooperation Types Pie Chart */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Типы сотрудничества</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={cooperationTypes}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {cooperationTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {cooperationTypes.map((type, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: type.color }}
                        ></div>
                        <span className="text-xs text-gray-600">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trends Area Chart */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Динамика взаимодействия</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={trendsData}>
                    <defs>
                      <linearGradient id="colorUniversities" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorPartners" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" label={{ value: 'Количество взаимодействий', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="университеты"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorUniversities)"
                    />
                    <Area
                      type="monotone"
                      dataKey="предприятия"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorPartners)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="p-6">
              <div className="flex flex-col h-[600px]">
                <h2 className="text-2xl font-semibold mb-6">Сообщения</h2>
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 border border-gray-200 rounded-xl p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.isMine
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {!message.isMine && (
                          <p className="text-xs font-semibold mb-1 opacity-70">{message.sender}</p>
                        )}
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isMine ? "text-white/70" : "text-gray-500"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Отправить
                  </button>
                </div>
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Документы</h2>
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  <Plus className="w-4 h-4" />
                  Загрузить документ
                </button>
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{new Date(doc.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusBadge(doc.status)}
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Meetings Tab */}
            <TabsContent value="meetings" className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Встречи и мероприятия</h2>
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  <Plus className="w-4 h-4" />
                  Запланировать встречу
                </button>
              </div>
              <div className="space-y-4">
                {meetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{meeting.title}</h3>
                          <p className="text-sm text-gray-600">С: {meeting.partner}</p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          meeting.type === "online"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {meeting.type === "online" ? "Онлайн" : "Офлайн"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(meeting.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Присоединиться
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Перенести
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
