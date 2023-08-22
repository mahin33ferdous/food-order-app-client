import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate();
    const [credentials,setcredentials]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
         e.preventDefault();
         const response= await fetch("http://localhost:5000/api/login",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
         })
         .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                localStorage.setItem("authToken",data.authToken)
                console.log(localStorage.getItem("authToken"))
                alert('user logged in')

                e.target.reset();  
                navigate("/")
            }else{
                alert('invalid credentials') 
                e.target.reset();  
            }
            
            

        });
       
        } 
        const handleInputBlur=(event)=>{

            setcredentials({...credentials,[event.target.name]:event.target.value})
            // const value=event.target.value;
            // const field=event.target.name;
            // //console.log(value,field)
            // const newUser={...user}
            // newUser[field]=value;
                  // setUser(newUser);
        }         
    return (
        <div className='container'>
        <form onSubmit={handleSubmit}>
<div className="mb-3">
  


<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name='email' value={credentials.email} onChange={handleInputBlur} />
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleInputBlur}  />
</div>


<button type="submit" className="btn m-3 btn-primary">Submit</button>
<Link to="/createuser" className='m-3 btn btn-danger'>Don't have an account?</Link>
</form>

    </div>
    );
};

export default Login;