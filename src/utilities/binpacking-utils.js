
/**
 * Sorts the given numbers utilizing the First Fit 
 * variant of bin-packing algorithm. 
 * 
 * @param {[Number]} sortedUnits sorted integers in descending order
 * @param {Number} binSize 
 * @returns {[[Number]]}
 */
export function sortBinsFirstFit(sortedUnits, binSize) {
    let result = [];

    // units.sort((a, b) => b - a);

    for (let i = 0; i < sortedUnits.length; i++) {
        //find the first bin that can accommodate the unit
        let j;
        for (j = 0; j < result.length; j++) {
            let isFit = result[j].reduce((a, b) => a + b, 0) + sortedUnits[i] <= binSize;
            if (isFit) {
                result[j].push(sortedUnits[i])
                break;
            }
        }

        //create a new bin if nothing fits
        if (j == result.length) {
            result.push([]);
            result[result.length - 1].push(sortedUnits[i]);
        }
    }

    return result;
};

/**
 * Sorts the given numbers utilizing the Best Fit 
 * variant of bin-packing algorithm. 
 * 
 * @param {[Number]} sortedUnits sorted units in descending order
 * @param {Number} binSize 
 * @returns {[[Number]]}
 */
export function sortBinsBestFit(sortedUnits, binSize) {
    let result = [];

    // sortedUnits.sort((a, b) => b - a);

    for (let i = 0; i < sortedUnits.length; i++) {
        let j,
        min = binSize + 1, 
        bestBinIndex = 0;

        //find the "best" bin that can accommodate the unit,
        //i.e., iterate through all the saved bins - get the 
        //tightest bin the unit can fit.
        for (j = 0; j < result.length; j++) {
            let _binSize = result[j].reduce((a, b) => a + b, 0);

            let isFit = _binSize + sortedUnits[i] <= binSize
            let isLessThanMin = binSize - (_binSize + sortedUnits[i]) < min
            if (isFit && isLessThanMin) {
                bestBinIndex = j;
                min = binSize - (_binSize + sortedUnits[i]);
            }
        }

        //create a new bin if it doesn't fit any of the existing bins
        if (min == binSize + 1) {
            result.push([]);
            result[result.length - 1].push(sortedUnits[i]);
        } else { //assign to best bin
            result[bestBinIndex].push(sortedUnits[i]);
        }
    }

    return result;
};

/**
 * Sorts the given numbers utilizing the Worst Fit 
 * variant of bin-packing algorithm. 
 * 
 * @param {[Number]} sortedUnits sorted units in descending order
 * @param {Number} binSize 
 * @returns {[[Number]]}
 */
export function sortBinsWorstFit(sortedUnits, binSize) {
    let result = [];

    // units.sort((a, b) => b - a);

    for (let i = 0; i < sortedUnits.length; i++) {
        //find the "worst" bin that can accommodate the unit
        //i.e., iterate through all the saved bins - get the 
        //bin with the most empty space the unit can fit.
        let j, max = -1, worstBinIndex = 0

        for (j = 0; j < result.length; j++) {
            let _binSize = result[j].reduce((a, b) => a + b, 0);
            let isFit = _binSize + sortedUnits[i] <= binSize
            let isGreaterThanMax = binSize - (_binSize + sortedUnits[i]) > max
            if (isFit && isGreaterThanMax) {
                worstBinIndex = j;
                max = binSize - (_binSize + sortedUnits[i]);
            }
        }

        //create a new bin if it doesn't fit any of the existing bins
        if (max == -1) {
            result.push([]);
            result[result.length - 1].push(sortedUnits[i]);
        } else { //assign to worst bin
            result[worstBinIndex].push(sortedUnits[i]);
        }
    }

    return result;
}
