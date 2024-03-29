import React from 'react'
import { 
    Container,
    Option,
    Img,
    Label 
} from './styles'

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'
import img7 from '../../images/07.png'

const items = [
    {
        key: Math.random().toString(),
        img: img1,
        label: "Recarga",
    },
    {
        key: Math.random().toString(),
        img: img2,
        label: "Uber",
    },
    {
        key: Math.random().toString(),
        img: img3,
        label: "Ônibus",
    },
    {
        key: Math.random().toString(),
        img: img4,
        label: "TV",
    },
    {
        key: Math.random().toString(),
        img: img5,
        label: "Doações",
    },
    {
        key: Math.random().toString(),
        img: img6,
        label: "Barras",
    },
    {
        key: Math.random().toString(),
        img: img7,
        label: "FAQ",
    },
]

export default function Suggestions() {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source = {item.img}/>
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
            
    )
}