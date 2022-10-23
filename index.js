function superbowlWin(arrayOfObjects){
    for (let obj of arrayOfObjects){
        if(obj.result==='W'){
            return obj.year;
        }     
    } 
};


