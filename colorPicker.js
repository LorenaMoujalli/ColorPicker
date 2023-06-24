function colorPicker() {
  // Obtener referencia al elemento del DOM
  let body = document.getElementById("pantalla");
  let colorInput = document.getElementById("colorInput");
  
  // Manejar el evento onChange del input de color
  colorInput.addEventListener("change", function(e) { //cuando ocurra un cambio se ejecuta la funcion
    let color = colorInput.value;
    body.style.backgroundColor = color;
  });
}





 


  