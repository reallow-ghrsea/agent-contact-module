const fs = require('fs');
const faker = require('faker');

//Data gen settings
let numberOfRows = 100000;
let fileName = 'test2.csv';
let i = 1;
let agentType = 'premier';

while (i < numberOfRows + 1) {

    fs.appendFile(
        fileName, 
        `${faker.name.findName()}, ${faker.random.number(100)}, ${faker.random.number(80)}, ${faker.phone.phoneNumberFormat(1)}, ${faker.image.avatar()}\n`, 
        (err) => {
        if (err) {
            console.log('error creating or writing to file on iteration ' + i, err);
        }
    });

    i++;
}

console.log("Done with writing sample data to " + fileName);
