function runValidate(form){
    if(validateName(form) && validateEmail(form) && validateDate(form) && validateTime(form) && validateTopic(form))
        return true;
    else
        return false;    
} 

function validateName(form){
    var name = form.elements["applicantName"];
    if(name.validity.valueMissing){                 
        name.setCustomValidity("You must enter a name here.");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
}

function validateEmail(form){
    var email = form.elements["applicantEmail"];
    if(email.validity.valueMissing){                 
        email.setCustomValidity("You must enter your email here.");
        return false;
    }
    else if(email.validity.patternMismatch){
        email.setCustomValidity("Please enter a valid email address.");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }
}

function validateDate(form){
    var date = form.elements["appointmentDate"];
    if(date.validity.valueMissing){                 
        date.setCustomValidity("Please choose a date.");
        return false;
    }
    else{
        date.setCustomValidity("");
        return true;
    }
}

function validateTime(form){
    var time = form.elements["appointmentTime"];
    if(time.validity.valueMissing){                 
        time.setCustomValidity("Please choose a time.");
        return false;
    }
    else if(time.validity.rangeUnderflow || age.validity.rangeOverflow){
        time.setCustomValidity("Please choose a time between 09:00 and 21:00");
        return false
    }
    else{
        time.setCustomValidity("");
        return true;
    }
}

function validateTopic(form){
    var subject = form.elements["subject"];
    if(subject.validity.valueMissing){                 
        subject.setCustomValidity("Please enter a topic of concern.");
        return false;
    }
    else{
        subject.setCustomValidity("");
        return true;
    }
}





