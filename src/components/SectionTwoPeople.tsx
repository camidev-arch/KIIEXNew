import { Button } from 'antd'
import React from 'react'

const SectionTwoPeople = () => {
    return (
        
        <div className='fix-row2 container-fluid main1' style={{ backgroundColor: 'rgb(242 242 242 / 7%) ', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%', paddingRight: '12%', paddingLeft: '12%', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }} >
                    <h1 className='title-blue text-center'>¡Staking para todos!</h1>
                    <h1 className='subtitle-three-people text-center' style={{ marginTop: 0, textAlign: 'start' }}>Gana recompensas por bloquear tus criptomonedas con KIIEX.
                    En 3 pasos sencillos</h1>
                    <p style={{ marginTop: 0, textAlign: 'start' }} className='title-blue p-three-people main-p2 text-center'>
                        1. Debes tener una cuenta creada con KIIEX.
                    </p>
                    <p className='title-blue p-three-people main-p2 text-center'>
                    2. Debes tener KII, nuestra ciptomoneda en tu saldo.
                    </p>
                    <p className='title-blue p-three-people main-p2 text-center'>
                    3. Debes elegir el periodo de tiempo que quieres bloquear tu saldo.
                    </p>
                    <p className='title-blue p-three-people main-p2 text-center'>
                    4. Disfruta de tus recompensas mes a mes.
                    </p>
                    <h1 className='titulo' style={{ marginTop: 0, textAlign: 'center' }}>Desde ya puedes ver cómo será tu programa de Staking y cómo serán tus recompensas.
                    <br></br>Prueba nuestra calculadora de simulación de Staking:</h1>
                </div>
            </div>
        </div>
    )
}

export default SectionTwoPeople