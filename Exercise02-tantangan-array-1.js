//input "hello world!"
//output
// "!dlrow olleh"

function balikString(string){
  var balik = ''
  for (var i = 0; i < string.length; i++) {
    balik = string[i] + balik
  }
  return balik
}

console.log(balikString("Hello world!"))