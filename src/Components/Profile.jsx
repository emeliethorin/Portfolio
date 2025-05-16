import "../profile.css";
import profilePic from "../assets/emelie.jpg";

function Profile(props) {

    return (
        <div className="profile">
         <h1 className="profile-title">{props.title}</h1>
        <p className="profile-text">👱🏼‍♀️ I'm {props.age} years old and I {props.isStudent  ? "am a student" : "am not a student"} at Sundsgården folkhögskola.</p>
        <p className="profile-text">💻 I also work as an E-commerce coordinator and have been in my current position for almost 8 years now. </p>
        <p className="profile-text">⚽️ In my spare time I like to watch football, take long walks with my dogs and enjoy good food.</p>
        <img src={profilePic} alt="profile picture" className="img"/>
        </div>
    );
}

export default Profile;