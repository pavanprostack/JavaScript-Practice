// marks

let score=40;
let grade;
let collegeStudent=true

if(score >= 85){
    grade= 'A'
}else if(score >=65){
    grade='B'
}
else if(score >=45){
    grade='C'
}else{
    // Nested if
    if(collegeStudent){
        grade='U'   
    }else{
        grade='F'
    }
}
console.log(grade)