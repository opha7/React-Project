import React, {useState} from 'react';
import '../assets/css/Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
const Login= () => {

    
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
 
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(password,email);
    }
    const navigate=useNavigate();
    const handlelogin=()=>{
        navigate('/')
    }


    return (
        <>
          <div className="App" >

            <form method='POST' onSubmit={handleSubmit} className="login-form"style={{width:'800px' ,  height:'800px'}}>
                <h2>SIGN IN</h2>
                <div className="input__fields">
                    <label htmlFor="number">ACCOUNT NUMBER</label>
                    <input type="text" placeholder='Enter Account Number' name="number" id="number" onChange={handleemail}required />
                </div>
                <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">PASSWORD</label>
                </div>
                <div class="col-auto">
                    <input  placeholder='Must be atleast 8-20 characters long'type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                   
                    </span>
                </div>
                </div>
                <div className="input__fields">
                    <label htmlFor="number">MOBILE NUMBER</label>
                    <input type="text" name="number" placeholder='Enter valid Mobile Number' id="number" onChange={handleemail}required minLength={10} maxLength={10} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">OTP</label>
                    <input  type="number" name="number"  placeholder='OTP ' id="number" onChange={handlepassword}required minLength={4} maxLength={4} />
                    {/* <Button
                onClick={() => {
                    alert('clicked');
                }}
                >
                Verify OTP
                </Button> */}
                </div>
                <Link href='#'>Verify OTP</Link>
                <br></br><br></br>
                <Button onClick={handlelogin} variant="contained">SIGN IN</Button>
            </form>
          </div>
        </>
    )
};

export default Login;
