import { respW } from "../styles/constants";

export const Header = () => {
  return (
    <div
      className={`${respW} h-menu bg-[url('/images/bg-menu-repeat.png')] bg-repeat bg-bottom-left shadow fixed top-0 items-center justify-between px-4 select-none`} style={{ backgroundSize: '200px 200px'}}
    >
    </div>
  );
};
