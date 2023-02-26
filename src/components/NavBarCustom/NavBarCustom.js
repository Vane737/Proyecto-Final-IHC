import './NavBarCustom.css';

export default function NavBarCustom() {
  return (
    <div>
      <div className="nav-azul"></div>
      <div className="nav-rojo d-flex justify-content-center align-items-center">
        <img
          src={require('../../assets/images/logo.png')}
          className="img-fluid img-custom"
          alt="Logo universidad Gabriel Rene Moreno"
        />
      </div>
    </div>
  );
}
