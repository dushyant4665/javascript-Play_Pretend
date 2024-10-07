

// create an array with 8 student names, after that crete 
// a function which takes 2 parameters(allStudents & studentName), 
// iterate over all students and find that specific user 'studentName'


const allStudent=['vedant','siddharth','lokesh','dushyant','Aditya','nehar','vijay','aditya']


var findStudent =(allStudent,studentName)=>{
    for(let i=0; i<allStudent.length; i++){
        if(allStudent[i]===studentName){
            console.log(`found ${studentName} at ${[i]}`)
        }
        else{
            // console.log('')
        }
}}

findStudent(allStudent,'aditya');

















