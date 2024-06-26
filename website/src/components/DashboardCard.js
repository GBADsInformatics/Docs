import "./styles/DashboardCard.css";
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

function DashboardCard(props){
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1485);
    };

    handleResize(); // Call initially to set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className={clsx('col', { 'col--4': !isSmallScreen, 'col--5': isSmallScreen }, 'padding-vert--sm')} style={isSmallScreen? {"padding": "0%"} : {}}>
            <div className="text--center padding-horiz--md homepage-card">
                <div className="dash-text-container" style={{width: "75%"}}>
                    <h1 className="dash-title">{props.title}</h1>
                    <div className="align-ul-element">
                    {typeof props.relatedLinks !== 'undefined' &&
                      <ul style={{ listStyleType: "none", textAlign: 'center' }} id="ul-links">
                        {props.relatedLinks.map((link, idx) => (
                          <li key={idx} style={{display: "flex", justifyContent: "center"}}>
                            {/* Over 24 characters - must make font smaller */}
                              <a href={Object.values(link)[0]} className="dash-indv-title" style={{whiteSpace: "nowrap"}}>{Object.keys(link)[0]}</a>
                              <div style={{display: "flex", flexDirection: "row", marginLeft: "1%"}}>
                                {/* The below SVG is for the computer dashboard icon */}
                                <a href={Object.values(link)[0]} style={{marginLeft: "2%", marginTop: "1%"}} target="_blank" rel="noopener noreferrer">
                                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" width="24" height="24">
                                      <path d="M371.5 472.6c-2.5 3.8-6.6 6.1-11.1 6.1H151.6c-4.5 0-8.7-2.3-11.1-6.1-2.4-3.7-2.7-8.3-1-12.3 5.1-11.4 16.5-18.7 29-18.7h25v-22h125.1v22h25c12.5 0 23.8 7.4 29 18.7C374.3 464.3 373.9 469 371.5 472.6zM166.7 157.4c-6.9 25.7-30.5 44.7-58.3 44.7C75.1 202 48 175 48 141.7c0-27.9 19-51.4 44.7-58.3-.7 2.7-.3.9-.4 58.3 0 8.8 7.2 16 16 16C165.4 157.6 163.9 157.9 166.7 157.4z"></path>
                                      <path d="M168.7 141.7c0 2.9-2.4 5.3-5.3 5.3h-55c-2.9 0-5.3-2.4-5.3-5.3v-55c0-3 2.4-5.3 5.3-5.3C141.7 81.4 168.7 108.4 168.7 141.7zM163.4 234.4H53.3c-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3h110.1c2.9 0 5.3 2.4 5.3 5.3C168.7 232 166.3 234.4 163.4 234.4zM163.4 265.8H53.3c-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3h110.1c2.9 0 5.3 2.4 5.3 5.3C168.7 263.5 166.3 265.8 163.4 265.8zM163.4 297.3H53.3c-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3h110.1c2.9 0 5.3 2.4 5.3 5.3C168.7 294.9 166.3 297.3 163.4 297.3zM266.4 208.5v78.1c0 5.9-4.8 10.7-10.7 10.7h-22.2c-5.9 0-10.7-4.8-10.7-10.7v-78.1c0-5.9 4.7-10.7 10.7-10.7h22.2C261.6 197.8 266.4 202.6 266.4 208.5zM332.3 153.5v133.1c0 5.9-4.8 10.7-10.7 10.7h-22.2c-5.9 0-10.7-4.8-10.7-10.7V153.5c0-5.9 4.7-10.7 10.7-10.7h22.2C327.5 142.8 332.3 147.6 332.3 153.5zM398.1 208.5v78.1c0 5.9-4.8 10.7-10.7 10.7h-22.3c-5.9 0-10.7-4.8-10.7-10.7v-78.1c0-5.9 4.8-10.7 10.7-10.7h22.3C393.3 197.8 398.1 202.6 398.1 208.5zM464 175.9v110.7c0 5.9-4.8 10.7-10.7 10.7H431c-5.9 0-10.7-4.8-10.7-10.7V175.9c0-5.9 4.8-10.7 10.7-10.7h22.3C459.2 165.2 464 170 464 175.9z"></path>
                                      <path d="M376.3,170.3c-1.5,0-3-0.7-4.1-1.9l-62.2-74l-61.7,59.6c-2.1,2-5.5,2-7.5-0.1c-2-2.1-2-5.5,0.1-7.5l65.9-63.6c1.1-1,2.5-1.6,4-1.5c1.5,0.1,2.9,0.8,3.8,1.9l62.7,74.6l61.9-43.7c2.4-1.7,5.7-1.1,7.4,1.3c1.7,2.4,1.1,5.7-1.3,7.4l-65.9,46.6C378.5,170,377.4,170.3,376.3,170.3z"></path>
                                      <g>
                                          <path d="M256,359.2c-4,0-7.3,3.3-7.3,7.3s3.3,7.3,7.3,7.3s7.3-3.3,7.3-7.3S260,359.2,256,359.2z"></path>
                                          <path d="M485.3,33.3H26.7C11.9,33.3,0,45.2,0,59.9c0,8.5,0,342.8,0,322.4C0,397,11.9,409,26.7,409h458.7c14.7,0,26.7-12,26.7-26.7c0-40.7,0-281.9,0-322.4C512,45.2,500,33.3,485.3,33.3z M256,384.5c-9.9,0-18-8.1-18-18c0-9.9,8.1-18,18-18s18,8.1,18,18C274,376.4,265.9,384.5,256,384.5z M490.7,323.9H21.3v-264c0-2.9,2.4-5.3,5.3-5.3h458.7c2.9,0,5.3,2.4,5.3,5.3V323.9z"></path>
                                      </g>
                                  </svg>
                                </a>
                                {/* The below SVG is for the "i" or "information" icon */}
                                <a href={Object.values(link)[1] != null ? Object.values(link)[1] : null} target="_blank" rel="noopener noreferrer">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white ml-2" style={{marginLeft: "2%", marginTop: "1%"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                      <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/>
                                  </svg>
                                </a>
                                <a href={Object.values(link)[2] != null ? Object.values(link)[2] : null} target="_blank" rel="noopener noreferrer">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                                  </svg>
                                </a>
                              </div>
                          </li>
                        ))}
                      </ul>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;