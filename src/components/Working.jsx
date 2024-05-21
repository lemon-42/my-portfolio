import Link from 'next/link';
import { projectData } from './data';

const Working = () => {
	return (
		<div>
			<h1>My current working projects</h1>
			<div>
		{projectData.map((project) => (
			<Link key={project.id} href={`/projects/${project.id}`} legacyBehavior>
				<a>
					<div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</div>
				</a>
			</Link>
		))}
			</div>	

		</div>
	);
};

export default Working;
