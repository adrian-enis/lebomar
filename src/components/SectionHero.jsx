import React from 'react'
import oficina from "../img/oficina.jpg"
const SectionHero = () => {
  return (
    <section className='section-hero'>
        <div className="img-overlay">

          <img src={oficina} alt="oficina" />
        </div>
        <article className='article-hero contenedor'>
          <h2 className='title-hero'>Suministro de Oficina</h2>
          <p className='description-hero'>Impresoras, monitores, UPS, accesorias de oficina y todo lo necesario para tu negocio</p>
          <button className="btn-hero" type='button'>Ver mas</button>
        </article>
      </section>
  )
}

export default SectionHero