
var admin = require('../app/adminConfig.js');

// Story 1: Configurar tienda/artículo
var ItemType = require('../app/model/ItemType.js');

describe("1. Añadir un tipo de artículo", function() {
  it ("1.1. Un tipo de artículo contiene nombre y precio", function(){
    let it = new ItemType("tipo", 5);
    expect(it.name).toEqual(jasmine.any(String));
    expect(it.price).toEqual(jasmine.any(Number));
  });
  it ("1.2. Mantiene los tipos de artículo registrados", function(){
    expect(admin.getItemTypes).toBeDefined();
    expect(admin.getItemTypes()).toEqual(jasmine.any(Array));
  });
  it ("1.3. Añadir un tipo de artículo", function() {
    let numberOfTypes = admin.getItemTypes().length;
    expect(admin.getItemTypes()).not.toContain("videojuego");
    admin.addItemType("videojuego");
    expect(admin.getItemTypes().length).toEqual(numberOfTypes+1);
    expect(admin.getItemTypes()).toContain("videojuego");
  });
});

var Store = require('../app/model/Store.js');

describe("2. Añadir una tienda", function() {
  it ("2.1. Una tienda tiene nombre y lista de artículos", function() {
    let store = new Store("tienda");
    expect(store.name).toEqual(jasmine.any(String));
  });
});

var Article = require('../app/model/Article.js');

describe("3. Añadir un artículo", function() {
  it ("3.1. Un artículo tiene tipo, tienda, nombre, precio y descuento", function() {
    let article = new Article("videojuego", "tienda", "articulo", 10, 15);
    expect(article.type).toEqual(jasmine.any(String));
    expect(article.store).toEqual(jasmine.any(String));
    expect(article.name).toEqual(jasmine.any(String));
    expect(article.price).toEqual(jasmine.any(Number));
    expect(article.discount).toEqual(jasmine.any(Number));
  });
  it ("3.2. Mantiene los artículos registrados", function(){
  //  expect(admin.getArticles).toBeDefined();
  //  expect(admin.getArticles()).toEqual(jasmine.any(Array));
  });
});
