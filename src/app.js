/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  let domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domainName =
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l];

          domainNames.push(domainName);
        }
      }
    }
  }

  console.log("el array con los dominios----->", domainNames);

  // for (let m = 0; m < domainNames.length; m++) {
  //     console.log("los dominios-------->", domainNames[m]);
  // }

  console.log("Hello Rigo from the console!");
};
