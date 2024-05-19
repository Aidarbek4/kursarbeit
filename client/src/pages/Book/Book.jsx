import React from 'react'
import "./book.scss"
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from 'react-router-dom';

function Book() {
  return (
    <section className="book">
      <div className="container">
        <div className="book__inner">
          <h1 className="book__title">Проведие вечер с удовольствием</h1>
          <p className="book__text">
            Для этого нужно всего лишь связаться с нами и забронировать столик
          </p>
          <div className="book__contacts">
            <Link className='book__contact' target='_blank' to="https://instagram.com/yourfoggymind">
              <InstagramIcon className='book__icon' />
            </Link>
            <Link className='book__contact' target='_blank' to="https://t.me/yourfoggymind">
              <TelegramIcon className='book__icon' />
            </Link>
            <Link className='book__contact' target='_blank' to="https://web.whatsaap.com">
              <WhatsAppIcon className='book__icon' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book