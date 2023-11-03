import React, { useState } from 'react'
import '../App.css';
import {v4} from 'uuid'
const Registerpage = () => {
    const [form,setForm] = useState({
        list:[],
        username :'',
        password :'',
        confirmpassword :'',
        email :'',
        number :''
        })
        const { username,password,confirmpassword,email,number}=form;
        const changeHandler = e =>{
            setForm ({...form,[e.target.name]:e.target.value});
          } 
          
          const sudmitHandler =(e) =>{
            e.preventDefault();
            console.log(form,"form  ");
           const newForm ={
            id:v4(),
            username: username,
            password: password,
            confirmpassword: confirmpassword,
            email: email,
            number: number

            }
            setForm(prev=>({
                list:[...prev.list,newForm],
                username: '',   
                password: '',
                confirmpassword: '',
                email: '',
                number: ''
            }))
            

          
            console.log(newForm,"newForm")
            
        //     if(password === confirmpassword){
        //     }
        //    else{
        //     alert("passwords does not matching")
        //    }
    }
    if(form.list !==[]){
         localStorage.setItem('formData', JSON.stringify(form.list));
    }
            console.log(form,"array of form")
        const handleCl =()=>{
            e.preventDefault();
            setForm({
                username: '',   
                password: '',
                confirmpassword: '',
                email: '',
                number: ''
            })
        }
            
  return (
    <div>
        <center>
            <div className='form'>
            <form className='form-fields' onSubmit={sudmitHandler}>
                 <input type='text' name='username' value={username}  placeholder='username' onChange={changeHandler} autoComplete="off" required></input><br/>
                 <input type='password' name='password' placeholder='password' value={password} onChange={changeHandler} autoComplete="off" required></input><br/>
                  <input type='password' name='confirmpassword' value={confirmpassword} placeholder='confirmpassword' onChange={changeHandler}autoComplete="off" required ></input><br/>
                  { password !== confirmpassword ? <p style={{"color":"red"}}>passwords not matching</p>:null}
                 <input type='email'  name='email' value={email} placeholder='email'  onChange={changeHandler} autoComplete="off" required></input><br/>
                  <input type='tel' name='number' value={number} placeholder='ph no' onChange={changeHandler} autoComplete="off" required></input><br/>
                <button type='submit'>submit</button>
                <button onClick={handleCl}>cancel</button>
            </form>
            </div>
        </center>
    </div>
  )
}

export default Registerpage
 