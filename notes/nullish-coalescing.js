// defining default values of a variable.
// function printName(name) {
//   // first way ---> default value works when parameter is all falsy values. This is undesired case.
//   name = name || 'Clarusway'
//   return name
// }

function printName(name) {
  // better way ---> default value works when parameter is null or undefined
  name = name ?? 'Clarusway'
  return name
}

console.log(printName()) // prints -> Clarusway
