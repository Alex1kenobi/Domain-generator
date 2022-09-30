/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".tv"];
  let arrayjunto = [];

  function Juntar() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let x = 0; x < adj.length; x++) {
        for (let a = 0; a < noun.length; a++) {
          for (let q = 0; q < domain.length; q++) {
            let chorizo = pronoun[i] + adj[x] + noun[a] + domain[q];
            console.log(chorizo);
            arrayjunto.push(chorizo);
          }
        }
      }
    }
  }

  let domainList = document.querySelector(".domainsList");

  Juntar();
  for (let p = 0; p < arrayjunto.length; p++) {
    domainList.innerHTML += "<li>" + arrayjunto[p] + "</li>";
  }
  console.log(domain);
};
