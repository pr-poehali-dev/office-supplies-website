import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Доставка и контакты
          </h1>
          <p className="text-gray-600">
            Информация о доставке товаров и наших контактах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Icon name="MapPin" className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Наш адрес</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Казанский государственный</p>
                <p>энергетический университет</p>
                <p>ул. Красносельская, 51</p>
                <p>г. Казань, Республика Татарстан</p>
                <p>420066</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Icon name="Clock" className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Время работы</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: выходной</p>
                <p className="text-primary font-medium">
                  Доставка: ежедневно 10:00 - 20:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Icon name="Truck" className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Варианты доставки</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon
                  name="Building"
                  className="w-8 h-8 text-primary mx-auto mb-2"
                />
                <h4 className="font-semibold mb-2">По университету</h4>
                <p className="text-sm text-gray-600 mb-2">
                  До аудитории или общежития
                </p>
                <p className="text-primary font-bold">Бесплатно</p>
                <p className="text-xs text-gray-500">В течение часа</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon
                  name="Home"
                  className="w-8 h-8 text-primary mx-auto mb-2"
                />
                <h4 className="font-semibold mb-2">Курьером по городу</h4>
                <p className="text-sm text-gray-600 mb-2">До вашего адреса</p>
                <p className="text-primary font-bold">150 ₽</p>
                <p className="text-xs text-gray-500">В течение дня</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon
                  name="Package"
                  className="w-8 h-8 text-primary mx-auto mb-2"
                />
                <h4 className="font-semibold mb-2">Самовывоз</h4>
                <p className="text-sm text-gray-600 mb-2">Из нашего офиса</p>
                <p className="text-primary font-bold">Бесплатно</p>
                <p className="text-xs text-gray-500">В любое время</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Icon name="Phone" className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Связаться с нами</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600 mb-1">+7 (843) 519-42-95</p>
                <p className="text-sm text-gray-500">
                  Звонки принимаем с 9:00 до 18:00
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Telegram</h4>
                <p className="text-gray-600 mb-1">@kgeu_shop</p>
                <p className="text-sm text-gray-500">Быстрые ответы 24/7</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600 mb-1">shop@kgeu.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение дня</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <p className="text-gray-600 mb-1">+7 (843) 519-42-95</p>
                <p className="text-sm text-gray-500">Сообщения и звонки</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;
