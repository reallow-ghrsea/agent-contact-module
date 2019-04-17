# Project Name

> Agent Component
 -  https://github.com/reallow-ghrsea/agent-contact-module

## Related Projects

  - https://github.com/reallow-ghrsea

## Usage

> INSTRUCTIONS TO RUN

1) 'npm install' on root dirctory of this repo
2) 'npm run dev-pack' to bundle all assets to serve on html
3) update database connection information in dbConfiguration.js
3.5) log into your mysql (mysql -u root -p), and create the database 'agents' by coping the text from schema.sql into the mysql cmd line OR run mysql -u root -p > 'path to schema.sql file' in the terminal
4) 'npm run faker' to seed fake data into mysql
5) 'npm run start' to start server
6) localhost:8081 is server to copy into browser, but localhost:8081/'houseId' where houseID is a number between 1-100 must be used in order to see listed agent data



