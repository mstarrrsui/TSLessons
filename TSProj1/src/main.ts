import {SocialNetwork} from './social-network';

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

new App();

