export default function Header() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
          <div className="nav-container">
              <h1>Vikashvar Rajan</h1>
              <ul>
                  <li><a href="#about" onClick={handleScroll}>About</a></li>
                  <li><a href="#services" onClick={handleScroll}>Services</a></li>
                  <li><a href="#tech-stack" onClick={handleScroll}>Tech Stack</a></li>
                  <li><a href="#experience" onClick={handleScroll}>Experience</a></li>
                  <li><a href="#education" onClick={handleScroll}>Education</a></li>
                  <li><a href="#portfolio" onClick={handleScroll}>Portfolio</a></li>
                  <li><a href="#blog" onClick={handleScroll}>Blog</a></li>
                  <li><a href="#contact" onClick={handleScroll}>Contact</a></li>
              </ul>
          </div>
      </nav>
    </header>
  );
}
