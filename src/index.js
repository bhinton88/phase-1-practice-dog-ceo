console.log('%c HI', 'color: firebrick')

const imgDiv  = document.getElementById('dog_image_container')
const select = document.getElementById('breed-dropdown')
const dogUl = document.getElementById('dog-breeds')
let breeds = [] // if we initially declare a variable.. and then 
// change it in function scope, we still have access to it in the global scope later

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(json => json.message.forEach(element => {
  const img = document.createElement('img')
  img.src = element 
  imgDiv.appendChild(img)
})
)

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(json => {
  breeds = Object.keys(json.message)
  breeds.map(breed => {
    const li = document.createElement('li')
    li.textContent = breed
    dogUl.appendChild(li) // remember that we dont need qoutes as the element has already been created 
  })
})

 /* for(const dog in json.message) {
  const li = document.createElement('li')
  li.textContent = dog
  dogUl.appendChild(li) */ 

dogUl.addEventListener('click', (event) => event.target.style.color = "pink")

select.addEventListener('change', (event) => {
  dogUl.innerHTML = ""  // to clear our the inner HTML of the UL 
  const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
  filteredBreeds.map(breed => {
    const li = document.createElement('li')
    li.textContent = breed
    dogUl.appendChild(li)
  })
})

// remember .filter.. iterates over an ARRAY and finds all values that match the value
// declared in the callback 

// .map iterates over the array and performs some action 

// we initially declared breeds at the beginning of the code so that we can then 
// re-declare it in function scope and pull out that value later 

// dogUl.innerHTML was set to an empty string to clear out all the LI that were generated 
// by the second fetch request 

// change event is used to set an event listener on a drop down 

// breed[0] is there to compare the first letter of each breed to our event target value

  



  
