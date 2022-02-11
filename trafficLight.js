"use strict";
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  const currentLight = trafficLight.possibleStates[trafficLight.stateIndex];
  trafficLight.stateIndex++;
  return currentLight;
}

function getNextStateIndex(trafficLight) {
  let nextCurrentState = trafficLight.stateIndex++;
  return nextCurrentState;
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/*
 * The output should be:
0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now undefined
4 The traffic light is now undefined
5 The traffic light is now undefined
*/
