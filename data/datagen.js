const fs = require('fs');
const faker = require('faker');
const writeable = fs.createWriteStream('./agents.csv');

function getRow(id) {
    return `${id}, ${faker.name.findName()}, ${faker.random.number(100)}, ${faker.random.number(80)}, ${faker.phone.phoneNumberFormat(1)}, ${faker.image.avatar()}\n`;
}

function writeRows(writer) {
    let numberOfRows = 10001000;
    function writing() {
        let flowing = true;
        do {
            numberOfRows--;
            if (numberOfRows === 0) {
                writer.write(getRow(numberOfRows + 1));
            } else {
                flowing = writer.write(getRow(numberOfRows + 1));
            }
        } while (numberOfRows > 0 && flowing);
        if (numberOfRows > 0) {
            writer.once('drain', writing);
        }
    }

    writing();
}

writeRows(writeable);

console.log("Done with writing sample data to agent_info.csv");
