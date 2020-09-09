const db = require("../models");
const User = db.user;
const Role = db.role;
const errors = require('../config/errors');
const error = errors.errors;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");


exports.addUser = (req, res) => {
    try {
        User.findOne({ where: { email: req.body.email } })
            .then(data => {
                if (data) {
                    res.status(401).send(error.EMAIL_NAME_PRESENT);
                } else {
                    User.create({
                        name: req.body.name,
                        email: req.body.email,
                        mo_no: req.body.mo_no,
                        city: req.body.city,
                        password: bcrypt.hashSync(req.body.password, 8),
                        user_type: "user"
                    })
                        .then(user => {
                            if (req.body.roles) {
                                Role.findAll({
                                    where: {
                                        name: {
                                            [Op.or]: req.body.roles
                                        }
                                    }
                                }).then(roles => {
                                    user.setRoles(roles).then(() => {
                                        res.status(200).send(error.OK)
                                    })
                                        .catch(err => {
                                            console.log(err);
                                            res.status(500).send(error.SERVER_ERROR)
                                        });
                                })
                                    .catch(err => {
                                        console.log(err);
                                        res.status(500).send(error.SERVER_ERROR)
                                    });
                            } else {
                                // User Role id = 2
                                user.setRoles([2]).then(() => {
                                    res.status(200).send(error.OK)
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).send(error.SERVER_ERROR)
                        });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(error.SERVER_ERROR)
            });
    } catch (e) {
        console.log(e);
        res.status(500).send(error.SERVER_ERROR)
    }
};


exports.allUsers = (req, res) => {
    try {
        User.findAll({ attributes: { exclude: ['password'] } }).then(data => {
            var result = { status: 200, data: data }
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
            res.status(500).send(error.SERVER_ERROR)
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(error.SERVER_ERROR)
    }
}



exports.User = (req, res) => {
    try {
        const id = req.params.id;
        User.findByPk(id, { attributes: { exclude: ['password'] } })
            .then(data => {
                if (data) {
                    var result = { status: 200, data: data }
                    res.status(200).send(result)
                } else {
                    var result = error.USER_NOT_PRESENT
                    res.status(404).send(result)
                }
            }).catch(err => {
                console.log(err);
                res.status(500).send(error.SERVER_ERROR)
            });
    } catch (e) {
        console.log(e);
        res.status(500).send(error.SERVER_ERROR)
    }
}


exports.deleteUser = (req, res) => {
    try {
        User.destroy({
            where: { id: req.body.id }
        })
            .then(data => {
                if (data == 1) {
                    var result = error.DELETED_SUCCESSFULLY
                    res.status(200).send(result)
                } else {
                    var result = error.USER_NOT_PRESENT;
                    return res.status(404).send(result);
                }
            }).catch(err => {
                console.log(err);
                res.status(500).send(error.SERVER_ERROR)
            });
    } catch (e) {
        console.log(e);
        res.status(500).send(error.SERVER_ERROR);
    }
}



exports.updateUser = (req, res) => {
    try {
        User.update(req.body, {
            where: { id: req.body.id }
        }).then((data) => {
            if (data == 1) {
                return res.status(200).send(error.UPDATED_SUCESSFULLY);
            } else {
                var result = error.USER_NOT_PRESENT;
                return res.status(404).send(result);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send(error.SERVER_ERROR)
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(error.SERVER_ERROR);
    }
}

}
