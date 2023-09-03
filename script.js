document.getElementById('slider').oninput = function() {
    document.getElementById('length').innerText = this.value;

    var value = (this.value) / (this.max) * 100;
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)'
    passwordPower();
}

var checked = [1, 1, 1, 0];

function option(x){
    document.getElementsByClassName('checkbox')[x].classList.toggle('checked');
    if(checked[x] == 1){
        checked[x] = 0;
    }
    else{
        checked[x] = 1;
    }
    passwordPower();
}

var previousStrength = 'medium';
var strengthValue = document.getElementById('value');
var strengthDots = document.getElementsByClassName('strengthDots')[0];

function passwordPower(){
    var length = document.getElementById('slider').value, strength;
    var options = checked[0] + checked[1] + checked[2] + checked[3];
    var power = length * options;

    if(length <= 5 || power <= 15){
        strength = 0;
    }
    else if(power <= 28){
        strength = 1;
    }
    else if(power <= 44){
        strength = 2;
    }
    else strength = 3;

    switch(strength){
        case 0:
            strengthValue.innerText = 'Too weak!';
            strengthDots.classList.remove(previousStrength);
            strengthDots.classList.add('too-weak');
            previousStrength = 'too-weak';
            break;
        case 1:
            strengthValue.innerText = 'Weak';
            strengthDots.classList.remove(previousStrength);
            strengthDots.classList.add('weak');
            previousStrength = 'weak';
            break;
        case 2:
            strengthValue.innerText = 'Medium';
            strengthDots.classList.remove(previousStrength);
            strengthDots.classList.add('medium');
            previousStrength = 'medium';
            break;
        case 3:
            strengthValue.innerText = 'Strong';
            strengthDots.classList.remove(previousStrength);
            strengthDots.classList.add('strong');
            previousStrength = 'strong';
            break;
    }
}

var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
            '!', '@', '#', '$', '%', '&', '*', '?'];

var password = '';
        
function generatePassword(){
    document.getElementById('password').style.color = '#E6E5EA';
    password = '';
    checked2 = [0, 0, 0, 0];

    if(checked[0] == 1 || checked[1] == 1 || checked[2] == 1 || checked[3] == 1){
        draw();
    }
}

var checked2 = [0, 0, 0, 0];

function draw(){
    if(password.length < document.getElementById('slider').value){
        var number = Math.floor(Math.random() * 70);
        if(number <= 25){
            if(checked[0] == 1){
                password = password + chars[number];
                checked2[0] = 1;
            }
        }
        else if(number <= 51){
            if(checked[1] == 1){
                password = password + chars[number];
                checked2[1] = 1;
            }
        }
        else if(number <= 61){
            if(checked[2] == 1){
                password = password + chars[number];
                checked2[2] = 1;
            }
        }
        else{
            if(checked[3] == 1){
                password = password + chars[number];
                checked2[3] = 1;
            }
        }
        draw();
    }
    else{
        if(((checked[0] == checked2[0]) && (checked[1] == checked2[1]) && (checked[2] == checked2[2]) && (checked[3] == checked2[3])) || password.length < (checked[0] + checked[1] + checked[2] + checked[3])){
            document.getElementById('password').innerText = password;
        }
        else{
            generatePassword();
        }
    }
}

function copy(){
    if(password.length > 0){
        navigator.clipboard.writeText(password);
        document.getElementsByClassName('copied')[0].style.opacity = '1';
        setTimeout(function (){
            document.getElementsByClassName('copied')[0].style.opacity = '0';
        }, 1000);
    }
}