const fs = require("fs"); //fs = file system

const filename = "target.txt";


fs.readFile(filename, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("Node JS async Programming");
