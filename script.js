console.log("Script carregado");
document.querySelector("#switch button").addEventListener("click", function() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.src = "./Perfil.jpeg";
  } else {
    img.src = "./Perfil2.jpg";
  }

  console.log("Imagem trocada:", img.src);
});


