const randomDogBtn = document.getElementById("button-random-dog");
const content = document.getElementById("content")
const inputField = document.getElementById("input-breed")
const breedBtn = document.getElementById("button-show-breed")
const subBreedBtn = document.getElementById('button-show-sub-breed')
const allBreedBtn = document.getElementById('button-show-all')

async function getDogDetails() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function displayDogImage() {
    let image = document.createElement("img")
    if (content.hasChildNodes()) {
        content.innerHTML = ""
    }
    getDogDetails().then(data => {
        console.log(data)
        image.src = data.message
        image.alt = "Random Image"
        console.log(image)
        content.append(image)
    }).catch(error => {
        console.log(error)
    })

}

async function getDetails(breed){
    try {
        let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function displayBreed(){
    let image = document.createElement("img")
    let text = document.createElement("p")
    let breed = inputField.value.toLowerCase();
    console.log(breed)
    if (content.hasChildNodes()) {
        content.innerHTML = ""
    }
    getDetails(breed).then(data => {
        console.log(data)
        if (data.status === "error") {
            text.innerText = data.message.substring(0,15) +"!"
            content.append(text)
            return
        }
        image.src = data.message
        image.alt = `Image of ${breed} dog`
        console.log(image)
        content.append(image)
    }).catch(error => {
        console.log(error)
    })
}

async function getSubBreeds(breed){
    try {
        let response = await fetch(`https://dog.ceo/api/breed/${breed}/list`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function displaySubBreed(){
    let text = document.createElement("p")
    let list = document.createElement('ol')
    let breed = inputField.value.toLowerCase();
    console.log(breed)
    if (content.hasChildNodes()) {
        content.innerHTML = ""
    }
    getSubBreeds(breed).then(data => {
        console.log(data)
        if (data.status === "error") {
            text.innerText = data.message.substring(0,15) +"!"
            content.append(text)
            return
        }
        if(data.message.length === 0){
            text.innerText = "No sub-breeds found!"
            content.append(text)
            return
        }

        data.message.forEach(breed =>{
            let item = document.createElement('li')
            item.innerText = breed
            list.append(item)
        })
        content.append(list)
    }).catch(error => {
        console.log(error)
    })
}

async function getAllBreeds(){
    try {
        let response = await fetch("https://dog.ceo/api/breeds/list/all")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function displayAllBreeds(){
    let list = document.createElement('ol')
    if (content.hasChildNodes()){
        content.innerHTML = "";
    }
    getAllBreeds().then(data=> {
        if (data.status === "error") {
            return
        }
        for (let key in data.message){
            let item = document.createElement('li')
            item.innerText = key
            if (data.message[key].length === 0){
                list.append(item)
                continue
            }
            console.log(data.message[key].length)
            let unorder = document.createElement('ul')
            data.message[key].forEach(sub => {
                let subItem = document.createElement('li')
                subItem.innerText = sub
                unorder.append(subItem)
                })
            item.append(unorder)
            list.append(item)
        }
        content.append(list)
    })
}

randomDogBtn.addEventListener("click", displayDogImage)
breedBtn.addEventListener("click", displayBreed)
subBreedBtn.addEventListener("click",displaySubBreed)
allBreedBtn.addEventListener("click",displayAllBreeds)