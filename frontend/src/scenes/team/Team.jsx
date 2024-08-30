import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Spotlight } from '../../component/ui/Spotlight';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
const TeamCard = ({ name, role, imageUrl, githubUrl, linkedinUrl }) => {
  return (
    <div className="relative bg-transparent rounded-lg overflow-hidden w-full h-60 md:h-80 mx-auto sm:w-60 md:w-64">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-50 flex flex-col justify-end p-2 md:p-4">
        <h2 className="text-black text-xs sm:text-xl font-semibold">{name}</h2>
        <p className="text-black mb-2 text-xs sm:text-base">{role}</p>
        <div className="flex space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black hover:text-gray-300 text-lg sm:text-2xl" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black hover:text-gray-300 text-lg sm:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/Teamdata.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  const renderTeamSection = (teamName) => {
    const team = teamData.find(t => t.team === teamName);
    if (!team) return null;

    return (
      <div key={teamName} className="mt-10 w-full">
       
        <div className='flex justify-center items-center'>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-center">{team.team}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-2 mt-10">
          {team.members.map((member, memberIndex) => (
            <TeamCard
              key={memberIndex}
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
  };

  return (
    <div className='w-full min-h-screen'>
        <Navbar/>
    <div className='bg-grid-black/5 bg-[#FFFFFF] min-h-screen w-full p-6 md:p-12'>
        
      <div className='w-full flex flex-col justify-center items-center '>
        <h1 className="font-bold text-black text-lg text-nowrap md:text-3xl lg:text-7xl mt-20 md:mt-40 flex">
          Meet the Minds Behind <span className="text-violet-500">&nbsp;RESOURCIO</span>
        </h1>
      </div>
      {renderTeamSection("Core Team")}
      {renderTeamSection("Tech Team")}
      {renderTeamSection("PR & Design Team")}
    </div>
    <Footer/>
    </div>
  );
};

export default Team;
