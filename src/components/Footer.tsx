import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">КГЭУ Канцелярия</span>
            </div>
            <p className="text-gray-400">
              Качественные канцелярские товары для студентов и преподавателей
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Тетради
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Ручки
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Папки
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Карандаши
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/delivery"
                  className="hover:text-white transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="hover:text-white transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>КГЭУ, г. Казань</p>
              <p>Красносельская, 51</p>
              <p>+7 (843) 519-42-95</p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Phone" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 КГЭУ Канцелярия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
