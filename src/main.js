import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { Project } from 'js/project';
/*
const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};
*/
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// let plant = { soil: 0, light: 0, water: 0 }


// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");


// const blueFood = changeState('soil')(10)


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();
