import "./style.css";

window.onload = () => {
  document.querySelector("#btnGen").addEventListener("click", () => {
    document.querySelector("#escusa").innerHTML = escusasGen();
  });
};
let escusasGen = () => {
  let pronombre = ["un", "el"];
  let sujeto = ["perro", "gato", "caballo", "conductor", "mi hijo"];
  let accion = ["se me atravezo", "me asusto", "se lastimó"];
  let donde = ["en mi casa", "en la calle", "en la vía"];

  let pronomIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronomIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    donde[dondeIndex]
  );
};
