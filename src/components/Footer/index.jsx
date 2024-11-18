<<<<<<< HEAD
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h2 className={s.contactText}>Contact</h2>


      <div className={s.cardsWrapper}>
        <div className={s.phone}>

          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>

        <div className={s.socials}>
          <p className={s.socialsText}>Socials</p>
          <a href='https://www.instagram.com/'>
            <RiInstagramFill className={s.socialsInstaIcon} />
          </a>
          <a href='https://web.whatsapp.com/'>
            <IoLogoWhatsapp className={s.socialsWhatsappIcon} />
          </a>

        </div>

        <div className={s.address}>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>

        <div className={s.hours}>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.1029033672477!2d13.374864988738807!3d52.50788960997745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sde!2sde!4v1728592487379!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={s.map}></iframe>
      </div>

    </footer>
  )
}
=======

>>>>>>> fe11390c72764016f42d1b9c35eb708b0333b5d3
