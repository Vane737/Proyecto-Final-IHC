import './Card.css';
export default function Card({ titulo, carrera, icono }) {
  return (
    <div>
      <div className="card border-light shadow-sm card-curstom">
        {/* <img src={image} className="card-img-top" alt="cardImagen" /> */}
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-9">
              <h6 className="text-custom">{titulo}</h6>
              <h6 className='text-custom'>{carrera}</h6>
            </div>
            <div className="col-3">
              <i className={`${icono} icon-custom`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
