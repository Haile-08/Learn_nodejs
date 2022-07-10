const parse = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("cumulative_2022.07.07_01.47.36.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
// parse();
