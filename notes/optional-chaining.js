/*optional chaining --> if object or it's property is null or undefined,
when we want to access to it or it's properties, 
it returns undefined and we dont get error.*/
const clarusway = {
  name: 'Clarusway',
  course: [
    {
      subject: 'javascript',
      code: 101
    }
  ],
  greet() {
    console.log('Happy Coding...')
  }
}

function printCourseSubjectOne(bootcamp) {
  console.log(bootcamp?.course?.[0].subject) // ?.[index] --> for array
}

function printBootcampGreet(bootcamp) {
  bootcamp?.greet?.() // ?.() --> for function
}

printCourseSubjectOne(clarusway) // javascript
printBootcampGreet(clarusway) // Happy Coding...
