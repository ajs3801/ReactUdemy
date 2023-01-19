import { Component } from "react";

import './card.styles.css';

class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.monster_id}>
        <img src={`https://robohash.org/${this.props.monster_id}?set=set2&size=180x180`} alt={`monster ${this.props.monster_name}`} />
        <h2>{this.props.monster_name}</h2>
        <p>{this.props.monster_email}</p>
      </div>
    );
  }
}

export default Card;