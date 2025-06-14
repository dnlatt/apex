// Footer.tsx
import {
  Copyright
} from 'lucide-react';
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Copyright />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
