const axios = require("axios");
const cheerio = require("cheerio");

const url = "http://www.dftmc.info/titles/ta-01.htm";

axios
  .get(url)
  .then(resp => {
    getData(resp.data);
  })
  .catch(err => {
    console.log(err);
  });

const getData = html => {
  let data = [];
  const $ = cheerio.load(html);
  let body = $("body").html();
  let arr = body.split("<br>");
  arr.forEach(i => {
    console.log("new entry:");
    let ii = cheerio.load(i);
    let songTitle = ii("p b")
      .first()
      .text();
    console.log(songTitle);
  });

  // .each((i, elem) => {
  //   data.push({
  //     elem
  //   });
  // });
  // $("body")
  //   .html()
  //   .split("<br>")
  //   .each((i, elem) => {
  //     data.push({
  //       title: $(elem)
  //         .find("b")
  //         .text()
  //     });
  //   });
  console.log(data);
};

// body > font:nth-child(2) > font:nth-child(1) > p:nth-child(3) > b:nth-child(1)
