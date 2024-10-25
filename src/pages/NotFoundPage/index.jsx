import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPage} >
      <div className={s.box}>
        <span>4</span>
        <img src="https://s3-alpha-sig.figma.com/img/aa34/a6c3/4c6b9a19119e218b25ecd49e30e90865?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxOW3nzWLuSY2RlRUDFtGmw5-fZ7hYZ9d~uwVV1nh0D2kqmikhO3R3a-q7drmM-mPni2qFNqKv7Vk-MP3VHlAzgFehYMLGlp8peeDTWc7dbcTQlI6wj4A9qUhIamN2pt4oP81486LT6UgKq3m0Eq0nJ-xnKQ7DtJAp39nPyVf0UBEy4aIXXXODRQsOImSPjpZivmOZfRZBBoPwbtH-m9sUJBijapWc8XsO8CErHoay~h1bSUPzaRxCwfGncKU9vSPF4J~2CWkX3pmU~2762xr4O2VzQoatXXkaqC3~Ym0v~cAwko6frOFD5wvt9eN-qvW02ZNzzDkWMrfEdkRLKD8A__" alt="zero" />
        <span>4</span>
      </div>
      <h2>Page Not Found</h2>
      <div className={s.text}>
    
      <p>We’re sorry, the page you requested could not be found.</p>
        <p> Please go back to the homepage.</p>
        </div>
      <Link to='/'>
    <div className={s.button}>Go Home</div>
      </Link>

    </div>
  )
}
