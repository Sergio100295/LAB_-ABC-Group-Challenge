function changeColors(){
    document.getElementById("abc").style.color = "blue";
    const elements = document.getElementsByClassName("display-1");
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
    }

    document.body.style.backgroundColor = "lightyellow";

}
