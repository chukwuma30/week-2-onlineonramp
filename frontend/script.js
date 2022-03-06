const cancel = document.querySelector('.cancel');

const send = document.querySelector('.send');

let name = document.querySelector('input[type=text]');

let email = document.querySelector('input[type=email]');

let number = document.querySelector('input[type=tel]');
const email = document.getElementById("mail");

email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});
/*
let msg = document.getElementById('msg');
cancel.addEventListener('click'.() => {
    name.value = '';
    email.value = '';
    number.value = '';
    msg.value = '';
});

send.addEventListener('click'.() => {
            let msg Arr = Array.from(msg.value);

            if (email.value = '' || name.value = '
                ' || msg = .value)
            });*/