import { Component } from "react";

class CardList extends Component {

  render() {
    // console.log(this.props); // acesssing the props
    const { monsters } = this.props;

    return ( // should have one top level tag
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;