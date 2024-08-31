
let inpute = document.getElementById('inpute');
let text = document.getElementById('text');

function ckeck() {
    let pass = inpute.value; 
    let upper = /[A-Z]/.test(pass); 
    let lower = /[a-z]/.test(pass); 
    let hard = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    if (pass.length < 6) {
        text.innerHTML = 'weak';
    } else if (pass.length < 12) {
        if (upper || lower || hard) {
            text.innerHTML = 'moderate';
            text.style.color='red'
        } else {
            text.innerHTML = 'weak';
        }
    } else {
        if (upper && lower && hard) {
            text.innerHTML = 'strong';
            text.style.color='green'
        } else {
            text.innerHTML = 'moderate';
        }
    }
}

inpute.addEventListener('input', ckeck);
