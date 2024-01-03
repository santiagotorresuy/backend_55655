const fs = require("fs")

class ProductManager {
    #products;
    path

    constructor() {
      this.#products = [];
      this.path =  process.cwd() + "/src/files/products.json";
    }  

    read() {
        return this.#products;
    }
  
    readOne(id) {
        return this.#products.find(product => product.id === id);
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
  
    async readFile() {
        try {
            if(fs.existsSync(this.path)){
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const productsFromJSON = JSON.parse(data);
                return productsFromJSON
            }
            
            return []
        } catch (err) {
            console.log(err);
        }
    }

    async addProduct(product){
        const {title, price, thumbnail, code, stock} = product
            
        try{
            const productsFs = await fs.promises.readFile(this.path, "utf-8")
            const productsFiles = JSON.parse(productsFs)
            

            if(product.code){
                console.log("El producto ya existe");
            }else{
                const newProduct = {
                    id: this.#generateId,
                    status: true,
                    title,
                    price,  
                    thumbnail,
                    code,
                    stock
                } 
                this.#products.push(newProduct);

                await fs.promises.readFile(this.path, "utf-8")
                const productsJSON = JSON.stringify(this.#products) 
                await fs.promises.writeFile(this.path, productsJSON);
    
                return newProduct;
            }
        }catch (error){
            console.log(error);
        }
    }

    async deleteProduct(id){
        try{
            const newArrayProducts = this.#products.filter(product => product.id !== id)
            this.#products = newArrayProducts

            fs.promises.writeFile(this.path, JSON.stringify(this.#products))

            console.log(this.#products)
        }catch(error){
            console.log(error)
        }
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


  