"use strict";
var _ = require('lodash');
var App = (function () {
    function App() {
        this.name = "Mike";
        this.title = "Eggheads";
        console.log("I'm working!!");
    }
    App.prototype.getUsers = function () {
        return [{ name: "John" }];
    };
    return App;
}());
console.log((_.isArray(new App().getUsers())));
