import {Address} from "./address.entity.js";

export class User {
    constructor(address = null, id = '', email = '',
                username='', firstName = '', lastName='',
                phone='') {
        this.address = address ? new Address(address) : null;
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}