

const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("fname").value;
        const email = document.getElementById("emailid").value;
        const phon = document.getElementById("pnumber").value;
        const subj = document.getElementById("msgsub").value;
        const message = document.getElementById("msg").value;

        alert("Name: " + name + "\nEmail: " + email + "\nPhone: " + phon + "\nSubject: " + subj + "\nMessage: " + message);

        const chat_id = 7785896124; 
        const telegram_message = `Name: ${name}\nEmail: ${email}\nPhone: ${phon}\nSubject: ${subj}\nMessage: ${message}`;

        fetch(`https://api.telegram.org/bot$7870082796:AAEo4oyJzLQ7KDO71P24ytjDOLcOqIlQ8fg/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: "contact: " + telegram_message
            })
        })
        .then(response => {
            if (response.ok) {
                // Handle success
                console.log('Message sent successfully!');
                alert("Message sent successfully!");
                form.reset(); // Reset the form after successful submission
            } else {
                // Handle error
                console.error('Error sending message:', response.statusText);
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert("Error sending message. Please try again later.");
        });
    })

