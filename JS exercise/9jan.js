function getUnique(dataArray){
    let dataArrayCopy=new Set(dataArray); //gets the set from dataArray
    dataArrayCopy=Array.from(dataArrayCopy);  //converts the set object to array object
    for(var i=0;i<dataArrayCopy.length;i++){  
        dataArray.splice(dataArray.indexOf(dataArrayCopy[i]),1); //removes required element from dataArray
        if(dataArray.indexOf(dataArrayCopy[i])>-1){  //checks whether the another same element is present in the same dataArray
            dataArrayCopy.splice(i--,1);    //if present the element is removed from dataArrayCopy and shift due to removal is managed by decrementing the iterator
        }
    }
    return dataArrayCopy;
}

function removeValues(dataArray,removeArray){
    dataArray.foreach((removeElement)=>{
        while(dataArray.indexOf(removeElement)>-1){
        	dataArray.splice(dataArray.indexOf(removeElement),1);
        }
    });
    return dataArray;
}

function getArray(inputStr){
	inputStrArray=inputStr.split('\n');
	for(var i=0;i<inputStrArray.length;i++){
		inputStrArray[i]=inputStrArray[i].split(',');
	}
	return inputStrArray;
}
