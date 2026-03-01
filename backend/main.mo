import Array "mo:core/Array";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type MenuItem = {
    name : Text;
    description : Text;
    price : Float;
    vegetarian : Bool;
  };

  type MenuCategory = {
    name : Text;
    items : [MenuItem];
  };

  let menuCategories : [MenuCategory] = [
    {
      name = "Appetizers";
      items = [
        {
          name = "Bruschetta";
          description = "Grilled bread with tomatoes and basil";
          price = 7.99;
          vegetarian = true;
        },
        {
          name = "Chicken Wings";
          description = "Spicy grilled chicken wings";
          price = 9.99;
          vegetarian = false;
        },
      ];
    },
    {
      name = "Pizzas";
      items = [
        {
          name = "Margherita";
          description = "Classic pizza with tomato, mozzarella, and basil";
          price = 12.99;
          vegetarian = true;
        },
        {
          name = "Pepperoni";
          description = "Pizza with pepperoni slices";
          price = 14.99;
          vegetarian = false;
        },
      ];
    },
    {
      name = "Pastas";
      items = [
        {
          name = "Spaghetti Carbonara";
          description = "Spaghetti with bacon, eggs, and parmesan";
          price = 13.99;
          vegetarian = false;
        },
        {
          name = "Penne Arrabbiata";
          description = "Spicy tomato sauce with penne pasta";
          price = 11.99;
          vegetarian = true;
        },
      ];
    },
  ];

  public query ({ caller }) func getMenuCategories() : async [MenuCategory] {
    menuCategories;
  };
};
