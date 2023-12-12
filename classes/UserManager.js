class UserManager {
    #users;
  
    constructor() {
        this.#users = [];
    }
  
    create(data) {
        const newUser = {
            id: this.#generateId(),
            name: data.name,
            photo: data.photo,
            email: data.email,
        };
  
        this.#users.push(newUser);
        return newUser;
    }
  
    read() {
        return this.#users;
    }
  
    readOne(id) {
        return this.#users.find(user => user.id === id);
    }
  
    #generateId() {
        if (this.#users.length > 0){
            let lastId = this.#users[this.#users.length - 1].id
            return lastId + 1
        }

        let lastId = 0
        return lastId + 1;
    }
  }

  module.exports = UserManager
