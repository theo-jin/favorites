import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
  const navigate = useNavigate();
  function addMeetuphandler(meetupData){
    fetch('https://maxi-poject-default-rtdb.firebaseio.com/meetups.json',
    {
      method:'POST',
      body:JSON.stringify(meetupData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(()=>{
      navigate("/")
    });
  }
  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetuphandler} />
  </section>;
}


export default NewMeetupsPage