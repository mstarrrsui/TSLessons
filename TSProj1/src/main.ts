import { SocialNetwork, Person } from './social-network';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

Observable.interval(1000).subscribe( x => console.log(x));

class App implements SocialNetwork {
    public  title: string = 'Eggheads';
    private name: string = 'Steve';

    constructor() {
        console.log(`I'm working!!`);
    }

    public getUsers(): Array<Person> {
        return [{name: 'John'}];
    }
}


console.log((_.isArray(new App().getUsers())));




