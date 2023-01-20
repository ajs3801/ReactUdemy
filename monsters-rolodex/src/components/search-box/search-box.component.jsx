import './search-box.styles.css'

// function format
const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;

  return (
    <input 
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}
// class SearchBox extends Component {
//   render() {
//     // should return it
//     return (
//       <input 
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;