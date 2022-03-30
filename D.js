const majority=array=>{
let halfSize=parseInt(array.length/2)
    for(let i=0; i<array.length; i++)
    {
        let foundTime=0;
        for(let j=0; j<array.length; j++)
        {
            if(array[j] == array[i])
            {
                foundTime++
            }
        }
        if(halfSize<foundTime)
        {
            return "this array contains a majority element";
        }
    }
    return "this array has no majority element";

}
console.log(majority([1,3,4,4]))