import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    message: document.querySelector("textarea")
}


refs.form.addEventListener("input", throttle(onInput, 500))
refs.form.addEventListener("submit", onSubmit)

function onInput() {
    const formData = {
        email: refs.input.value,
        message: refs.message.value
    }
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}
function onSubmit(e) {
    e.preventDefault();
    const formValue = localStorage.getItem(STORAGE_KEY);
    const formValueParse = JSON.parse(formValue);

    if (formValueParse) {
        console.log(formValueParse);
    }
    localStorage.removeItem(STORAGE_KEY)

    refs.form.reset()

    
}

const feedbackData = localStorage.getItem(STORAGE_KEY);
const feedbackDataParse = JSON.parse(feedbackData);


// if (feedbackDataParse) {
    
//     if (feedbackDataParse.email) {
//         refs.input.value = feedbackDataParse.email;
//     }
//     if (feedbackDataParse.message) {
//         refs.message.value = feedbackDataParse.message;
//     }
// }

if (feedbackDataParse) {
    refs.input.value = feedbackDataParse.email || "";
    refs.message.value = feedbackDataParse.message || "";
}


