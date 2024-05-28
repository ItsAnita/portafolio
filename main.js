let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80, // ajusta la velocidad en milisegundos
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #000000;">Desarrolladora Fullstack y Diseñadora UX/UI</span> ')
  .pauseFor(180)
  .deleteChars(10)
  .start();
