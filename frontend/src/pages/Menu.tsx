import { useState, useRef, useEffect } from 'react';
import { Leaf, MessageCircle, ChevronRight, Search } from 'lucide-react';
import { useGetMenuCategories } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

// Complete menu data matching the user's provided menu exactly
const FULL_MENU = [
  {
    name: 'Roti Rolls',
    items: [
      { name: 'Chicken Bhuna Roti', description: 'Maida roti [15 cm] long, with fried egg and pickled onion.', price: 220, vegetarian: false },
      { name: 'Chicken Tikka Roti', description: 'Maida roti, fried egg and pickled onion.', price: 220, vegetarian: false },
      { name: 'Chicken Ghee Roast Roti', description: 'Maida roti, fried egg and pickled onion.', price: 220, vegetarian: false },
      { name: 'Chicken Kheema Ghotala Roti', description: '', price: 220, vegetarian: false },
      { name: 'Bacon Egg Cheese Roti', description: '', price: 260, vegetarian: false },
    ],
  },
  {
    name: 'Starters',
    items: [
      { name: 'Ghee Roast Chicken Drumstick 2pcs', description: 'Spicy and tangy masala served with 2 buns', price: 240, vegetarian: false },
      { name: 'Pepper Chicken Leg', description: '', price: 240, vegetarian: false },
      { name: 'Cafreal Chicken Breast', description: 'Served with butter garlic potatos', price: 280, vegetarian: false },
    ],
  },
  {
    name: 'Fried',
    items: [
      { name: 'Chicken Pan Roll', description: '', price: 80, vegetarian: false },
      { name: 'Corn Cheese Croquettes', description: '', price: 60, vegetarian: true },
      { name: 'Farcha Chicken Drumstick', description: 'Fried in egg.', price: 100, vegetarian: false },
      { name: 'Chicken Cheese Kebab', description: 'Fried in egg.', price: 90, vegetarian: false },
      { name: 'Chicken Lollipops [6 Pieces]', description: '', price: 200, vegetarian: false },
      { name: 'Chicken Kebab [Mini, Box Of 6]', description: 'Fried in egg.', price: 280, vegetarian: false },
    ],
  },
  {
    name: 'Eggs',
    items: [
      { name: 'Sunny Side Up Omelette', description: '', price: 180, vegetarian: false },
      { name: 'Plain Omelette [3 Eggs]', description: '', price: 180, vegetarian: false },
      { name: 'Masala Omelette', description: '', price: 210, vegetarian: false },
      { name: 'Cheese Omelette [3 Eggs]', description: '', price: 210, vegetarian: false },
      { name: 'Spinach Ricotta Omelette [3 Eggs]', description: '', price: 250, vegetarian: false },
      { name: 'Cheese And Mushroom Omelette', description: '', price: 250, vegetarian: false },
      { name: 'Plain Scrambled Egg [3 Eggs]', description: '', price: 180, vegetarian: false },
      { name: 'Cheese Scrambled Egg [3 Eggs]', description: '', price: 210, vegetarian: false },
      { name: 'Spinach Ricotta Scrambled Egg [3 Eggs]', description: '', price: 250, vegetarian: false },
      { name: 'Masala Scrambled Egg [3 Eggs]', description: '', price: 210, vegetarian: false },
      { name: 'Ham And Cheese Omelette [3 Eggs]', description: '', price: 260, vegetarian: false },
      { name: 'Guacamole Stuffed Omelette', description: '', price: 300, vegetarian: false },
      { name: 'Pesto Sunny Side', description: '', price: 300, vegetarian: false },
      { name: 'Burnt Garlic Spring Onion Omelette', description: '', price: 260, vegetarian: false },
    ],
  },
  {
    name: 'Non Veg Pizza',
    items: [
      { name: 'Chicken Cold Cut Pizza [11 Inches]', description: '', price: 330, vegetarian: false },
      { name: 'Grilled Chicken Pizza [11 Inches]', description: '', price: 330, vegetarian: false },
      { name: 'Pork Belly And Ham Pizza [11 Inches]', description: '', price: 430, vegetarian: false },
      { name: 'Chicken Achari Pizza [11 Inches]', description: '', price: 330, vegetarian: false },
      { name: 'Choriz Pepperoni Pizza [11 Inches]', description: '', price: 460, vegetarian: false },
      { name: 'Spicy Mince Masala Salami And Kale Salad Pizza [11 Inches]', description: '', price: 330, vegetarian: false },
    ],
  },
  {
    name: 'Veg Pizza',
    items: [
      { name: 'Margherita Pizza Boat [11 Inches]', description: '', price: 210, vegetarian: true },
      { name: 'Butter Garlic Mushroom Pizza [11 Inches]', description: '', price: 300, vegetarian: true },
      { name: 'Paneer Achari Pizza [11 Inches]', description: '', price: 330, vegetarian: true },
      { name: 'Mix Veg Pizza Boat [11 Inches]', description: '', price: 330, vegetarian: true },
    ],
  },
  {
    name: 'Sandwiches',
    items: [
      { name: 'Egg Mayo Sandwich [Triangle, 2 Pieces]', description: '', price: 160, vegetarian: false },
      { name: 'Chicken Pepper Roast Sandwich [Triangle, 2 Pieces]', description: '', price: 160, vegetarian: false },
      { name: 'Chicken Mayo Sandwich [Triangle, 2 Pieces]', description: '', price: 160, vegetarian: false },
      { name: 'Chicken Tikka Sandwich [Triangle, 2 Pieces]', description: '', price: 200, vegetarian: false },
      { name: 'Tft Club Chicken Sandwich', description: 'Chicken, egg and salami.', price: 260, vegetarian: false },
      { name: 'TFT Club Chicken And Ham', description: 'Chicken, egg and pork ham.', price: 280, vegetarian: false },
    ],
  },
  {
    name: 'Burgers',
    items: [
      { name: 'House Chicken Burger', description: 'Mince Patty.', price: 240, vegetarian: false },
      { name: 'Fried Chicken Burger', description: '', price: 280, vegetarian: false },
      { name: 'Buff Smashburger', description: 'Buffalo mince double patty with Cheddar cheese.', price: 350, vegetarian: false },
    ],
  },
  {
    name: 'Non Veg Snacks',
    items: [
      { name: 'Chicken Puff', description: '', price: 100, vegetarian: false },
      { name: 'Chicken Mince Patty', description: '', price: 75, vegetarian: false },
      { name: 'Mutton Mince Patty', description: '', price: 100, vegetarian: false },
    ],
  },
  {
    name: 'Hot Dogs',
    items: [
      { name: 'Chicken Mince Hot Dog Roll [1 Piece]', description: '', price: 85, vegetarian: false },
      { name: 'Chicken Mayo Hot Dog Roll [1 Piece]', description: '', price: 85, vegetarian: false },
      { name: 'Mutton Mince Hot Dog Roll [1 Piece]', description: '', price: 130, vegetarian: false },
      { name: 'TFT Special Hot Dog', description: 'Smoked chicken frankfurter, bacon, caramelized onion, cheese and mustard mayo.', price: 260, vegetarian: false },
    ],
  },
  {
    name: 'Veg Snacks',
    items: [
      { name: 'Veggie Patty', description: '', price: 75, vegetarian: true },
    ],
  },
  {
    name: 'Tea',
    items: [
      { name: 'Black Hot Tea', description: '', price: 100, vegetarian: true },
      { name: 'Plain With Milk Hot Tea', description: '', price: 120, vegetarian: true },
      { name: 'Adrak Chai', description: '', price: 120, vegetarian: true },
      { name: 'Elaichi Chai', description: '', price: 120, vegetarian: true },
      { name: 'Masala Chai', description: '', price: 120, vegetarian: true },
      { name: 'Lemongrass Chai', description: '', price: 120, vegetarian: true },
      { name: 'Chai Supreme', description: 'Adrak, elaichi, masala and lemongrass.', price: 140, vegetarian: true },
    ],
  },
  {
    name: 'Drinks (Beverages)',
    items: [
      { name: 'Lemonade Soda', description: '', price: 130, vegetarian: true },
      { name: 'Lemonade Water', description: '', price: 130, vegetarian: true },
      { name: 'Kokum Soda', description: '', price: 130, vegetarian: true },
      { name: 'Ginger Mint Jaggery Lemonade', description: '', price: 160, vegetarian: true },
      { name: 'Strawberry Ginger', description: '', price: 160, vegetarian: true },
      { name: 'Spiced Ginger', description: '', price: 160, vegetarian: true },
      { name: 'Lemon Iced Tea', description: '', price: 130, vegetarian: true },
      { name: 'Peach Iced Tea', description: '', price: 130, vegetarian: true },
      { name: 'Passion Fruit Iced Tea', description: '', price: 130, vegetarian: true },
      { name: 'Watermelon Ice Tea', description: '', price: 130, vegetarian: true },
    ],
  },
  {
    name: 'Mojito',
    items: [
      { name: 'Classic Mojito', description: '[Non Alcoholic]', price: 130, vegetarian: true },
      { name: 'Coconut Mojito', description: '[Non Alcoholic]', price: 150, vegetarian: true },
      { name: 'Orange Mojito', description: '[Non Alcoholic]', price: 180, vegetarian: true },
      { name: 'Pineapple Mojito', description: '[Non Alcoholic]', price: 150, vegetarian: true },
      { name: 'Watermelon Ginger Mojito', description: '[Non Alcoholic]', price: 150, vegetarian: true },
    ],
  },
  {
    name: 'Coffee',
    items: [
      { name: 'Espresso', description: '', price: 90, vegetarian: true },
      { name: 'Americano', description: '', price: 120, vegetarian: true },
      { name: 'Cappuccino', description: '', price: 160, vegetarian: true },
      { name: 'Latte', description: '', price: 160, vegetarian: true },
      { name: 'Cafe Mocha', description: '', price: 170, vegetarian: true },
      { name: 'Flat White Coffee', description: '', price: 160, vegetarian: true },
      { name: 'Cortado', description: '', price: 160, vegetarian: true },
      { name: 'Iced Americano', description: '', price: 160, vegetarian: true },
      { name: 'Iced Latte', description: '', price: 200, vegetarian: true },
      { name: 'Iced Mocha', description: '', price: 220, vegetarian: true },
      { name: 'Cold Coffee', description: '', price: 220, vegetarian: true },
      { name: 'Cold Chocolate Milkshake', description: '', price: 220, vegetarian: true },
      { name: 'Vietnamese Iced Filter Coffee', description: '', price: 180, vegetarian: true },
      { name: 'South Indian Filter Coffee', description: '', price: 110, vegetarian: true },
      { name: 'Filter Cold Coffee', description: '', price: 200, vegetarian: true },
      { name: 'Walk Me Up Coffee', description: 'Filter press decoction, orange juice, cinnamon, soda and caramel.', price: 180, vegetarian: true },
    ],
  },
  {
    name: 'Milkshakes',
    items: [
      { name: 'Banana Caramel Milkshake', description: '', price: 300, vegetarian: true },
      { name: 'Strawberry Oreo Milkshake', description: '', price: 300, vegetarian: true },
    ],
  },
  {
    name: 'Mango Beverages',
    items: [
      { name: 'Mango Chaas', description: 'Cooling for the stomach.', price: 180, vegetarian: true },
      { name: 'Mango Tamarind Iced Tea', description: 'Khatta meetha.', price: 180, vegetarian: true },
      { name: 'Mango Coconut Milkshake', description: 'Made with amras, coconut cream, vanilla ice cream and ice.', price: 300, vegetarian: true },
      { name: 'Mango Falooda', description: '', price: 300, vegetarian: true },
    ],
  },
  {
    name: 'Salad',
    items: [
      { name: 'Stephs Warm Chicken Salad', description: 'Chicken, kale, corn, bell pepper, onion, mixed seeds, candied peanuts, ricotta and orange vinaigrette.', price: 320, vegetarian: false },
      { name: 'Stephs Warm Veg Salad', description: 'Paneer, corn, bell pepper, kale, onion, mixed seeds, candied peanuts, ricotta and orange vinaigrette.', price: 320, vegetarian: true },
      { name: 'Grilled Chicken Salad', description: 'Grilled chicken, kale, roman lettuce, pickled cucumber, marinated tomato, olives, honey roasted walnut and pesto.', price: 360, vegetarian: false },
    ],
  },
  {
    name: 'Meals',
    items: [
      { name: 'Cheese Stuffed Chicken Breast', description: 'Chicken breast stuffed with ricotta, Mozzarella and spinach. Served with a side salad and potato wedges.', price: 380, vegetarian: false },
      { name: 'Chicken Gassi Curry With Fat Rice', description: 'Mangalorean style chicken curry in coconut milk.', price: 320, vegetarian: false },
      { name: 'Chicken Mac N Cheese', description: 'Chicken mac n cheese baked.', price: 300, vegetarian: false },
      { name: 'Veg Mac N Cheese', description: 'Simple, heart macaroni and cheese with mix veggies.', price: 250, vegetarian: true },
      { name: 'Sundried Tomato With Ricotta Pasta', description: '', price: 350, vegetarian: true },
      { name: 'Fried Chicken Pasta', description: 'Creamy spinach sauce.', price: 420, vegetarian: false },
      { name: 'Mutton Keema Masala', description: 'Mutton keema, buttered buns [2 pieces], pickled onion and masala chai.', price: 420, vegetarian: false },
    ],
  },
  {
    name: 'Stuffed Poee',
    items: [
      { name: 'Chicken Cafreal Poie', description: 'Comes with potato wedges.', price: 220, vegetarian: false },
      { name: 'Buff Sukha Poee', description: 'Buff Sukha masala stuffed in poee.', price: 220, vegetarian: false },
      { name: 'Goan Chorizo Poee', description: 'Goan chorizo stuffed poee.', price: 220, vegetarian: false },
    ],
  },
  {
    name: 'Bacon and Ham Quiche',
    items: [
      { name: 'Single Bacon And Ham Quiche', description: 'Palm sized quiche.', price: 180, vegetarian: false },
      { name: '3 Bacon And Ham Quiches', description: '3 Palm sized quiches.', price: 450, vegetarian: false },
      { name: 'Bacon [Mini, 6 Pieces] And Ham Quiches', description: '6 Mini size quiches.', price: 480, vegetarian: false },
    ],
  },
  {
    name: 'Grilled Chicken Quiche',
    items: [
      { name: 'Single Grilled Chicken Quiche', description: 'Palm sized quiche.', price: 180, vegetarian: false },
      { name: 'Box Of 3 Grilled Chicken Quiche', description: '3 Palm sized quiches.', price: 450, vegetarian: false },
      { name: 'Chicken Quiches [Mini, 6 Pieces]', description: 'Mini quiches.', price: 480, vegetarian: false },
    ],
  },
  {
    name: 'Shepherds Pie',
    items: [
      { name: 'Single Shepherds Pie', description: 'Single shepherds pie made of buffalo mince.', price: 140, vegetarian: false },
      { name: 'Box Of 3 Shepherds Pie', description: '3 Palm sized shepherds pies.', price: 340, vegetarian: false },
      { name: 'Shepherds Pies [Mini, 6 Pieces]', description: '6 Mini siized shepherds pies.', price: 420, vegetarian: false },
    ],
  },
  {
    name: 'Corn Spinach Quiche',
    items: [
      { name: 'Corn Spinach Quiche', description: 'Palm sized quiche.', price: 160, vegetarian: true },
      { name: 'Box Of 3 Corn Spinach Quiche', description: '[Veg preparation] 3 Palm sized quiches.', price: 450, vegetarian: true },
      { name: '6 Corn Spinach Quiche [Mini]', description: 'Smaller sized quiches.', price: 480, vegetarian: true },
    ],
  },
];

