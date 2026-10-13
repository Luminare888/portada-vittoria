/* ====== DATOS DEL PERSONAJE (sustituye aquí a tu protagonista) ====== */
const DATA = {
  portrait: "https://i.imgur.com/7KRwkx4.jpeg", // ruta a la imagen, p. ej. "img/retrato.jpg". Vacío = silueta de sustitución
  name: "Vittoria de Medici", alias: "La asesina", age: 20,
  born: "No registrada", place: "Dressrosa, Nuevo Mundo", nation: "Dressrosa",
  era: "Años 25, Era de los piratas", job: "Médica y asesina", aff: "Jikogisei Kaizokudan",
  status: "Viva",
  quote: "«Por los inocentes, la libertad y la verdad.»",
  trasfondo: ["Raffaele de Medici emigró a Dressrosa con la intención de comenzar una nueva vida y trabajar como médico en un centro de salud situado en uno de los barrios más acomodados de la isla. No tardó en demostrar su talento. Su dedicación, sus conocimientos y su trato con los pacientes hicieron que, en poco tiempo, se ganara la reputación de ser uno de los mejores médicos de la zona. Apenas unos años después de su llegada, Raffaele había conseguido reunir una fortuna considerable, suficiente para ofrecerle un hogar confortable a su esposa, Lucrecia, y a su primer hijo, Stefano.", "Tres años después de establecerse en Dressrosa, nació la segunda hija del matrimonio: Vittoria de Medici. Desde muy pequeña, la joven mostró una personalidad que llenaba de orgullo a sus padres. Era humilde con quienes la rodeaban, siempre dispuesta a ayudar y poseía una enorme curiosidad por las ciencias y, especialmente, por la medicina. Bajo la tutela de su padre, comenzó a adquirir conocimientos médicos desde una edad temprana, demostrando una facilidad poco común para comprender aquello que él le enseñaba. Su hermano mayor, Stefano, era completamente diferente. Intrépido, rebelde y caprichoso, nunca mostró interés por continuar con el trabajo de su padre. Tampoco estaba dispuesto a aceptar los consejos de su madre sobre el matrimonio o las responsabilidades que algún día tendría que asumir. Para Stefano, la única regla que merecía la pena seguir era no obedecer ninguna. Años después nació el tercer y último hijo de la familia, Marco, el pequeño de la casa. Apenas tenía cinco años cuando sus hermanos mayores contaban diecisiete y catorce. Marco era un niño alegre, inocente y de carácter risueño. Para quienes lo conocían, resultaba difícil imaginar que pudiera albergar maldad alguna en su corazón.", "Con el paso del tiempo, Raffaele decidió que Vittoria estaba preparada para acompañarlo en su trabajo. Tras años de estudio y formación, le ofreció un puesto como médica en su propio centro de salud. La joven comenzó así a seguir los pasos de su padre, ganándose poco a poco el respeto de sus pacientes y compañeros. Sin embargo, el éxito de la familia también despertó la envidia de aquellos que no poseían sus mismos privilegios. Su riqueza, su educación y la reputación de Raffaele habían convertido a los Medici en una familia respetada dentro de la alta sociedad de Dressrosa, pero también en un objetivo. Los Medici habían conseguido numerosos enemigos a lo largo de los años, aunque ninguno de ellos podía imaginar que la mayor amenaza procedería precisamente de una familia perteneciente a su mismo círculo social: los Borgia.", "Cuando Vittoria cumplió dieciocho años, su vida cambió para siempre. Uno de los hombres que trabajaba para los Borgia consiguió infiltrarse en el entorno de los Medici y presentó ante las autoridades una denuncia falsa contra Raffaele, acusándolo de negligencia médica durante una de sus operaciones. El proceso fue manipulado hasta conseguir que el prestigioso médico fuese declarado culpable y condenado a muerte. Vittoria contempló impotente cómo su padre era ejecutado públicamente por un crimen que jamás había cometido. Aquel acontecimiento destruyó a la familia. Lucrecia, incapaz de soportar la pérdida de su marido, cayó gravemente enferma. Durante sus últimos días permaneció junto a su hija, consciente de que el destino de los Medici estaba a punto de cambiar para siempre. Poco antes de morir, Lucrecia tomó la mano de Vittoria y pronunció sus últimas palabras: «Busca a Carlo Vieri. Él te entregará nuestro verdadero legado...». Después cerró los ojos. Vittoria había perdido a sus dos padres en el mismo año.", "Sin comprender todavía el significado de las palabras de su madre, acudió en busca de Carlo Vieri, el banquero que durante años había administrado las cuentas y parte de los negocios de la familia. Allí descubrió una verdad todavía más dolorosa. Stefano había traicionado a sus propios padres. Enfurecido porque habían dejado de financiar sus excesos y decidido a apoderarse de la fortuna familiar, Stefano había entregado información sobre ellos a sus enemigos. Su ambición le había llevado incluso a colaborar con aquellos responsables de la caída de su propia familia. Ahora, con Raffaele y Lucrecia muertos, solo quedaban dos obstáculos entre Stefano y la herencia: sus propios hermanos, Marco y Vittoria.", "Aquella misma noche, Stefano se enfrentó a Vittoria. Ambos desenvainaron sus espadas en el interior de la mansión que alguna vez había sido su hogar. Stefano poseía fuerza y determinación, pero jamás se había preocupado demasiado por entrenar. Vittoria, en cambio, había aprendido a defenderse durante los años que pasó junto a su padre y había desarrollado una habilidad mucho mayor de la que su hermano esperaba. Durante el duelo, Vittoria consiguió atravesarle el hombro con su espada, pero Stefano también logró herirla. La hoja recorrió su rostro y dejó una profunda cicatriz que marcaría a Vittoria para el resto de su vida. La joven comprendió entonces que aquella casa ya no era un hogar, sino una prisión. Aprovechando el caos de la noche, Vittoria tomó a Marco y huyó con él. Ambos abandonaron la mansión y desaparecieron entre las calles del que, hasta entonces, había sido su querido barrio de Dressrosa.", "Herida, agotada y sin saber en quién confiar, Vittoria llegó finalmente a la residencia de Carlo Vieri. El anciano ya esperaba su llegada, aunque no esperaba verla herida y acompañada por el pequeño Marco. Vittoria le contó todo lo sucedido y Carlo escuchó en silencio. Cuando terminó, el anciano no mostró sorpresa. Él ya conocía la ambición de Stefano. Mientras Vittoria y Marco permanecieran con vida, Stefano no podría reclamar legítimamente toda la herencia de los Medici. Sin embargo, proteger aquello que les pertenecía no sería suficiente. Vittoria tendría que descubrir cuál era el verdadero legado de su familia. Carlo le entregó entonces una carta. En ella aparecía un único destino: Loguetown. Allí debía encontrar a un hombre conocido únicamente por su nombre en clave: Jupiter. Carlo no podía darle más respuestas. El resto tendría que descubrirlo por sí misma.", "Vittoria emprendió el viaje junto a Marco. Pasaron años recorriendo diferentes mares, enfrentándose a peligros, aprendiendo a sobrevivir y tratando de comprender qué relación existía entre su familia y aquel misterioso legado. Finalmente, después de un largo viaje, llegaron hasta Loguetown. Allí encontraron al hombre encapuchado. Jupiter era un hombre mayor, de mirada severa y rostro marcado por los años. Cuando escuchó el apellido de Vittoria, su expresión cambió. Había conocido a Raffaele y recordaba perfectamente sus facciones. Al contemplar a su hija, comprendió inmediatamente quién era. Sin decir una palabra, Jupiter abrió un antiguo compartimento y sacó una caja de madera. «Tu madre sabía que algún día vendrías», dijo. Vittoria abrió la caja. En su interior había un extraño atuendo de color blanco, acompañado de una capucha, similar a las ropas que llevaba Jupiter. Junto a él había una pequeña nota. Vittoria la desplegó lentamente. No era una carta. Eran unos mandamientos. Un credo. Aquello que durante generaciones había permanecido oculto a los ojos del mundo.", "En ese momento, Vittoria comprendió que la historia de su familia era mucho más antigua y peligrosa de lo que jamás había imaginado. Los Medici no habían sido simplemente una familia de médicos y hombres de negocios. Habían formado parte de algo mucho mayor: una hermandad que había sobrevivido durante generaciones en las sombras. Una hermandad de asesinos. Desde aquel día, Vittoria abandonó definitivamente la vida que había conocido. Dejando a Marco junto a Jupiter, emprendió la misión de reconstruir una hermandad que prácticamente había desaparecido y que haría que ya no luchase únicamente por su familia. Lucharía por aquellos que no podían defenderse, por los inocentes y por la libertad, para que la verdad jamás volviera a perderse. Porque, mientras existiera alguien dispuesto a luchar por ella, el Credo seguiría vivo."],
  sections: {
    origen: { L: [
      {p:"Vittoria nació en Dressrosa, en el Nuevo Mundo, siete años después de que su padre, Raffaele de Medici, emigrara allí para empezar una nueva vida como médico. Su dedicación y su trato con los pacientes le valieron fama de ser uno de los mejores médicos de la zona."},
      {p:"Creció rodeada de riquezas, pero sus padres le enseñaron desde pequeña la humildad y la consideración por los demás, pues ellos mismos no siempre disfrutaron de una vida acomodada."},
      {note:"Tuve una infancia feliz, extraño mi barrio en Dressrosa."}],
      R: [{h:"Familia"},{ul:["Raffaele de Medici, padre y médico","Lucrecia, madre","Stefano, hermano mayor y enemigo","Marco, hermano pequeño"]},{h:"Entorno"},{p:"Educada en casa, con profesores particulares y con su propio padre. Está acostumbrada a la soledad y a pasar largos periodos consigo misma."},{h:"Aspecto"},{p:"Cabello rubio blanquecino y ojos grises, ligeramente rasgados, heredados de su padre; facciones delicadas de su madre. Una cicatriz marca su rostro."}] },
    personalidad: { L: [{p:"Es una joven de carácter serio, a quien le cuesta mucho divertirse y cuyas expresiones rara vez resultan especialmente amigables. Aun así, siempre procura suavizar su actitud cuando debe ejercer como médica y cuidar de los demás. Podría decirse que Vittoria posee dos alter egos: el de la médica inocente y compasiva que se desvive por ayudar a quienes lo necesitan, y el de la asesina sin escrúpulos que no teme manchar su espada de sangre si considera que es por un bien mayor. En ambos casos, sus pensamientos están dirigidos hacia el bienestar de quienes menos tienen. A pesar de haber crecido rodeada de riquezas, sus padres se encargaron de enseñarle desde pequeña el valor de la humildad y la importancia de tener consideración por los demás, pues ellos mismos no siempre disfrutaron de una vida acomodada."},{p:"Considera todo un reto para los demás conseguir verla sonreír, aunque, cuando alguien se esfuerza sinceramente por ella, sabe valorar ese gesto desde el corazón. Desde pequeña padece múltiples alergias, motivo por el cual recibió su educación en casa, acompañada de profesores particulares y de su propio padre."}],
      R: [{p:"Está acostumbrada a la soledad y a pasar largos periodos consigo misma, por lo que, en determinados momentos, necesita aislarse y encerrarse en su propio espacio para recuperar la calma."},{p:"Es delgada, aunque su figura se encuentra marcada por los constantes entrenamientos a los que se somete. Debido a sus alergias, mantiene además una alimentación muy concreta y controlada. A pesar de poseer unas facciones delicadas, heredadas de su madre, Vittoria suele sentirse poco atractiva frente a los demás a causa de la cicatriz que marca su rostro. No presta demasiada atención a su apariencia y tiende a restarle importancia, especialmente cuando se compara con otras personas."}] },
    objetivos: { L: [
      {h:"Objetivo principal"},{p:"Construir un mundo sin mentiras ni secretos, que defienda el libre albedrío."},
      {h:"Secundarios"},{ul:["Proteger a los inocentes y aportar sus conocimientos médicos","Progresar como médica hasta alcanzar el título de cirujana","Hacer que el Credo se transmita a las próximas generaciones"]},
      {h:"Motivación"},{p:"El bienestar de quienes menos tienen."}],
      R: [
      {h:"Enemigos"},{ul:["Stefano, su hermano mayor","La familia Borgia, responsable de la muerte de sus padres"]},
      {h:"Por cumplir"},{ul:["Recuperar las riquezas de su familia","Vengar el asesinato de sus padres","Llevar de vuelta a Marco a su hogar","Morir dejando descendencia que honre el apellido Medici"]},
      {secret:"Pese a su frialdad, a escondidas solo piensa en el futuro de su hermano pequeño y de sus compañeros."}] },
    gustos: { L: [
      {h:"Aficiones"},{p:"El conocimiento y el asesinato por el bien común."},
      {h:"Lecturas"},{p:"Libros de medicina e historia, en su estudio, siempre con una pequeña vela: adora la luz tenue."},
      {note:"Mi refugio: el estudio, la vela y el silencio."}],
      R: [
      {h:"Favoritos"},{ul:["Comida: las manzanas rojas","Color: el negro"]},
      {h:"Detesta"},{ul:["Que le digan «Vitt»"]},
      {h:"Vestimenta"},{p:"Según la ocasión y su ánimo: ropa formal y elegante o cómoda y práctica. Pero siempre suele respetar su máscara."}] },
    curiosidades: { L: [
      {h:"Manías"},{ul:["Meticulosa hasta el exceso","Siente la necesidad de desinfectar casi todo","Lleva siempre pañuelos encima","Es muy delicada con la comida y sigue una alimentación controlada"]},
      {h:"Entrenamiento"},{p:"Delgada, pero con la figura marcada por sus constantes entrenamientos."}],
      R: [
      {h:"La máscara"},{p:"Un accesorio al que concede una importancia especial."},
      {secret:"Se enmascara el rostro para cubrir su cicatriz, por vergüenza."},
      {h:"Reservada"},{p:"Pocas veces ríe, lo que saca de quicio a Rigel."}] }
  },
  timeline: [
    {date:"Comienzo",age:0,title:"Nacimiento",text:"Nace en Dressrosa, siete años después de la llegada de Raffaele."},
    {date:"Infancia",age:5,title:"Primeras lecciones",text:"Muestra una gran curiosidad por la medicina y empieza a aprender con su padre."},
    {date:"Traición",age:18,title:"La denuncia",text:"Una denuncia falsa lleva a Raffaele a la condena y ejecución. Lucrecia muere poco después."},
    {date:"Tras el duelo",age:18,title:"La traición de Stefano",text:"Carlo Vieri le revela la traición de su hermano mayor y huye con Marco."},
    {date:"El viaje",age:19,title:"Loguetown",text:"Encuentra a Jupiter y descubre el atuendo, el Credo y el legado de los Medici."},
    {date:"Hoy",age:20,title:"Reconstruir la hermandad",text:"Decide reconstruir la hermandad y luchar por los inocentes, la libertad y la verdad."}]
};

