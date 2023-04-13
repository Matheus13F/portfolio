type SanityBody = {
  _createdAtL: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  backgroundImage: Image;
}

interface Technology extends SanityBody {
  _type: "skill";
  heroImage: Image;
  title: string;
}

interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  linkToRepo: string;
  summary: string;
  technologies: Technology[];
}

interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Background extends SanityBody {
  _type: "background";
  jobTitle: string;
  description: string;
  hardSkill: string;
  hardSkillPoints: string[];
  tools: string;
  toolsPoints: string[];
}

interface Testimonial extends SanityBody {
  _type: "testimonial";
  description: string;
  image: Image;
  name: string;
  role: string;
  linkToPage: string;
}
