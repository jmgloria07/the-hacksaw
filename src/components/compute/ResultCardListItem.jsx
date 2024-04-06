import React, { useEffect, useRef } from 'react'
import { copyToClipboard } from '../../utilities/hacksaw-utils';
import { Tooltip } from 'bootstrap';
import { CONSTANTS } from '../../utilities/constants';

const ResultCardListItemComponent = (props) => {

    const copyBtnRef = useRef();

    const scrap = (props.materialSize - props.row.reduce((a, b) => a + b, 0)).toFixed(CONSTANTS.decimalPlaces);
    const getPercentageString = (numerator, denominator) => (numerator / denominator * 100).toFixed(CONSTANTS.decimalPlaces) + '%';

    useEffect(() => {
        Tooltip.getOrCreateInstance(copyBtnRef.current, {
            title: 'Copied!', 
            trigger: 'click',
            delay: {show: 0, hide: 1000}
        });
    }, []);

    const handleCopy = () => {
        let toCopy = [...props.row];
        toCopy.push(scrap);
        copyToClipboard([toCopy]);
        Tooltip.getInstance(copyBtnRef.current).show();
    }

    return (
        <div className="row">
            <div className='row mt-2 mb-2'>
                <div className='col'>
                    <div className='progress'>
                        {props.row.map((cut, j) =>
                            <div key={j}
                                className={`progress-bar ${(j + 1) % 2 == 1 ? 'bg-primary' : 'bg-secondary progress-bar-striped'}`}
                                style={{ 'width': getPercentageString(cut, props.materialSize) }}
                                role='progress-bar'
                                aria-valuenow={cut}
                                aria-valuemin={0}
                                aria-valuemax={props.materialSize}>
                                {cut.toFixed(CONSTANTS.decimalPlaces)}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='row mt-2 mb-2'>
                <div className='col-2 offset-6'>
                    Scrap: {scrap}
                </div>
                <div className='col-4'>
                    <button className="btn btn-info float-end" type="button" onClick={handleCopy}>
                        <i className="bi bi-clipboard" ref={copyBtnRef}></i>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCardListItemComponent