import React from 'react'

const RequiredCutsTableComponent = (props) => {

    let rows = [];

    for (let i = 0; i < props.cuts.length || i < props.quantities.length; i++) {
        let id = i, 
            cut = "", quantity = "", 
            isCutValid = false, isQuanitityValid = false;
        
        if (i < props.cuts.length) {
            cut = props.cuts[i];
            isCutValid = cut > 0 && !isNaN(cut);
        }

        if (i < props.quantities.length) {
            quantity = props.quantities[i];
            isQuanitityValid = quantity > 0 && /^\+?(0|[1-9]\d*)$/.test(quantity);
        }

        rows.push({ id, cut, quantity, isCutValid, isQuanitityValid });
    }
        
    return (
        <div className='card d-none d-lg-block' style={{height: '30rem', overflowY: 'scroll'}}>
            <table className='table table-striped text-center'>
                <thead>
                    <tr>
                        <th>Req. Cuts</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(({ id, cut, quantity, isCutValid, isQuanitityValid }) =>
                        <tr key={id}>
                            <td className={!isCutValid ? 'bg-danger' : ''}>{cut}</td>
                            <td className={!isQuanitityValid ? 'bg-danger' : ''}>{quantity}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>

    )
}

export default RequiredCutsTableComponent