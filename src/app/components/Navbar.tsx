import { UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

// import { Button } from "@nextui-org/react";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" mx-2 flex flex-1 justify-center px-2 lg:justify-between">
            <Link href="/" className="btn btn-ghost text-xl">
              Disc Tracker
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href="/games">Games</Link>
              </li>
            </ul>
          </div>
          <UserButton />
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </div>
    </div>
    // <div className="navbar bg-neutral">
    //   <div className="navbar-start">
    //     <div className="drawer lg:hidden">
    //       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //       <div className="drawer-content">
    //         <label htmlFor="my-drawer" className="btn  drawer-button">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //       </div>
    //       <div className="drawer-side">
    //         <label
    //           htmlFor="my-drawer"
    //           aria-label="close sidebar"
    //           className="drawer-overlay"
    //         ></label>
    //         <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
    //           {/* Sidebar content here */}
    //           <li>
    //             <a>Sidebar Item 1</a>
    //           </li>
    //           <li>
    //             <a>Sidebar Item 2</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <Link href="/" className="btn btn-ghost text-xl">
    //       Disc Tracker
    //     </Link>
    //   </div>
    //   <div className="navbar-end hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <Link href="/games">Games</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <UserButton />
    //   </div>
    // </div>
  );
}
