function SignupValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    
    if(values.name === ""){
        error.name = <strong className="bg-danger rounded">Name should not be empty!</strong>
        console.log("Name field is empty");
    }
        else{
        error.name = ""
       }

    if(values.email === ""){
     error.email = <strong className="bg-danger rounded">Email should not be empty!</strong>
    }
    else if(!email_pattern.test(values.email)){
     error.email = "Email Didn't match"
    }else{
     error.email = ""
    }
 
    
    if(values.password === ""){
     error.password = <strong className="bg-danger rounded">Password should not be empty!</strong>
    }
    else if(!password_pattern.test(values.password)){
     error.password = <strong className="bg-danger rounded">Password Didn't match!</strong>
    }else{
     error.password = ""
    }
    return error;
}

export default SignupValidation