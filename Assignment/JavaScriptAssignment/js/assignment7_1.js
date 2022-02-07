function toggelTextArea(){
    if(document.querySelector("#reading").checked==false){
        document.querySelector("#favWriter").style.display="none";
    }else{
        document.querySelector("#favWriter").style.display="table-row";
    }
}

function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    
    if(!form_data.has("hobby"))
    {
        alert("Please select at least one hobby option");
    }else{
        window.open('../html/successAssign7_1.html', '_self');
    }

    return false;
}