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
};
