import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-center fixed bottom-0 left-0 w-full py-2">
      &copy; {currentYear} All Rights Reserved, Shreesanyog Rath
    </div>
  )
}

export default Footer;
