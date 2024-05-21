import Image from 'next/image';

const About = () => {
	return (
		<div className='about-container'>
			<h2>About Me</h2>
			<div className='flex-about'>
				<div className='about-text'>
					<p>
						Computers have been my passion since I was a child. Having a computer, being able to tinker with it, understanding how it works has always interested me. Before joining Zone01, I began to take a closer interest in cybersecurity by doing CTFs and other similar exercises. However, I had no programming experience. My only basic knowledge was python for cybersecurity CTFs.
					</p>
					<p>
						Then I discovered Zone 01 training, a two-year face-to-face program. This training program is based on collective intelligence and is distinguished by the absence of courses and teachers. Students work exclusively on projects, with a minimum of 50 to complete, followed by a specialization at the end of the course. For my part, I opted for the cybersecurity specialization, which was my goal from the start.
					</p>
				</div>
				<div className='about-img'>
					<Image src='/images/about.jpg' className='profile-img' width={300} height={500}/>
				</div>
			</div>
		</div>
	)
}

export default About;
