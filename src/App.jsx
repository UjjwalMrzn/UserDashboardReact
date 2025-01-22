import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Profile from './components/Profile'

// import { useState } from 'react'


const Profiles = [
  {name : "Ujjwal" , age : 22 , location : "Naikap"},
  {name : "David" , age : 16 , location : "Nepal"},
  {name : "Yukesh" , age : 24 , location : "Chobhar"},
  // {name : "Child1" , age : 2 , location : "Kathmandu"},
]

const App = () => {
  // const[name, setName] = useState("")
  // const[age , setAge] = useState("")
  // const[location , setLocation] = useState("")
    


  return(
    <div>
   <Header/>
      <Welcome name = "Ujjwal"/>
   <Welcome name = "Ujjwal Maharjan"/>
   {Profiles.map((user , index) => (
    // <Profile key = {index} name = {user.name} age = {user.age} location = {user.location}/>
    <Profile key = {index} user = {user} />
  ))}
   <Footer/>

    </div>
  )
}
export default App
