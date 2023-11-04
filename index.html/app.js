var passLength = document.getElementById("length");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var result = document.getElementById("result");


var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';


function passGen() {

    if (uppercase.checked == true || lowercase.checked == true || numbers.checked == true || symbols.checked == true) {
        if (passLength.value <= 50) {
        if (passLength.value >= 4) {


    var password = "";

    if (uppercase.checked == true) {
        password += uppercaseChars
    }

    if (lowercase.checked == true) {
        password += lowercaseChars
    }

    
    if (numbers.checked == true) {
        password += numberChars
    }

    if (symbols.checked == true) {
        password += specialChars
    }
    
        var genPass = "";

        for (let i = 0; i < passLength.value; i++) {
            var genratePass = Math.random() * password.length;
            genPass += password.charAt(Math.floor(genratePass))
        }
        if (genPass.length == passLength.value) {
            result.innerText = genPass
        }

        
        
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF">Minimum Password Length 4</h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF">Maximum Password Length 50</h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF"> Please tick any one checkbox </h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
}

function textCopy() {
    if (result.textContent != "") {
        var textToCopy = result.textContent;
        var textArea = document.createElement('textarea');
        textArea.value = textToCopy;
      
        document.body.appendChild(textArea);
      
        textArea.select();
        document.execCommand('copy');
      
        document.body.removeChild(textArea);
    }
 
}
