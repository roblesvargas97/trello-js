require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
	throw new Error('No hay configuración con Api Key y con Token')
}

const Trello = require("trello");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "626d6dfde90f063a2af74713",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });