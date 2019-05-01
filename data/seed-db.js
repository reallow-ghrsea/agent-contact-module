const { Client, Pool } = require("pg");
const options = require("../dbConfiguration");

const client = new Client(options);

client
  .connect()
  .then(() => console.log("connected to db"))
  .catch(e => {
    console.log(e);
  });
