var age = document.getElementById("age");
var adult = document.getElementById("adult");
var oldEnough = false;
var result = document.getElementById("answer")
function checkAge() {
    if (parseInt(age.value, 10) >= 18) {
        oldEnough = true;
    }
    else {
        oldEnough = false;
    }
    if (oldEnough == false) {
        if (adult.value == "y") {
            result.innerHTML = "Guardian present. Enjoy the movie!";
        }
        else {
            result.innerHTML = "No guardian present. Access denied.";
        }
    } else {
        result.innerHTML = "Age verified. Enjoy the movie!";
    }
}