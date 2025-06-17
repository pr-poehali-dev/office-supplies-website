import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Тетрадь А4 в клетку",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      category: "Тетради",
    },
    {
      name: "Ручка синяя BIC",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1606041011872-596597976b25?w=300&h=300&fit=crop",
      category: "Письменные принадлежности",
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
    {
      name: "Корректор-ручка",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      category: "Корректоры",
    },
    {
      name: "Клей-карандаш",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?w=300&h=300&fit=crop",
      category: "Клей",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Самые востребованные канцелярские товары среди студентов КГЭУ
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
