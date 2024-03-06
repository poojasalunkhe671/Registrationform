import React from 'react';
import styled from 'styled-components';
export default function Register(props) {

     const btnStyle={
      backgroundColor:"green",
      color:"white",
    };
    let btnText,passBoxType;
    if(props.showPass===true){
      btnStyle.backgroundColor="red";
      btnText="hide Password"
      passBoxType="text";
    }
    else{
      btnText="show Password";
      passBoxType="password";
    }
    const StyledButton = styled.button`
    display:block;
    padding:10px 5px;
    background-color:${(props)=> props.color};
    border:none;
    color:white;
    width:100%;
    margin:5px;
    
    text-item:center;
    text-align:center;
    cursor:pointer;
    border-radius:5px

    `;
    const  StyledRegisterContainer=styled.div`
    width:600px;
    background:linear-gradient(to bottom,#214960,#ffff); 
    padding: 20px;
    border-radius: 10px;

    &:hover{
      box-shadow: 0px 0px 5px black;
    }
    @media (min-width:0px) and (max-width:600px){
      width:300px;
    }
    `;
    
    
   
  return (
    <StyledRegisterContainer className='container card p-3 mt-5 '>
        <h1 className='text-center text-white'>Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required className='form-control'/>
        </div><br/>
        <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required className='form-control'/>
        </div><br />
        <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type={passBoxType} name="password"required  className='form-control'/>
        </div>
        <br/>
        <button type='submit'className='btn btn-primary m-1'>Register</button>
        <button type='button' className='btn m-1' onClick={props.click} style={btnStyle}>{btnText}</button>
        <StyledButton type="button" color='orange'>Login</StyledButton>
        <StyledButton type="button" color='green'>Login with </StyledButton>
      </form>
    </StyledRegisterContainer>
  );
}
