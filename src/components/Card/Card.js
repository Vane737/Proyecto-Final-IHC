import moment from 'moment';

export default function Card({ image, text, newsDate }) {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top" alt="cardImagen" />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className='row'>
            <div className='col'>
                <div className='btn-group' role="group">
                    <button type="button" className="btn btn-outline-primary">View</button>
                    <button type="button" className="btn btn-outline-primary">Edit</button>
                </div>
            </div>
            <div className='col d-flex justify-content-end'>
                <p>{moment(newsDate).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
