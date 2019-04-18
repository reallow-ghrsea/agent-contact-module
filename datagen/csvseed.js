const fs = require('fs');
const faker = require('faker');

//Data gen settings
let numberOfRows = 100;
let fileName = 'test1.csv';

let i = 0;
let houseId = 1;
let agentType = 'premier';

while (i < numberOfRows + 1) {
    if (i === 0) {
        fs.appendFile(fileName, `houseId, name, agentType, reviews, recentSales, phone, url\n`, (err) => {
            if (err) {
                console.log('error creating or writing to file on iteration ' + i, err);
            }
        });

    } else {

        if (i % 4 === 0) {
            agentType = 'listing';
        } else {
            agentType = "premier";
        }

        fs.appendFile('test1.csv', `${houseId}, ${faker.name.findName()}, ${agentType}, ${faker.random.number(100)}, ${faker.random.number(80)}, ${faker.phone.phoneNumberFormat(1)}, ${faker.image.avatar()}\n`, (err) => {
            if (err) {
                console.log('error creating or writing to file on iteration ' + i, err);
            }
        });

        if (i % 4 === 0) {
            houseId++;
        }

    }
    i++;
}

console.log("Done with writing sample data to " + fileName);
