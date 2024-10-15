import React from "react";
import { socialIcons } from "./data";

const SocialIcons = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialIcons.map((socialIcon) => {
        const { id, href, icon } = socialIcon;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
