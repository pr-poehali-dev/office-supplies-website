import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Канцелярия для студентов
          <span className="block text-blue-200">КГЭУ</span>
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Качественные канцелярские товары для учебы и работы. Доставка по
          университету и городу.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/catalog">
              <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
              Открыть каталог
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Icon name="Phone" className="w-5 h-5 mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
