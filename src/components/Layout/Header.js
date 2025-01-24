"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header
        style={{
          position: "fixed",
          backgroundColor: "black",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-items-center">
              <div className="flex-shrink-0">
                <Link href="/">Logo</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
