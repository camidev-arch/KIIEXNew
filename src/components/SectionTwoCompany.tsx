import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import './index.css'
import { TransaccionEficaz } from '../assets/icons/TransaccionEficaz'
import FastConfigIcon from '../assets/icons/FastConfigIcon'
import WorldIcon from '../assets/icons/WorldIcon'
import CardCompany from './CardCompany'
import { ArrowRightOutlined } from '@ant-design/icons'
import ArrowRigth from '../assets/icons/ArrowRigth'

const CARDS = [
    {
        title: 'Configuración Rápida',
        description: 'De los primeros pasos en solo minutos con nuestro producto autogestionado',
        icon: (color: string) => <FastConfigIcon width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Conversión sencilla',
        description: 'Puedes cambiar tus criptomonedas por efectivo con nuestro producto gestionado por KIIEX.',
        icon: (color: string) => <TransaccionEficaz width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Mercado Global',
        description: 'Recibe pagos en cualquier momento de clientes que estén en cualquier lugar del mundo.',
        icon: (color: string) => <WorldIcon width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Mercado Global',
        description: 'Recibe pagos en cualquier momento de clientes que estén en cualquier lugar del mundo.',
        icon: (color: string) => <WorldIcon width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Mercado Global',
        description: 'Recibe pagos en cualquier momento de clientes que estén en cualquier lugar del mundo.',
        icon: (color: string) => <WorldIcon width='50px' heigth='50px' color={color} />
    },

]
const SectionTwoCompany = () => {
    return (
        <>
            <Row className='row-center main-row-three' style={{ paddingRight: '10%', paddingLeft: '10%' }} >
                <Col span={24} style={{ paddingTop: '100px', marginBottom: '60px', }}>
                    <h1 className='title-section-two-company' >
                        KIIEX   
                    </h1>
                    <h1 className='subtitle-section-two-company'  >
                        <b style={{color:'#2c133d !important'}}>Somos el aliado crypto <span style={{color:'#00A0E6'}}>más confiable</span> para tu negocio</b>
                    </h1>
                    <p className='p-section-two-company'>
                    Con nuestro ecosistema puedes recibir crypto como método de pago en tu negocio. Con
                    KIIEX puedes monetizar tus KII cada vez que lo desees de manera fácil y segura.     
                    </p>
                </Col>
            </Row>
            <Row style={{ paddingRight: '12%', paddingLeft: '12%', backgroundColor: 'rgb(242 242 242 / 7%) ', paddingBottom: '100px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                {CARDS.map((card) => {
                    return <Col md={8} xs={24} lg={8} span={8} style={{display:'flex', justifyContent:'center'}}> <CardCompany colorText='#0F4DCC' description={card.description} title={card.title} icon={card.icon} /> </Col>
                })}
            </Row>

        </>
    )
}

export default SectionTwoCompany