// importing blog auther as profile name
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="mt-10 w-[67%] m-auto">
      <nav className="flex justify-around items-center pb-2 border-b-2 border-gray-200">
        <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
        <img className="w-16 rounded-full" src={profile} alt="" />
      </nav>
    </header>
  );
};

export default Header;
