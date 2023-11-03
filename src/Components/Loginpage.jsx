import React,{useState} from 'react'
import '../App.css';
import Storedata from './Storedata';
 const Loginpage = () => {
  const [data,setData] = useState({
    username :'',
    password :'' 
  })
  const [newpage , setNewpage]=useState('')
  const { username,password}=data;
  const changeHandler = e =>{
    setData ({...data,[e.target.name]:e.target.value});

  } 
  
   const submitHandler = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('formData'));
  
    if (storedUserData) {
      const foundUser = storedUserData.filter(
        (user) => user.username === username && user.password === password
      );
      setNewpage(foundUser)
      if (foundUser.length > 0) {
        setData({
          username: '',
          password: '',
        });
        // alert('Login successful');
      } else {
        setData({
          username: '',
          password: '',
        });
        alert('Invalid username or password');
      }
    } else {
      alert('No user data found in localStorage');
    }
  };
  return (
    <div >
       {newpage.length == 0 &&
      <center>
        <div className='form'>
        <form onSubmit={submitHandler}  className='form-fields'>
          <input type='text' name="username" value={username} placeholder='username' onChange={changeHandler} autoComplete="off" required/><br/>
          <input type='password' name="password" value={password} placeholder='password' onChange={changeHandler} autoComplete="off" required/><br/> 
          <button>Login</button> 
        </form>
        </div>
      </center>
 }
      {newpage.length > 0 && <Storedata/>}
    </div>
  )
}

export default Loginpage 