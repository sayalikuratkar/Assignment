function compoundInterest(){
    var princi = parseInt(document.getElementById("principal").value);
    var amt = parseInt(document.getElementById("rate").value);
    var yaer = parseInt(documnet.getElementById("year").value);

    var interest = (p * (Math.pow((1 + (r/100)), n)))- princi;

    document.getElementById("result").innerHTML = interest;
}