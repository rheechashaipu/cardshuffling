import Card from './Card.js';

function MakeDeck() {
    const house = ['Spade', 'Hearts', 'Diamonds', 'Clover']
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
    'Jack', 'Queen', 'King', 'Ace']

    let deck = [];

    //For each house create cards with each rank.
    for(let i=0; i < house.length; i++) {
        for(let j=0; j < rank.length; j++) {
            let card = new Card(house[i], rank[j])
            deck.push(card)
        }
    }
    return deck;
}

export default MakeDeck();