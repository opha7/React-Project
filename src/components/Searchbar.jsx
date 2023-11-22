import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import '../assets/css/Searchbar.css'

export default function Searchbar() {
  return (
    <div className='searchbar-container'>
      <MDBNavbar dark className='black-navbar searchiee'>
        <MDBContainer fluid className='babe'>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input
              style={{ width: '700px' , height:'50px'}} // Adjust the width as needed
              className='form-control'
              placeholder="What are you looking for?"
              aria-label="Search"
              type='search'
            />
            <MDBBtn className='babe'outline style={{ borderColor: 'black', color: 'black', width:'100px', height:'50px' }}>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
