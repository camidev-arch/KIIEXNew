import { Button, Card, Col, Image, Input, Row } from 'antd'
import React, { useEffect, useRef } from 'react'
import RedesSociales from './RedesSociales'
import fondo from '../assets/backgrounds/BANNER-5.png'
import { ArrowRightOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'
import ArrowRigth from '../assets/icons/ArrowRigth'

const SectionOnePeople = () => {
    
    const myComponentRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
      if(myComponentRef.current !== null) {
        myComponentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
    
    return (<>
        <Row ref={myComponentRef} className='main-row-one-people' >
            <Col className='column-one-one' xs={24} md={12} lg={14} span={14} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', padding: '0px', height: '100%', }} style={{ height: '100%' }}>
                    <h1 className='main-title3' >
                        <span style={{color:'#00A0E6'}}>El exchange más confiable</span> para comprar, vender y hacer trading con Criptomonedas
                    </h1>
                    <p className='main-p2' style={{ fontSize: '35px', }}>
                        Una plataforma que nació siendo segura e intuitiva <br></br>para ti, en todo lugar y momento.
                    </p>
                    <Row >
                        <Col xs={24} md={8} lg={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
                            <a href='https://ui.kiire.apstage.net/signup'><Button className='btn-registrar3' style={{ height: '50px', width: '500px', textAlign:'center', alignItems:'center !important' }} >Crea tu cuenta ahora</Button></a>
                            <span className="disclaimar" style={{ fontSize: '25px',minWidth:'300px' }}>¿Ya tienes una cuenta? <a style={{ color: '#00a0e6' }} href='https://ui.kiire.apstage.net/login'>Iniciar sesión</a></span>
                        </Col>
                    </Row>
                </Card>
            </Col>

        </Row>
        <Row className='fix-row row-people-blue' style={{ paddingLeft: '12%', paddingRight: '12%', backgroundColor: 'white', paddingBottom: '100px', minHeight: '300px', paddingTop:'100px' }}>
                <h1 className='card-titulo' style={{ color: 'white', }}>Sé parte de una economía digital pensada en soluciones reales para personas reales.<br></br></h1> 
        <a href='https://ui.kiire.apstage.net/signup'><Button className='boton-comienza-ahora2' style={{ backgroundColor: 'white', height: '50px', width: '230px', fontSize: '20px', margin: '10px' }}>Regístrate aquí</Button></a>

        </Row>
    </>

    )
}

export default SectionOnePeople