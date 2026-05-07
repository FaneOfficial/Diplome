import { Link } from "react-router";
import { ArrowRight, Users, Target, TrendingUp, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Users,
      title: "Сотрудничество",
      description: "Налаживайте партнерские отношения между вузами и предприятиями",
    },
    {
      icon: Target,
      title: "Целевые проекты",
      description: "Реализуйте совместные проекты и программы подготовки специалистов",
    },
    {
      icon: TrendingUp,
      title: "Развитие компетенций",
      description: "Повышайте качество образования через практическую подготовку",
    },
    {
      icon: Rocket,
      title: "Инновации",
      description: "Внедряйте передовые технологии и методы обучения",
    },
  ];

  const stats = [
    { value: "150+", label: "Вузов-партнеров" },
    { value: "500+", label: "Предприятий" },
    { value: "1200+", label: "Активных проектов" },
    { value: "50000+", label: "Студентов" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Платформа взаимодействия вузов и предприятий
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Объединяем образовательные учреждения и бизнес для создания эффективных
                партнерских программ и подготовки квалифицированных специалистов
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Стать партнером
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/universities"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Узнать больше
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1MDUyNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Современный кампус университета"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-gray-600">
              Создаем эффективную экосистему для образования и бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к нашей платформе и откройте новые возможности для развития
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Связаться с нами
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
