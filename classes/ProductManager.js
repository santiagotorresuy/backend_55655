class ProductManager {
    #products;

    constructor() {
      this.#products = [];
    }  
  
    create(prod) {
        const newProduct = {
            id: this.#generateId(),
            title: prod.title,
            photo: prod.photo,
            price: prod.price,
            stock: prod.stock,
        };
  
        this.#products.push(newProduct);
        return newProduct;
    }
  
    read() {
        return this.#products;
    }
  
    readOne(id) {
        return this.#products.find(product => product.id === id);
    }
  
    #generateId() {
        if (this.#products.length > 0){
            let lastId = this.#products[this.#products.length - 1].id
            return lastId + 1
        }

        let lastId = 0
        return lastId + 1;
    }
  }

  module.exports = ProductManager


  