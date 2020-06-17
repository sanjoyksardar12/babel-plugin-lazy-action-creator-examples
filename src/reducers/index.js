function reducers(state={
  addition: 0,
  multiplication: 0,
  subtraction: 0
}, action){
  console.log(action);
  switch (action.type) {
    case "ADD":
      return{
        ...state,
        addition: action.value
      }
    case "SUB":{
      return{
        ...state,
        subtraction: action.value
      }
    }
    case "MUL":{
      return{
        ...state,
        multiplication: action.value
      }
    }

    default:
      return state;
      break;
  }
}

export default reducers;
