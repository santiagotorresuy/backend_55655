const ProductManager = require("./classes/ProductManager")
const UserManager = require("./classes/UserManager")

//////////////

const productManager = new ProductManager();

const newProduct1 = productManager.create({
    title: "Product 1",
    thumbnail: "https://picsum.photos/id/237/200/300",
    price: 300,
    stock: 50,
    code: 1,
});

const newProduct2 = productManager.create({
    title: "Product 2",
    thumbnail: "https://picsum.photos/id/237/200/300",
    price: 300,
    stock: 50,
    code: 2,
});

//console.log(productManager.read())
//console.log(productManager.readOne(newProduct1.id))
productManager.addProduct(newProduct2)


//////////////

/* const userManager = new UserManager()

const newUser = userManager.create({
    name: "Santiago Torres",
    photo: "https://picsum.photos/id/237/200/300",
    email: "santiago_torres@gmail.com",
});
  
//console.log(userManager.read());
//console.log(userManager.readOne(newUser.id));

*/

