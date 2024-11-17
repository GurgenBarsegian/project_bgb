import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPage} >
      <div className={s.box}>
        <svg  viewBox="0 0 180 246" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M98.8445 139.709V96.7939H151.608V139.709H179.398V187.196H151.608V245.94H98.8445V187.196H0V145.337L87.5882 0.0599365H147.387L64.0203 139.709H98.8445Z" fill="#92A234" />
        </svg>

        <img src="https://s3-alpha-sig.figma.com/img/aa34/a6c3/4c6b9a19119e218b25ecd49e30e90865?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AS3KgdVizqvEB2t-a7z33nv3PPbBlVXdU5DsKh9gwTjw8j8oMYQSx7e85PbE0vRyihYHeETK0nGMg7FqVpOgDJIz02yYSmY0tbL5atryeHQi5bebHar03meTyywE85C50qJEevNE03Ybpwbdi1aXIcBYTdxMN9O17V04AD0A8MsubLYr365hfT9VzXFq73XJ1oF80iVuz2iYAAcnkvn13UXdcZ48p5dE8AeQj29UpGvJtFIejUqK~Y3g-ZtsCrxJ9ftGBm-aXDrUk-edIIkP~7Y-bb17jtPx7yX6Rcc5pFxqfVnj2z~Lm-MdC4KLFzhATuAb~X103disWbacDX5~Ng__" alt="zero" />
        <svg  viewBox="0 0 180 246" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M98.8445 139.709V96.7939H151.608V139.709H179.398V187.196H151.608V245.94H98.8445V187.196H0V145.337L87.5882 0.0599365H147.387L64.0203 139.709H98.8445Z" fill="#92A234" />
        </svg>

      </div>

      <div className={s.text}>
        <h2>Page Not Found</h2>
        <p>We’re sorry, the page you requested could not be found.</p>
        <p> Please go back to the homepage.</p>
      </div>
      <Link to='/'>
        <div className={s.button}>Go Home</div>
      </Link>

    </div>
  )
}
