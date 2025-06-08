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
