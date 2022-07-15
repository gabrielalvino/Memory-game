
const  Front = "card_front";
const Back = "card_back";

let techs = [

	"bootstrap",
	"css",
	"git",
	"html",
	"java",
	"javascript",
	"jquery",
	"react",
	"ruby",
	"vue",
]

createCardsFromTechs(techs);

function createCardsFromTechs(techs) {

	let cards = [];

	for (let tech in techs) {
		cards.push(createPairFromTech(tech))
	}
	console.log(cards)
}

function createPairFromTech(tech) {

	return {
		id: createIdWithTech(tech),
		icon: tech,
		flipped: false,
	},
	{
		id: createIdWithTech(tech),
		icon: tech,
		flipped: false,
	}
}

function createIdWithTech(tech){

	return tech + parseInt(Math.random() *1000);
}
