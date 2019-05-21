"use strict";
exports.__esModule = true;
var users_1 = require("./users");
exports.handleAuthentication = function (req, resp) {
    if (req === null) {
        console.log("request null");
    }
    var user = req.body;
    console.log("log body req.body " + req.query);
    console.log("log body user" + user);
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        resp.json({ name: dbUser.name, email: dbUser.email });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    console.log("teste user " + user);
    if (!user) {
        return false;
    }
    var dbUser = user[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
