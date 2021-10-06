// Short Circuit - OR \\ is used for defining default values of a variable.

function printName(name) {
  // first way
  if (name == null) {
    name = 'Clarusway'
  }
  return name
}
/****************************/
function printName(name) {
  // second way
  name = name || 'Clarusway'
  return name
}

console.log(printName()) // prints -> Clarusway
