import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import bg1 from "../images/bg1.webp"

export default function Team() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = (element) => {
    if (element === 1) {
      setIsHovered1(true);
      setIsHovered2(true);
      setIsHovered3(false);
    } else if (element === 2) {
      setIsHovered1(false);
      setIsHovered2(false);
      setIsHovered3(false);
    } else if (element === 3) {
      setIsHovered1(false);
      setIsHovered2(true);
      setIsHovered3(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered1(false);
    setIsHovered2(false);
    setIsHovered3(false);
  };

  const [event, setEvent] = React.useState([
    {
      img: bg1,
      nama: 'Nifa Rahma',
      peran: 'Executive Director',
    },
    {
      img: bg1,
      nama: 'Regatta Larra',
      peran: 'Co-Executive Director',
    },
    {
      img: bg1,
      nama: 'Shahira Syifa',
      peran: 'Secretary General',
    },
    {
      img: bg1,
      nama: 'Hanifa Rahmaliya',
      peran: 'Vice Secretary',
    },
    {
      img: bg1,
      nama: 'Yovinka Ignacia',
      peran: 'Treasurer',
    },
  ]);

  return (
    <div>
      <Navbar />
      {/* Founding Members */}
      <section className="flex pt-28 pb-28 min-h-600 grid-cols-4 space-x-16 justify-center items-center">
        <div className="w-80 h-40 text-6xl p-4 mr-16">Founding Members</div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered1 ? 'w-80' : 'w-40'}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute mt-60 mr-1 text-light-1 text-left text-xl font-semibold ${isHovered1 ? 'rotate-0 pl-24 pt-20 text-center' : '-rotate-90 pl-6'} duration-500`}>
            <p>Shahira Syifa</p>
            <p className="text-sm font-normal">Secretary General</p>
          </div>
          <img src={bg1} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered2 ? 'w-40' : 'w-80'}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute text-center justify-center text-xl font-semibold ${isHovered2 ? '-rotate-90 ml-4 mt-60' : 'rotate-0 ml-24 mt-80'} duration-500`}>
            <p className="font-semibold">Nifa Rahma</p>
            <p className="text-sm font-normal">Executive Director</p>
          </div>
          <img src={bg1} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered3 ? 'w-80' : 'w-40'}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute mt-56 text-light-1 text-left text-xl font-semibold ${isHovered3 ? 'rotate-0 pl-24 pt-20 text-center' : '-rotate-90 '} duration-500`}>
            <p>Reggata Lara</p>
            <p className="text-sm font-normal">CO-Executive Director</p>
          </div>
          <img src={bg1} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>
      </section>

      {/* Current Executive Leads */}
      <section className="flex flex-wrap items-center pb-28 min-h-600 grid-cols-3 space-y-32 justify-center">
        <div className="pt-40 mx-16">
          <div className="w-72 h-72 text-center pt-6">
            <h className="text-7xl font-semibold text-center">Current Executive Leads</h>
          </div>
        </div>
        {event.map((people) => (
          <div key={people.nama} className="w-72 h-72 mx-14">
            <img className="w-72 h-72 rounded-b-4xl rounded-tr-4xl" src={people.img} alt="Executive Lead"></img>
            <p className="text-center pt-3 font-semibold">{people.nama}</p>
            <p className="text-center">{people.peran}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
