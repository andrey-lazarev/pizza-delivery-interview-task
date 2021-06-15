import { getTempUser } from "../helpers/getTempUser";
import { getMenuMockUp } from "../helpers/getMenuMockUp";
import { IAppState } from "../types/types";

const menuMockUpData = [
  {
    name: 'Quarto Formaggio',
    description: 'Tomato sauce, Mozzarella cheese, Cheddar cheese, Blue cheese, Parmesan cheese',
  },
  {
    name: 'Chicken Barbecue Pizza',
    description: 'Caesar sauce, Mozzarella cheese, Smoked chicken, White mushrooms, Fried onion rings',
  },
  {
    name: 'Margarita',
    description: 'Tomato sauce, Mozzarella cheese, Tomatoes',
  },
  {
    name: 'Classic Italian Pizza',
    description: 'Caesar sauce, Mozzarella cheese, Ham, White mushrooms',
  },
  {
    name: 'Pepperoni',
    description: 'Tomato sauce, Mozzarella cheese, Pepperoni',
  },
  {
    name: 'Big Chicken Pizza',
    description: 'Chicken, Burger sauce, Mozzarella cheese, Deep-fried onion rings, Pickles',
  },
  {
    name: 'Meat Barbecue Pizza',
    description: 'Barbecue sauce, Mozzarella cheese, Cheddar cheese, Ham, Bacon, Pepperoni, Chicken, Fried onion rings',
  },
  {
    name: 'Cheeseburger Pizza',
    description: 'Tomato sauce, Mozzarella cheese, Beef, Pickles, Red onion rings, Ketchup, Sweet mustard sauce',
  },
  {
    name: 'Super Vegetable Pizza',
    description: 'Tomato sauce, Mozzarella cheese, White mushrooms, Sweet pepper, Red onion rings, Tomatoes, Black olives',
  },
  {
    name: 'Havana Pizza',
    description: 'Tomato sauce, Mozzarella cheese, Ham, Pineapple',
  },
];

export const getInitialState = (): IAppState => ({
  menu: getMenuMockUp(menuMockUpData),
  currency: 'dollar',
  user: getTempUser(),
  modal: {
  },
  cart: {
  }
});