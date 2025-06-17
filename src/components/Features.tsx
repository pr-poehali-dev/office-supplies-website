import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставка по университету в течение часа",
    },
    {
      icon: "Shield",
      title: "Качество товаров",
      description: "Только проверенные бренды канцелярии",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Наличные, карта или перевод на карту",
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description: "Ответим на любые вопросы в Telegram",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon as any}
                  className="w-8 h-8 text-white"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
