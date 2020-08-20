const { authJwt } = require("../middlewares");
const controller = require("../controller/user.controller.js");

module.exports = function (app) {
  app.use(function (_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/addUser/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addUser
  );

  app.delete("/api/deleteUser",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteUser
  );

  app.put("/api/updateUser",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateUser
  );

  app.get("/api/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allUsers
  );

  app.get("/api/user/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.User
  );

  app.post("/api/addSupplier/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addSupplier
  );

  app.delete("/api/deleteSupplier",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteSupplier
  );

  app.put("/api/updateSupplier",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateSupplier
  );

  app.get("/api/suppliers",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allSuppliers
  );

  app.get("/api/supplier/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.Supplier
  );

  app.post("/api/addBuyer/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addBuyer
  );

  app.delete("/api/deleteBuyer",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteBuyer
  );

  app.put("/api/updateBuyer",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateBuyer
  );

  app.get("/api/allBuyersandSuppliers",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allBuyersandSuppliers
  );

  app.get("/api/buyers",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.allBuyers
);

  app.get("/api/buyer/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.Buyer
  );

  app.get("/api/items",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allItems
  );

  app.get("/api/item/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.Item
);

  app.get("/api/getItemsbyUser_id/:user_id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getItemsbyUser_id
  );

  app.post("/api/addItem/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addItem
  );

  app.delete("/api/deleteItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteItem
  );

  app.put("/api/updateItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateItem
  );

  app.get("/api/suppliersItems",
     [authJwt.verifyToken, authJwt.isAdmin],
     controller.allSuppliersItems
     );

  app.get("/api/suppliersItem/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.SuppliersItem
  );

  app.delete("/api/deleteSuppliersItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteSuppliersItem
  );

  app.put("/api/updateSuppliersItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateSuppliersItem
  );

  app.get("/api/buyersItems",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allBuyersItems
  );

  app.get("/api/buyersItem/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.BuyersItem
  );

  app.delete("/api/deleteBuyersItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteBuyersItem
  );

  app.put("/api/updateBuyersItem",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateBuyersItem
  );

  app.post("/api/addQuatation",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addQuatation
  );

  app.get("/api/quatations",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allQuatations
  );

  app.get("/api/quatation/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.Quatation
  );

  app.delete("/api/deleteQuatation",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteQuatation
  );

  app.put("/api/updateQuatation",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateQuatation
  );
};