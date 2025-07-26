import { Link } from "wouter";
import { XDSLogo } from "@/assets/logo";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export const Footer = () => {
  const serviceAreas = [
    "Dandenong", "Noble Park", "Hallam", "Hampton Park",
    "Berwick", "Cranbourne", "Narre Warren", "Pakenham",
    "Frankston", "Carrum Downs", "Heatherton", "Springvale"
  ];

  return (
    <footer className="bg-xds-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
                <span className="bg-xds-yellow text-black font-bold px-1.5 py-0.5 rounded text-xs mr-1">L</span>
                <span className="bg-xds-red text-white font-bold px-1.5 py-0.5 rounded text-xs mr-1">P</span>
                <span className="bg-xds-green text-white font-bold px-1.5 py-0.5 rounded text-xs mr-1">P</span>
                <span className="text-xds-orange font-bold">XDS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Melbourne's most trusted driving school with guaranteed pass rates and professional instruction.
            </p>
            <div className="text-sm space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>124 Stud Rd, Dandenong VIC 3175</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>0434 538 142</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>7 days a week, flexible scheduling</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-xds-orange transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/suburbs" className="hover:text-xds-orange transition">
                  Suburbs
                </Link>
              </li>
              <li>
                <Link href="/drive-test-info" className="hover:text-xds-orange transition">
                  Drive Test Info
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-xds-orange transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Social & Reviews */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://g.co/kgs/XajFr8D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-xds-green transition"
              >
                <Star className="w-4 h-4 mr-2" />
                Google Reviews
              </a>
              <a
                href="https://www.facebook.com/xzavierdrivingschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="tel:0434538142"
                className="flex items-center text-sm text-gray-300 hover:text-xds-orange transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Xzavier Driving School. All rights reserved. | VicRoads Approved Instructor
          </p>
        </div>
      </div>
    </footer>
  );
};
