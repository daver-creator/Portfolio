function sendMail(params){
    var tempParams={
        from_name:document.getElementById("Contact-Name").value,
        email_add:document.getElementById("Contact-Email").value,
        message:document.getElementById("Contact-Message").value
    };

    emailjs.send('service_edhj0ld','template_h7sdjht',tempParams)
    //emailjs.send('gmail','template_h7sdjht',tempParams)
    .then(function(res){
        console.log("sucess",res.status);
    });
};



