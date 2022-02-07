var student = new Array(4);

function addStudent(){
    student.push(document.getElementById("student").value);
}

function displayStudent(){
    document.getElementById("display1").innerHTML="List of Students <br><br>";
    for(index=0; index < student.length; index++){
        if(student[index]!=null)
            document.getElementById("display2").innerHTML+=student[index]+"<br>";
    }
}