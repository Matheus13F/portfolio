import {
  BookOpenIcon,
  BookmarkSquareIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CircleStackIcon,
  ClockIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PencilSquareIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  TagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="px-3 py-2 bg-white text-yellow rounded-md w-64 h-72 flex flex-col space-y-5 justify-around">
      <div className="w-full flex justify-center">{getIcon(icon)}</div>
      <h3 className="font-bold text-2xl text-center text-black">{title}</h3>
      <span className="text-center text-sm text-black">{description}</span>
    </div>
  );
}

export default Card;

function getIcon(icone: string) {
  switch (icone) {
    case "logica":
      return <CodeBracketSquareIcon className="w-14 h-14" />;
    case "query":
      return <CircleStackIcon className="w-14 h-14" />;
    case "seo":
      return <TagIcon className="w-14 h-14" />;
    case "marketing":
      return <BookmarkSquareIcon className="w-14 h-14" />;
    case "conteudo":
      return <ChatBubbleBottomCenterIcon className="w-14 h-14" />;
    case "copy":
      return <PencilSquareIcon className="w-14 h-14" />;
    case "youtube":
      return <VideoCameraIcon className="w-14 h-14" />;
    case "blog":
      return <BookOpenIcon className="w-14 h-14" />;
    case "community":
      return <ChatBubbleLeftRightIcon className="w-14 h-14" />;
    case "shield":
      return <ShieldCheckIcon className="w-14 h-14" />;
    case "email":
      return <EnvelopeIcon className="w-14 h-14" />;
    case "check":
      return <CheckCircleIcon className="w-14 h-14" />;
    case "time":
      return <ClockIcon className="w-14 h-14" />;
    case "star":
      return <StarIcon className="w-14 h-14" />;
    default:
      return <BookmarkSquareIcon className="w-14 h-14" />;
  }
}
