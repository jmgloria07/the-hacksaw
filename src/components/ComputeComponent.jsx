import React, { useState } from 'react'
import EnterInputComponent from './compute/EnterInputComponent';
import ShowResultsComponent from './compute/ShowResultsComponent';
import RequiredCutsTableComponent from './compute/RequiredCutsTableComponent';

const ComputeComponent = () => {

  const [isResultShown, setIsResultShown] = useState(false);

  const [cuts, setCuts] = useState([]);  
  const [quantities, setQuantities] = useState([]);
  const [materialSize, setMaterialSize] = useState([]);
  
  /**
   * TODO: 
   * 1. localstorage - see past computes
   * 2. define a custom fit
   * minor bugs:
   * copy button tooltip
   * accordion?
   */
  return (
    <main className='container mt-4'>

      <div className='row mt-2 mx-auto'>

        <div className='col-lg-8 col-md'>
          <EnterInputComponent 
            setIsResultShown={(n) => setIsResultShown(n)} 
            cuts = {cuts}
            setCuts={setCuts} 
            quantities = {quantities}
            setQuantities={setQuantities}
            materialSize = {materialSize}
            setMaterialSize={setMaterialSize}
          />
        
        </div>

        <div className='col-lg-4'>
          <RequiredCutsTableComponent 
            cuts = {cuts}
            quantities = {quantities}/>
        </div>
      </div>

      

      <div className='row mt-2'>
        <div className='col'>
        <ShowResultsComponent
          isShown={isResultShown}
          cuts = {cuts}
          quantities = {quantities}
          materialSize = {materialSize}
        />
        </div>
      </div>

    </main>
  )
}

export default ComputeComponent;