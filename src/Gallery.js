import React, { useState } from 'react'
import { listGambar } from './data'

export default function Gallery() {
    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)
    const next = index < listGambar.length - 1
    const prev = index > listGambar.length - 3
    
    function handleNextClick() {
        if(next && index < 3) {
            setIndex(i => i + 1)
        } else {
            setIndex(index)
        }
    }

    function handlePreviousClick() {
        if(prev) {
            setIndex(i => i - 1)
        } else {
            setIndex(0)
        }
    }

    function handleShowClick() {
        setShow(!show)
    }

    let gambar = listGambar[index]

    return (
        <>
            <h1>Gallerykuuuu</h1>
            <h2>{gambar.lokasi}</h2>
            <h3>({index + 1} dari {listGambar.length})</h3>
            <button onClick={handleShowClick}>{show ? 'Sembunyikan' :'Lihat'} detail</button>
            {show && <p>{gambar.deksripsi}</p>}
            <img src={gambar.url} alt={gambar.alt} />
            <br></br>
            <button onClick={handlePreviousClick}>Sebelumnya</button>
            <button onClick={handleNextClick}>Selanjutnya</button>
        </>
    )
}
