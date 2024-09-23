function LoginValidation(values) {
   let error = {}
   const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

   if(values.email === ""){
    error.email = <strong className="bg-danger rounded">Email should not be empty!</strong>
   }
   else if(!email_pattern.test(values.email)){
    error.email = <strong className="bg-danger rounded">Email Didn't match!</strong>
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

export default LoginValidation