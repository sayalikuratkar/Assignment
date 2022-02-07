getTime();

function getTime(){
    var date= new Date();
    var hour= date.getHours();
    document.write(date+ "<br>");

    if(hour>=0 && hour<12){
        document.write("Good Morning!!!");
    }else if(hour==12){
        document.write("Good Noon!!!");
    }else if(hour>=12 && hour<17){
        document.write("Good Afternoon!!!");
    }else{
        document.write("Good Evening!!!");
    }
}