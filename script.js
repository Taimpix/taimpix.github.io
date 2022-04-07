var prev = window.pageYOffset
window.onscroll = function() {
 var after = window.pageYOffset
 if (prev > after) {
  document.getElementById("heading")
   .style = "top:0px"
 }
 if (prev < after && prev > 55) {
  document.getElementById("heading")
   .style = "top:-70px"
 }
 prev = after
}

function hex(c) {
 switch (c) {
  case 10:
   var d = "A"
   break;
  case 11:
   var d = "B"
   break;
  case 12:
   var d = "C"
   break;
  case 13:
   var d = "D"
   break;
  case 14:
   var d = "E"
   break;
  case 15:
   var d = "F"
   break;
  default:
   var d = c
 }
 return d
}

function c() {
 var red = document.getElementById(
  "slidered").value
 var green = document.getElementById(
  "slidegreen").value
 var blue = document.getElementById(
  "slideblue").value
 var code = document.getElementById(
  "rgb")
 code.innerHTML = "rgb(" + red + "," +
  green + "," + blue + ")"
 document.getElementById("palette")
  .style = "background:" + code
  .innerHTML

 function hexcode(color) {
  var fhex = hex(Math.trunc(color / 16))
  var shex = hex(color % 16)
  return String(fhex) + String(shex)
 }
 document.getElementById("hex")
  .innerHTML = "#" + hexcode(red) +
  hexcode(green) + hexcode(blue)
 document.getElementById("valuered")
  .innerHTML = red + " , " + hexcode(
   red)
 document.getElementById("valuegreen")
  .innerHTML = green + " , " + hexcode(
   green)
 document.getElementById("valueblue")
  .innerHTML = blue + " , " + hexcode(
   blue)
}

function copy(cont) {
 var range = document.createRange()
 range.selectNode(document
  .getElementById(cont))
 window.getSelection().removeAllRanges()
 window.getSelection().addRange(range)
 document.execCommand('copy')
 window.getSelection().removeAllRanges()
 swal({
  icon: "success",
  text: "Скопираванно удачно 🎉🎊"
 })
}

function decrease(cont) {
 document.getElementById(cont).value--
}

function increase(cont) {
 document.getElementById(cont).value++
}

function getColor(r, g, b) {
 document.getElementById('slidered')
  .value = r
 document.getElementById('slidegreen')
  .value = g
 document.getElementById('slideblue')
  .value = b
 c()
 window.scrollTo(0, 0)
}
