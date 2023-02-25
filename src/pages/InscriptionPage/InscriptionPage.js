import './InscriptionPage.css'

export default function InscriptionPage() {

    const semestres = {}

    return(
        <div className=''>
            <div className="nav-bar-style"></div>
            <div className='container'>
                <div className='py-4 my-4'>
                    <h2>Grupos Ofertados</h2>
                </div>
                <div className='row'>
                    <div className='col my-2 after-line text-center'>
                        <h4 className=''>Cuadro Horario</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-2 after-line'>
                        <h4 className=''>Primer Semestre</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-2 after-line'>
                        <h4 className=''>Segundo Semestre</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-2 after-line'>
                        <h4>Electivas</h4>
                    </div>
                </div>
            </div>
        </div>
    );

}