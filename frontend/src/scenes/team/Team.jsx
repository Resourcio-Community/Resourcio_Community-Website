
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamCard = React.memo(({ name, role, imageUrl, githubUrl, linkedinUrl }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-transparent rounded-lg overflow-hidden w-full h-60 md:h-80 mx-auto sm:w-60 md:w-64 team-card transition-all duration-500 transform hover:shadow-lg"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2"
        src={imageUrl}
        alt={name}
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-50 flex flex-col justify-end p-2 md:p-4">
        <h2 className="text-black text-xs sm:text-xl font-semibold">{name}</h2>
        <p className="text-black mb-2 text-xs sm:text-base">{role}</p>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black hover:bg-opacity-20 rounded-full p-1 transition-all transform hover:scale-125"
          >
            <FaGithub className="text-black hover:text-gray-700 text-lg sm:text-2xl transition-transform transform hover:-translate-y-1" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black hover:bg-opacity-20 rounded-full p-1 transition-all transform hover:scale-125"
          >
            <FaLinkedin className="text-black hover:text-gray-700 text-lg sm:text-2xl transition-transform transform hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
});

const TeamSection = React.memo(({ teamName, members }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll('.team-card'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 w-full">
      <div className="flex justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-center">{teamName}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-2 mt-10">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
});

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const response = await fetch('/Teamdata.json');
      const data = await response.json();
      setTeamData(data);
    };

    fetchTeamData();
  }, []);

  const memoizedTeamSections = useMemo(() => {
    return (
      <>
        {teamData.map((team, index) => (
          <TeamSection key={index} teamName={team.team} members={team.members} />
        ))}
      </>
    );
  }, [teamData]);

  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <div className='bg-grid-black/5 bg-[#FFFFFF] min-h-screen w-full p-6 md:p-12'>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className="font-bold text-black text-lg text-nowrap md:text-3xl lg:text-7xl mt-20 md:mt-40 flex">
            Meet the Minds Behind <span className="text-violet-500">&nbsp;RESOURCIO</span>
          </h1>
        </div>
        {memoizedTeamSections}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
