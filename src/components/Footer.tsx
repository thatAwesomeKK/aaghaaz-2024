import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="py-16 ">
      <Link
        className="px-10 py-4 text-xl font-semibold text-white border-gray-100 border-4"
        href="/assets/Final & Updated Rule Books.pdf"
        download={true}
        target={"_blank"}
      >
        Download Brochure
      </Link>
    </div>
  );
}

export default Footer;
