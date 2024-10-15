import React from "react";

const PageLink = ({ itemClass, link }) => {
  const { id, text, href } = link;
  return (
    <li key={id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
