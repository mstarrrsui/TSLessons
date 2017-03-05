import {SocialNetwork} from './social-network';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

//Observable.interval(1000).subscribe( x=> console.log(x))

class App implements SocialNetwork {
    name: string = "Mike";
    title: string = "Eggheads";

    constructor() {
        console.log(`I'm working!!`);
    }

    getUsers() {
        return [{name:"John"}];
    }
}


console.log((_.isArray(new App().getUsers())));


