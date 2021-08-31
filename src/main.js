import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();


const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}


const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const giveLight = changeState("light")(1);
const brightLight = changeState("light")(5);

$(document).ready(function() {

    $('#feed').click(function() {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });

    $('#hydrate').click(function() {
      const newState = stateControl(superWater);
      $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#hydrate').click(function() {
      const newState = stateControl(superWater);
      $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#show-state').click(function() {
      const currentState = stateControl();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
      $('#water-value').text(`Water: ${currentState.water}`);
    });
  });