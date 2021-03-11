function XO(str){
    let store = str.split("")
    let xcounter = 0;
    let ocounter =0;
    for(let  i=0;i<str.length;i++){
        if(store[i]=== 'x'){
            xcounter ++;
        }
        else if(store[i]=== 'o'){
            ocounter++;
        }
        
        
    }
    if(xcounter === ocounter){
        return true;
    }
    else if(xcounter===0 && ocounter===0){
        return true;
    }
    return false;
}

console.log(XO("xoxoo"))