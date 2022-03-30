const  objectFormating=(array)=>{
    let obj={};
    for(let i=0;i<array.length;i++)
    {
        let elements=array[i].split(',');
        let names=elements[0].split(" ")
        let firstObject={}
        firstObject.secondName=names[1];
        firstObject.age=elements[1];
        obj[`${names[0]}`]=firstObject;
    }
    return obj
}
console.log(
    objectFormating(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine,22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]
    ))