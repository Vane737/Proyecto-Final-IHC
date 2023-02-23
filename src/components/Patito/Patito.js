import patitoPic from '../../assets/images/patito.png';
export default function Patito () {
  return (
    <>
      <div className="my-3 text-center">
        <img src={patitoPic} alt="Patito Pic" className="img-fluid" width="300"/>
      </div>
    </>
  )
}