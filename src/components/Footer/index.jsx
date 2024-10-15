import React from 'react';
import s from './index.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h2>Contact</h2>

      <div>
        <div>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>

        <div>
          <p>Socials</p>
          <div><a href="https://www.instagram.com" target="_blank" class="link1"><RiInstagramFill /></a></div>
          <div><a href="https://web.whatsapp.com" target="_blank" class="link1"><IoLogoWhatsapp /></a></div>
        </div>

        <div>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>

        <div>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.1029033672477!2d13.374864988738807!3d52.50788960997745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sde!2sde!4v1728592487379!5m2!1sde!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </footer>
  )
}

