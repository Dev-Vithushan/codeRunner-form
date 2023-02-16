const form = document.getElementById('personalDetails')

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const dob = document.getElementById('dob')


document.getElementById("details").innerHTML = "I have changed!";

form.addEventListener('submit' , e => {
    alert("hello")
    e.preventDefault();
    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = element.querySelector('.error')


    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = element.querySelector('.error')

    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const nameVal = name.value.trim()
    const emailVal = email.value.trim()
    const passVal = password.value.trim()

    if(nameVal === ''){
        setError(name,'username required')
    } else {
        setSuccess(name)
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

}



function eraseAll() {
    var element = document.getElementById(" personalDetails ");
    element.reset()
}
