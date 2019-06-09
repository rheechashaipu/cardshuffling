import React, { Component } from 'react';
import DeckMaker from './MakeDeck.js';

class DisplayCards extends Component {

    render() {
        const StandardDeck = DeckMaker;

        //Check to see that 52 unique cards are logged when the page renders
        console.log(StandardDeck);
        return(
            <div>

            </div>
        );
    }
}


export default DisplayCards;