// Map category names to placeholder images
const categoryImages: Record<string, string> = {
  'Roti Rolls': '/assets/generated/food-starters.dim_600x600.png',
  'Starters': '/assets/generated/food-starters.dim_600x600.png',
  'Fried': '/assets/generated/food-starters.dim_600x600.png',
  'Eggs': '/assets/generated/food-eggs.dim_600x600.png',
  'Non Veg Pizza': '/assets/generated/food-pizza.dim_600x600.png',
  'Veg Pizza': '/assets/generated/food-pizza.dim_600x600.png',
  'Sandwiches': '/assets/generated/food-burger.dim_600x600.png',
  'Burgers': '/assets/generated/food-burger.dim_600x600.png',
  'Non Veg Snacks': '/assets/generated/food-starters.dim_600x600.png',
  'Hot Dogs': '/assets/generated/food-burger.dim_600x600.png',
  'Veg Snacks': '/assets/generated/food-starters.dim_600x600.png',
  'Tea': '/assets/generated/food-chai.dim_600x600.png',
  'Drinks (Beverages)': '/assets/generated/food-mojito.dim_600x600.png',
  'Mojito': '/assets/generated/food-mojito.dim_600x600.png',
  'Coffee': '/assets/generated/food-coffee.dim_600x600.png',
  'Milkshakes': '/assets/generated/food-milkshake.dim_600x600.png',
  'Mango Beverages': '/assets/generated/food-milkshake.dim_600x600.png',
  'Salad': '/assets/generated/food-salad.dim_600x600.png',
  'Meals': '/assets/generated/food-starters.dim_600x600.png',
  'Stuffed Poee': '/assets/generated/food-burger.dim_600x600.png',
  'Bacon and Ham Quiche': '/assets/generated/gallery-quiche.dim_800x600.png',
  'Grilled Chicken Quiche': '/assets/generated/gallery-quiche.dim_800x600.png',
  'Shepherds Pie': '/assets/generated/gallery-quiche.dim_800x600.png',
  'Corn Spinach Quiche': '/assets/generated/gallery-quiche.dim_800x600.png',
};

