const typed = new Typed(".typed", {
    strings: ["Ideas", "Diseños", "Fotos", "Imágenes", "Logos"],
    typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
    startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: "|", // Caracter para el cursor
    contentType: "null" // 'html' o 'null' para texto sin formato
  });

  const blurEfect = () => {
    let btnBlur = document.getElementsByClassName("btn-blur")[0];
    let cardsBlur = document.querySelectorAll(".images");
    let contador = 0;
  
    const blur = () => {
      if (contador % 2 == 0) {
        cardsBlur.forEach((element) => {
          element.style.filter = "blur(0)";
        });
        btnBlur.innerHTML = "Activar Difuminado";
      } else {
        cardsBlur.forEach((element) => {
          element.style.filter = "blur(3px)";
        });
        btnBlur.innerHTML = "Desactivar Difuminado";
      }
      contador++;
    };
    btnBlur.addEventListener("click", blur);
  };
  blurEfect();