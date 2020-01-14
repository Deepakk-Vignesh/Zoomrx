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
  let objectArgumentSet = new Set(objectArgument);
  objectArgumentSet = Array.from(objectArgumentSet);
  let frequencyObject = {};
  objectArgumentSet.forEach((element) => {
   frequencyObject[element] = objectArgument.filter(
     (filterElement)=>{
       if(element == filterElement)
        return filterElement;
     }
   ).length;
 });
   return frequencyObject;
}

function groupBy(objectArgument,property){
  let groupObject = {};
  objectArgument.forEach((element)=>{groupObject[element[property]]=[]});
  objectArgument.forEach((element) => {
    let groupTempProperty = element[property];
    delete element[property];
    groupObject[groupTempProperty].push(element);
  });
  return groupObject;
}
