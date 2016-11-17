
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
  it ("2.2. Una tienda tiene nombre y lista de artículos", function() {
    let store = new Store("tienda", [1,2,3,4]);
    expect(store.name).toEqual(jasmine.any(String));
    expect(store.articles).toEqual(jasmine.any(Array));
  });
});
