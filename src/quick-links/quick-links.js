import React, { useState } from 'react';

function QuickLinks(props) {
  const [links, setLinks] = useState(props.links);

  const handleHide = (id) => {
      const updatedLinks = links.filter(link => link.id !== id);
      setLinks(updatedLinks);
  };

  return (
      <ul className="circular-buttons-container">
          {links.map(link => (
              <li key={link.alt} className="circular-button">
                  <img src={link.src} alt={link.alt} />
                  <span> {link.text} </span>
                  <button onClick={() => handleHide(link.id)}>hide</button>
              </li>
          ))}
      </ul>
  );
}

export default QuickLinks;
