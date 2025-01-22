const Profile = ({user}) => { 
    const{name, age, location} = user
    return(
    <>
    <h2 style={{ textTransform : "capitalize"}}>Hello ,{name} ! Your age is {age}  and you are from {location}</h2>
    {age >= 18 ? (
    <p>"You are an adult"</p>
    ):(
    <p>"You are minor"</p>)}
    </>
)
}
   

export default Profile