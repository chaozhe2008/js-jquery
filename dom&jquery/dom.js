//-------------adding html elements----------
function myClick() {
  var div = document.createElement("h1");
  var text = "hello world";
  var newH1 = document.body.appendChild(div);
  newH1.innerText = text;
}

//--------------get html elements-----------
/**Example:
 * document.getElementById('root')
 * document.getElementByClassName('Intro)
 * document.getElementByTagName('p')
 * document.querySelectorAll('p.intro') //css selector
 * document.getElementById('root').innerHTML = "asdf"
 */
