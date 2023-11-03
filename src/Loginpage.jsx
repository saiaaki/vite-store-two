import React,{useState} from 'react'
 const Loginpage = () => {
  const [data,setData] = useState({
    username :'',
    password :'',
    email :''
  })
  const {username,password,email}=data;
  const changeHandler = e =>{
    setData ({...data,[e.target.name]:e.target.value});
  } 
  
  const submitHandular =e =>{
    e.preventDefault();
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandular}>
          <input type='text' name="username" value={username} placeholder='username' onChange={changeHandler} required/><br/>
          <input type='password' name="password" value={password} placeholder='password' onChange={changeHandler} required/><br/>
          <input type='email' name="email" value={email} placeholder='email' onChange={changeHandler} required/><br/>
          <button>Login</button>
        </form>
      </center>
    </div>
  )
}

export default Loginpage
