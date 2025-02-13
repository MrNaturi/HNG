import ticzLogo from "../assets/ticzLogo.png";


const Navbar = () => {
  return (
    <nav className="JejuMyeongjo p-3 flex justify-between items-center w-[90vw] border border-[#197686] rounded-2xl mx-auto my-4 bg-[#05252C]/40">
      <img src={ticzLogo} alt="ticzLogo" />

      <ul className="hidden md:flex gap-6 text-[#B3B3B3] text-base">
        <li>
          <a
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            Events
          </a>
        </li>
        <li>
          <a
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            My Tickets
          </a>
        </li>
        <li>
          <a
            to="/about-project"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            About Project
          </a>
        </li>
      </ul>

     
      <button className="p-2 bg-white border border-[#197686] flex justify-center items-center gap-1 rounded-xl w-36 text-black shadow-md transition-all hover:bg-[#197686] hover:text-white active:scale-95 cursor-pointer font-light"
      onClick={()=>navigate("/printOut")}>
        MY TICKETS 
      </button>
    </nav>
  );
};

export default Navbar;