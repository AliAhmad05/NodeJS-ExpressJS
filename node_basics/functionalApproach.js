const fs = require("fs"); //fs = file system

const filename = "target.txt";

const errHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());
// const dataHandler = (err) =>{
//   console.log(data.toString());
// }

// fs.readFile(filename, (err, data) => {
//   if (err) {
//     errHandler(err);
//   }
//   dataHandler(data);
// });
fs.readFile(filename, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});

console.log("Node JS async Programming");
