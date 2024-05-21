const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Lemon's Portfolio
        </p>
        <div className="social_icons">
          <a
            href="https://github.com/lemon-42"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/julien-dasilva-21a54a284/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
