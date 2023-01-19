import { Component } from "react";

import Card from "../card/card.components";
import "./card-list.styles.css";

class CardList extends Component {

  render() {
    // console.log(this.props); // acesssing the props
    const { monsters } = this.props; // destructure

    return ( // should have one top level tag
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email,id } = monster // destructure
          return ( // monster를 props로 넘겨주는 것도 깔끔
            <Card monster_id={id} monster_name={name} monster_email={email}/>
      )})}
      </div>
    );
  }
}

export default CardList;