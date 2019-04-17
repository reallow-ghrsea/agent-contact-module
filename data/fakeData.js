const faker = require('faker');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'agents3.csast8i0snkv.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'Password1!',
  database: 'agents3',
  multipleStatements: true,
});

connection.connect();

const createData = () => {
  let i = 0;
  const iterator = () => {
    const lAgent = {
      houseId: i,
      name: faker.name.findName(),
      company: faker.company.companyName(),
      reviews: faker.random.number(100),
      recentSales: faker.random.number(80),
      phone: faker.phone.phoneNumberFormat(1),
      url: faker.image.avatar(),
    };
    const lQuery = `
    INSERT INTO listedAgent (houseId, name, company, reviews, recentSales, phone, url)
    VALUES (${lAgent.houseId}, "${lAgent.name}", "${lAgent.company}", ${lAgent.reviews}, ${lAgent.recentSales}, "${lAgent.phone}", "${lAgent.url}")
  `;
    connection.query(lQuery, (err, data) => {
      if (i === 100) { console.log('listed agents data entered') }
    });
    const pAgent = {
      name: faker.name.findName(),
      reviews: faker.random.number(100),
      recentSales: faker.random.number(80),
      phone: faker.phone.phoneNumberFormat(1),
      url: faker.image.avatar(),
    };
    const pQuery = `
      INSERT INTO premierAgents (name, reviews, recentSales, phone, url)
      VALUES ("${pAgent.name}", ${pAgent.reviews}, ${pAgent.recentSales}, "${pAgent.phone}", "${pAgent.url}")
    `;

    connection.query(pQuery, (err, data) => {
      if (i < 100) {
        i += 1;
        iterator();
      } else {
        console.log('Fake data inserted into DB');
      }
      if (err) {
        console.log('fake data insert FAILED', err);
      }
    });
  };

  connection.query(`
  DROP DATABASE IF EXISTS agents3;
  CREATE DATABASE IF NOT EXISTS agents3;

  USE agents3;

  CREATE TABLE listedAgent (
    id INT AUTO_INCREMENT,
    houseId INT,
    name VARCHAR(100),
    company VARCHAR(100),
    reviews INT,
    recentSales INT,
    phone VARCHAR(50),
    url VARCHAR(255),
    PRIMARY KEY (id)
    );

  CREATE TABLE premierAgents (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    reviews INT,
    recentSales INT,
    phone VARCHAR(50),
    url VARCHAR(255),
    PRIMARY KEY (id)
    );`, (err, data) => { iterator(); });
};
createData();