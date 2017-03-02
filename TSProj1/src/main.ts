import {SocialNetwork} from './social-network';
import * as _ from 'lodash';

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


