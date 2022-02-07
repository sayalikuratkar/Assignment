function addPara(){
    var para = document.createElement("para");
    para.innerHTML = "This is new. ";
    console.log(para);
    document.getElementById("div1").appendChild(para);
}