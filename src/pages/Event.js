import React from "react";
import Navbar from "../components/Navbar";
import bg1 from './../images/bg1.webp'

const imgSlides = [
  {
    img: bg1,
  },
  {
    img: bg1,
  },
  {
    img: bg1,
  },
  {
    img: bg1,
  },
  {
    img: bg1,
  },
  {
    img: bg1,
  }, 
  {
    img: bg1,
  }, 
  {
    img: bg1,
  }
];

export default function MyDay() {
  const [event, setEvent] = React.useState([
    {
      title: 'Go to park',
      img: bg1,
      event: 'This morning i go to the mall and meet my grandparents. I feel extremly happy about that. Best feeling ever!',
      button: 'Edit',
    },
    {
        title: 'Go to park',
      img: bg1,
      event: 'This morning i go to the mall and meet my grandparents. I feel extremly happy about that. Best feeling ever!',
      button: 'Edit',
    },
    {
        title: 'Go to park',
      img: bg1,
      event: 'This morning i go to the mall and meet my grandparents. I feel extremly happy about that. Best feeling ever!',
      button: 'Edit',
    },
    {
        title: 'Go to park',
      img: bg1,
      event: 'This morning i go to the mall and meet my grandparents. I feel extremly happy about that. Best feeling ever!',
      button: 'Edit',
    },
    {
        title: 'Go to park',
      img: bg1,
      event: 'This morning i go to the mall and meet my grandparents. I feel extremly happy about that. Best feeling ever!',
      button: 'Edit',
    },
  ]); 

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 pl-20">
      {event.map((events) => (
      <div className="py-3" key={events.title}>
          
          <img className="w-60 py-16" src={events.img} alt="" />
          
            <p>{events.event}</p>
    
          <div className="pt-12">
              <button className="bg-zinc-400 text-base text-light-1 px-5 py-2 hover:opacity-60 duration-300 ease-in-out">{events.button}</button>
          </div>
      </div>
      ))}
      </div>

    </>
  );
}


