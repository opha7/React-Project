import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../assets/css/Homecss.css';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import FadeMenu from './FadeMenu';
import Footer from './Footer';
import Searchbar from './Searchbar';
import { Avatar } from '@mui/material';


export default function ButtonAppBar() {
  const navigate=useNavigate();
  const handlebutton=()=>{
      navigate('/login')
  }
  const navigate1=useNavigate();
  const handlebutton1=()=>{
      navigate1('/Createacctn')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}  >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} display={'flex'}>
            <ul>
            <FadeMenu/>   
             </ul>
              <ul><Button color="inherit"><b>About Us</b></Button></ul>
              <ul><Button color="inherit"><b>DEPOSITS</b></Button></ul>
              <ul><Button color="inherit"><b>LOANS</b></Button></ul>
              <ul><Button color="inherit"><b>TRANSACTION HISTORY</b></Button></ul>
              <ul><Button color="inherit"><b>Customer Corner</b></Button></ul>
              <ul><Button color="inherit"><b>Contacts</b></Button></ul>
          </Typography>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Toolbar>
      </AppBar>
      <Searchbar/>
      <div className='search'>
        
      </div>
      <div className='background' >
      <br/><br/>
      
      <div className='tools'>  
          <Toolbar>
             <div className='items'style={{display:'flex',flexDirection:'row',height:'20px', padding:'35px',fontSize:'300px', justifyContent: 'space-between', alignItems: 'center'}}>
             </div>
             {/* <p className="word"><b>WELCOME  TO  SS BANK!</b></p> */}
             <Marquee className="marquee" style={{fontFamily:'unset'}} pasueOnHover={true} speed={100}>
             <h2>WELCOME TO SS BANK!    OPEN A SAVINGS ACCOUNT    APPLY ONLINE</h2>
             </Marquee>
        </Toolbar>
      </div><br></br><br></br><br></br><br></br>
      <div style={{textAlign:'center'}} id="bus">
        <div>
        <h4>Log in to your Account</h4>
        </div>
        <div>
        {/* <Button onClick={handlebutton} variant='outlined'style={{borderColor:'black',color:'blue'}} ><h4>Login</h4></Button><br></br> */}
        <Button  onClick={handlebutton} variant="contained"  size="medium">
          Sign in
        </Button>
        <br></br>
        <br></br>
        <b>OR</b>
        <br></br>
        <h4>Don't have an account? Create one now</h4>
        
        {/* <Button onClick={handlebutton1} variant='outlined' style={{borderColor:'black', color:'blue',paddingLeft:'10px',paddingBottom:'5px',paddingTop:'5px'}}><h4>Create</h4></Button> */}
        <Button onClick={handlebutton1} variant="contained" size="medium" >
          Create
        </Button>
        </div>
        </div>
        </div> 
        <Footer/>
    </Box>
);
}