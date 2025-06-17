import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Иванова",
      rating: 5,
      comment:
        "Отличный магазин! Быстрая доставка прямо в университет. Качество товаров на высоте.",
      date: "15 марта 2024",
      product: "Тетрадь А4 в клетку",
    },
    {
      name: "Петр Сидоров",
      rating: 4,
      comment: "Хорошие цены, удобно заказывать через сайт. Рекомендую!",
      date: "10 марта 2024",
      product: "Ручка синяя BIC",
    },
    {
      name: "Мария Петрова",
      rating: 5,
      comment: "Всегда покупаю здесь канцелярию. Надежно и быстро.",
      date: "8 марта 2024",
      product: "Папка-скоросшиватель",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Отзывы покупателей
          </h1>
          <p className="text-gray-600">
            Что говорят наши клиенты о качестве товаров и сервиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <p>Средняя оценка</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-primary">127</div>
              <p className="text-gray-600">Отзывов получено</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <p className="text-sm text-primary">Товар: {review.product}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Оставить отзыв</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Оценка</label>
                <div className="flex space-x-1">{renderStars(0)}</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Отзыв</label>
                <textarea
                  className="w-full p-2 border rounded-lg h-24"
                  placeholder="Напишите ваш отзыв"
                />
              </div>
              <Button>Отправить отзыв</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
