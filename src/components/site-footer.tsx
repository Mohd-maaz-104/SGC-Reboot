import Link from "next/link";

const navigation = [
  { href: "/", label: "About SGC" },
  { href: "/people", label: "People" },
  { href: "/today", label: "Activities" },
  { href: "/events", label: "Events" },
  { href: "/alumni", label: "Alumni" },
  { href: "/search", label: "Search" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="footer-brand" href="/">
          <span>SGC</span>
          <span>Student Guidance Cell</span>
        </Link>
        <p className="footer-motto">Zeal and Zest to Be.</p>
      </div>
      <nav aria-label="Footer navigation" className="footer-nav">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>C. Abdul Hakeem College of Engineering and Technology · Melvisharam, Tamil Nadu</span>
        <a href="https://teamsgc.in/" target="_blank" rel="noreferrer">
          SGC official website ↗
        </a>
      </div>
    </footer>
  );
}
