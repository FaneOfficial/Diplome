import { Outlet, Link, useLocation } from "react-router";
import { Building2, GraduationCap, Briefcase, Mail, Menu, X, LayoutDashboard, LogIn } from "lucide-react";
import { useState } from "react";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "/", icon: Building2 },
    { name: "Вузы", href: "/universities", icon: GraduationCap },
    { name: "Партнеры", href: "/partners", icon: Briefcase },
    { name: "Проекты", href: "/projects", icon: Building2 },
    { name: "Панель", href: "/dashboard", icon: LayoutDashboard },
    { name: "Контакты", href: "/contact", icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                УниПартнёр
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive(item.href)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                to="/auth"
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Войти</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${
                      isActive(item.href)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Войти</span>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">УниПартнёр</span>
              </div>
              <p className="text-gray-400">
                Платформа для эффективного взаимодействия вузов и предприятий-партнеров
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/universities" className="hover:text-white transition-colors">Вузы</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Партнеры</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Проекты</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Панель</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@unipartner.ru</li>
                <li>Телефон: +7 (495) 123-45-67</li>
                <li>Адрес: Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 УниПартнёр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}