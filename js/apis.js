// career forms /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// get for career form send telegram message
function clgstudend(){
    // get the user data from the form
    var name = document.getElementById("cadname").value;
    var email = document.getElementById("emailid").value;
    var phone = document.getElementById("pnumber").value;
    var clgname = document.getElementById("clgname").value;
    var clgyear = document.getElementById("clgyer").value;
    var clgbranch = document.getElementById("dep").value;
    var clglookingfor = document.getElementById("lookingclg").value;


    // chacking all the fields are filled
    if (name == "" || email == "" || phone == "" || clgname == "" || clgyear == "" || clgbranch == "" || clglookingfor == "") {
        alertbox.render({
            alertIcon: 'error',
            title: 'Error!',
            message: 'Please fill all the fields.',
            btnTitle: 'Ok',
            border:true
        });
        return false;
    }

    fetch('https://api.telegram.org/bot7233018879:AAGKG3ZQhH9j0W4jC-gy50557C5ocR1_p_8/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '7785896124',
            text: "collafe student form\n" +
                  "Name: _" + name + "\n" +
                  "Email: _" + email + "\n" +
                  "Phone: _" + phone + "\n" +
                  "College Name: _" + clgname + "\n" +
                  "College Year: _" + clgyear + "\n" +
                  "College Branch: _" + clgbranch + "\n" +
                  "College Looking For: _" + clglookingfor + "\n"
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
        } else {
            alert('Failed to send order details to Telegram.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



// contend forms /////////////////////////////////////////////////////////////////////////////////////////////////

// login form /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loginform() {
    var usernameu = document.getElementById("EmployeeID").value;
    var passwordu = document.getElementById("password").value;

    // alert("Username: " + usernameu + "\nPassword: " + passwordu);

    // api
    var apiUrl = 'https://script.google.com/macros/s/AKfycbyFI1ZO615dm7R4AAsd627Tf02YHdS8jLIXqwFFhSv29Dxg-8f3-a_ATM-N6AvUaNV1/exec';
    var apiurlq = "?filter={\"internship_ID\":\"" + usernameu + "\"}";
    // var p2 = {"usernane":"ashok@2025@agsk","password":"AGSK@2025"}
    var url = apiUrl+apiurlq;
    // alert the url for debugging
    // alert(url);

    // fetch the data from the api
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        var name = (data.data.data[0].name);
        var username = (data.data.data[0].username);
        var password = (data.data.data[0].password);
        var intid = (data.data.data[0].internship_ID);
        var status = (data.data.data[0].Login_status);

        // console.log("Username: " + username, "Password: " + password, "Internship ID: " + intid, "Status: " + status);
        
        // check if the status is active
        if (status === "active") {
            // check if the username and password is correct
            if (usernameu === intid && passwordu === password) {
                // alert("Login Successful");
                alertbox.render({
                    alertIcon: 'success',
                    title: 'Success!',
                    message: 'Login Successful',
                    btnTitle: 'Ok',
                    border:true
                });
                // calling telegram function to send login details
                sendloginms();
                // redirect to the dashboard page
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            } else {
                // alert("Invalid Username or Password");
                alertbox.render({
                    alertIcon: 'error',
                    title: 'Error!',
                    message: 'Invalid Username or Password',
                    btnTitle: 'Ok',
                    border:true
                });
            }
        } else {
            // alert("Your account is not active. Please contact the admin.");
            alertbox.render({
                alertIcon: 'error',
                title: 'Error!',
                message: 'Your account is not active. Please contact the admin.',
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
            message: error.message || 'There was an error fetching the data.',
            btnTitle: 'Ok',
            border:true
        });
        // alert("There was an error fetching the data.="+error);
    });
}
// SEND losin ms in to telegram /////////////////////////////////////////////////////////////////////////////////////////////////
// login details to telegram /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sendloginms() {
    var lname = document.getElementById("EmployeeID").value;
    // var time = new Date().toLocaleString();
    var hower = new Date().getHours();
    var mints = new Date().getMinutes();
    var ctime = hower + ":" + mints;

    // prepare the message
    var message = 
        "losin submited\n" +
        "Time: _" + ctime + "\n" +
        "name: _" + lname + "\n";

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
            console.log('Login details sent successfully.');
        } else {
            console.error('Failed to send login details to Telegram.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// metting tetal send to telegram /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Meetingsuccess() {
    var a = document.getElementById("meetEmployeeID").value;

    alert("Employee ID: " + a);

    if (a == true) {

        var message = 
        "Meeting success:\n" +
        "Employee ID: _" + a + "\n";

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
                    title: 'Success!',
                    message: 'Meeting details sent successfully.',
                    btnTitle: 'Ok',
                    border:true
                });
            } else {
                alertbox.render({
                    alertIcon: 'error',
                    title: 'Error!',
                    message: 'Failed to send meeting details to Telegram.',
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
                message: error.message || 'There was an error sending the meeting details.',
                btnTitle: 'Ok',
                border:true
            });
        });
    }
    else {
        alertbox.render({
            alertIcon: 'error',
            title: 'Error!',
            message: 'Please enter the Employee ID.',
            btnTitle: 'Ok',
            border:true
        });
    }
    
}
