const activarBoton = (x) => {
    x.classList.add('enabled-button');
    x.classList.remove('disabled-button');
};

const desactivarBoton = (x) => {
    x.classList.remove('enabled-button');
    x.classList.add('disabled-button');
};


document.getElementById('design').onmouseover = function(){
    const b1 = document.getElementById('button1');
    activarBoton(b1);
}

document.getElementById('frontend').onmouseover = function(){
    const b1 = document.getElementById('button2');
    activarBoton(b1);
}

document.getElementById('backend').onmouseover = function(){
    const b1 = document.getElementById('button3');
    activarBoton(b1);
}

document.getElementById('design').onmouseout = function(){
    const b1 = document.getElementById('button1');
    desactivarBoton(b1);
}

document.getElementById('frontend').onmouseout = function(){
    const b1 = document.getElementById('button2');
    desactivarBoton(b1);
}

document.getElementById('backend').onmouseout = function(){
    const b1 = document.getElementById('button3');
    desactivarBoton(b1);
}
