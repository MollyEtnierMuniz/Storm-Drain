const drainsContainer = document.querySelector('#drains-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/drains`

const drainsCallback = ({ data: drains }) => displaydrains(drains)
const errCallback = err => console.log(err)

const getAlldrains = () => axios.get(baseURL).then(drainsCallback).catch(errCallback)
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

    addDrain(bodyObj)

    nearestAddress.value = ''
    city.value = ''
    blockage.value = ''
}

function addDrainHelp(drain) {
    const drainHelp = document.createElement('div')
    drainHelp.classList.add('drain-help')

    drainHelp.innerHTML = `<img alt='drain cover image' src=${drain.imageURL} class="drain-cover-image"/>
    <p class="nearestAddress">${drain.nearestAddress}</p>
    <div class="btns-container">
        <button onclick="updateDrain(${drain.id}, 'minus')">-</button>
        <p class="drain-price">$${drain.nearestAddress}</p>
        <button onclick="updateDrain(${drain.id}, 'plus')">+</button>
    </div>
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

form.addEventListener('submit', submitHandler)

getAlldrains()