
// /* babel lazy-action-creator: "disable" */
import React, { Component } from "react";
import { connect } from "react-redux";
import multiplication, * as multiplicationActions from "./actions/multiplication.js";
import addition, { additionThree, additionFour } from "./actions/addition.js";
import subtraction, { subtractionThree as subThree } from "./actions/subtraction.js";


class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      const { multiplication2, addition2 } = this.props;
      console.log(multiplication2(2, 3));
      console.log(addition2(2, 3));


    }, 1000 * 2);

    setTimeout(() => {
      const { multiplication3, addition3, subtraction3 } = this.props;
      console.log(multiplication3(2, 3, 4));
      console.log(addition3(2, 3, 4));
      console.log(subtraction3(2, 3, 4));

    }, 1000 * 4);

    setTimeout(() => {
      const { subtraction2  } = this.props;
      console.log(subtraction2(2, 3));
      console.log(additionFour(2, 3, 4, 5));

    }, 1000 * 6);
  }

  render() {
    const { addition, subtraction, multiplication } = this.props;
    return (
      <div className="App">
        <h1>babel-plugin-lazy-action-creator</h1>
        <h2> Addition: {addition} </h2>
        <h2> Multiplication: {multiplication} </h2>
        <h2> Subtraction: {subtraction} </h2>
      </div>
    );
  }
}


const mapStateToProps = state=>{
  return{
    ...state
  }
}

// const mapdispatchToProps= {
//   multiplication2: multiplication,
//   multiplication3: multiplicationActions.multiplicationThree,
//   addition2: addition,
//   addition3: additionThree,
//   /* babel lazy-action-creator: "disable" */
//   subtraction2: subtraction,
//   subtraction3: subThree
// };

const mapdispatchToProps= (dispatch) => {
  return {
    // /* babel lazy-action-creator: "disable" */
    multiplication2: (a, b) => {
      return dispatch(multiplication(a, b))
    },
    multiplication3: function(a, b, c){
      dispatch(multiplicationActions.multiplicationThree(a, b, c))
    },
    addition2: (ar, ...rest) => dispatch(addition(ar, ...rest)),
    addition3: (a, b, c) => dispatch(additionThree(a, b, c)),

    subtraction2: (a, b) => dispatch(subtraction(a, b)),
    subtraction3: (a, b, c) => dispatch(subThree(a, b, c)),
  }
}

// put this as connect 2nd params
// {
//   multiplication2: multiplication,
//   multiplication3: multiplicationActions.multiplicationThree,
//   addition2: addition,
//   addition3: additionThree,
//   /* babel lazy-action-creator: "disable" */
//   subtraction2: subtraction,
//   subtraction3: subThree
// }
export default connect(mapStateToProps, mapdispatchToProps)(App);



