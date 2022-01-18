function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-image" src="./react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons why I'm excited to learn React</h1>
      <ol>
        <li> It's cool!</li>
        <li> Has well over 100k stars on GitHub</li>
        <li> Is mantained by Facebook</li>
        <li> Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>©2022 Santos development. All rights reserved.</small>{" "}
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
