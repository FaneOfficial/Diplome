import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
        >
          <Home className="w-5 h-5" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
