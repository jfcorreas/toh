
var admin = require('../app/adminConfig.js');
var ItemType = require('../app/model/ItemType.js');
// Story 1: Configurar tienda/artículo

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
