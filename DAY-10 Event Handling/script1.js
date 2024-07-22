document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('myButton')
  const paragraph = document.getElementById('myParagraph')
  const image = document.getElementById('myImage')

  button.addEventListener('click', () => {
    paragraph.textContent = 'The text has been changed'
  })
  image.addEventListener('dblclick', () => {
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
})