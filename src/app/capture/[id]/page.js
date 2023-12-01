"use client"
import React, { useEffect, useState } from 'react'
import SelectImg from '@/components/SelectImg'
import Loader from '@/components/loader'
import Header from '@/components/Header'
import SwapFace from '@/components/SwapFace'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const Home = ({ params }) => {
    const [result, setResult] = useState()
    const [temp, setTemp] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [dataList, setDataList] = useState({})

    return (
        <>
            {isLoader ? <Loader /> : ''}
            <div className='alai-main'>
                <div className="alai-container home">
                    {/* header  */}
                    <Header />
                    <Container>
                        {
                            temp ? <SwapFace temp={temp} data={result} dataList={dataList} setIsLoader={setIsLoader} /> : <>
                                <SelectImg
                                    id={params.id}
                                    setTemp={setTemp}
                                    setResult={setResult}
                                    setIsLoader={setIsLoader}
                                    setDataList={setDataList} />
                            </>
                        }
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Home
