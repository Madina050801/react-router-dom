import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
       

        <div className='container'>
            <div className='logo'></div>
            <div onClick={()=>navigate('/type')} className='item'>Типы работ</div>
            <div onClick={()=>navigate('/news')} className='item'>Новости</div>
            <div onClick={()=>navigate('/call')} className='item'>Заказать звонок</div>
            <div onClick={()=>navigate('')} className='item'>FQ</div>
        </div>
     
    )
}

export default Navbar

// 1. useNavigate
// 2.ozgaruvchiga tenglab olish
// 3.onClick