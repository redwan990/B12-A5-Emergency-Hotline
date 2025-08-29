
//-- -value-----with------number-------//

function geyInputValueNumber (id) {
const inputField = document.getElementById (id)
const inputFildValue = inputField.value
const inputFieldValueNumber = parseInt(inputFildValue)

return inputFieldValueNumber
}

//-----only value-------//

function geyInputValueNumber (id) {
const inputField = document.getElementById (id)
const inputFieldValue = inputField.value

return inputFieldValue
}

//--------inner-text---with- number-----//
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

return  elementValueNumber
}

//----function to set inner text------//

function setInnerText(value){
    console.log(value)
const Velement = document.getElementById()
const Velement.innerText = value


}

//----function to toggle-------//
function handleToggle (id){
    const forms = document.getElementsByClassName(form)
    for(const form of forms){
        form.style.display = "none"
    }
   document.getElementById(id).style.display = "block"
}


//-----handle button toggle------//

function handleButtonTagle(id){

    const formBtns = document.getElementsByClassName("form-button")
    for( const btn of formBtns){
        btn.classList.remove(border abong bg color)
        btn.classList.add(border, bg ,color)
    }

    document.getElementById().classList.remove(bg,color etc)
    document.getElementById().classList.add(bg,color,border etc)
}

//--------tranction data or history--------//
//eta function er vitor likbe
const data = {
    mame
    date:new Date().toLocaleDateString()
}
yourElement.push(data)