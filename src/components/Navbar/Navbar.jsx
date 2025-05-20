import ToggleButtons from "../atoms/ToggleButtons/ToggleButtons";
import ToggleButtonsLang from "../atoms/ToggleButtonsLang/ToggleButtonsLang";

const Navbar = () => {
  return (
    <div className="container-navbar absolute left-0 w-full z-20 top-0">
      <div className="container-navmenu flex justify-between items-center p-5">
        <section className="flex items-center">
          <span className="text-AKMAL">AKMAL</span>
          <span className="text-MHS pr-4">MHS</span>
          <ToggleButtons/>
        </section>
        <ul className="flex gap-15 font-extralight text-white">
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
        </ul>
        <section className="flex items-center gap-2">
          <ToggleButtonsLang/>
          <button className="text-white font-medium border px-4 py-2 rounded-full bg-black/10 h-12 ">Sign In</button>
        </section>
      </div>
    </div>
  )
};

export default Navbar;