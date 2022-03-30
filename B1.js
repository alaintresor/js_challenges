const primeNumber=(array)=>{
    const newArray=[]
    for(let i=0;i<array.length;i++)
    {
        let possibleDividers=parseInt(array[i]/2)
        let isPrime=true
        for(let divider=2;divider<=possibleDividers;divider++){
           if(array[i]%divider==0)
           {
              isPrime=false
           } 
        }
        if(isPrime)
        {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(primeNumber([2,3,4,5,6,7,8,9,15]))