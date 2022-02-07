function locationFunction() {
    let href = document.querySelector("#href");
    let pathName = document.querySelector("#pathName");
    let protocol = document.querySelector("#protocol");

    href.innerHTML = location.href
    pathName.innerHTML = location.pathname
    protocol.innerHTML = location.protocol

}

function goBack(){
    window.history.back();
}