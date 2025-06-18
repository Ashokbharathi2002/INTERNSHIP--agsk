window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
// hide all element
document.getElementById("metting").style.display="none";
document.getElementById("task").style.display="none";
document.getElementById("menter").style.display="none";
document.getElementById("progress").style.display="none";
document.getElementById("profile").style.display="none";
document.getElementById("afterlogin").style.display="none";

// metting
function mettine(){
    document.getElementById("metting").style.display="block";
    document.getElementById("task").style.display="none";
    document.getElementById("menter").style.display="none";
    document.getElementById("progress").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("beflogin").style.display="none";
    document.getElementById("login").style.display= "none"
}
// task
function tasking(){
    document.getElementById("task").style.display="block";
    document.getElementById("metting").style.display="none";
    document.getElementById("menter").style.display="none";
    document.getElementById("progress").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("beflogin").style.display="none";
    document.getElementById("login").style.display= "none"
}
// menter
function menter(){
    document.getElementById("menter").style.display="block";
    document.getElementById("metting").style.display="none";
    document.getElementById("task").style.display="none";
    
    document.getElementById("progress").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("beflogin").style.display="none";
    document.getElementById("login").style.display= "none"
}
// proces
function proces(){
    document.getElementById("progress").style.display="block";
    document.getElementById("metting").style.display="none";
    document.getElementById("task").style.display="none";
    document.getElementById("menter").style.display="none";
    
    document.getElementById("profile").style.display="none";
    document.getElementById("beflogin").style.display="none";
    document.getElementById("login").style.display= "none"
}
// profile
function profile(){
    document.getElementById("profile").style.display="block";
    document.getElementById("metting").style.display="none";
    document.getElementById("task").style.display="none";
    document.getElementById("menter").style.display="none";
    document.getElementById("progress").style.display="none";
    
    document.getElementById("beflogin").style.display="none";
    document.getElementById("login").style.display= "none"
}



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
        var username = (data.data.data[0].usernane);
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
                // fess ching
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
                // display menunbar
                document.getElementById("afterlogin").style.display="block";
                document.getElementById("beflogin").style.display="none";
                // enter the matting id in input
                document.getElementById("memployeeID").value=intid;
                // get task
                var ttask = (data.data.data[0].task)
                document.getElementById("tudaytask").innerHTML = ttask; // show the task
                // monter
                var mentor = (data.data.data[0].mentor_name)
                document.getElementById("mname").innerHTML="Mr."+mentor; // print rendor
                // process
                var proc = (data.data.data[0].Progress)
                document.getElementById("process").innerHTML= proc +"%"; // value in number
                document.getElementById("processbar").value = proc; //value for bar
                // profile
                var name = (data.data.data[0].name)
                var pnum = (data.data.data[0].phone_number)
                var dep = (data.data.data[0].department)
                var email = (data.data.data[0].E_mail)

                document.getElementById("cadname").innerHTML = "Mr. "+name;
                document.getElementById("cadphone").innerHTML=pnum;
                document.getElementById("cadusername").innerHTML=username;
                document.getElementById("cademail").innerHTML=email;
                document.getElementById("dep").innerHTML=dep
               
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

// metting join function
function joinMeeting() {
    var employee = document.getElementById("memployeeID").value;

    // check if the employee id is empty
    if (employee.trim() === "") {
        alertbox.render({
            alertIcon: 'error',
            title: 'Error!',
            message: 'Please enter a valid Employee ID.',
            btnTitle: 'Ok',
            border:true
        });
        return;
    }
    // send telegram message
    var message = 
        "joind Meeting sucessfully\n" +
        "Employee ID: _" + employee + "\n";
    
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
            console.log('Meeting link shared successfully.');
            // meeting link
            window.open("https://meet.google.com/mtu-bqzq-hqf", "_blank");
        } else {
            console.error('Failed to share meeting link.');
            alertbox.render({
                alertIcon: 'error',
                title: 'Error!',
                message: 'Failed to share meeting link.',
                btnTitle: 'Ok',
                border:true
            });
        }
    })
}