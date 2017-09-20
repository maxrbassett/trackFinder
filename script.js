function allowDrop(ev){
    ev.preventDefault();
}

function dropHead(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "headImg"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function dropBody(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "bodyImg"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function dropArm1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "arm1Img"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function dropArm2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "arm2Img"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function dropLeg1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "leg1Img"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function dropLeg2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).id === "leg2Img"){
    ev.target.appendChild(document.getElementById(data));
    } else{
        alert("Wrong. Try Again!");
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}