const { Client, Pool } = require('pg');

const client = new Pool({
    user: 'rachaelotto',
    database: 'agents',
    port: 5432,
});

client.connect()
    .then (()=>console.log('connected to db'))
    .catch((e)=> {console.log(e)})

function getListedAgent (houseId, cb) {
    client.query(`SELECT * FROM agents WHERE id = ${houseId}`, (err, data) =>{
        if (err) {
            console.log(`ERROR GETTING LISTING AGENT DATA FROM DB`, err);
        } else {
            cb(err, data);
        }
    })
}

function getPremierAgents (houseId, cb) {
    client.query(`SELECT * FROM agents where id = ${houseId}`, (err, data) => {
        if (err) {
            console.log(`ERROR GETTING PREMIER AGENT DATA FROM DB`, err);
        } else {
            cb(err, data);
        }
    })
}

module.exports = { getListedAgent, getPremierAgents };
