import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuildingColumns,
  faCalendarDays,
  faMarker,
  faNoteSticky,
  faPlay,
  faShop,
  faHeadset,
  faGear,
  faRightFromBracket,
  faCircleChevronRight,
  faServer,} from "@fortawesome/free-solid-svg-icons";
import imgBar from "/Users/ibrahimismael/Desktop/up/doctor-preps/public/barLogo.png";


function Sidebar(){

  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);







  
  // Menu Items
  const menuItems = [
    { id: 1, label: "Community", icon: faHouse },
    { id: 2, label: "Courses", icon: faPlay },
    { id: 3, label: "Bank Questions", icon: faBuildingColumns },
    { id: 4, label: "Marked Questions", icon: faMarker },
    { id: 5, label: "Calendar", icon: faCalendarDays },
    { id: 6, label: "Notes", icon: faNoteSticky },
  ];

  const userItems = [
    { id: 7, label: "Shop", icon: faShop },
    { id: 8, label: "Apps & Integrations", icon: faServer },
    { id: 9, label: "Support", icon: faHeadset },
    { id: 10, label: "Setting", icon: faGear },
    { id: 11, label: "Logout", icon: faRightFromBracket },
  ];








    return(
      <div id="main" className={`relative top-6 left-3 lg:relative ${isOpen ? 'inset-0 bg-black/50 lg:bg-transparent' : ''}`}>
      {/* <aside id="sidemenu" className="group min-h-screen lg:min-h-[calc(100vh-40px)] flex flex-col fixed z-10 lg:w-16 w-64 transition-all duration-500 ease-in-out bg-gray-900 dark:bg-gray-900 lg:rounded-2xl lg:group-[.is-open]:w-64 lg:group-[.is-open]:translate-x-0 group-[.is-open]:-translate-x-full"> */}
      <aside id="sidemenu" className={`group min-h-screen lg:min-h-[calc(100vh-40px)] flex flex-col fixed z-10 lg:w-16 w-64 transition-all duration-500 ease-in-out bg-gray-900 dark:bg-gray-900 lg:rounded-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${isOpen ? 'lg:w-64' : 'lg:w-16'}`}>
        {/* Bar Head */}
        <div className="flex items-center justify-between mx-4 py-6 border-b border-gray-800 dark:border-gray-800">
          <img src={imgBar} alt="Doctor Preps" />
            <button  onClick={() => setIsOpen(!isOpen)} id="navbar-toggle" className="absolute -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 cursor-pointer">
              <FontAwesomeIcon icon={faCircleChevronRight}className="text-white cursor-pointer"/>
            </button>
        </div>

        {/* Menu Section */}
        <nav className="flex-1 overflow-hidden pt-6 mx-3">
          <h5 className="py-2 pl-1 text-xs font-medium text-gray-400 uppercase">MENU</h5>
          <ul className="flex flex-col gap-1.5">{menuItems.map((item) => (
              <li key={item.id} className="mb-1">
                <a href="#" className={`flex items-center gap-1 text-sm font-medium py-2 px-2 rounded-lg transition-all duration-100 ${activeMenu === item.id ? "bg-gray-50 text-gray-900 hover:bg-gray-50 hover:text-gray-900": "text-white dark:text-white hover:bg-gray-50 hover:text-gray-900"}`}onClick={() => setActiveMenu(item.id)}>
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Section */}
        <div className="flex-shrink-0 mx-3 cursor-pointer">
          <h5 className="py-1.5 pl-1 text-xs font-medium text-gray-400 uppercase">USER</h5>
          <ul className="flex flex-col gap-1.5">{userItems.map((item) => (
              <li key={item.id}>
                <a href="#" className={`flex items-center gap-1 text-sm font-medium  py-2 px-2 rounded-lg transition-all duration-300 ${activeMenu === item.id? "bg-gray-50 text-gray-900 hover:bg-gray-50 hover:text-gray-900": "text-white dark:text-white hover:bg-gray-50 hover:text-gray-900"}`}onClick={() => setActiveMenu(item.id)}>
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />{item.label}
                </a>
              </li>
            ))}
          </ul>



          <div className="py-5 flex justify-between items-center border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-purple-100">
                  <img src="https://pagedone.io/asset/uploads/1688032245.png" alt="User Avatar" className="rounded-full object-cover"/>
                </div>

                <div className={`${isOpen ? 'opacity-100 duration-1000' : 'lg:opacity-0'} transition-opacity `}>
                {/* <div className="opacity-0 group-[.is-open]:opacity-100 transition-all duration-500"> */}
                  <p className="font-semibold text-xs text-white mb-0.5">Ahmed Elhaggar</p>
                  <p className="font-medium text-xs text-gray-400">ahmed.elhaggar@gmail.com</p>
                </div>
              </div>
          </div>

        </div>
      </aside>
      </div>
    );
}

export default Sidebar;