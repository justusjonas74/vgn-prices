const PREFIX = 'PT_2015_TS_'

const PS = [
    ['Z01', 'PS 1'],
    ['Z02', 'PS 2'],
    ['Z02T', 'PS 2+T'],
    ['Z03', 'PS 3'],
    ['Z03T', 'PS 3+T'],
    ['Z04', 'PS 4'],
    ['Z04T', 'PS 4+T'],
    ['Z05', 'PS 5'],
    ['Z05T', 'PS 5+T'],
    ['Z06', 'PS 6'],
    ['Z06T', 'PS 6+T'],
    ['Z07', 'PS 7'],
    ['Z07T', 'PS 7+T'],
    ['Z08', 'PS 8'],
    ['Z08T', 'PS 8+T'],
    ['Z09', 'PS 9'],
    ['Z09T', 'PS 9+T'],
    ['Z10', 'PS 10'],
    ['Z10T', 'PS 10+T'],
    ['A', 'PS A'],
    ['B', 'PS B'],
    ['C', 'PS C'],
    ['D', 'PS D'],
    ['F', 'PS F'],
    ['K', 'PS K'],
]

function addPrefixToArray(arr, prefix){
    return arr.map(item => {
        item[0] = prefix + item[0]
        return item
    } )        
}

const PRICE_LEVELS = addPrefixToArray(PS, PREFIX)

module.exports = PRICE_LEVELS