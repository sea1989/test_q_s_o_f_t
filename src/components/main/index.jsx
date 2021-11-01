import React from 'react';
import './style.css';
import henkel from '../../assets/img/henkel@1x.png';
import john from '../../assets/img/john@1x.png';
import mac from '../../assets/img/mac@1x.png';
import ikea from '../../assets/img/ikea@1x.png';
import reebok from '../../assets/img/reebok@1x.png';
import nike from '../../assets/img/nike@1x.png';
import cat from '../../assets/img/cat@1x.png';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h1 className='visually-hidden'>Тестовое задание</h1>
        <section className='partners'>
          <h2 className='partners__title'>Наши партнёры</h2>

          <ul className='partners__list'>
            <li className='partners__item partners__item-henkel'>
              <a className='partners__link' href='henkel.com'>
                <img
                  src={henkel}
                  alt='Логотип компании Henkel'
                  width='117'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-john'>
              <a className='partners__link' href='john.com'>
                <img
                  src={john}
                  alt='Логотип компании John Deere'
                  width='234'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-mac'>
              <a className='partners__link' href='mcdonalds.com'>
                <img
                  src={mac}
                  alt='Логотип компании McDonalds'
                  width='85'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-ikea'>
              <a className='partners__link' href='ikea.com'>
                <img
                  src={ikea}
                  alt='Логотип компании Ikea'
                  width='160'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-reebok'>
              <a className='partners__link' href='reebok.com'>
                <img
                  src={reebok}
                  alt='Логотип компании Reebok'
                  width='234'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-nike'>
              <a className='partners__link' href='nike.com'>
                <img
                  src={nike}
                  alt='Логотип компании Nike'
                  width='122'
                  height='64'
                />
              </a>
            </li>

            <li className='partners__item partners__item-cat'>
              <a className='partners__link' href='cat.com'>
                <img
                  src={cat}
                  alt='Логотип компании CAT'
                  width='234'
                  height='36'
                />
              </a>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}
