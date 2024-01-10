// routes/products.js
const express = require("express");
const router = express.Router();
const Product = require("../models/products_models");
// const auth = require("../middleware/protectedresource");

// Seed products
router.post("/seedProducts", async (req, res) => { 
  try {
   
    const products = [
      {
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: "22.3",
        category: "Men",
        description: "Slim-fitting style, contrast raglan long sleeve",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
      },
      {
        title: "Mens Cotton Jacket",
        price: "109.99",
        category: "Men clothing",
        description: "great outerwear jackets for Spring",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
      },
      {
        title: "Mens Casual Slim Fit",
        price: "119",
        category: "Mens clothing",
        description:
          "The color could be slightly different between on the screen and in practice",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 },
      },
      {
        category: "jewelery",
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        price: 695,
        rating: { rate: 4.6, count: 400 },
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      },
      {
        category: "jewelery",
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        price: 9.99,
        rating: { rate: 3, count: 400 },
        title: "White Gold Plated Princess",
      },
      {
        category: "jewelery",
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        price: 10.99,
        rating: { rate: 1.9, count: 100 },
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      },
      {
        category: "women's clothing",
        description:
          "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; ",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        price: 56.99,
        rating: { rate: 2.6, count: 235 },
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      },
      {
        category: "women's clothing",
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort ",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        price: 29.95,
        rating: { rate: 2.9, count: 340 },
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      },
      {
        category: "women's clothing",
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        price: 39.99,
        rating: { rate: 3.8, count: 679 },
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      },
      {
        category: "women's clothing",
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort,",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        price: 9.85,
        rating: { rate: 4.7, count: 130 },
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      },
      {
        category: "women's clothing",
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit,",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        price: 7.95,
        rating: { rate: 4.5, count: 146 },
        title: "Opna Women's Short Sleeve Moisture",
      },
      {
        category: "women's clothing",
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 12.99,
        rating: { rate: 3.6, count: 145 },
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
      },
      {
        title: "Real Basics",
        price: "100",
        category: "kids clothes",
        description: "Real Basics Cotton Clothing Sets for Boys & girls -",
        image:
          "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71x41aAMf9L._SX679_.jpg",
        rating: { rate: 3.6, count: 145 },
      },
      {
        title: "Auto Hub Heavy Microfiber Cloth",
        price: "50",
        category: "Dusting",
        description:
          "Auto Hub Heavy Microfiber Cloth for Car Cleaning and Detailing, Double Sided,",
        image:
          "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81exb0CGK2S._SL1292_.jpg",
        rating: { rate: 3.6, count: 145 },
      },
      {
        title: "KOTTY Women Polyester",
        price: "75",
        category: "Womens cklothing",
        description: "KOTTY Women Polyester Blend Green Solid Trousers",
        image:
          "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ZhQJBhWpL._SY741_.jpg",
        rating: { rate: 3.6, count: 145 },
      },
    ];
    console.log("seed route for product is");

    const allProducts=await Product.insertMany(products);
    
    console.log("Seed Products are", allProducts);
    res.json({ message: "Products seeded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// creating an endpoint to get all the products
router.get("/seedProducts", async (req, res) => { 
  try {
   const allProducts= await Product.find();
   res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// creating an endpoint to get single product by id
router.get("/product/:productId", async (req,res)=>{
  console.log("product id is");
try
{  
 const {productId}=req.params;
 const product= await Product.findById({_id:productId});
 if(!product){
  res.status(400).json({message:"product with this id is not availabe"});
 }
 console.log("Single product is", product);
 res.status(200).json(product);
}
 catch(error){
  console.log("Error is", error);
  res.status(500).json({message:"Internal server error"});
 }


})

module.exports = router;
