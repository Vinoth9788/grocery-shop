export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  unit: string;
}

export const categories = [
  { id: 'all', name: 'All Products', icon: '🛒' },
  { id: 'ingredients', name: 'Ingredients', icon: '🥕' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'biscuits', name: 'Biscuits', icon: '🍪' },
  { id: 'rice', name: 'Rice', icon: '🍚' },
  { id: 'essentials', name: 'Daily Essentials', icon: '🧴' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    category: 'ingredients',
    price: 25.00,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per kg'
  },
  {
    id: 2,
    name: 'Fresh Carrots',
    category: 'ingredients',
    price: 35.00,
    image: 'https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per kg'
  },
  {
    id: 3,
    name: 'Onion',
    category: 'ingredients',
    price: 30.00,
    image: 'https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg',
    unit: 'per kg'
  },
  {
    id: 4,
    name: 'Vegetables Mix',
    category: 'ingredients',
    price: 120.00,
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per bunch'
  },
  {
    id: 5,
    name: 'Capsicum',
    category: 'ingredients',
    price: 35.00,
    image: 'https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2024/08/Capsicum-215200.png?ssl=1',
    unit: 'per kg'
  },
  {
    id: 6,
    name: 'Fresh Ginger',
    category: 'ingredients',
    price: 30.00,
    image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per 100g'
  },
  {
    id: 7,
    name: 'Beverages',
    category: 'beverages',
    price: 40.00,
    image: 'https://thumbs.dreamstime.com/b/products-popular-global-soft-drink-brands-poznan-pol-oct-344374883.jpg',
    unit: 'per bottle depend on variety'
  },
  {
    id: 8,
    name: 'Mineral Water',
    category: 'beverages',
    price: 20,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per litre depend on variety'
  },
  {
    id: 9,
    name: 'Bathing Soaps',
    category: 'Bathing essentials',
    price: 40.00,
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/547546054/LF/AZ/CZ/205910647/bath-soaps-500x500.jpg',
    unit: 'per pack depend on variety'
  },
  {
    id: 10,
    name: 'Fresh Milk',
    category: 'Essentials',
    price: 35.00,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per liter'
  },
  {
    id: 11,
    name: 'Detergent Powder',
    category: 'Essentials',
    price: 70.00,
    image: 'https://i-media.vyaparify.com/vcards/products/23518/detergent.jpg',
    unit: 'per kg depend on variety'
  },
  {
    id: 12,
    name: 'Chocolate Cookies',
    category: 'biscuits',
    price: 7.00,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per piece'
  },
  {
    id: 13,
    name: 'Butter Biscuits',
    category: 'biscuits',
    price: 5.00,
    image: 'https://www.greatestbakery.in/wp-content/uploads/2022/03/Buy-Butter-Salt-Biscuit-in-Nagercoil.jpg',
    unit: 'per piece'
  },
  {
    id: 14,
    name: 'Cream Biscuits',
    category: 'biscuits',
    price: 5.00,
    image: 'https://media.istockphoto.com/id/184372692/photo/chocolate-whoopie-pies.jpg?s=612x612&w=0&k=20&c=_GWL0L_eFsmke45j9xp2WrFGaR_7PF3HPl0_bry6SeU=',
    unit: 'per pack depend on variety'
  },
  {
    id: 15,
    name: 'Oat Cookies',
    category: 'biscuits',
    price: 10.00,
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per piece'
  },
  {
    id: 16,
    name: 'Rice',
    category: 'rice',
    price: 1300.00,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/899/049/small/close-up-of-milled-rice-in-bowls-free-photo.jpg',
    unit: 'per 25kg'
  },
  {
    id: 17,
    name: 'Banana',
    category: 'banana',
    price: 5.00,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    unit: 'per piece'
  },
  {
    id: 18,
    name: 'Notebook',
    category: 'notebook',
    price: 20.00,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/007/691/898/small/white-notebook-with-lines-can-and-pen-notebook-and-pen-isolated-on-background-vector.jpg',
    unit: 'Depend on size'
  },
  {
    id: 19,
    name: 'Pooja Items',
    category: 'pooja items',
    price: 50.00,
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/pooja-thali-set/8/v/v/no-pooja-item-puja-samagri-pooja-thali-set-for-navratri-navratri-original-imagn9nfhdrruuhe.jpeg?q=90',
    unit: 'per set '
  },
  {
    id: 20,
    name: 'Dalls',
    category: 'essentials',
    price: 48.00,
    image: 'https://media.istockphoto.com/id/1217443344/photo/five-types-of-lentils-that-are-widely-consumed-in-india-these-are-mung-bean-chickpea-lentil.jpg?s=612x612&w=0&k=20&c=nAcReg-Gt8ocT15RHRlSKkOCfnoCgJBRKEoyeQKUpsA=',
    unit: 'per kg'
  },
  {
    id: 21,
    name: 'Dish Soap',
    category: 'essentials',
    price: 50.00,
    image: 'https://m.media-amazon.com/images/I/61CwN2uZ9yL.jpg',
    unit: 'per piece'
  },
  {
    id: 22,
    name: 'Laundry Detergent',
    category: 'essentials',
    price: 240.00,
    image: 'https://images-cdn.ubuy.co.in/67cd674b13a97c3a792e5628-tide-original-he-64-loads-liquid.jpg',
    unit: 'per bottle'
  },
  {
    id: 23,
    name: 'Diary Milk',
    category: 'Chocolates',
    price: 10.00,
    image: 'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/49715_dairy-milk-chocolate-basket.jpeg',
    unit: 'per pack'
  },
  {
    id: 24,
    name: 'Frying Oil',
    category: 'essentials',
    price: 160.00,
    image: 'https://5.imimg.com/data5/ED/BI/GLADMIN-7423227/gold-winner-refined-sunflower-oil.jpg',
    unit: 'per pack 1 litre '
  },
];
