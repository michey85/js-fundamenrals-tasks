const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {console.log('Hello')},
    changeSurname(name) {
        this.surname = name;
    },
};