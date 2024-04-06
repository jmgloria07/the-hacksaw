export function copyToClipboard(data) {
    if (navigator.clipboard) {
        let copyText = getContents(data);
        navigator.clipboard.writeText(copyText).catch(function (e) { 
            console.log(e) 
        });
    } else {
        console.log('Unable to copy')
    }
};

export function getContents(data){
    return data.map(row => row.join('\t')).join('\n');
}