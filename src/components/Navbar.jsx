import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Lemon&apos;s Portfolio
        </Link>
      </div>
      <Link href="/projects" className="cta-btn">My projects</Link>
    </div>
  )
}

export default Navbar;
