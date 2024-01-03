const productController = require("../controllers/productController")
const userController = require("../controllers/usersController")

const router = server => {
    server.use("/api/users", userController)
    server.use("/api/products", productController)
}

module.exports = router