"use strict";
var _ = require('lodash');
require('rxjs/add/observable/timer');
require('rxjs/add/observable/interval');
//Observable.interval(1000).subscribe( x=> console.log(x))
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
