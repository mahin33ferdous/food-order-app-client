import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
         e.preventDefault();
          await fetch("http://localhost:5000/api/createuser",{
            method:'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
         })
         .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                alert('user added')
                e.target.reset();  
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
      
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleInputBlur}/> 
  </div>

    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name='email' value={credentials.email} onChange={handleInputBlur} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleInputBlur}  />
  </div>

  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={handleInputBlur}/> 
  </div>
  
  <button type="submit" className="btn m-3 btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>

        </div>
    );
};

export default SignUp;