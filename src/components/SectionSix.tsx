import { Button } from 'antd'
import React from 'react'
import FooterSocial from '../assets/icons/FooterSocial'

import './index.css'

const SectionSix = () => {
  return (
    <div className='main1' style={{ backgroundColor: 'white', minHeight: '610px', display: 'flex', justifyContent: 'center', width: '100%',paddingRight: '12%', paddingLeft: '12%', paddingTop:'250px', paddingBottom:'250px' }}>
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 className='title-blue text-center'><span style={{backgroundColor:'#00A0E6', borderRadius:'25px', paddingLeft:'20px', paddingRight:'20px'}}>KIIEX es para todos</span> ¡no nos limitamos!</h1>
          <h1 style={{ marginTop: 0, textAlign: 'center', fontWeight:'bold', color:'white' }}>Bien sea que estás empezando, o que eres todo un profesional.</h1>
          <p className='text-center p-one' style={{fontSize:'20px', paddingLeft:'15%', paddingRight:'15%'}}>
          Una plataforma que piensa en tu seguridad, tu privacidad, tus recursos y tu experiencia,
          todo en un solo lugar. Haz trading desde cualquier lugar del mundo y con total confianza, recuerda que con
          nuestro equipo de soporte siempre hablarás con una persona, no con una máquina.
          </p>
          <p className='text-center p-one' style={{fontSize:'20px', paddingLeft:'15%', paddingRight:'15%'}}>
          Nuestra comunidad, día a día crece al igual que la inclusión financiera que queremos generar en todo el
          mundo, y esto lo logramos una operación a la vez.
          </p>
          <a href='https://exchange.kiiex.io/signup'><Button className='boton-two-comenzar' style={{backgroundColor:'white', height:'50px',  width:'450px',  fontSize:'25px',margin:'5px', fontWeight:'700'}}>
            ¡Regístrate ahora! 
          </Button>
          </a>
          <FooterSocial />
        </div>
      </div>
    </div>
  )
}

export default SectionSix