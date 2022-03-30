const  arrayReversing=(array)=>{
    let length=array.length-1;
        for(let i=parseInt(array.length/2)-1;i>=0;i--)
        {     
            let fistElementIndex=length-i;
            let lastElement= array[i];
            array[i]=array[fistElementIndex]
            array[fistElementIndex]=lastElement;        
        }
         return array
  
}
console.log(arrayReversing([1,6,4,9,0]))