import Image from "next/image";
import { IMemberCardProps } from "./member-card.types";

const MemberCard: React.FC<IMemberCardProps> = ({ image, name, position }) => {
  return (
    <>
      <div className="w-52 flex flex-col items-center justify-center gap-4">
        <div>
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{position}</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.17 19c2.3.09 4.24-1.71 4.33-4.01V9c-.09-2.3-2.03-4.1-4.33-4H6.83C4.53 5 2.59 6.8 2.5 9v6c.09 2.3 2.03 4.1 4.33 4h11.34Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M12 9.18l3.17 2.15c.2.12.33.33.33.57s-.13.45-.33.56L12 14.83c-.6.41-1.5.06-1.5-.58V9.75c0-.63.91-1 1.5-.57Z"
                stroke="#000"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11c0-3.77 0-5.66 1.17-6.83C5.34 3 7.23 3 11 3h2c3.77 0 5.66 0 6.83 1.17C21 5.34 21 7.23 21 11v2c0 3.77 0 5.66-1.17 6.83C18.66 21 16.77 21 13 21h-2c-3.77 0-5.66 0-6.83-1.17C3 18.66 3 16.77 3 13v-2Z"
                stroke="#33363F"
                strokeWidth="2"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="#33363F" />
              <circle cx="12" cy="12" r="3" stroke="#33363F" strokeWidth="2" />
            </svg>
          </span>
          <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="-5 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
            >
              <path d="M6.82 20v-9h2.73l.45-4H6.82v-2c0-1 .03-2 1.44-2h1.46V0c-.25 0-1.5-.1-2.77-.1C4 0 2.34 1.66 2.34 4.7V7H0v4h2.34v9h4.48z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
