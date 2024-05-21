import Working from '@/components/Working';
import Head from 'next/head';

const Projects = () => {
	return (
		<>
			<Head>
				<title>My current projects</title>
			</Head>
			<div>
				<Working />
			</div>
		</>
	)
};

export default Projects;
