export interface Person {
    name: String;
}

export interface SocialNetwork {
    title: String;
    getUsers(): Array<Person>;
}
