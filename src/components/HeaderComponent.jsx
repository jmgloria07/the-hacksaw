import React, { useEffect, useState } from 'react'

const HeaderComponent = () => {

  const COLOR_MODE_TOGGLE_KEY = 'hacksaw.isDarkMode';

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let persistedIsDarkMode = localStorage.getItem(COLOR_MODE_TOGGLE_KEY) === 'true';
    setTheme(persistedIsDarkMode);
  }, []);

  const setTheme = (_isDarkMode) => {
    const theme = _isDarkMode ? "dark" : "light";
    document.body.setAttribute("data-bs-theme", theme);
    setIsDarkMode(_isDarkMode);
  };

  const handleToggleTheme = () => {
    let _isDarkMode = !isDarkMode;

    localStorage.setItem(COLOR_MODE_TOGGLE_KEY, _isDarkMode);
    setTheme(_isDarkMode);
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src='/THE-HACKSAW.svg' alt='Logo' width='30' height='24' className='d-inline-block align-text-top' />
          <i>THE-HACKSAW</i>
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/home'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/compute'>Compute</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle disabled' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Past Computes
              </a>
              <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#'>Action</a></li>
                <li><a className='dropdown-item' href='#'>Another action</a></li>
                <li><a className='dropdown-item' href='#'>See All</a></li>
              </ul>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='/about'>About</a>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <hr />
            <li className='nav-item'>
              <a className='nav-link' role='button'
                onClick={handleToggleTheme}>
                <i className={`bi bi-${isDarkMode ? 'moon-stars-fill' : 'sun'} m-2`} />
                Toggle Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent;