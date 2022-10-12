window.onload = function () {
  let noteNumber = 1;
  let links = document.getElementsByTagName("a");

  if (window.localStorage.getItem("localNumber")) {
    noteNumber = window.localStorage.getItem("localNumber");
  }

  const noteA = new Howl({
    src: ["./audio/key01.ogg"],
  });
  const noteB = new Howl({
    src: ["./audio/key02.ogg"],
  });
  const noteC = new Howl({
    src: ["./audio/key03.ogg"],
  });
  const noteD = new Howl({
    src: ["./audio/key04.ogg"],
  });
  const noteE = new Howl({
    src: ["./audio/key05.ogg"],
  });
  const noteF = new Howl({
    src: ["./audio/key06.ogg"],
  });
  const noteG = new Howl({
    src: ["./audio/key07.ogg"],
  });
  const kick = new Howl({
    src: ["./audio/808-bass-boom-hard-trap-loop-8-11510.mp3"],
  });
  const welcome = new Howl({
    src: ["./audio/fx-home.mp3"],
  });
  const category = new Howl({
    src: ["./audio/fx-cat.mp3"],
  });
  const volver = new Howl({
    src: ["./audio/fx-back-home.mp3"],
  });
  const menu = new Howl({
    src: ["./audio/fx-menu.mp3"],
  });

  const botonVolver = document.getElementById("menu-button-inicio");

  if (botonVolver) {
    botonVolver.addEventListener("click", function () {
        volver.play()
    });
  }

  const botonMenu = document.getElementById("MenuBack");

  if (botonMenu) {
    botonMenu.addEventListener("click", function () {
        menu.play()
    });
  }

  const botonCat = document.getElementById("MenuCat");

  if (botonCat) {
    botonCat.addEventListener("click", function () {
        category.play()
    });
  }

  const fxSound = () => {
    if (noteNumber == 1) {
      noteA.play();
    }
    if (noteNumber == 2) {
      noteB.play();
    }
    if (noteNumber == 3) {
      noteC.play();
    }
    if (noteNumber == 4) {
      noteD.play();
    }
    if (noteNumber == 5) {
      noteE.play();
    }
    if (noteNumber == 6) {
      noteF.play();
    }
    if (noteNumber == 7) {
      noteG.play();
    }
    if (noteNumber < 7) {
      noteNumber++;
      window.localStorage.setItem("localNumber", noteNumber);
    } else {
      noteNumber = 1;
    }
  };

  for (let i = 0, il = links.length; i < il; i++) {
    links[i].onclick = clickHandler;
  }

  function clickHandler(event) {
    event.preventDefault();
    let travelTo = this.getAttribute("href");

    // add `s` to `Element`
    let animOut = document.getElementsByClassName("animateOut");

    // iterate `animOut` elements
    for (let i = 0; i < animOut.length; i++) {
      // add `out` `className` to `animOut` element at index `i`
      animOut[i].classList.add("out");
    }

    // Delay page out until the animation finishes
    setTimeout(function () {
      window.location.href = travelTo;
    }, 500);
  }

  /* Detectar inactividad y cambiar de URL */

  let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;

    function logout() {
      alert("You are now logged out.");
      //location.href = 'logout.html'
    }

    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 3000);
      // 1000 milliseconds = 1 seconds
    }
  };

  /* Cambiar el fondo con los clicks */
  const changeBackground = function (e) {
    const containerClass = document.getElementById("container").className;
    if (containerClass == this.id) {
      document.getElementById("container").className = "white";
    } else {
      document.getElementById("container").className = this.id;
    }
  };

  let items = document.getElementsByClassName("color-change");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", changeBackground);
  }

  /* Mostrar y ocultar los popups */
  const botonProyectos = document.getElementById("item_proyectos");
  const botonCerrarProyectos = document.getElementById("cerrarPopperProyectos");

  const showProjects = function () {
    document.getElementById("proyectos").className = "show";
    showOverlay();
  };
  const cerrarProyectos = function () {
    document.getElementById("proyectos").className = "hide";
    hideOverlay();
  };

  /* Nuevos botones */
  if (botonCerrarProyectos) {
    botonCerrarProyectos.addEventListener("click", cerrarProyectos);
  }
  if (botonProyectos) {
    botonProyectos.addEventListener("click", showProjects);
  }

  /* Cambiar tipo de animación posterior a la entrada de los círculos del menú principal */

  const addAnimation = function () {
    let elements = document.getElementsByClassName("ball-item");
    for (i = 0; i < elements.length; i++) {
      elements[i].classList.remove(
        "animate__fadeInLeft",
        "animate__fadeInRight"
      );
      elements[i].classList.add("animate__pulse", "animate__infinite");
    }
  };

  setTimeout(() => {
    addAnimation();
  }, 1500);
  const addAnimation2 = function () {
    let elements = document.getElementsByClassName("category-item-link");
    for (i = 0; i < elements.length; i++) {
      elements[i].classList.remove("animate__flipInX");
      elements[i].classList.add("animate__pulse", "animate__infinite");
    }
  };
  setTimeout(() => {
    addAnimation2();
  }, 1500);
  const sobreNosotros = document.getElementById("sobrenosotros");

  if (sobreNosotros) {
    sobreNosotros.addEventListener("click", function () {
      fxSound();
    });
  }

  const proyecto = document.getElementById("item_proyectos");

  if (proyecto) {
    proyecto.addEventListener("click", function () {
        kick.play();
    });
  }

  const hoverElements = document.getElementsByClassName("rounded-back");
  const hoverElements2 = document.getElementsByClassName("category-item");
  const hoverElements3 = document.getElementsByClassName("ball-item");

  if (hoverElements) {
    for (let i = 0; i < hoverElements.length; i++) {
      hoverElements[i].addEventListener("mouseenter", function () {
        fxSound();
      });
    }
  }
  if (hoverElements2) {
    for (let i = 0; i < hoverElements2.length; i++) {
      hoverElements2[i].addEventListener("mouseenter", function () {
        fxSound();
      });
    }
  }
  if (hoverElements3) {
    for (let i = 0; i < hoverElements3.length; i++) {
      hoverElements3[i].addEventListener("mouseenter", function () {
        fxSound();
      });
    }
  }

  // Play a sound only after visiting the index.html via localStorage (activateDrumRoll)
  if (document.getElementById("menuparticles")) {
    if (window.localStorage.getItem("activateDrumRoll") === "true") {
      welcome.play();
      window.localStorage.setItem("activateDrumRoll", false);
    }
  }
};

const cerrarPopper = function () {
  hideOverlay();
  let elements = document.getElementsByClassName("show");
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("show");
  }
  let sounds = document.getElementsByTagName("audio");
  for (i = 0; i < sounds.length; i++) sounds[i].pause();
};
const showOverlay = function () {
  document.getElementById("overlay").classList.add("show");
};

const showPopper = function () {
  let idToShow = this.getAttribute("data-popTarget");
  document.getElementById(idToShow).classList.add("show");
  showOverlay();
};

/* Detectar interaccion y lanzar popups */
let elements = document.querySelectorAll(".lab-item").forEach((item) => {
  item.addEventListener("click", showPopper, false);
});

const hideOverlay = function () {
  document.getElementById("overlay").classList.remove("show");
};
