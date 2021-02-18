const functions = require('firebase-functions');
const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());

const admin = require("firebase-admin");

var serviceAccount = require("./school-59a7a-firebase-adminsdk-7dx8l-2c525a77cd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
//   databaseURL: "https://newpro-1438c-default-rtdb.firebaseio.com"
});

app.use("/api",require("./router/router"))

exports.app = functions.https.onRequest(app)
