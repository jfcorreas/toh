
var admin = require('../app/adminConfig.js');
describe("S1. Configurar tienda/articulo", function() {
  it ("1. Añadir un tipo de artículo", function() {
    expect(admin.itemType).toBeDefined();
    admin.addItemType("videojuego");
    expect(admin.getItemType()).toBe("videojuego");
  });
});
