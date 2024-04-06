import React from 'react'
import ResultCardComponent from './ResultCardComponent';
import { sortBinsBestFit, sortBinsFirstFit, sortBinsWorstFit } from '../../utilities/binpacking-utils';
import { CONSTANTS } from '../../utilities/constants';

const ShowResultsComponent = (props) => {

    const getSortedUnits = () => {
        let sortedUnits = [];
    
        for (let i = 0; i < props.cuts.length; i++) {
            //add as much cut as the set quantity
            for (let j = 0; j < props.quantities[i]; j++) {
                //ensure numbers are in integer, to avoid floating point issues
                sortedUnits.push(props.cuts[i] * (10 ^ CONSTANTS.decimalPlaces));
            }
        }
    
        sortedUnits.sort((a, b) => b - a);
    
        return sortedUnits;
    };

    let sortedUnits = getSortedUnits();

    const getResultData = (title) => {
        let binSize = props.materialSize * (10 ^ CONSTANTS.decimalPlaces);

        let data = [];
        if (title === 'Simple') {
            data = sortBinsFirstFit(sortedUnits, binSize);
        } else if (title === 'Tight') {
            data = sortBinsBestFit(sortedUnits, binSize);
        } else if (title === 'Loose') {
            data = sortBinsWorstFit(sortedUnits, binSize);
        } else {
            console.log('which fit again?');
        }

        return data.map(row => row.map(n => n / (10 ^ CONSTANTS.decimalPlaces)));
    }

    const getResults = (title) => {
        let data = getResultData(title);
        let materialSize = props.materialSize;
        let count = data.length;
        let totalLength = data.map(n => n.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
        let totalScrap = ((count * props.materialSize - totalLength)).toFixed(CONSTANTS.decimalPlaces);

        return { title, materialSize, count, totalScrap, data };
    };

    return (
        <>
        {props.isShown &&
            <div className='accordion m-2' id='accordion-results'>
                <div className='row mb-2'>
                    <ResultCardComponent
                        result={getResults('Simple')}
                />
                </div>
                <div className='row mb-2'>
                    <ResultCardComponent
                        result={getResults('Tight')}
                    />
                </div>
                <div className='row mb-2'>
                    <ResultCardComponent
                        result={getResults('Loose')}
                    />
                </div>
            </div>
        }
        </>

    )

}

export default ShowResultsComponent