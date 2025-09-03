import { TeamMembersData } from "@/data/teamMembers.data";
import MemberCard from "./member-card/member-card";

const TeamMembers = () => {
  return (
    <>
      <div className="w-full py-24 text-center">
        <h2 className="text-6xl font-santa leading-20">Our <span className="text-pink-600">Team</span> Members</h2>
        <div className="flex justify-center items-center flex-wrap gap-20 mt-16 w-1/2 mx-auto">
          {TeamMembersData.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};


export default TeamMembers;