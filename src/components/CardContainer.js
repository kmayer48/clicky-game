import React, {Component} from 'react';
import Card from './Card';
import Emojis from "./../emojis.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {
    constructor(props) {
        super(props);
        // setting the state: score is at 1, emojis is pulling in the emoji json, and we have no selected emojis yet.
        this.state = {
            score: 1,
            emojis: Emojis,
            usedemojis: []
        };
    }
    
    // when the user clicks on a emoji card.
    handleClick = (event) => {
        // grab the selected emoji's id.
        let id = event.target.id;
        // init variable that sees if the user selects a emoji that's already in usedemojis.
        let exists = false;
        // loop through selected emojis and see if any ids match selected id.
        this.state.usedemojis.forEach(emoji => {
            // if id matches
            if (emoji.id == id) {
                // change exists to true.
                exists = true;
            }
        })

        // if exists is true.
        if (exists) {
            // end the game.
            this.endGame();
        }
        // otherwise
        else {
            // loop through the emoji json.
            this.state.emojis.forEach(emoji => {
                // if the emoji id matches the selected id.
                if (emoji.id == id) {
                    // add the emoji to the selected emoji array.
                    this.setState({usedemojis: [...this.state.usedemojis, emoji]});
                    console.log(this.state.usedemojis);

                    // update the score.
                    this.updateScore();
                }
            })  
        }
        // emoji Shuffle.
        this.setState({ emojis: shuffle(this.state.emojis)});
        console.log("Shuffling emojis");

    }

    // function to update the current game's score.
    updateScore = () => {
        // set the new score.
        this.setState({score: this.state.score + 1});
        // update the parent component's display.
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // function to end the game.
    endGame = () => {
        console.log("End!");
        // push the current game score as the new top score.
        this.props.updateTopScore(this.state.score);
        // set the score back to 1 and the selected array to empty .
        this.setState({score: 1, usedemojis: []});
        // update the current score to 0.
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Emojis.map(emoji => <Card src={emoji.image} key={emoji.id} id={emoji.id} alt={emoji.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;