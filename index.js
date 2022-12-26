const body = document.querySelector("body");
const bars = document.querySelector(".fa-bars");
const modal = document.getElementById("modal");
const closeMenu = document.querySelector(".fa-xmark");
const li = document.querySelectorAll(".menu-li");
const itachi = document.querySelector(".itachi");
const sasuke = document.querySelector(".sasuke");
const fugaku = document.querySelector(".fugaku");
const madara = document.querySelector(".madara");
const obito = document.querySelector(".obito");
const shisui = document.querySelector(".shisui");
const modalMiembros = document.querySelector(".modal-miembros");

const estilos = `background: #111111; z-index: 10; opacity: 1`;

bars.addEventListener("click", () => {
  modal.setAttribute("style", "left: 0");
  setTimeout(() => {
    body.setAttribute("style", "overflow: hidden");
  }, 750)
});

closeMenu.addEventListener("click", () => {
  modal.removeAttribute("style");
  body.removeAttribute("style");
});

li.forEach((li) => {
  li.addEventListener("click", () => {
    modal.removeAttribute("style");
    body.removeAttribute("style");
  });
});

itachi.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button> 
  <img src="https://i.imgur.com/uUu2VO8.png" />
  Itachi Uchiha hijo de Fugaku Uchiha y Mikoto Uchiha, hermano mayor de Sasuke Uchiha. Era conocido por ser el miembro más talentoso de su clan y un prodigio para aquellos que lo conocían. Desde su nacimiento, demostró habilidades sobresalientes y a los 8 años despertó el Sharingan. Se graduó como el mejor de su promoción y a los 13 años fue nombrado capitán de las Unidades ANBU. Era el hijo favorito de Fugaku Uchiha y era conocido y admirado en toda Konoha. Itachi poseía el Mangekyou Sharingan, lo que le permitía usar el Amaterasu y el Tsukuyomi, un genjutsu extremadamente poderoso que podía atrapar y controlar el espacio-tiempo de sus rivales. También tenía un Susano'o que le permitía crear una figura de samurái alrededor de su cuerpo, con el Escudo de Yata para repeler ataques y la Espada de Totsuka, capaz de sellar a sus rivales en un genjutsu eterno. Zetsu lo consideraba "invencible" debido a sus impresionantes habilidades. </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});

sasuke.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button>
  <img src="https://i.imgur.com/RaMWteI.png" />
  Sasuke Uchiha uno de los supervivientes del Clan Uchiha. Es hijo de Fugaku Uchiha y Mikoto Uchiha, hermano de Itachi Uchiha. Sasuke decidió desertar de Konohagakure en busca del poder necesario para vengar a su clan y asesinar a Itachi. <br> Después de descubrir la verdad de su hermano, fundó Taka, fue un aliado temporal de Akatsuki y se convirtió en un criminal internacional. Pero luego de hablar con Hashirama Senju decidió seguir el sueño de su hermano, colaborar con las Fuerzas Aliadas Shinobi y se colocó como meta realizar una revolución en el Mundo Shinobi. Posee el Rinnegan y el Eternal Mangekyou Sharingan, que es prácticamente un Sharingan perfecto. Gracias al Rinnegan tiene acceso a todos los Jutsus de los Seis Caminos, así como al Ninjutsu del Espacio-Tiempo. Su Susano’o, manifiesta uno de cuerpo completo. </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});

fugaku.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button>
  <img src="https://i.imgur.com/AGXLYQ1.png" />
  Fugaku Uchiha fue el líder del Clan Uchiha, así como de la Policía Militar de Konoha, esposo de Mikoto Uchiha, y el padre de Itachi Uchiha y Sasuke Uchiha. <br>
  Cuando el Nueve Colas atacó a la Aldea de la Hoja, el pueblo acusó al Clan Uchiha de planear el ataque. Esta creencia provocó una división entre el pueblo y el Clan Uchiha. Fugaku empezó a conspirar un golpe de Estado que permitiera que el Clan Uchiha tomase el control de la aldea, dado que, desde la fundación de la Aldea de la Hoja, solo los del Clan Senju habían sido Hokage y tomaban las decisiones importantes. Finalmente, Fugaku colocó a Itachi como espía en ANBU para pasar información al clan.
  <br>
  Como habilidades es probable que él conociera y dominara todas las técnicas del clan, además de ser el más fuerte en ese entonces entre los Uchiha. Se presume que era muy versado en el Shurikenjutsu. Gracias a su Mangekyō Sharingan él podía emplear un potente genjutsu lo suficientemente poderoso como para atrapar a Itachi, un maestro en esa área. Él tenía la certeza de que, con este poder, podría dominar completamente al Nueve Colas.
  </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});

