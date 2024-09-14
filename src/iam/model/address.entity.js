export class Address {
    constructor({city = '', street = '', number='', zipcode=''}){
        this.city = city;
        this.street = street;
        this.number = number;
        this.zipcode = zipcode;
    }
    get fullAddress() {
        return `city: ${this.city} street: ${this.street} number: ${this.number} zipcode: ${this.zipcode}`
    }
}

