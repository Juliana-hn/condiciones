const imagenperro = document.getElementById("perro");
const button = document.querySelector("button"); 

button.addEventListener('click', () => {
    if(imagenperro.style.border){
        imagenperro.style.border = "";
    } else{
        imagenperro.style.border = "2px solid red"
    }
});

const input = document.querySelectorAll("input");
const parrafo = document.querySelector("#resultado");
const botonsticker = document.querySelector("#botonsticker");

botonsticker.addEventListener('click', () => {
     const s1 = parseInt(document.querySelector('#sticker1').value) || 0;
     const s2 = parseInt(document.querySelector('#sticker2').value) || 0;
     const s3 = parseInt(document.querySelector('#sticker3').value) || 0;
 
     const total = s1 + s2 + s3;

     if (total > 10) {
         resultado.innerHTML = "Llevas demasiados stickers";
     } else {
         resultado.innerHTML = "Puedes llevar los stickers";
     }
});


const botonpassword = document.querySelector("#ingresar");
const respuesta = document.querySelector("#respuesta");

botonpassword.addEventListener('click', () => {
    const digit1 = document.querySelector('#digit1').value;
    const digit2 = document.querySelector('#digit2').value;
    const digit3 = document.querySelector('#digit3').value;

    const password = digit1 + digit2 + digit3;

    if (password === '911') {
        resultado.innerHTML = "password 1 correcto";
    } else if (password === '714') {
        resultado.innerHTML = "password 2 correcto";
    } else {
        resultado.innerHTML = "password incorrecto";
    }
});
