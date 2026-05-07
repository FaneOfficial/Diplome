import { Calendar, MapPin, Users, Tag, Clock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Разработка системы автоматизации производства",
      partner: "ТехноПром",
      university: "МГТУ",
      status: "Активный",
      category: "Машиностроение",
      startDate: "Январь 2026",
      participants: 15,
      progress: 65,
      description:
        "Создание интеллектуальной системы управления производственными процессами на базе IoT и AI",
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Платформа для дистанционного обучения",
      partner: "ИнноСофт",
      university: "СПбПУ",
      status: "Активный",
      category: "IT",
      startDate: "Февраль 2026",
      participants: 22,
      progress: 80,
      description:
        "Разработка современной образовательной платформы с элементами геймификации и адаптивного обучения",
      image: "https://images.unsplash.com/photo-1774955282767-f595d721c940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBjb21wdXRlcnMlMjBtb2Rlcm58ZW58MXx8fHwxNzc1MTU3MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Исследование альтернативных источников энергии",
      partner: "ЭнергоСтрой",
      university: "КФУ",
      status: "Планируется",
      category: "Энергетика",
      startDate: "Апрель 2026",
      participants: 18,
      progress: 15,
      description:
        "Научно-исследовательский проект по разработке эффективных систем солнечной энергетики",
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTEzMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Разработка медицинского диагностического ПО",
      partner: "БиоМед Групп",
      university: "НГУ",
      status: "Активный",
      category: "Медицина",
      startDate: "Декабрь 2025",
      participants: 12,
      progress: 90,
      description:
        "Создание системы автоматической диагностики заболеваний на основе машинного обучения",
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Блокчейн-платформа для образования",
      partner: "ФинТех Системы",
      university: "УрФУ",
      status: "Активный",
      category: "Финтех",
      startDate: "Январь 2026",
      participants: 10,
      progress: 45,
      description:
        "Разработка децентрализованной системы хранения и верификации образовательных достижений",
      image: "https://images.unsplash.com/photo-1774955282767-f595d721c940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBjb21wdXRlcnMlMjBtb2Rlcm58ZW58MXx8fHwxNzc1MTU3MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Автономные робототехнические системы",
      partner: "РобоТех",
      university: "ТГУ",
      status: "Завершен",
      category: "Робототехника",
      startDate: "Сентябрь 2025",
      participants: 20,
      progress: 100,
      description:
        "Разработка и тестирование автономных роботов для использования на производстве",
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTEzMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "bg-green-100 text-green-700";
      case "Планируется":
        return "bg-blue-100 text-blue-700";
      case "Завершен":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const stats = [
    { label: "Всего проектов", value: "1200+", icon: TrendingUp },
    { label: "Активных проектов", value: "850+", icon: Clock },
    { label: "Завершенных проектов", value: "350+", icon: TrendingUp },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Совместные проекты
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реализуемые и завершенные проекты взаимодействия вузов и предприятий-партнеров
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">Партнер:</span>
                    <span>{project.partner}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">Вуз:</span>
                    <span>{project.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{project.participants} участников</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Прогресс</span>
                    <span className="font-semibold text-blue-600">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow">
                  Подробнее о проекте
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Есть идея для проекта?</h2>
          <p className="text-lg mb-6 opacity-90">
            Предложите свой проект и найдите партнеров для его реализации
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Предложить проект
          </button>
        </div>
      </div>
    </div>
  );
}
