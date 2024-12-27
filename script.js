form.addEventListener('click',(e)=>{
    e.preventDefault()
    validInputs()
})

const E = (element,message)=>{
    const a = element.parentElement
    const b = a.querySelector('.error')
    b.innerHTML=message
}
const S = (element)=>{
    const a = element.parentElement
    const b = a.querySelector('.error')
    b.innerHTML=''
}

const emailValid=(element)=>{
    const res=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return res.test(String(element).toLowerCase())
}

const validInputs = () => {
    const UNValue = UN.value;
    const UEValue = UE.value;
    const UPValue = UP.value;
    const CPValue = CP.value;

    if (UNValue === '') {
        E(UN, "Enter name");
    } else {
        S(UN);
    }

    if (UEValue === '') {
        E(UE, "Enter email");
    } else if (!emailValid(UEValue)) {
        E(UE, "Enter a valid email address");
    } else {
        S(UE);
    }

    if (UPValue === '') {
        E(UP, "Enter password");
    } else if (UPValue.length < 6) {
        E(UP, "Password must be at least 6 characters");
    } else {
        S(UP);
    }

    if (CPValue === '') {
        E(CP, "Confirm password");
    } else if (CPValue !== UPValue) {
        E(CP, "Passwords do not match");
    } else {
        S(CP);
    }
}