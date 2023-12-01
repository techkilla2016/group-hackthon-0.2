import React from 'react'
import Template from './main'
const page = ({ params }) => {
    return (
        <Template params={params} domain={process.env.Domain} />
    )
}

export default page
