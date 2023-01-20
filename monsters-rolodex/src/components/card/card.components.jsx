import './card.styles.css';

// function format
const Card = (props) => {
  const { monster_id, monster_name, monster_email } = props;
  return (
    <div className="card-container" key={monster_id}>
      <img src={`https://robohash.org/${monster_id}?set=set2&size=180x180`} alt={`monster ${monster_name}`} />
      <h2>{monster_name}</h2>
      <p>{monster_email}</p>
    </div>
  );
}

// class Card extends Component {
//   render() {
//     return (
//       <div className="card-container" key={this.props.monster_id}>
//         <img src={`https://robohash.org/${this.props.monster_id}?set=set2&size=180x180`} alt={`monster ${this.props.monster_name}`} />
//         <h2>{this.props.monster_name}</h2>
//         <p>{this.props.monster_email}</p>
//       </div>
//     );
//   }
// }

export default Card;