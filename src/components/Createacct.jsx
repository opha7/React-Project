import React, {useState} from 'react';
import '../assets/css/Createacct.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Createacct = () => {

    const navigate=useNavigate();
    const handlec=()=>{
        navigate('/');
    }
    const [First,setfirst]=useState("");
    const [Last,setlast]=useState("");
 
    const handleFirst=(event)=>
    {
        setfirst(event.target.value);
    }
    const handleLast=(event)=>
    {
        setlast(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(First,Last);
    }

    


    return (
        <>
          <div className="App">

            <form method='POST' onSubmit={handleSubmit} className="login-form">
                <h2>Create Account</h2>
                <div className="input__fields">
                    <label htmlFor="number">ACCOUNT HOLDER NAME</label>
                    <input type="text"  placeholder="User Name" name="text" id="text" onChange={handleFirst}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">AGE</label>
                    <input type="number" name="number" placeholder="Age" id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">DATE OF BIRTH</label>
                    <input type="text" name="number" placeholder='DD/MM/YYYY' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">AADHAR NUMBER</label>
                    <input type="text" name="number" placeholder='Aadhar No' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">PAN CARD NUMBER</label>
                    <input type="text" name="number" placeholder='Pan No' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number"> E-KYC VERIFIED?</label>
                    <input type="option" name="option" placeholder='Yes/No' id="option" onChange={handleLast}required />
                    <div class="mb-3">
                        <div class="mb-3">
                        <label for="formFileSm" class="form-label">Upload e-aadhar proof</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file"></input>
                        </div>
                    </div>
                </div>
                <div className="input__fields">
                    <label htmlFor="number">MOBILE NUMBER</label>
                    <input type="text" name="number" id="number" placeholder='Mobile Number' onChange={handleLast}required minLength={10} maxLength={10} />
                </div>
                <Button onClick={handlec} variant="contained">CREATE</Button>
            </form>
          </div>
        </>
    )
};

export default Createacct;