var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://crumiizobiikcc:kHdIxp-iaHZIKOMrvt80bQazBG@ec2-23-21-73-32.compute-1.amazonaws.com:5432/d4p0rj85qmigoj';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE subscriberlist(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, emailid varchar(40) UNIQUE)');
query.on('end', function() { client.end(); });
client.connect();
 query = client.query('CREATE TABLE contacts(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, emailid varchar(40) UNIQUE, phone varchar(20), description text)');
query.on('end', function() { client.end(); });




