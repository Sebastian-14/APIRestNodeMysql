var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'b4f4xi2uozyhpjxdriz5-mysql.services.clever-cloud.com',
  user:'uvgzwizynlhcvd9c',
  password:'W0k6Q8vLSwaulOOcfhIO',
  database:'b4f4xi2uozyhpjxdriz5'
});
conn.connect();
module.exports = conn;
