const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
  return tell(question).then((fortune)=>[
     `Your question was: ${question}`,
     `Your fortune is: ${fortune}`])
    .catch((err) => {return `There was an error: ${err}`});
 }
   
 
 function fullSession(question) {
     return welcome().then(welcomeMessage=>getFortune(question).then(fortune=>[welcomeMessage].concat(fortune)))
                           .then(bye=>goodbye().then(goodbyeMessage=>bye.concat(goodbyeMessage)))
                           .catch((error) => `There was an error: ${error}`);
                                           
     
     
 }

module.exports = { getFortune, fullSession };
