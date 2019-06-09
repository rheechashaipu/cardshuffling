import React, { Component } from 'react';
import { Button } from 'reactstrap';
import shuffle from './ShuffleDeck.js'
import MakeDeck from './MakeDeck.js';


class DisplayCards extends Component {
    constructor(props){
        super(props);

        this.displayCardsInOrder = this.displayCardsInOrder.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);

        this.state = {
            displayOrdered: true
        };
    }

    displayCardsInOrder() {
        this.setState({displayOrdered: true});
    }

    shuffleCards() {
        this.setState({displayOrdered: false});
    }


    displayDeck(arr){
        arr.map((card, index) =>
        <div key={index}>
            {card.house} {card.rank}
        </div>
    )}


    render() {
        const displayOrdered = this.state.displayOrdered;
        const standardDeck = MakeDeck;

        let displayedDeck;


        if (displayOrdered === true) {


            let displayedDeck = standardDeck.map((card, index) =>
            <div key={index}>
                {card.house} {card.rank}
            </div>)

            return(
                <div>
                <Button onClick={this.displayCardsInOrder}>
                    Display ordered deck
                </Button>

                <Button  onClick={this.shuffleCards}>
                    Shuffle
                </Button>
                {displayedDeck}
            </div>
            )
        }
        else {
            let displayedDeck = shuffle(standardDeck).map((card, index) =>
            <div key={index}>
                {card.house} {card.rank}
            </div>)
            return(
                <div>
                <Button onClick={this.displayCardsInOrder}>
                    Display ordered deck
                </Button>

                <Button  onClick={this.shuffleCards}>
                    Shuffle
                </Button>
                {displayedDeck}
            </div>
            )
        }

    }
}


export default DisplayCards;