const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZkNThkOGNmLWZjYmUtNGE3NS04ZTNkLWVjYjcyYjA1ODdhYi0xNzEyNzA5OTQwMDY3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTgwYzg4NzAtNWViNS00YmVmLThhYjAtNzM5MGVkYzhhOGExIiwidHlwZSI6InQifQ.VBpIyIIJ1Giil24I9bcYa1994Y-O7xrI1TSyDwPJeFs';

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
