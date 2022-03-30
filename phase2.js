
const familyApi = (array) => {
    return new Promise(function (resolve, reject) {
        let newArray=[]
    setTimeout(() => {
        let sumOfChildernNumber=0;
        let arraySize=array.length;
        array.forEach(element => {
            if(element.fatherName==="Vyes")
                reject ("Yves is not an allowed dad in 2022")
            
            if(element.childrenNumbe>=0)
            sumOfChildernNumber+=element.childrenNumbe;
            else
            arraySize--
        });
        let averageChildernNumber=sumOfChildernNumber/arraySize
    array.forEach(element => {
        element.averageOfChildrenPerFamily=averageChildernNumber;
        newArray.push(element)
    });
    resolve(newArray)
    },
    1000);
    });
    }

    familyApi([{fatherName:"mugabo", MotherName:"mukamana",childrenNumbe:2},{fatherName:"eric", MotherName:"alice",childrenNumbe:6},{fatherName:"manzi", MotherName:"leah",childrenNumbe:-2}])
    .then(families=>console.log(families))
    .catch(error=>console.log(error))
   
