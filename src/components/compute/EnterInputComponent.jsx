import React, { useState } from 'react'

const EnterInputComponent = (props) => {

    const DEFAULT_TEXTAREA_ROWS = 11;
    const ON_ERROR_TEXTAREA_ROWS = 8;

    const BLANK_ERRORS = {
        materialSize: '',
        cuts: '',
        quantities: '',
    }

    const [materialSizeText, setMaterialSizeText] = useState('');
    const [cutsText, setRequiredCutsText] = useState('');
    const [quantitiesText, setQuantitiesText] = useState('');

    const [errors, setErrors] = useState(BLANK_ERRORS);

    const getValueInArray = (value) => value.trim().split('\n').map((n) => n.trim());

    const handleMaterialSize = (event) => {
        props.setIsResultShown(false);
        props.setMaterialSize(event.target.value)
        setMaterialSizeText(event.target.value)
    };

    const handleRequiredCuts = (event) => {
        props.setIsResultShown(false);
        props.setCuts(getValueInArray(event.target.value));
        setRequiredCutsText(event.target.value);
    };

    const handleQuantities = (event) => {
        props.setIsResultShown(false);
        props.setQuantities(getValueInArray(event.target.value));
        setQuantitiesText(event.target.value)
    };

    const handleResetBtn = () => {
        setErrors(BLANK_ERRORS);

        setMaterialSizeText('');
        props.setMaterialSize(0);
        setRequiredCutsText('');
        props.setCuts([]);
        setQuantitiesText('');
        props.setQuantities([]);

        props.setIsResultShown(false);
    };

    const validateForm = () => {
        let errorsCopy = { ...errors }, isValid = true;

        let isMaterialSizeValid = !isNaN(props.materialSize) && props.materialSize > 0,
            areCutsValid = props.cuts.length > 0 && props.cuts.every(n => n > 0 && !isNaN(n)),
            areQuantitiesValid = props.quantities.length > 0 && props.quantities.every(n => n > 0 && /^\+?(0|[1-9]\d*)$/.test(n)),
            areLengthsEqual = props.cuts.length === props.quantities.length;

        if (isMaterialSizeValid) {
            errorsCopy.materialSize = '';
        } else {
            errorsCopy.materialSize = 'Please check if size is a decimal number and greater than 0.';
            isValid = false;
        }

        if (areCutsValid) {
            errorsCopy.cuts = '';
        } else {
            errorsCopy.cuts = 'Please check if every cut is a decimal number.';
            isValid = false;
        }

        if (areQuantitiesValid) {
            errorsCopy.quantities = '';
        } else {
            errorsCopy.quantities = 'Please check if every quantity is an integer greater than 0.';
            isValid = false;
        }

        if (!areLengthsEqual) {
            errorsCopy.cuts.length > 0 ? errorsCopy.cuts += ' Also, p' : errorsCopy.cuts = 'P';
            errorsCopy.quantities.length > 0 ? errorsCopy.quantities += ' Also, p' : errorsCopy.quantities = 'P';

            errorsCopy.cuts += 'lease check if every row correspond to a quantity.';
            errorsCopy.quantities += 'lease check if every row correspond to a cut.';
            isValid = false;
        }

        setErrors(errorsCopy);
        return isValid;
    };

    const handleCompute = () => {
        if (validateForm()) {
            props.setMaterialSize(parseFloat(props.materialSize));
            props.setCuts(props.cuts.map((n) => parseFloat(n)));
            props.setQuantities(props.quantities.map((n) => parseInt(n)));
            props.setIsResultShown(true);
        } else {
            props.setIsResultShown(false);
        }
    }

    return (
        <div className='card' style={{ height: '30rem' }}>
            <h2 className='card-title text-center mt-2' >Compute your Cuts</h2>
            <div className='card-body'>
                <form>
                    <div className='row'>
                        <div className='col '>
                            <label htmlFor='requiredCuts' className='col-form-label'>Required Cuts:</label>
                        </div>
                        <div className='col'>
                            <label htmlFor='quantities' className='col-form-label'>Quantities:</label>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col input-group has-validation'>
                            <textarea id='requiredCuts' placeholder='Enter required cuts'
                                rows={errors.cuts ? ON_ERROR_TEXTAREA_ROWS : DEFAULT_TEXTAREA_ROWS}
                                className={`form-control ${errors.cuts ? ' is-invalid' : ''}`}
                                data-gramm='false' data-gramm_editor='false' data-enable-grammarly='false'
                                onChange={handleRequiredCuts} value={cutsText} />
                            {errors.cuts &&
                                <div className='invalid-feedback'>
                                    {errors.cuts}
                                </div>
                            }
                        </div>
                        <div className='col input-group has-validation'>
                            <textarea id='quantities' placeholder='Enter quantities'
                                rows={errors.quantities ? ON_ERROR_TEXTAREA_ROWS : DEFAULT_TEXTAREA_ROWS}
                                className={`form-control ${errors.quantities ? ' is-invalid' : ''}`}
                                data-gramm='false' data-gramm_editor='false' data-enable-grammarly='false'
                                onChange={handleQuantities} value={quantitiesText} />
                            {errors.quantities &&
                                <div className='invalid-feedback'>
                                    {errors.quantities}
                                </div>
                            }
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>
                            <label htmlFor='materialSize' className='col-form-label'>Material Size:</label>
                        </div>
                        <div className='col-4'>
                            <input id='materialSize' type='number' placeholder='Enter material size' onChange={handleMaterialSize} value={materialSizeText}
                                className={`form-control ${errors.materialSize ? ' is-invalid' : ''}`} />
                            {errors.materialSize &&
                                <div className='invalid-feedback'>
                                    {errors.materialSize}
                                </div>
                            }
                        </div>

                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-6 d-grid'>
                                    <button className='btn btn-danger width-100' id='resetBtn' type='button' onClick={handleResetBtn}>
                                        <i className='bi bi-eraser'></i>
                                        Reset
                                    </button>
                                </div>
                                <div className='col-6 d-grid'>
                                    <button className='btn btn-primary width-100' id='computeBtn' type='button' onClick={handleCompute}>
                                        <i className='bi bi-calculator'></i>
                                        Compute
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EnterInputComponent