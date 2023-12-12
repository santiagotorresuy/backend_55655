const ProductManager = require("./classes/ProductManager")
const UserManager = require("./classes/UserManager")

//////////////

const productManager = new ProductManager();

const newProduct = productManager.create({
    title: "Product 1",
    photo: "https://picsum.photos/id/237/200/300",
    price: 300,
    stock: 50,
});

console.log(productManager.read());
console.log(productManager.readOne(newProduct.id));

//////////////

const userManager = new UserManager()

const newUser = userManager.create({
    name: "Santiago Torres",
    photo: "https://picsum.photos/id/237/200/300",
    email: "santiago_torres@gmail.com",
});
  
console.log(userManager.read());
console.log(userManager.readOne(newUser.id));


