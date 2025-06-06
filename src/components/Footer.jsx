import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 py-6 text-center text-sm text-gray-600">
      <p>©{new Date().getFullYear()} ShopSwift. All rights reserved.</p>
      <p className="mt-1">
        Built with 💙 by Shailja Mehra
      </p>
    </footer>
  );
};

export default Footer;
