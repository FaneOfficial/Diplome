import { GraduationCap, MapPin, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Universities() {
  const universities = [
    {
      name: "Московский государственный технический университет",
      location: "Москва",
      students: "25000+",
      specializations: ["Машиностроение", "Информатика", "Энергетика"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1MDUyNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Санкт-Петербургский политехнический университет",
      location: "Санкт-Петербург",
      students: "30000+",
      specializations: ["Робототехника", "ИТ", "Биотехнологии"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1774955282767-f595d721c940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBjb21wdXRlcnMlMjBtb2Rlcm58ZW58MXx8fHwxNzc1MTU3MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Казанский федеральный университет",
      location: "Казань",
      students: "40000+",
      specializations: ["Химия", "Физика", "Медицина"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Новосибирский государственный университет",
      location: "Новосибирск",
      students: "15000+",
      specializations: ["Математика", "Физика", "Информатика"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1MDUyNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Уральский федеральный университет",
      location: "Екатеринбург",
      students: "35000+",
      specializations: ["Металлургия", "Строительство", "ИТ"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1774955282767-f595d721c940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBjb21wdXRlcnMlMjBtb2Rlcm58ZW58MXx8fHwxNzc1MTU3MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Томский государственный университет",
      location: "Томск",
      students: "20000+",
      specializations: ["Ядерная физика", "Биология", "Экономика"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3NTE1NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Вузы-партнеры
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ведущие образовательные учреждения России, участвующие в программе
            взаимодействия с предприятиями
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold">{university.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{university.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{university.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{university.students} студентов</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500 mb-2">Основные направления:</p>
                  <div className="flex flex-wrap gap-2">
                    {university.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ваш вуз еще не с нами?</h2>
          <p className="text-lg mb-6 opacity-90">
            Присоединяйтесь к платформе и получите доступ к сети предприятий-партнеров
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Подать заявку
          </button>
        </div>
      </div>
    </div>
  );
}
