import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../utlls/context";
import ArrowDropDown from "./icons/ArrowDropDown";
import BellIcon from "./icons/BellIcon";
import MessageIcon from "./icons/MessageIcon";
import SearchIcon from "./icons/SearchIcon";
import NavLogo from "./icons/NavLogo";

export default function Navbar() {
  const { config } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: `${config?.mainColor}` }}>
      <div className="lg:max-w-7xl mx-4 lg:mx-auto flex justify-between items-center py-4">
        <Link to="/">
          {config?.hasUserSection ? (
            <div className="logo w-28 lg:w-40">
              <NavLogo />
            </div>
          ) : (
            <div className="w-16 p-2 bg-white">
              <img src={config?.logo} alt="logo" />
            </div>
          )}
        </Link>
        <div className="search w-3/4 mx-24 hidden md:block">
          <div className="relative flex flex-wrap items-stretch">
            <input
              type="text"
              className="relative m-0 block w-[1px] basis-1/2 rounded-l px-3 py-[0.25rem] text-base font-normal leading-[1.6]"
              placeholder="Enter interests, company, keywords, name etc."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="flex items-center whitespace-nowrap bg-white rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6]"
              id="basic-addon2"
            >
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="inline-flex items-center">
            <li>
              <MessageIcon />
            </li>
            <li className="mx-6">
              <div className="flex text-white">
                EN <ArrowDropDown iconColor="#fff" />
              </div>
            </li>
            <li className="mr-6">
              <BellIcon />
            </li>
            {config?.hasUserSection && (
              <li>
                <div className="flex items-center text-white">
                  <div className="w-8 h-8">
                    <img
                      src="https://img.innoloft.com/users/user_8d48197d.png"
                      alt="userIcon"
                      className="rounded-full"
                    />
                  </div>
                  <ArrowDropDown iconColor="#fff" />
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
