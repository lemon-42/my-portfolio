import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Lemon&apos;s Portfolio
        </Link>
      </div>
      <a href="/projects" className="cta-btn">My projects</a>
    </div>
  )
}

export default Navbar;
