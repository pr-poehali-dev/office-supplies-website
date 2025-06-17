import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <span className="text-xs text-primary font-medium">{category}</span>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">{price} ₽</span>
            <Button
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon name="Plus" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
