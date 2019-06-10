import React, { Component } from 'react';
import shuffle from './ShuffleDeck.js'
import MakeDeck from './MakeDeck.js';
import './DisplayCards.css';
import { Button } from 'reactstrap';


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


    render() {
        const displayOrdered = this.state.displayOrdered;
        let standardDeck = MakeDeck;
        let displayedDeck;

        if (displayOrdered === true) {

            displayedDeck = (standardDeck).map((card, index) =>
            <div key={index} className='PlayingCard'>
                {card.house} {card.rank}
            </div>
            );
        }

        else {

            displayedDeck = shuffle(standardDeck).map((card, index) =>
            <div key={index} className='PlayingCard'>
                {card.house} {card.rank}
            </div>
            );
        }

        return (

            <div>
                <div className='Menu'>
                    <Button onClick={this.displayCardsInOrder}>
                        Display ordered deck
                    </Button>
                    <Button  onClick={this.shuffleCards}>
                        Shuffle
                    </Button>
                    {
                        displayOrdered ? (<p>Deck in standard format</p>) : (
                        <p>Deck is currently shuffled</p>
                    )}                    
                    <h2>Read 'cards' left to right. </h2>

                </div>

                
                <div className='CardArea'>
                    {displayedDeck}
                </div>

            </div>
        );
    }
}


export default DisplayCards;