/* ====== RENDER ====== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const ORDER = [["identidad","Identidad","☗"],["origen","Origen","⚑"],["trasfondo","Trasfondo","✎"],["personalidad","Personalidad","☯"],["objetivos","Objetivos","➶"],["gustos","Gustos","♪"],["curiosidades","Curiosidades","✦"],["linea","Línea temporal","⌛"]];
let cur = 0, audio, TP = [], PAGES = ORDER.map(o => ({ id: o[0], i: 0, n: 1 }));

function blk(b, first) {
  if (b.h) return `<h3>${esc(b.h)}</h3>`;
  if (b.p) return `<p class="${first ? "drop" : ""}">${esc(b.p)}</p>`;
  if (b.ul) return `<ul class="k">${b.ul.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
  if (b.note) return `<p class="note">${esc(b.note)}</p>`;
  if (b.secret) return `<button class="secret" aria-pressed="false" data-s="${esc(b.secret)}">▓ INFORMACIÓN CLASIFICADA — pulsa para revelar</button>`;
  return "";
}
const col = (title, arr) => `<h2>${title}</h2>` + arr.map((b, i) => blk(b, i === 0)).join("");

function portrait() {
  const img = DATA.portrait ? `<img src="${esc(DATA.portrait)}" alt="Retrato de ${esc(DATA.name)}" onerror="this.replaceWith(document.createTextNode('Retrato no disponible'))">`
    : `<svg viewBox="0 0 100 130" width="70%" role="img" aria-label="Silueta encapuchada de sustitución"><!-- Sustituir por imagen en DATA.portrait --><path d="M50 8C28 8 18 40 18 72l14 8 18 40 18-40 14-8C82 40 72 8 50 8Z" fill="#101318" stroke="#8c7e60" stroke-width="2"/><ellipse cx="50" cy="52" rx="14" ry="18" fill="#4a1c25"/></svg>`;
  return `<div class="portrait">${img}</div><div class="cap">${esc(DATA.name)}<small>«${esc(DATA.alias)}»</small></div>`;
}

function page(e) {
  const d = DATA, id = e.id;
  if (id === "trasfondo") return [TP[e.i * 2] || "", TP[e.i * 2 + 1] || ""];
  if (id === "identidad") {
    const f = [["Edad", d.age], ["Nacimiento", d.born], ["Lugar", d.place], ["Nacionalidad", d.nation], ["Época", d.era], ["Profesión", d.job], ["Afiliación", d.aff], ["Estado", d.status]];
    return [`<h2>Expediente</h2>${portrait()}`, `<h2>Ficha</h2><dl class="ficha">${f.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl><p class="quote">${esc(d.quote)}</p><p class="note">Mi diario de anotaciones para nunca olvidarme de nada...</p>`];
  }
  if (id === "linea") {
    return [`<h2>Línea temporal</h2><ol class="tl">${d.timeline.map((e, i) => `<li><button data-i="${i}" aria-current="${i === 0}"><b>${esc(e.date)}</b> · ${esc(e.title)}</button></li>`).join("")}</ol>`, `<div id="tlDetail"></div>`];
  }
  const s = d.sections[id], lbl = ORDER.find(o => o[0] === id)[1];
  return [col(lbl, s.L), s.R.map((b, i) => blk(b, false)).join("")];
}

function show(i, quiet) {
  cur = Math.max(0, Math.min(PAGES.length - 1, i));
  const e = PAGES[cur], id = e.id, lbl = ORDER.find(o => o[0] === id)[1], [l, r] = page(e);
  [["#pageL", l], ["#pageR", r]].forEach(([s, h], k) => {
    const el = $(s); el.innerHTML = h; el.dataset.n = cur * 2 + 1 + k; el.classList.toggle("compact", id === "personalidad" || id === "trasfondo");
    el.classList.remove("in"); void el.offsetWidth; el.classList.add("in");
  });
  document.querySelectorAll("#nav button").forEach((b, k) => ORDER[k][0] === id ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"));
  $("#ind").textContent = `${lbl}${e.n > 1 ? ` · ${e.i + 1}/${e.n}` : ""} (${cur + 1}/${PAGES.length})`;
  $("#prev").disabled = cur === 0; $("#next").disabled = cur === PAGES.length - 1;
  if (id === "linea") tl(0);
  closeMenu(); if (!quiet) beep();
  window.scrollTo({ top: 0 });
}
function tl(i) {
  const e = DATA.timeline[i];
  $("#tlDetail").innerHTML = `<h2>${esc(e.date)}</h2><p><b>${esc(e.title)}</b> · ${e.age} años</p><p class="drop">${esc(e.text)}</p>`;
  document.querySelectorAll(".tl button").forEach((b, k) => b.setAttribute("aria-current", k === i));
}
function beep() {
  if (!$("#sound").checked) return;
  try { audio = audio || new AudioContext(); const o = audio.createOscillator(), g = audio.createGain();
    o.frequency.value = 180; g.gain.value = .05; o.connect(g); g.connect(audio.destination); o.start(); o.stop(audio.currentTime + .12); } catch (e) {}
}
const closeMenu = () => { $("#sidebar").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); };

/* ====== PAGINACIÓN DEL TRASFONDO ======
   Reparte el texto frase a frase en tantas páginas como hagan falta, midiendo la altura real. */
