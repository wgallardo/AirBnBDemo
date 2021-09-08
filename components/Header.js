import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon,
  } from "@heroicons/react/solid";

import Image from "next/image"
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            
            {/*left*/}
            <div className="relative flex items-center h-10
             cursor-pointer my-auto" >
                <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                
                />
            </div>

             {/*M*/}
       <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input type="text" placeholder="Start your search"
          
          className="flex-grow text-sm text-gray-600 pl-5 placeholder-gray-400 outline-none bg-transparent"
        />
        <SearchIcon className="h-8 hidden md:inline-flex p-2 mx-auto cursor-pointer md:mx-2 bg-red-400 rounded-full text-white" />
      </div>

              {/*R*/}
      

      <div className="flex items-center text-gray-500 justify-end space-x-4">
          <p className="cursor-pointer hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer hidden sm:inline" />

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
       </div>
      


            </div>

        </header>
    )
}

export default Header
