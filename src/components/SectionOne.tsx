import { Button, Card, Col, Image, Input, Row } from 'antd'
import fondo from '../assets/backgrounds/mobiles.png'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import GoogleStoreIcon from '../assets/icons/GoogleStoreIcon'
import QrIcon from '../assets/icons/QrIcon'
import ApiIcon from '../assets/icons/ApiIcon'
import ArrowRigth from '../assets/icons/ArrowRigth'
import RedesSociales from './RedesSociales'
import { useEffect, useRef, useState } from 'react'

const SectionOne = () => {
    const [apple, setApple] = useState(false)
    const [qr, setQr] = useState(false)
    const [api, setApi] = useState(false)
    const [gg, setGg] = useState(false)

    const myComponentRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
      if(myComponentRef.current !== null) {
        myComponentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
    return (
        <Row id='top' className='bg-home main-row-one' ref={myComponentRef} style={{ paddingRight: '5%', paddingLeft: '5%' }}>
            <Col  className='column-one-one' xs={24} md={12} lg={12} span={12} >
                <Card className='card-style' bodyStyle={{ display: 'flex', color:'white', flexDirection: 'column', textAlign: 'center', width:'100%', padding:'0px' }} style={{}}>
                    <p className='main-p' >
                    Nuestro Exchange está pensado en una experiencia de usuario fácil e intuitiva. Somos la
                    plataforma ideal para hacer trading con las herramientas y comisiones más competitivas
                    del mercado.
                    </p>
                    <Row style={{ width: '100%' }}>

                        <Col  xs={24} md={8} lg={8} >
                        <a href='https://exchange.kiiex.io/signup'><Button className='boton-one' style={{width:'100%', alignItems:'center', textAlign:'center', justifyContent: 'space-around'}}>Comenzar Ahora</Button></a>
                        </Col>
                    </Row>
                </Card>
            </Col>

         
        </Row>
    )
}

export default SectionOne