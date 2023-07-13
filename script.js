function borde() {
    const element = document.getElementById('gato');
    if (element.classList.contains('estilogato')) {
      element.classList.remove('estilogato');
    } else {
      element.classList.add('estilogato');
    }
  }


  