import React from 'react';
import { navLinks } from './data';

export const NavLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <a href={link.href} className="nav-link">
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
