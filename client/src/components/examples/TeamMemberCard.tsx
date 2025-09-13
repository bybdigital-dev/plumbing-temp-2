import TeamMemberCard from '../TeamMemberCard';
import maleTeamMember from "@assets/generated_images/Team_member_headshot_71a2bdaf.png";
import femaleTeamMember from "@assets/generated_images/Female_team_member_headshot_e3b4ba94.png";

export default function TeamMemberCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <TeamMemberCard
        name="Mike Johnson"
        title="Lead Plumber & Owner"
        bio="With over 15 years of experience in residential and commercial plumbing, Mike founded AquaPro to provide reliable, high-quality plumbing services to the Johannesburg area."
        image={maleTeamMember}
        experience="15+ Years"
        specialties={["Emergency Repairs", "Commercial Plumbing", "Bathroom Renovations"]}
      />
      <TeamMemberCard
        name="Sarah Williams"
        title="Senior Plumber"
        bio="Sarah specializes in leak detection and modern bathroom installations. Her attention to detail and customer service excellence makes her a valued team member."
        image={femaleTeamMember}
        experience="8+ Years"
        specialties={["Leak Detection", "Bathroom Design", "Geyser Installation"]}
      />
      <TeamMemberCard
        name="David Chen"
        title="Plumbing Technician"
        bio="David brings expertise in drain cleaning and maintenance services. He's known for his problem-solving skills and commitment to getting the job done right."
        image={maleTeamMember}
        experience="5+ Years"
        specialties={["Drain Cleaning", "Pipe Maintenance", "Emergency Response"]}
      />
    </div>
  );
}