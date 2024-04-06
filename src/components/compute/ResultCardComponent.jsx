import React, { useEffect, useRef } from 'react'
import ResultCardListItemComponent from './ResultCardListItem';
import { copyToClipboard } from '../../utilities/hacksaw-utils';
import { Tooltip } from 'bootstrap'
import { CONSTANTS } from '../../utilities/constants';

const ResultCardComponent = (props) => {

    const copyBtnRef = useRef();

    const id = 'result-' + props.result.title.toLowerCase().split(' ').join('-');
    const ulId = 'list-cuts-' + props.result.title.toLowerCase().split(' ').join('-');

    useEffect(() => {
        Tooltip.getOrCreateInstance(copyBtnRef.current, {
            title: 'Copied!', 
            trigger: 'click',
            delay: {show: 0, hide: 1000}
        });
    }, []);

    const handleCopy = () => {
        copyToClipboard(props.result.data);
        Tooltip.getInstance(copyBtnRef.current).show();
    };

    return (
        <div className='accordion-item' id={id}>

            <div className='accordion-header'>
                <div className='row mb-2'>
                    <button className='accordion-button collapsed d-block text-center' type='button' 
                        data-bs-toggle='collapse' data-bs-target={'#' + ulId} role='button' 
                        aria-expanded='true' aria-controls={ulId}>
                        <h2>{props.result.title}</h2>
                    </button>
                </div>
                <div className='row ms-3 mb-2 me-2'>
                            <div className='col'>
                                Size: {props.result.materialSize.toFixed(CONSTANTS.decimalPlaces)}
                            </div>
                            <div className='col'>
                                Count: {props.result.count}
                            </div>
                            <div className='col'>
                                Total Scrap: {props.result.totalScrap}
                            </div>
                            <div className='col alert d-none'>
                                Copied!
                            </div>
                            <div className='col me-4'>
                                <button className='btn btn-info float-end' type='button' onClick={handleCopy} ref={copyBtnRef}>
                                    <i className='bi bi-clipboard'></i>
                                    Copy All
                                </button>
                            </div>

                </div>
            </div>

            <div className='accordion-collapse collapse show' id={ulId} data-bs-parent='#accordion-results'>
                <div className='accordion-body' >
                    { props.result.data.map((row, i) => 
                        <ResultCardListItemComponent key={i} row={row} materialSize={props.result.materialSize}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResultCardComponent