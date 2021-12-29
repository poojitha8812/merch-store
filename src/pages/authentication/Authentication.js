import {React,useState} from 'react';
import styles from './styles.module.css';



function Authentication() {
  
  const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[Firstname,setFirstname]=useState('');
    const[Surname,setSurname]=useState('');
    const[error,setError]=useState(false);
    const[Register,setRegister]=useState(false);
    const[login,setLogin]=useState(true);

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);
    const onFirstnameChange = (event) => setFirstname(event.target.value);
      const onSurnameChange = (event) => setSurname(event.target.value);
    
    
 const validateInput = () => {
      if (
        email.length === 0 ||
        !email.includes("@gmail.com") ||
        password.length < 8
      ) {
        setError(true);
        return true;
      } else {
        setError(false);
        return false;
      }
    };
  
    
      
      const submit = () => {
      if (!validateInput()) {
      
        console.log( email, password);
    }
    };
//-----------------------------------------------------------------------------------------
   

    const CheckInput = () => {
      if (
      email.length === 0 ||
      !email.includes("@gmail.com") ||
      password.length < 8
    ) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };
  
  const RegisterChange = () => {
        if(CheckInput()) {
         setRegister(true);
         setLogin(false);
    console.log(Firstname, Surname, email, password);
    return true;
        }
    
    
  };

return (
  <div>
      
    
{login? <div className={styles.authenticate_body}>
  <div className={styles.login_box }><h6 className={styles.box_header}>LOGIN</h6><input type='email' value={email} placeholder='enter your e-mail' onChange={onEmailChange} />
<br />
     <input   type='password' value={password} placeholder='password' onChange={onPasswordChange}/><br />
     {error? <p>please enter all the fields</p> :  <></>}
     <button onClick={submit}>Login</button> <button onClick={RegisterChange}>signup</button></div></div> :<></>}
    

     
     {Register ? <div className={styles.authenticate_body}>
       <div className={styles.login_box }>
       <h6 className={styles.box_header}>SIGNUP</h6>
        <input
          
          type="text"
          placeholder="Firstname"
          onChange={onFirstnameChange}
          value={Firstname}
        /><br />
        <input
          
          type="text"
          placeholder="Surname"
          onChange={onSurnameChange}
          value={Surname}
        /><br />
      
      <input
        
        type="email"
        placeholder="Enter your E-mail"
        onChange={onEmailChange}
        value={email}
      /><br />
      
      <input
        
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
        value={password}
      />
     
      {error ? <p>all input fields are mandatory</p> : <p>sucessfully Registered</p>}
      <button onClick={RegisterChange}>signup</button>
</div></div>:<></>}

        

     
     


      
    </div>
  );
}

export default Authentication;