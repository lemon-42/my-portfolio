import { useRouter } from "next/router";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
const { Prism: SyntaxHighlighter } = require('react-syntax-highlighter');
const { gruvboxDark } = require('react-syntax-highlighter/dist/cjs/styles/prism');
import styles from "./ProjectDetails.module.css";

/*const ProjectDetail = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={gruvboxDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          a({ href, children, ...props }) {
            return (
              <a href={href} className={styles.link} {...props}>
                {children}
              </a>
            );
          }
        }}
      >
        {project.content}
      </ReactMarkdown>
      <br />
      <Link href="/projects" legacyBehavior>
        <a className={styles.backLink}>Back to projects</a>
      </Link>
    </div>
  );
};
*/

const ProjectDetail = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return <p>Project not found</p>;
  }

  const renderers = {
    code({ language, value }) {
      return (
        <SyntaxHighlighter
          style={gruvboxDark}
          language={language}
        >
          {value}
        </SyntaxHighlighter>
      );
    },
    a({ href, children, ...props }) {
      return (
        <a href={href} className={styles.link} {...props}>
          {children}
        </a>
      );
    }
  };

  return (
    <div className={styles.container}>
      <ReactMarkdown components={renderers}>
        {project.content}
      </ReactMarkdown>
      <br />
      <Link href="/projects" legacyBehavior>
        <a className={styles.backLink}>Back to projects</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join(process.cwd(), 'src/pages/projects'));
	const paths = files.map(filename => ({
		params: { id: filename.replace('.md', '') }
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src/pages/projects', `${params.id}.md`), 'utf8');
	const { content } = matter(markdownWithMeta);

	return {
		props: {
			project: {
				content,
			},
		},
	};
}

export default ProjectDetail;
