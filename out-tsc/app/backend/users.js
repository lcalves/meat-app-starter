var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
export { User };
export var users = {
    "juliana@gmail.com": new User('juliana@gmail.com', "Juliana", 'juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com', "Amanda", 'amanda21')
};
//# sourceMappingURL=users.js.map