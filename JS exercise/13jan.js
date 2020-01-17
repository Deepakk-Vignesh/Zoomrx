Array.prototype.square = function () {
  return this.map((element) => element * element);
};

Array.prototype.cube = function () {
  return this.map((element) => element * element * element);
};

Array.prototype.getEven = function () {
  return this.filter((element) => {
    if(element % 2 == 0)
    return element;
  });
};

function getFrequencies(objectArgument){
  let frequencyObject = {};
  objectArgument.forEach((element) => frequencyObject[element] = frequencyObject[element] + 1 || 1 );
   return frequencyObject;
}

function groupBy(objectArgument,property){
  let groupObject = {};
  objectArgument.forEach((element)=>{groupObject[element[property]]=[]});
  objectArgument.forEach((element,x=0) => {
    let groupTempProperty = element[property];
    groupObject[groupTempProperty][x++] = element;
  });
  return groupObject;
}
