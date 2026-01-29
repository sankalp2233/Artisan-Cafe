interface MenuCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isAvailable?: boolean;
}

const MenuCard = ({ name, description, price, image, category, isAvailable = true }: MenuCardProps) => {
    return (
        <div className="card group overflow-hidden">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-cafe-brown-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!isAvailable && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">Sold Out</span>
                    </div>
                )}
            </div>

            <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-semibold text-xl text-cafe-brown-800">{name}</h3>
                <span className="font-bold text-cafe-accent text-lg">${price.toFixed(2)}</span>
            </div>

            <p className="text-cafe-brown-600 text-sm mb-3">{description}</p>

            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-cafe-brown-500 bg-cafe-brown-100 px-3 py-1 rounded-full">
                    {category}
                </span>
                {isAvailable && (
                    <button className="text-cafe-accent hover:text-cafe-gold font-semibold text-sm transition-colors duration-300">
                        Order Now
                    </button>
                )}
            </div>
        </div>
    );
};

export default MenuCard;
