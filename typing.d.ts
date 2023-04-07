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

interface Skill extends SanityBody {
  _type: "skill";
  heroImage: Image;
  title: string;
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
