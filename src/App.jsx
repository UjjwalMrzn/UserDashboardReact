import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import { useState } from 'react'
import './App.css'

// const Profiles = [
//   {name : "Ujjwal" , age : 22 , location : "Naikap"},
//   {name : "David" , age : 16 , location : "Nepal"},
//   {name : "Yukesh" , age : 24 , location : "Chobhar"},
//   // {name : "Child1" , age : 2 , location : "Kathmandu"},
// ]

const App = () => {
  const[name, setName] = useState("")
  const[age , setAge] = useState("")
  const[location , setLocation] = useState("")
  const [profiles, setProfiles] = useState([])
  const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    try{
      e.preventDefault()

      setError("");

      if(name.trim().length < 3){
        setError("Name ERROR");
        return;
      }
      
      if(isNaN(age)){
        setError("Age ERROR");
        return;
      }

      if(location.trim().length < 3){
        setError("Location ERROR")
        return;
      }

      const newprofile = {name, age , location}
      setProfiles([...profiles , newprofile])

      setName('');
      setAge('');
      setLocation('');
      setError('');
    }
      catch (error) {
      console.error("Error fetching data".error);
      setError("Unexpected Error");
      }
    }



  return(
    <div>
   <Header/>
   {/* <Welcome name = "Ujjwal"/> */}
   {/* <Welcome name = "Ujjwal Maharjan"/> */}
   <form onSubmit={handleSubmit}>
   <input type='text' className='nameBox' placeholder='Enter your name here' value={name} maxLength={20} onChange={(e) => setName(e.target.value)}required/><br/>
   <input type='number' className='ageBox' placeholder='Enter your age here' value={age}  onChange={(e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setAge(value);
    }
  }} required/><br/>
   <input type='text' className='locBox' placeholder='Enter your location here' value={location} maxLength={5}  onChange={(e) => setLocation(e.target.value)}required/><br/>
   {/* <input type='text' */}
   
    <button type='submit' style={{ padding : "5px" , marginTop : "8px" , fontSize : "15px" , backgroundColor : "green" }}>Submit</button>
   </form>
   {/* {name && age &&(
    <Profile name1 = {name} age1 = {age} location = "Nepal"/>
   )} */}
  {profiles.map((user , index) => (
    // <Profile key = {index} name = {user.name} age = {user.age} location = {user.location}/>
    <Profile key = {index} user = {user} />
  ))}
   {error && <p style={{ color: 'red' }}>{error}</p>}
   <Footer/>
    </div>
  )
}
export default App