export default function Menu() {
  const { data: backendCategories, isLoading } = useGetMenuCategories();
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const filterRef = useRef<HTMLDivElement>(null);

  // Use FULL_MENU as the primary data source (backend has placeholder data)
  const menuData = FULL_MENU;

  const filteredMenu = search.trim()
    ? menuData.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : menuData;

  const scrollToCategory = (index: number) => {
    setActiveCategory(index);
    const el = sectionRefs.current[index];
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (search.trim()) return;
      const scrollY = window.scrollY + 160;
      let current = 0;
      sectionRefs.current.forEach((ref, i) => {
        if (ref && ref.offsetTop <= scrollY) current = i;
      });
      setActiveCategory(current);

      // Scroll active pill into view
      const filterEl = filterRef.current;
      if (filterEl) {
        const activePill = filterEl.children[current] as HTMLElement;
        if (activePill) {
          activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [search]);

  return (
    <>
      {/* Header */}
      <section className="py-16 px-4 bg-brown text-center">
        <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Our Menu</p>
        <h1 className="font-heading text-5xl md:text-6xl font-semibold text-cream mb-4">
          What's Cooking
        </h1>
        <p className="font-body text-cream/70 text-base max-w-xl mx-auto">
          From hearty breakfasts to cozy dinners — there's something for everyone at The Family Table.
        </p>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-cream/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-light" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search menu items..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-cream text-sm font-body text-brown focus:outline-none focus:ring-2 focus:ring-terracotta/40"
            />
          </div>
          {/* Category Pills */}
          {!search.trim() && (
            <div
              ref={filterRef}
              className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
              style={{ scrollbarWidth: 'none' }}
            >
              {menuData.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCategory(i)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-200 ${
                    activeCategory === i
                      ? 'bg-terracotta text-cream shadow-warm'
                      : 'bg-cream-dark text-brown hover:bg-terracotta/10 hover:text-terracotta'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-cream rounded-3xl overflow-hidden shadow-warm">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-14">
            {filteredMenu.map((category, catIdx) => {
              const originalIdx = menuData.findIndex((c) => c.name === category.name);
              return (
                <section
                  key={category.name}
                  ref={(el) => { sectionRefs.current[originalIdx] = el; }}
                  id={`cat-${originalIdx}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brown">
                      {category.name}
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-body text-xs text-brown-light bg-cream-dark px-3 py-1 rounded-full">
                      {category.items.length} items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.items.map((item, itemIdx) => (
                      <MenuItemCard
                        key={itemIdx}
                        item={item}
                        image={categoryImages[category.name] || '/assets/generated/food-starters.dim_600x600.png'}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

interface MenuItemCardProps {
  item: { name: string; description: string; price: number; vegetarian: boolean };
  image: string;
}

function MenuItemCard({ item, image }: MenuItemCardProps) {
  return (
    <div className="bg-cream rounded-3xl overflow-hidden shadow-warm card-hover group flex flex-col">
      <div className="relative overflow-hidden h-44">
        <img
          src={image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.vegetarian && (
          <span className="absolute top-3 left-3 flex items-center gap-1 bg-olive text-cream text-xs font-body px-2.5 py-1 rounded-full">
            <Leaf className="w-3 h-3" />
            Veg
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-semibold text-brown mb-1 leading-snug">{item.name}</h3>
        {item.description && (
          <p className="font-body text-xs text-brown-light leading-relaxed mb-3 flex-1">{item.description}</p>
        )}
        {!item.description && <div className="flex-1" />}
        <div className="flex items-center justify-between mt-3">
          <span className="font-heading text-xl font-semibold text-terracotta">
            ₹{item.price.toFixed(2)}
          </span>
          <a
            href={`https://wa.me/919167340197?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name} (₹${item.price}) from The Family Table By Josephs.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-olive text-cream rounded-xl font-body text-xs font-medium hover:bg-olive/80 transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
