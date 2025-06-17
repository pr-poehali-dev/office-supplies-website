import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const categories = [
    "Все товары",
    "Тетради",
    "Ручки",
    "Карандаши",
    "Папки",
    "Клей",
    "Корректоры",
  ];

  const products = [
    {
      name: "Тетрадь А4 в клетку 48 листов",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      category: "Тетради",
    },
    {
      name: "Тетрадь А5 в линейку 24 листа",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
      category: "Тетради",
    },
    {
      name: "Ручка синяя BIC",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1606041011872-596597976b25?w=300&h=300&fit=crop",
      category: "Ручки",
    },
    {
      name: "Ручка гелевая черная",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccc?w=300&h=300&fit=crop",
      category: "Ручки",
    },
    {
      name: "Папка-скоросшиватель",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      category: "Папки",
    },
    {
      name: "Карандаши цветные 12 шт",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
      category: "Карандаши",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог товаров
          </h1>
          <p className="text-gray-600">
            Широкий выбор канцелярских товаров для учебы
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Категории</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">
                Найдено {products.length} товаров
              </span>
              <div className="flex items-center space-x-2">
                <Icon name="Search" className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">Поиск</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
