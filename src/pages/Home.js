import React, { useEffect, useState } from 'react'

import URL from '../helper/url'

export default function Home() {

    //2.1.Hooks area

    const [businessCategory, setBusinessCategory] = useState([])
    useEffect(() => {
        fetch(`${URL}/api/business-categories?populate=*`)
            .then((res) => {
                return res.json()

            })
            .then((data) => {
                console.log(data)
                setBusinessCategory(data.data);

            })
            .catch(() => { })
    }, [])


    //2.2.



    //2.3
    return (
        <>
            <h1>Home Page</h1>
            <ul className='nav'>
                {
                    businessCategory.map((cv, idx, arr) => {
                        return <li key={idx} className='me-3'>
                            <a href="#" >
                                <img src={`${URL}` + cv.attributes.image.data.attributes.url} /><br />
                                {cv.attributes.name}
                            </a>
                        </li>
                    })
                }
            </ul>
        </>
    )
}
