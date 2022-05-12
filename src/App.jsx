import Card from './components/Card';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const userA = {
    name: 'Agustin',
    lastName: 'Leguizamon',
    photo:
      'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044-300x300.jpg',
  };

  const userB = {
    name: 'Pilar',
    lastName: 'Apellido',
  };

  return (
    <>
      <NavBar titulo={'Ada - Clase 90'} />
      <div className="container">
        <Card user={userA} />
        <Card user={userB} />
      </div>
      <ul>
        <li>
          Crear un componente NavBar que pase por props un <b>titulo</b>
        </li>
        <li>Si no le paso la prop titulo, tiene que quedar uno por defecto</li>
        <li>
          Crear un componente Card que pase por props un <b>Usuario</b> como
          objeto
        </li>
        <li>
          Repetir el componente <b>Card</b> con 2 usuarios distintos
        </li>
        <li>
          <b>EXTRA</b> 1 usuario no tiene que tener una foto se le pondra por
          defecto la siguiente
          <a
            href="https://secure.gravatar.com/avatar/10432cb6335abedfea55593fe17c7e33?s=96&d=mm&r=g%22"
            target="_blank"
          >
            {' '}
            Imagen{' '}
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
