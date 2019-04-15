const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const express = require('express');

// reference to the mongoose schema for the database
const db = require("./models");

// Initialize Express
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to the mongo database (data will go into a DB called 'scraper')
mongoose.connect('mongodb://localhost/scraper', { useNewUrlParser: true });
mongoose.connection.on('error', function () {
  console.error('MongoDB Connection Error.');
});

// --------------------------------------------------------------------
// This will scrape the data from the website and add it into mongoDB
// --------------------------------------------------------------------

// use axios to get all the data from the website
axios.get('https://www.nationalgeographic.com.au/news/animals.aspx').then(function (response) {
  // console.log(response.data);

  // use cheerio to pull out specific data
  const $ = cheerio.load(response.data);

  // Padding is the class which holds the desired text elements
  $('.Padding').each((i, el) => {
    // empty object that will store the data
    const result = {};

    // save each element to the result object
    result.pub_date = $(el).children('.Byline').text();
    result.headline = $(el).children('.Title').text();
    result.summary = $(el).children('.Description').text();
    result.url = $(el).children('a').attr('href');
    // console.log(result);

    // add the result object to the database using the schema created in "model.js"
    db.Article.create(result).then((dbArticle) => {
      // console.log("START ARTICLES")
      console.log(dbArticle);
    }).catch((error) => {
      console.log(error);
    });
  });
});




