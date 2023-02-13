const fs = require("fs"); //fs = file system
const filename = "target.txt";

const data = fs.readFileSync(filename);
console.log(data.toString());
console.log("Node JS Sync Programming");
