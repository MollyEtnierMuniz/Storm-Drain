const drainsContainer = document.querySelector('#drains-container')
const form = document.querySelector('form')

const addDrainBtn = document.querySelector("#submit")



const baseURL = `http://localhost:4004/api/drains`

const drainsCallback = ({ data: drains }) => displayDrains(drains)
const errCallback = err => console.log(err)

const getAllDrains = () => axios.get(baseURL).then(drainsCallback).catch(errCallback)

const addDrain = body => axios.post(baseURL, body).then(drainsCallback).catch(errCallback)

const deleteDrain = id => axios.delete(`${baseURL}/${id}`).then(drainsCallback).catch(errCallback)

const updateDrain = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(drainsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let nearestAddress = document.querySelector('#nearestAddress')
    let city = document.querySelector('#city')
    let blockage = document.querySelector('#blockage')

    let bodyObj = {
        nearestAddress: nearestAddress.value,
        city: city.value, 
        blockage: blockage.value
    }
console.log ("test")
    addDrain(bodyObj)

    nearestAddress.value = ''
    city.value = ''
    blockage.value = ''
}

function addDrainHelp(drain) {
    const drainHelp = document.createElement('div')
    drainHelp.classList.add('drain-help')

    drainHelp.innerHTML = `<br> 
    <p class="nearestAddress">${drain.nearestAddress}</p> 
    <p class="city">${drain.city}</p>
    <p class="drain-blockage">${drain.blockage}</p>
        
    <button onclick="deleteDrain(${drain.id})">delete</button>
    `
    drainsContainer.appendChild(drainHelp)
}

function displayDrains(arr) {
    drainsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addDrainHelp(arr[i])
    }
}

form.addEventListener ("submit", submitHandler)
getAllDrains()