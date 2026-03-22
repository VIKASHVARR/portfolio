export default function Footer() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
        <div className="container">
            <ul>
                <li><a href="#about" onClick={handleScroll}>About</a></li>
                <li><a href="#experience" onClick={handleScroll}>Experience</a></li>
                <li><a href="#education" onClick={handleScroll}>Education</a></li>
                <li><a href="#portfolio" onClick={handleScroll}>Portfolio</a></li>
                <li><a href="#blog" onClick={handleScroll}>Blog</a></li>
                <li><a href="#contact" onClick={handleScroll}>Contact</a></li>
            </ul>
        </div>
    </footer>
  );
}
