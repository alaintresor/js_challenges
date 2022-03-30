const  arrayReversing=(array)=>{
    
        let newArray=[];
        for(let i=array.length-1;i>=0;i--)
        {
                newArray.push(array[i])
        }
         return newArray
  
}
console.log(arrayReversing([1,6,4,9,0]))