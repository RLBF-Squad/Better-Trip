import React from 'react';
import { useNavigate } from 'react-router';
import Login from './Login';
import { UserContext } from "../UserContext";



export default function LoginSub ({ useState, useContext}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUserInfo} = useContext(UserContext);
  const navigate = useNavigate();

  


  //LOCALHOST3000/USERS/LOGIN
  //POST REQUEST 


  async function log(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:3000/user/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-type':'application/json'},
          credentials: 'include',
      });
      if(response.ok){ 
          response.json().then(userInfo=>{
            console.log(userInfo)
              setUserInfo(userInfo);
              return navigate('/mainpage')  
          })
      }else{
          alert('wrong credentials')
      }
  }



    return (
        <div className="flex flex-col items-center justify-center h-screen bg-grayGreen">
            <div className="absolute left-0 top-8 font-bold self-start text-2xl text-olive ml-8 ">Better Trip</div>
          <h2 className="text-2xl font-bold text-olive mb-4">Login Here:</h2>
          <form className=" bg-olive rounded-md p-24 shadow-md flex flex-col">

            <div className="flex items-center mb-4">
              <input
                type="text"
                id="username"
                placeholder="Enter Your Username: "
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className="border rounded-md p-2  bg-gray-100 py-2 px-20"
              />
            </div>
    
            <div className="flex  mb-4 ">
              <input type="password" id="password" placeholder="Enter Your Password:" value={password} onChange={(event) => {
                  setPassword(event.target.value)}}
                className=" border rounded-md p-2 bg-gray-100 py-2 px-20" />
            </div>
            
            <div className = "mt-0 self-center" onClick={log}>
            <button className=" bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-10 rounded-full" >
              Sign In
            </button>
            </div>

          </form>

        </div>

      );
}


//   return (
//     <div className="
//     flex flex-col max-h-screen bg-blue-900" >
//         <h2> Login Here: </h2>

//         <form> 
//             <input 
//                 type="text" 
//                 placeholder="username" 
//                 value={username} 
//                 onChange={event => {
//                     setUsername(event.target.value)
//             }}/>    
//         </form>

//         <form> 
//             <input 
//                 type="text" 
//                 placeholder="password" 
//                 value={password} 
//                 onChange={event => {
//                     setPassword(event.target.value)
//             }}/>    
//         </form>

//         <button className ='border border-black text-black px-4 py-2'>Login</button>
//     </div>
//   )


{/* // <form className="form1" action="">
// <h2 className="logTitle">Login</h2>
// <input type="text" placeholder="username" value={username} onChange={event => {
    setUsername(event.target.value)
}}/>
<input type="password" placeholder="password" value ={password} onChange={event => setPassword(event.target.value)}/>
<button className="logBtn">Login:</button>
</form> */}