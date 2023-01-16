function enableGlobalView () {
  const btn = document.getElementById("btn-global-view")
  const img = document.querySelector('#image-wrapper img')

  if(btn.classList.contains('btn-open')) {
    btn.classList.remove("btn-open")
    btn.classList.add("btn-close")

    img.setAttribute('src', './assets/sofa.gif')

  } else {
    btn.classList.add("btn-open")
    btn.classList.remove("btn-close")

    img.setAttribute('src', './assets/sofa.png')
  }
}