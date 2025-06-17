import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">
              КГЭУ Канцелярия
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/reviews"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Отзывы
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Доставка
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/cart">
                <Icon name="ShoppingCart" className="w-5 h-5" />
                <span className="ml-2 hidden sm:inline">Корзина</span>
              </Link>
            </Button>
            <Button size="sm">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
