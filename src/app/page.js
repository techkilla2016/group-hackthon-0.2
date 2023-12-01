import React from 'react'
import Header from '@/components/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DemoData from '@/data/demo/desktop'
import DemoDataMB from '@/data/demo/mobile'
import { MdStart } from "react-icons/md";
import Link from 'next/link'
const Template = () => {
  return (
    <div className='alai-main'>
      <div className="alai-container">
        {/* header  */}
        <Header />
        <Container className='home'>
          <Row className='desktop row'>
            {
              DemoData?.map((item, keys) => {
                return <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={keys}>
                  {
                    item?.map((curItem, index) => {
                      return <React.Fragment key={index}>
                        <div className='overflow-hidden my-2'>
                          <img src={curItem?.img} className='img-fluid' />
                        </div>
                      </React.Fragment>
                    })
                  }
                </Col>
              })
            }
          </Row>
          <Row className='mobile'>
            {
              DemoDataMB?.map((item, keys) => {
                return <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} >
                  {
                    item?.map((curItem, index) => {
                      return <>
                        <div className='overflow-hidden my-2'>
                          <img src={curItem?.img} className='img-fluid' />
                        </div>
                      </>
                    })
                  }
                </Col>
              })
            }
          </Row>
        </Container>
        <div className="d-flex justify-content-center py-3 start-btn-section">
          <Link href='/templates' className='btn swap-btn btn-warning'>
            <span className='px-1'> Start </span>
            <span className='px-1'><MdStart /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Template
