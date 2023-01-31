import {useState, useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";



function AllMeetupsPage(){
  const[isLoading,setIsLoading]= useState(true);
  const[loadedMeetups,setLoadedMeetups]=useState([]);
  
  useEffect(()=>{
  setIsLoading(true);  
  fetch(
    'https://maxi-poject-default-rtdb.firebaseio.com//meetups.json',{}
  )
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    const meetups= [];

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key]
      };

      meetups.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
  },[]);

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
  <session>
      <h1> All meetups</h1>
      <ul>
    <MeetupList meetups={loadedMeetups} />
      </ul>
  </session>);
}

export default AllMeetupsPage