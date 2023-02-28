function toogleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  //  pegar a imagem
  const img = document.querySelector("#profile img")

  // se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-Light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }

  // pegar o alt comentario Fonto
  const comentario = document.querySelector("#profile img")
  // se tiver modo light, adicionar comentario imagem light
  if (html.classList.contains("light")) {
    comentario.setAttribute("alt", "-imagem de perfil modo light")
  } else {
    // se tiver sem modo light manter comentario
    comentario.setAttribute("alt", "-Imagem do perfil modo dark")
  }
}
