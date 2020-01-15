function getUnique(dataArray){
    let dataArraySet = new Set(dataArray);
    dataArraySet = Array.from(dataArraySet);
    return removeValues(dataArray,dataArray.filter((element)=>{
        if(dataArraySet.indexOf(element)<=-1){
	       return element;
	   }
	 dataArraySet.splice(dataArraySet.indexOf(element),1);
    }));
}

function removeValues(dataArray,removeArray){
    return dataArray.filter((element)=>{
        if(removeArray.indexOf(element)<=-1){
	   	return element;
	   }
    });
}

function getArray(inputStr){
	inputStrArray=inputStr.split('\n');
	for(var i=0;i<inputStrArray.length;i++){
		inputStrArray[i]=inputStrArray[i].split(',');
	}
	return inputStrArray;
}
