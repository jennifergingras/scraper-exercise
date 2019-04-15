## Super Simple Scraping Practice
Just trying to understand how web scraping works and how to put the scraped data in a database. That's literally all this code does.

## Stuff needed
**Cheerio**
* web scraping package that works in Node.js and uses jQuery. Used to define the elements I wanted to capture from the html.

**Axios**
* works in the browser and in Node.js to make promise based HTTP requests. Used to make the API request.

**MongoDB**
* the database where I'm storing data. 

**Mongoose**
* connects to MongoDB and Node.js allowing the two to work back and forth to request and store data.

## Minimalist functioning
Just want a working understanding of web scraping, Cheerio, and Mongoose and how they work together? That's all this code illustrates.

There's a `models` folder which contains the code to create a Mongoose Schema. The Schema defines how each document is shaped in the collection. The file `article.js` contains the Schema code for creating a new document. In this case it's made of elements from an article scraped from the news site. The Schema defines each article as an object that will contain these properties: 
* id:
* pub_date:
* headline:
* summary:
* url:

This object is then exported through `module.exports`. It is then further exported as an object in `index.js`. (I'm not sure why I needed that, but I stopped getting a " 'models' not found" error when I added it, so....)

The file `scrape.js` contains the package dependencies, database connection (using `mongoose.connect`) and the code for retrieving and storing data. Here are the steps for that code:
* make a `get` request with Axios
* use Cheerio and its jQuery syntax to pull out specific data
* add that data to MongoDB using Mongoose's `model.create`

#### And that's it...
I feel much better about this now that I've explained it to myself.