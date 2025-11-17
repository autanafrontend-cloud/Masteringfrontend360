// Referencias
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Colores de cada tema
const temaClaro = {
  '--color-fondo': '#f4f4f4',
  '--color-texto': '#222',
  '--color-principal': '#0044ff',
  '--color-secundario': '#0056b3'
};

const temaOscuro = {
  '--color-fondo': '#121212',
  '--color-texto': '#f4f4f4',
  '--color-principal': '#ff6600',
  '--color-secundario': '#ff8533'
};

// Cambiar el tema al marcar el switch
// (e) => {....} Define una función flecha que recibe el evento como parámetro
// e.target.checked  Verifica si el checkbox está activado
// ? : Operador ternario para elegir entre dos valores
// for (const prop in tema) Recorre todas las propiedades (variables CSS) del tema
// root.style.setProperty(prop, tema[prop]) Cambia el valor de cada variable CSS en el documento

toggle.addEventListener('change', (e) => {
  const tema = e.target.checked ? temaOscuro : temaClaro;
  for (const prop in tema) {
    root.style.setProperty(prop, tema[prop]);
  }
});

// Ejemplo: botón para cambiar el color principal de forma dinámica
// document.querySelector('.action-btn') Busca el botón en el DOM
// addEventListener('click', ...) Detecta cuando se hace clic
// Math.random() * 360 Genera un número aleatorio entre 0 y 360
// `hsl(${...}, 80%, 50%)` Crea un color HSL con el tono aleatorio
// root.style.setProperty('--color-principal', randomColor) Cambia el valor de una variable CSS para actualizar los colores en la página 

const btn = document.querySelector('.action-btn');
btn.addEventListener('click', () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
  root.style.setProperty('--color-principal', randomColor);
});

