function uniteUnique(arr) {
  const joined = [];

  for (let i =0; i<arguments.length; i++){
    const arrayArguments = arguments[i];
    for(let j=0;j < arrayArguments.length; j++){
      let index = arrayArguments[j];
        if(joined.indexOf(index) < 0){
        
        joined.push(index);
      }
    }
  }
  return joined;
  console.log(joined);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
