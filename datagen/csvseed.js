const fs = require('fs');
const faker = require('faker');
const stream = fs.createWriteStream('./agent_info.csv');

//Data gen settings
let numberOfRows = 1000000;

let i = 1;
let agentType = 'premier';

while (i < numberOfRows + 1) {

    stream.write(
        `${faker.name.findName()}, ${faker.random.number(100)}, ${faker.random.number(80)}, ${faker.phone.phoneNumberFormat(1)}, ${faker.image.avatar()}\n`
        );

    i++;
}

stream.end();

console.log("Done with writing sample data to agent_info.csv");
