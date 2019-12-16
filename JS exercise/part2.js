function digitalclock(){
    let clockElement=document.getElementById("digitalClock");
    setInterval(
        function(){
            clockElement.innerHTML=new Date();
        }
    ,1000);
}

function getUnique(dataArray){
    let arryCpy=new Set(dataArray);
    arryCpy=Array.from(arryCpy);
    for(var i=0;i<arryCpy.length;i++){
        dataArray.splice(dataArray.indexOf(arryCpy[i]),1);
        if(dataArray.indexOf(arryCpy[i])>-1){
            arryCpy.splice(i--,1);
        }
    }
    return arryCpy;
}

//finds whether the given key and value exists in the given nested object
function getObject(theObject,searchKey,searchValue) {
    var result = true;
    for(var prop in theObject) {
        if(prop == searchKey) {
            if(theObject[prop] == searchValue) {
                return true;
            }
        }
        if(theObject[prop] instanceof Object) {
            result = getObject(theObject[prop]);
            if (result) {
                break;
            }
        } 
    }
    return result;
}

function removeBykey(mapInstance,keyToBeRemoved){
    if(mapInstance.has(keyToBeRemoved))
        mapInstance.delete(keyToBeRemoved);
}