import React from 'react'
import { useState } from 'react'
import { dataSoal } from './datasoal'
import Answer from './Answer'

export default function Question() {
    
    const [index, setIndex] = useState(0)
    const next = index < dataSoal.length - 1
    const prev = index > dataSoal.length - 5
    function handleNextClick() {
        if(next && index < 5) {
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

    const soal = dataSoal[index].soal
    const idSoalQ = dataSoal[index].id
    const jawabanQ = dataSoal[index].jawaban
    const sjwb = dataSoal[index].selectedJawaban
    //<h2>{soal}</h2>
    // <Answer idSoal={idSoalQ} jawabans ={jawabanQ} selectJwb={sjwb} datasoal = {dataSoal[index]} nomorsoal = {index} />
    const results = []
    return (
    <>
        
        {dataSoal.map((soal, ix) => {
    return(
        
      <div key={ix} >
        
        
        <Answer idSoal={soal.id} jawabans ={soal.jawaban} selectJwb={soal.selectedJawaban} datasoal = {soal} nomorsoal = {index} />
        
      
      </div>
    );
  })}
        <button onClick={handlePreviousClick}>Sebelumnya</button>
        <button onClick={handleNextClick}>Selanjutnya</button>
    </>
  )
}
