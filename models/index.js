// Not sure why this fixed a module error since I already export Article in it's own file
// but whatever - this made it work so... 
// exporting an object with the article object
module.exports = {
  Article: require("./article")
};