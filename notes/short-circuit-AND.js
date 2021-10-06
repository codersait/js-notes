// Short Circuit - AND && checking the properties of the object exists or not.
const bootcamp = {
  name: 'Clarusway',
  course: {
    subject: 'javascript'
  }
}
// first way
if (bootcamp != null && bootcamp.course != null) {
  console.log(bootcamp.course.subject)
}

// second way most elegant way
console.log(bootcamp && bootcamp.course && bootcamp.course.subject)
