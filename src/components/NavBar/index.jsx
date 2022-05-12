import './NavBar.css';

const NavBar = ({ titulo = 'Bienvenido' }) => {
  return (
    <header className="header">
      <h1 className="title">{titulo}</h1>
      <nav className="navbar">
        <a href="#">Inicio</a>
        <a href="#">Pagina 1</a>
        <a href="#">Pagina 2</a>
      </nav>
    </header>
  );
};
export default NavBar;
