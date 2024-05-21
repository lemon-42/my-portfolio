import Image from 'next/image';

const Hero = () => {
	return (
		<div className="hero-container">
			<Image src='/images/julien.jpg' className='profile-img' width={300} height={300} alt="Lemon's personal headshot" />
			<div className='hero-text'>
				<h1>Hey, I'm Julien 👋</h1>
				<p>
					I'm a student full stack developper working in Zone01 Rouen Normandie. I like Linux, Open Source, and Free software!
				</p>
				<div className='social_icons'>
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
		</div>
	)
}

export default Hero;