madara.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button> 
  <img src="https://i.imgur.com/eT62uaA.png" />
  Madara Uchiha fue el líder de este clan y se le considera el Uchiha y el shinobi más poderoso de todos los tiempos. Aún tomando en cuenta los altos estándares que había en su familia, el chakra de Madara era notablemente alto. La rivalidad entre su clan y el Clan Senju, se trasladó a una poderosa enemistad entre él y Hashirama Senju, a quien nunca pudo vencer en vida, aunque la mayor parte del tiempo se les consideraba en igualdad de fuerzas.
  Entre sus logros se encuentran el haber capturado a las Nueve Bestias con Cola, sellarlas en la Estatua Demoníaca del Camino Exterior y así convertirse en el tercer Jinchuriki. También derrotó a cinco Kage y fue uno de los fundadores de Konoha.
  Eventualmente, Madara logró robar las células de Hashirama y despertó el Rinnegan y antes de morir, lo implantó en Nagato (Pain) cuando era sólo un niño. Durante la Cuarta Gran Guerra Ninja, Madara recuperó su Rinnengan y fue cuando logró convertirse en el Jinchuriki del Diez Colas.
  </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});

obito.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button> 
  <img src="https://i.imgur.com/Ph8Mvd7.png" />
  Obito Uchiha era compañero de Kakashi Hatake y Rin Nohara, alumno de Minato Namikaze y fue quien le dio a Kakashi su Sharingan izquierdo. Después de su supuesta muerte, reapareció como Tobi. Él era el verdadero líder de Akatsuki. Fue manipulado por Madara Uchiha quién lo salvó y evitó su muerte. Obito se convirtió en el discipulo de Madara, hasta la muerte del mismo dónde adoptó su nombre y se hizo pasar por el fantasma de los Uchiha. 
  Junto con Kabuto Yakushi, fue quién comenzó la Cuarta Gran Guerra Ninja, con el fin de cumplir "El Plan Ojo de Luna" de Madara.
  Era uno de los villanos principales, hasta su derrota a manos de la Alianza Shinobi y su redención a manos de Naruto Uzumaki. Él mismo se había auto-proclamado como Madara Uchiha para provocar temor en sus contrarios. Además de esto, fue el segundo Jinchūriki del Diez Colas.
  </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});

shisui.addEventListener("click", () => {
  modalMiembros.setAttribute("style", estilos);
  modalMiembros.innerHTML = `<p class='texto'>
  <button class="close-modal-miembros"><i class="fa-solid fa-xmark"></i></button>
  <img src="https://i.imgur.com/TVEuirY.png" />
  Shisui Uchiha, también conocido como "Shisui del Cuerpo Parpadeante", fue un shinobi de Konohagakure, mejor amigo de Itachi Uchiha y uno de los shinobis más talentosos de su clan y de Konoha.
  Aunque Shisui se dedicó a su clan, era aún más dedicado al bienestar de su pueblo, un rasgo de su propio clan aparentemente ignoraban o desconocían. Él incluso fue tan lejos como para intentar poner su clan bajo un genjutsu con el fin de detener su golpe de Estado, lo que llevaría a una guerra civil.
  Shisui al ser traicionado por Danzō, decidió suicidarse frente a su mejor amigo Itachi, para que éste despertase su Mangekyō Sharingan y su vez Shisui le regaló su propio ojo (el que le quedaba, luego de que Danzō le robara uno) para que Itachi hiciese lo mejor para el clan y la aldea.
  Shisui era un portador del Sharingan, fue elogiado por su habilidad superior con sus ojos. Con su Mangekyō Sharingan, podía usar un genjutsu único del más alto nivel, que permite al usuario controlar la mente del objetivo hasta el punto en que incluso el que estaba siendo manipulado, no estaba al tanto de que estaba siendo utilizado.

  </p>`;

  const button = document.querySelector(".close-modal-miembros");
  button.addEventListener("click", () => {
    modalMiembros.removeAttribute("style");
    modalMiembros.innerHTML = ``;
  });
});
