// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    function generatePassword(){
        var length = parseInt(document.getElementById('length').value);
        console.log(`User input length: ${length}`);

        if (isNaN(length)){
            alert("Please input a valid password length!");
            return "";
        }
        else{
            if (!(length > 8 && length < 128)) {
              alert("Password length must be between 8 and 128!");
              return "";
            }
        }

        var lc_status = document.getElementById('lowercase').checked;
        var uc_status = document.getElementById('uppercase').checked;
        var num_status = document.getElementById('numeric').checked;
        var sc_status = document.getElementById('specialchar').checked;

        var checked = lc_status || uc_status || num_status || sc_status;

        if (checked == true){
            var specialchararray = [];
            specialchararray = alt_range(33, 15, 1).concat(alt_range(91, 6, 1), alt_range(123, 4, 1));
            function getRandomInt(max){
                return Math.floor(Math.random() * Math.floor(max));
            }
            function getRandomUC(){
                return String.fromCharCode(65+getRandomInt(26));
            }
            function getRandomLC(){
                return String.fromCharCode(97+getRandomInt(26));
            }
            function getRandomDigit(){
                return String.fromCharCode(48+getRandomInt(10));
            }
            function range(start, stop, step){
                var arr=[];
                for (let j=start; j<stop; j+=step){
                    arr.push(j);
                }
                return arr;
            }
            function alt_range(start, len, incr){
                var arr=[];
                for (let x=0; x<len; x++){
                    arr.push(x*incr + start);
                }
                return arr;
            }
            function getRandomSpecialChar(){
                // TODO: Try implementing this
                //console.log(specialchararray);
                return String.fromCharCode(specialchararray[getRandomInt(specialchararray.length)]);
            }
            my_func = range(4, 27, 2);
            console.log(my_func); // [3, 6, 9, 12, 15, 18, 21, 24]
            your_func = alt_range(4, 12, 2);
            console.log(your_func); // [3, 6, 9, 12, 15, 18, 21, 24]
            // Password array of random characters
            var pwd = [];
            // To guarantee we get 1 of each selected char class, 
            // the first few elements of pwd must have 1 char from each char class
            if (lc_status){ pwd.push(getRandomLC()); }
            if (uc_status){ pwd.push(getRandomUC()); }
            if (num_status){ pwd.push(getRandomDigit()); }
            if (sc_status){ pwd.push(getRandomSpecialChar()); }
            
            // We fill up the remaining required length given current length
            var current_length = pwd.length;
            for(let i = 0; i < length - current_length; i++){
                // This method gives an equal probability (25%) of generating one char from each class.
                // If you want the probability to change to all valid characters having equal probabilities,
                // Try thinking of an alternate method.
                
                // Initialize an empty temporary array each loop
                var temp_array = [];
                // Fill with one character from each class if selected
                if (lc_status){ temp_array.push(getRandomLC()); }
                if (uc_status){ temp_array.push(getRandomUC()); }
                if (num_status){ temp_array.push(getRandomDigit()); }
                if (sc_status){ temp_array.push(getRandomSpecialChar()); }

                //if (lc_status){ temp_array = temp_array.concat(alt_range(97, 26, 1)); }
                //if (uc_status){ temp_array = temp_array.concat(alt_range(65, 26, 1)); }
                //if (num_status){ temp_array = temp_array.concat(alt_range(48, 10, 1)); }
                //if (sc_status){ temp_array = temp_array.concat(specialchararray); }
                // Pick a random char from temporary array and push into Password
                //pwd.push(String.fromCharCode(temp_array[getRandomInt(temp_array.length)]));
                pwd.push(temp_array[getRandomInt(temp_array.length)]);
            }
            console.log(`Password before shuffle: ${pwd}`);
            // We shuffle the final password to randomize the positions
            // This is the Fisher Yates algorithm
            // You can work out what the algorithm is doing yourself
            // If not just get this from the internet
            function shuffle(a){
                var j, x, i;
                for (let i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
            pwd = shuffle(pwd);
            console.log(`Password after shuffle: ${pwd}`);
            pwd_length = pwd.length;
            console.log(`Password length: ${pwd_length}`);
            return pwd.join(''); // Remember to convert the final array to string
        }
        else {
            alert("Please select at least one character type.")
            return "";
        }
        // Unreachable point. Should never reach here!!!
        alert("Something went wrong!!!");
        return "";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
