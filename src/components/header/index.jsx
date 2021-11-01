import React from 'react';
import './style.css';
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo.png';
import userMob from '../../assets/img/user-mob.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>
          <a href='https://qsoft.ru/' className='header__logo'>
            <img src={logo} width='144px' height='39px' alt='logo' />
          </a>

          <div className='search__wrapper'>
            <form
              className='search-form'
              action='https://echo.htmlacademy.ru'
              method='post'
            >
              <input
                type='search'
                name='search'
                id='search'
                placeholder='Найти...'
              />
              <label htmlFor='search'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 17L12.4286 12.4286M7.85714 14.7143C4.07005 14.7143 1 11.6442 1 7.85714C1 4.07005 4.07005 1 7.85714 1C11.6442 1 14.7143 4.07005 14.7143 7.85714C14.7143 11.6442 11.6442 14.7143 7.85714 14.7143Z'
                    stroke='#A9A9A9'
                  />
                </svg>
              </label>
            </form>
          </div>

          <span className='header__user'>Константин</span>

          <picture>
            <source media='(max-width: 767px)' srcSet={userMob} />
            <img
              className='header__avatar'
              src={avatar}
              width='40px'
              height='40px'
              alt='ava'
            />
          </picture>
        </div>
      </header>
    );
  }
}
