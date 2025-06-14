// hide a all section
document.getElementById("profile_info").style.display = "none";

// login function
function login() {
    // get the username and password
    var username = document.getElementById("employeeID").value;
    var cadpassword = document.getElementById("password").value;

    // get user data
    var apiUrl = 'https://script.google.com/macros/s/AKfycbyFI1ZO615dm7R4AAsd627Tf02YHdS8jLIXqwFFhSv29Dxg-8f3-a_ATM-N6AvUaNV1/exec';
    var apiurlq = "?filter={\"internship_ID\":\"" + username + "\"}";
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

        // console.log("name: " + name, "Password: " + password, "Internship ID: " + intid, "Status: " + status);
        
        // check if the status is active
        if (status === "active") {
            // check if the username and password is correct
            if (cadpassword == password ){
                // dend telegram msg
                sendmsgloginms()
                // alert("Login successful");
                alertbox.render({
                    alertIcon: 'success',
                    title: 'Success!',
                    message: 'Login Successful',
                    btnTitle: 'Ok',
                    border:true
                })
                // show contend
                document.getElementById("loginform").style.display = "none";
                document.getElementById("profile_info").style.display = "block";
                // get the profile info
                // from json data
                document.getElementById("meetingLink").value = intid;
                // get name
                document.getElementById("nameto").innerHTML = name;
                // task
                var tourtask = (data.data.data[0].task);
                document.getElementById("taskentery").innerHTML = tourtask;
                // menter name
                var mentername = (data.data.data[0].mentor_name);
                document.getElementById("mentername").innerHTML = mentername;
                // procusenter
                var procusenter = (data.data.data[0].Progress);
                // console.log("Progress: " + procusenter);
                document.getElementById("process").innerHTML = procusenter;

                // get fee fron json data
                var fee = (data.data.data[0].fee_starters );

                if( fee == "pending" ){
                    alertbox.render({
                        alertIcon: 'warning',
                        title: 'Thank You!',
                        message: 'Your internship fee is pending. Please pay the fee to start your internship.',
                        btnTitle: 'Ok',
                        border:true
                    });
                }
               
            }
            else {
                // alert("Login failed");
                alertbox.render({
                    alertIcon: 'error',
                    title: 'Error!',
                    message: 'Login Failed. Please check your password.',
                    btnTitle: 'Ok',
                    border:true
                });
            }
        } 
        else {
            
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
// //////////////////////////////////////////////////////////// = telegram api = /////////////////////////////////////////////////
// send login message to telegram
function sendmsgloginms() {
    var lname = document.getElementById("employeeID").value;
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