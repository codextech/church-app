const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');
const http = require('http');
const apiRoutes = require("./routes/api-routes"); // routes
const sequelize = require("./util/database"); // database
const sequelizeRealtions = require("./util/table-relations");
const bcrypt = require("bcryptjs");
const User = require('./models/user');


// start server
const port = process.env.PORT || 3000;
http.createServer(app);

app.listen(port, () => {
  console.log(`Server Running in ${port}`);
});


// Global Variables

var env = process.env.NODE_ENV || 'dev';
console.log(env);
if (env == 'production') {
global.APIURL = "https://www.cdame7.church/api";
global.APPURL = "https://www.cdame7.church/";

}
if (env == 'dev') {
global.APIURL = "http://localhost:3000/api";
global.APPURL = "http://localhost:3000/";
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors origin solved
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, cache-control"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
})

// access to uploads folder
app.use('/uploads',express.static(path.join(__dirname, './uploads')));
// access angular folder
app.use('/',express.static(path.join(__dirname, './angular')));


// use api routes
app.use('/api', apiRoutes);

// access angular page according to routes
app.use((req,res) => {
  res.sendFile(path.join(__dirname,"angular", "index.html"));
})



/* Sequelize Association and connection */
sequelizeRealtions.allTableRealtions();

sequelize
  //  .sync()
 .sync({force: true})
  .then(result => {
  console.log('tables created');
      return bcrypt.hash('admin##',10)
  .then(hash => {
        User.create({
        name: 'admin',
        password: hash,
        isAdmin: true,
     });
  })
}).catch(err => {
    console.log("error occured in db" + err);
  });




module.exports = app;
