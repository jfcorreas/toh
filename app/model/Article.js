'use strict';

class Article {
  constructor(type, store, name, price, discount){
    this.type = type;
    this.store = store;
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}

module.exports = Article;
