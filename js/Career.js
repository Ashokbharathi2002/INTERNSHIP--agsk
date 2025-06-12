// i am a input field
function iamavalue() {
    var inputField = document.getElementById("iama").value
    // orther input field
    if (inputField == "other") {
        document.getElementById("otherInput").style.display = "block";
        document.getElementById("other").setAttribute("required", "required");
    }
    else {
        document.getElementById("otherInput").style.display = "none";
        document.getElementById("other").removeAttribute("required");
    }
    // working input field
    if (inputField == "working professional") {
        document.getElementById("workingInput").style.display = "block";
        document.getElementById("jobtitle").setAttribute("required", "required");
    }
    else {
        document.getElementById("workingInput").style.display = "none";
        document.getElementById("jobtitle").removeAttribute("required");
    }
    // collage Input 
    if (inputField == "college student") {
        document.getElementById("collageInput").style.display = "block";
        document.getElementById("collagelooking").style.display = "block";
        
        document.getElementById("clgyer").setAttribute("required", "required");
        document.getElementById("lookingclg").setAttribute("required", "required");
    }
    else {
        document.getElementById("collageInput").style.display = "none";
        document.getElementById("clgyer").removeAttribute("required");
    }
    // dep input
    if (inputField == "college student") {
        document.getElementById("depInput").style.display = "block";
        document.getElementById("dep").setAttribute("required", "required");
    }
    else {
        document.getElementById("depInput").style.display = "none";
        document.getElementById("dep").removeAttribute("required");
    }
    // fresher Input
    if (inputField == "fresher") {
        document.getElementById("fresherInput").style.display = "block";
        document.getElementById("lookingfor").setAttribute("required", "required");
    }
    else {
        document.getElementById("fresherInput").style.display = "none";
        document.getElementById("lookingfor").removeAttribute("required");
    }

}
// show form
document.getElementById("career").style.display = "none";
function showcareerform() {
    document.getElementById("career").style.display = "block";
    // document.getElementById("careerbtn").style.display = "none";
    document.getElementById("career").scrollIntoView({ behavior: 'smooth' });
}
// phone number validation
function verpnumber() {
    var phoneNumber = document.getElementById("pnumber").value;
    var ple = phoneNumber.length;
    console.log(ple);

    if (ple == 10) {
        document.getElementById("phoneSuccess").style.display = "block";
        document.getElementById("phoneError").style.display = "none";
        return true; // No error if the field is empty
    }
    else{
        document.getElementById("phoneError").style.display = "block";
        document.getElementById("phoneSuccess").style.display = "none";
        return false; // Error if the field is not empty
    }
}
// email validation
function veremail() {
    var email = document.getElementById("emailid").value;

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

    if (emailPattern.test(email)) {
        document.getElementById("emailSuccess").style.display = "block";
        document.getElementById("emailError").style.display = "none";
        return true; // No error if the field is empty
    } else {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailSuccess").style.display = "none";
        return false; // Error if the field is not empty
    }
}