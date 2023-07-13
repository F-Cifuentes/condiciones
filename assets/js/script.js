function borde() {
    const element = document.getElementById('gato');
    if (element.classList.contains('estilogato')) {
      element.classList.remove('estilogato');
    } else {
      element.classList.add('estilogato');
    }
  }


  function Suma() {
    let gato_uno = document.getElementById("gato1").value;
    let gato_dos = document.getElementById("gato2").value;
    let gato_tres = document.getElementById("gato3").value;
  
    let sumValue = Number(gato_uno) + Number(gato_dos) + Number(gato_tres);
    let quantity = document.getElementById("cantidad");
    let quantityTooMuch = document.getElementById("MuchaCantidad");
  
    if (sumValue > 10) {
      quantityTooMuch.innerHTML =
        "Llevas demasiados <span id='cantidad'></span> stickers";
      quantityTooMuch.style.backgroundColor = "lightpink";
    } else if (sumValue <= 10) {
      quantityTooMuch.innerHTML = "Llevas " + sumValue + " stickers";
      quantityTooMuch.style.backgroundColor = "lightgreen";
    }
  }
  function password() {
    let primero = document.getElementById("primero").value;
    let segundo = document.getElementById("segundo").value;
    let tercero = document.getElementById("tercero").value;
    let message = document.getElementById("outputMessage");
  
    if (primero == 9 && segundo == 1 && tercero == 1) {
      message.innerHTML = "Password 1 correcto";
    } else if (primero == 7 && segundo == 1 && tercero == 4) {
      message.innerHTML = "Password 2 correcto";
    } else {
      message.innerHTML = "Password incorrecto";
    }
  }