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

function removeValues(dataArray,removeArray){
    for(var i=0;i<removeArray.length;i++){
        while(dataArray.indexOf(removeArray[i])>-1){
        	dataArray.splice(dataArray.indexOf(removeArray[i]),1);
        }
    }
    return dataArray;
}

function getArray(inputStr){
	inputStrArray=inputStr.split('\n');
	for(var i=0;i<inputStrArray.length;i++){
		inputStrArray[i]=Array.from((inputStrArray[i].split(',')));
	}
	return inputStrArray;
}