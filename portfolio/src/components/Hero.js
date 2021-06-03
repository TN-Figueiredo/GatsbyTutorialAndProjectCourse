import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Thiago</h1>
            <h4>freelance web and mobile UI/UX Design</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-link">
              {socialLinks.map(({ id, icon, url }) => (
                <a key={id} href={url} className="social-link">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
