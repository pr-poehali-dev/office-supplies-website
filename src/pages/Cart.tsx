import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const cartItems = [
    {
      name: "Тетрадь А4 в клетку",
      price: 45,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop",
    },
    {
      name: "Ручка синяя BIC",
      price: 25,
      quantity: 3,
      image:
        "https://images.unsplash.com/photo-1606041011872-596597976b25?w=100&h=100&fit=crop",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price} ₽</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Minus" className="w-4 h-4" />
                        </Button>
                        <span className="px-3 py-1 bg-gray-100 rounded">
                          {item.quantity}
                        </span>
                        <Button variant="outline" size="sm">
                          <Icon name="Plus" className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {item.price * item.quantity} ₽
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500"
                        >
                          <Icon name="Trash2" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Итого</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Товары:</span>
                    <span>{total} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span className="text-green-600">Бесплатно</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>К оплате:</span>
                    <span>{total} ₽</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
