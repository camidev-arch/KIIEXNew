import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'
import './index.css'


const SectionTwo = () => {
  return (
    <Row className='main-row-two' >
    <Col xs={24} md={8} lg={8} span={8} className='col-two-two'>
        <a href='https://exchange.kiiex.io/signup'><Button className='boton-comienza-ahora2' style={{ height:'40px',  width:'530px',  fontSize:'20px',margin:'10px'}}>Regístrate aquí</Button></a>
    </Col>
</Row>
  )
}

export default SectionTwo