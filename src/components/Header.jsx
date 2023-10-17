"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const current = usePathname();
  return (
    <section className="relative bg-gray-100 ">
      <div className="container mx-auto">
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <Link className="text-3xl font-bold leading-none" href="/">
            <span className="text-black">Design</span>
            <span className="text-orange">AGENCY</span>
          </Link>
          <div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
              <li>
                <Link
                  className={
                    current === "/"
                      ? "text-sm text-green-600 font-bold"
                      : "text-sm text-gray-400 hover:text-gray-500 "
                  }
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={
                    current === "/team"
                      ? "text-sm text-green-600 font-bold"
                      : "text-sm text-gray-400 hover:text-gray-500 "
                  }
                  href="/team"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  className={
                    current === "/service"
                      ? "text-sm text-green-600 font-bold"
                      : "text-sm text-gray-400 hover:text-gray-500 "
                  }
                  href="/service"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  className={
                    current === "/project"
                      ? "text-sm text-green-600 font-bold"
                      : "text-sm text-gray-400 hover:text-gray-500 "
                  }
                  href="/project"
                >
                  Project
                </Link>
              </li>

              <li>
                <Link
                  className={
                    current === "/testimonial"
                      ? "text-sm text-green-600 font-bold"
                      : "text-sm text-gray-400 hover:text-gray-500 "
                  }
                  href="/testimonial"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="flex pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Login
              </a>
              <a
                className="block px-5 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-xl"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
