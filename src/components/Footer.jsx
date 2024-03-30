import React from 'react';
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";


function Footer() {
  return (
    <footer className="airbnb-footer bg-gray-100">
      <hr className="mb-12" />
      <div className="container mx-auto flex justify-between">
        <div className="footer-column">
          <h4 className="font-medium mb-4">Support</h4>
          <ul className="text-slate-800 font-normal space-y-2">
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Accessibility</li>
            <li>Cancellation options</li>
            <li>Report Neighborhood Concern</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="font-medium mb-4">Hosting</h4>
          <ul className="text-slate-800 font-normal space-y-2">
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Join a free Hosting class</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="font-medium mb-4">Airbnb</h4>
          <ul className="text-slate-800 font-normal space-y-2">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
      <hr className="mt-12 mb-4 border-gray-300" />
      <div className="flex">
      <div className="ml-20 flex justify-start space-x-3"><p className="text-center text-slate-800 mb-4">&copy; 2024 Airbnb, Inc.</p>
      <p>·</p>
                    <p>Privacy</p>
                    <p>·</p>
                    <p>Terms</p>
                    <p>·</p>
                    <p>Sitemap</p>
                    <p>·</p>
                    <p>Company details</p>
                </div>
                <div class="ml-96 pl-20 flex justify-end text-end space-x-4 text-sm font-medium">
                <LanguageRoundedIcon className="globe-icon text-slate-800 ml-5 mr-5" />
                    <p>English(IN)</p>
                    <p>₹ INR</p>
                    <p>Support & resources</p>
                </div></div>
    </footer>
  );
}

export default Footer;
