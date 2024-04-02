let arrow = document.getElementById('arrow');

let email = document.getElementById('email');

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;



arrow.addEventListener("click", myFunction);


function myFunction(){

    if  (!email.value.match(mailRegex) && email.value != ''){

            icon.style.visibility = 'visible';
            errorMsg.style.visibility = 'visible';
            email.style.border = '2px solid #ff2851';
        




    } else if (email.value == '') {

            email.placeholder = 'write something';

      }
};
    











