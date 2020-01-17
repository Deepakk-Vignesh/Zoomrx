Array.prototype.square = function () {
  return this.map((element) => element * element);
};

Array.prototype.cube = function () {
  return this.map((element) => element * element * element);
};

Array.prototype.getDivisibles = function (divisor = 1) {
  return this.filter((element , divisor) => {
    if(element % divisor == 0)
    return element;
  });
};

function getFrequencies(objectArgument){
  let frequencyObject = {};
  objectArgument.forEach((element) => frequencyObject[element] = frequencyObject[element] + 1 || 1 );
   return frequencyObject;
}

function groupBy(objectArgument,property){
  let groupObject = {}
  objectArgument.forEach((element) => {
    let groupTempProperty = element[property];
    groupObject[groupTempProperty] = groupObject[groupTempProperty] ? [...groupObject[groupTempProperty],element] : [element];
  });
  return groupObject;
}
