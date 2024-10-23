import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import CategoriesPageForMain from '../CategoriesPageForMain';
import FirstOrderSale from '../../components/FirstOrderSale';
import SalesForBody from '../../components/SalesForBody';

export default function MainPage() {
  return (
    <div>

      <div className={s.main}>
       <img src="https://s3-alpha-sig.figma.com/img/eb81/c5d0/359e50ac758bdbf427eb5902032c47cb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d9IY~K50Rch7TKzoT-EFGdEGKyXBXLwJfionmVdMW4x~0oqHe08Bmv-7MXOusMGMSvbscRSRaHT~CGkwzAOqXahhWcQ8~uxqxp72QWkbo6~hfpWda~lvPp6xeoFN9lrvwGoovEbveq3A9kJ7ppDXCWKWnMBwcJhGyagT5jLyJskWrhcAWYy18H2j9kZS3QDioO4~DoQRko2D2wmouHiwl7yVsULosWqDG5UDz0TWOEObmE5tfOhlC2UtZaF4MSxTPFVkOSJA~7WbXA2uAWny5IaBTHm~s0ZiM2f7v7a7LSMHV8A0PiFslAapzbxCTkf07YLxpgd0UGK-o7RmZjB9eg__" alt="" />  
      <div className={s.Main}>
           <p >Amazing Discounts</p>
           <p>on Garden Products!</p>
           <Link to='/sales'>Check out</Link>
      </div>
       </div>

        <CategoriesPageForMain/>
        <FirstOrderSale/>
        <SalesForBody />

    </div>
  )
}
