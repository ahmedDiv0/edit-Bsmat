const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')

  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})
function hideShow() {
  let img = document.getElementById('appear')
  let imgg = document.getElementById('disapper')
  if (img.style.display === 'none' && imgg.style.display === 'block') {
    img.style.display = 'block'
    imgg.style.display = 'none'
  } else {
    imgg.style.display = 'block'
    img.style.display = 'none'
  }
}
