// career forms 
function validatetheform(){
    var name = document.getElementById("fname").value;
    var email = document.getElementById("emailid").value;
    var phone = document.getElementById("pnumber").value;
    var iam = document.getElementById("iama").value;
    var clgyear = document.getElementById("clgyer").value;
    var clgbranch = document.getElementById("dep").value;
    var clglookingfor = document.getElementById("lookingclg").value;

    // check if the fields are empty
    if (name = true && email != "" && phone != "" && iam != "" && clgyear != "" && clgbranch != "" && clglookingfor != "") {
        // if all fields are filled, call the careerdata function
        careerdata();
        return true;
    }
    else {
        // if any field is empty, show an alert
        alertbox.render({
            alertIcon: 'error',
            title: 'Error!',
            message: 'Please fill all the fields.',
            btnTitle: 'Ok',
            border:true
        });
        return false;
    }

}

function careerdata() {
    // get the user data from the form
    var name = document.getElementById("fname").value;
    var email = document.getElementById("emailid").value;
    var phone = document.getElementById("pnumber").value;

    var iam = document.getElementById("iama").value;

    var clgyear = document.getElementById("clgyer").value;

    var clgbranch = document.getElementById("dep").value;

    var clglookingfor = document.getElementById("lookingclg").value;

    // dend the data in to telegram
    var message = 
        "Name: _" + name + "\n" +
        "Email: _" + email + "\n" +
        "Phone: _" + phone + "\n" +
        "I am a: _" + iam + "\n" +
        "College Year: _" + clgyear + "\n" +
        "College Branch: _" + clgbranch + "\n" +
        "College Looking For: _" + clglookingfor + "\n" 
    //
    
    // check if the fields is true
    if (name = true ) {
        
        // send the data to telegram
        fetch('https://api.telegram.org/bot7233018879:AAGKG3ZQhH9j0W4jC-gy50557C5ocR1_p_8/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '7785896124',
                text: message,
            })
        })
        .then(response => {
            if (response.ok) {
                alertbox.render({
                    alertIcon: 'success',
                    title: 'Thank You!',
                    message: 'Your Requst Will be submited.',
                    btnTitle: 'Ok',
                    border:true
                });
                // go to home page after 5 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 5000);
            } else {
                alert('Failed to send order details to Telegram.');
                alertbox.render({
                    alertIcon: 'info',
                    title: 'Thank You!',
                    message: 'Your order was filed. Check your Internet connection and try again.',
                    btnTitle: 'Ok',
                    border:true
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alertbox.render({
                alertIcon: 'error',
                title: 'Error!',
                message: 'There was an error sending your request. Please try again later.',
                btnTitle: 'Ok',
                border:true
            });
        });
    }
    else {
        alertbox.render({
            alertIcon: 'error',
            title: 'Error!',
            message: 'Please fill all the fields.',
            btnTitle: 'Ok',
            border:true
        });
        
       
    }
    

    // alert(
    //     "Name: " + name + 
    //     ", Email: " + email +
    //     ", Phone: " + phone +
    //     ", I am: " + iam +
    //     ", College Year: " + clgyear +
    //     ", College Branch: " + clgbranch +
    //     ", College Looking For: " + clglookingfor +
    //     ", Fresher: " + fresher
    // );

    
}



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// contend forms