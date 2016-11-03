
describe("S1. Configurar tienda/articulo", function() {
  var admin = require('../app/adminConfig.js');
  it ("1. Añadir un tipo de artículo", function() {
    expect(admin.tipoArticulo).toBeDefined();
    expect(admin.tipoArticulo).toBe("televisor");
  });
});
