var companyName= 'Cybage Software Pvt Ltd';

function searchChar(){
    let char = document.querySelector('#search').value;

    let index = companyName.indexOf(char);

    if(index>=0){
        document.querySelector("#result").innerHTML="character "+char+" is found at position "+index;
    }else{
        document.querySelector("#result").innerHTML="character "+char+" not found ";
    }

    document.querySelector("#result").innerHTML+="<br/>"+companyName+" is popularly known as "+companyName.substring(0,15)+"<br/>";

    document.querySelector("#result").innerHTML+=companyName.toLowerCase()+"<br/>";
    
    document.querySelector("#result").innerHTML+=companyName.toUpperCase()+"<br/>";
}