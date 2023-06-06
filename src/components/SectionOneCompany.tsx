import { Button, Card, Col, Image, Input, Row } from 'antd'

import fondo from '../assets/icons/banner-thumb.png'
import Title from 'antd/lib/typography/Title'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import GoogleStoreIcon from '../assets/icons/GoogleStoreIcon'
import QrIcon from '../assets/icons/QrIcon'
import ApiIcon from '../assets/icons/ApiIcon'
import RSTG from '../assets/icons/RSTG'
import RSLK from '../assets/icons/RSLK'
import RSTW from '../assets/icons/RSTW'
import RSIG from '../assets/icons/RSIG'
import RSFB from './RSFB'
import RSWS from '../assets/icons/RSWS'
import ArrowRigth from '../assets/icons/ArrowRigth'
import RedesSociales from './RedesSociales'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useEffect, useRef } from 'react'

const SectionOneCompany = () => {
    const myComponentRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
      if(myComponentRef.current !== null) {
        myComponentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
    return (
        <Row ref={myComponentRef} className='main-row-one-company' >
            <Col className='column-one-one' xs={24} md={12} lg={14} span={14} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', padding: '0px', height: '100%' }} style={{ height: '100%' }}>
                    <h1 className='main-title2' >
                    ¿Tienes un negocio y <br></br> quieres recibir crypto?<br></br><br></br>
                    </h1>
                    <p className='p-company-one'>
                        A través de KIIEX podrás monetizar todos<br></br>tus ingresos en cuestión de segundos.
                    </p>
                    <Row style={{ width: '100%' }}>
                        <Col xs={24} md={8} lg={8} style={{display:'flex', justifyContent:'center'}}>
                        <a href='https://ui.kiire.apstage.net/login'><Button className='boton-one1' >Escríbenos</Button></a>
                        </Col>
                    </Row>
                </Card>
            </Col>

        </Row>
    )
}

export default SectionOneCompany