function paginate(paras) {
  const el = $("#pageL"), pages = [];
  el.classList.add("compact");
  const render = (pg, first) => (first ? "<h2>Trasfondo</h2>" : "") + pg.map((p, k) => `<p class="${first && k === 0 ? "drop" : ""}">${esc(p.s.join(" "))}</p>`).join("");
  // En móvil la altura es automática: todo el texto va en una sola página
  if (matchMedia("(max-width:800px)").matches) return [render(paras.map((t, pi) => ({ pi, s: [t] })), true)];
  // Se reserva una franja inferior (46px) para que el texto no llegue al número de página
  const over = () => el.lastElementChild && el.lastElementChild.getBoundingClientRect().bottom - el.getBoundingClientRect().top > el.clientHeight - 46;
  let pg = [];
  paras.forEach((t, pi) => t.split(/(?<=[.!?][»"]?)\s+/).forEach(sent => {
    const last = pg[pg.length - 1], prev = last && last.pi === pi ? last : null;
    prev ? prev.s.push(sent) : pg.push({ pi, s: [sent] });
    el.innerHTML = render(pg, pages.length === 0);
    if (over() && pg.reduce((a, p) => a + p.s.length, 0) > 1) {
      prev ? prev.s.pop() : pg.pop();
      pages.push(render(pg, pages.length === 0));
      pg = [{ pi, s: [sent] }];
    }
  }));
  if (pg.length) pages.push(render(pg, pages.length === 0));
  return pages;
}
function buildPages() {
  TP = paginate(DATA.trasfondo);
  const keep = PAGES[cur].id, n = Math.ceil(TP.length / 2) || 1;
  PAGES = ORDER.flatMap(o => o[0] === "trasfondo" ? Array.from({ length: n }, (_, i) => ({ id: o[0], i, n })) : [{ id: o[0], i: 0, n: 1 }]);
  show(PAGES[cur] && PAGES[cur].id === keep ? cur : Math.max(0, PAGES.findIndex(p => p.id === keep)), true);
}

/* ====== EVENTOS ====== */
$("#nav").innerHTML = ORDER.map((o, i) => `<button data-p="${i}"><span aria-hidden="true">${o[2]}</span>${o[1]}</button>`).join("");
$("#nav").addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(PAGES.findIndex(p => p.id === ORDER[+b.dataset.p][0])); });
$("#prev").onclick = () => show(cur - 1);
$("#next").onclick = () => show(cur + 1);
$("#home").onclick = () => show(0);
$("#menuBtn").onclick = () => { const o = $("#sidebar").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); };
$("#book").addEventListener("click", e => {
  const s = e.target.closest(".secret");
  if (s) { const on = s.getAttribute("aria-pressed") === "true"; s.setAttribute("aria-pressed", !on); s.textContent = on ? "▓ INFORMACIÓN CLASIFICADA — pulsa para revelar" : s.dataset.s; beep(); return; }
  const t = e.target.closest(".tl button"); if (t) return tl(+t.dataset.i);
});
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") show(cur + 1);
  if (e.key === "ArrowLeft") show(cur - 1);
  if (e.key === "Escape") closeMenu();
});
show(0, true);
document.fonts.ready.then(buildPages);
matchMedia("(max-width:800px)").addEventListener("change", buildPages);
