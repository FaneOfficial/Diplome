import { Building2, MapPin, Users, Briefcase, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Partners() {
  const partners = [
    {
      name: "ТехноПром",
      industry: "Машиностроение",
      location: "Москва",
      employees: "5000+",
      projects: 12,
      description: "Ведущий производитель промышленного оборудования",
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTEzMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "ИнноСофт",
      industry: "IT и разработка ПО",
      location: "Санкт-Петербург",
      employees: "3000+",
      projects: 18,
      description: "Разработка корпоративных решений и систем автоматизации",
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "ЭнергоСтрой",
      industry: "Энергетика",
      location: "Казань",
      employees: "8000+",
      projects: 9,
      description: "Строительство и модернизация энергетических объектов",
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTEzMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "БиоМед Групп",
      industry: "Фармацевтика",
      location: "Новосибирск",
      employees: "2000+",
      projects: 7,
      description: "Производство лекарственных препаратов и медоборудования",
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "ФинТех Системы",
      industry: "Финансовые технологии",
      location: "Москва",
      employees: "1500+",
      projects: 15,
      description: "Разработка финансовых платформ и платежных систем",
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTEzMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "РобоТех",
      industry: "Робототехника",
      location: "Екатеринбург",
      employees: "1000+",
      projects: 11,
      description: "Разработка и производство промышленных роботов",
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Доступ к талантам",
      description: "Прямой контакт с лучшими студентами и выпускниками",
    },
    {
      icon: TrendingUp,
      title: "Инновации",
      description: "Совместные исследования и разработки",
    },
    {
      icon: Briefcase,
      title: "Практическая подготовка",
      description: "Подготовка кадров под конкретные задачи компании",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Предприятия-партнеры
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Крупнейшие компании России, активно сотрудничающие с вузами в рамках
            образовательных и научных программ
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-block">
                      {partner.industry}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{partner.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{partner.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{partner.employees} сотрудников</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>{partner.projects} активных проектов</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow">
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Building2 className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Хотите стать партнером?</h2>
          <p className="text-lg mb-6 opacity-90">
            Присоединяйтесь к программе и получите доступ к лучшим образовательным
            учреждениям
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
