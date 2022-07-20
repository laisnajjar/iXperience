const contacts = [
  { name: 'John', number: '123456789' },
  { name: 'Johnson', number: '987654321' },
]

function printContacts() {
  let html = '<ul>'
  for (let contact of contacts) {
    html += '<li>' + contact.name + '</li>'
  }

  html += '</ul>'
  document.body.innerHTML = html
}

// class PromiseFake{
//     constructor(func){
//         func(this.then, this.catch)
//     }
// }

//using promises- needs a then and catch afterwards
//uses 'resolve' and 'reject' in call
function addContact(contact) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true
      if (success) {
        contacts.push(contact)
        resolve({success:true})
      } else {
        reject(new Error('something went wrong'))
      }
    }, 2000)
  })
}
// function addContact(contact, callback){

//     setTimeout(() => {
//         contacts.push(contact);
//         callback();
//     }, 2000);
// }

printContacts()
const newContact = {
  name: 'mit',
  number: '0124',
}

// 

async function init(){
    try{
       const result = await addContact(newContact)
       printContacts()
    } catch(err){
        console.log(err)
    }
}

init();

// const promise = addContact(newContact)
// promise
//   .then((result) => {
//     printContacts()
//     console.log('printed')
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
