import React, { Component } from 'react'

class CharacterCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.character.name}</h1>
                <h3>{this.props.character.show}</h3>
                <img src={this.props.character.img} />
            </div>
        )
    }
}

export default CharacterCard;