import React from 'react'
import { useState } from 'react';

export default function Answer({idSoal, jawabans, selectJwb, datasoal, nomorsoal}) {
    
    const [soal, setSoal] = useState(datasoal)
    const handleChange = (e) => {
        
        // string passed in
        // a string returned by default

        setSoal({selectedJawaban : e.currentTarget.value})
        console.log(e.currentTarget.value);
        console.log(soal);
        //datasoal[nomorsoal].selectedJawaban = e.currentTarget.value
        // add + to the event to make the value a number
      };
  
    return (
    <>
     <input type='radio' id={soal.id + 'soal_a'} name={soal.id + 'soal_a'} value='a' onChange={handleChange} checked={soal.selectedJawaban === 'a'}></input>
     <label for={soal.id + 'soal_a'}>{jawabans[0]}</label>
     <br/>
     <input type='radio' id={soal.id + 'soal_b'} name={soal.id + 'soal_b'} value='b' onChange={handleChange} checked={soal.selectedJawaban === 'b'}></input>
     <label for={soal.id + 'soal_b'}>{jawabans[1]}</label>
     <br/>
     <input type='radio' id={soal.id + 'soal_c'} name={soal.id + 'soal_c'} value='c' onChange={handleChange} checked={soal.selectedJawaban === 'c'}></input>
     <label for={soal.id + 'soal_c'}>{jawabans[2]}</label>
     <br/>
     <input type='radio' id={soal.id + 'soal_d'} name={soal.id + 'soal_d'} value='d' onChange={handleChange} checked={soal.selectedJawaban === 'd'}></input>
     <label for={soal.id + 'soal_d'}>{jawabans[3]}</label>
     <br/>
    </>
  )
}
