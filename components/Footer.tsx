import { useRouter } from "next/router";
import { respW } from "../styles/constants";

export const Footer = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div
      className={`${respW} h-menu bg-[url('/images/bg-menu-repeat.png')] bg-repeat bg-bottom shadow-lg border fixed bottom-0 justify-evenly`}
    >
      {/* <div onClick={() => handleClick("/")}>Home</div>
      <div onClick={() => handleClick("/events")}>Events</div> */}
    </div>
  );
};
