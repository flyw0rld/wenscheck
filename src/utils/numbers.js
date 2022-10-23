import { range, padStart } from "lodash";



const filters = {
    'NONE': () => true,
    '000X': (item) => {
        return item[0] == 0 && item[1] == 0 && item[2] == 0
    },
    'X000': (item) => {
        return item[3] == 0 && item[1] == 0 && item[2] == 0
    },
    '00XX': (item) => {
        return item[0] == 0 && item[1] == 0
    },
    'XX00': (item) => {
        return item[2] == 0 && item[3] == 0
    },
    'AAAB': (item) => {
        return item[0] == item[1] && item[0] == item[2]
    },
    'AABA': (item) => {
        return item[0] == item[1] && item[0] == item[3]
    },
    'AABB': (item) => {
        return item[0] == item[1] && item[2] == item[3]
    },
    'ABAB': (item) => {
        return item[0] == item[2] && item[1] == item[3]
    },
    'ABBA': (item) => {
        return item[0] == item[3] && item[1] == item[2]
    },
    'ABBB': (item) => {
        return item[1] == item[2] && item[2] == item[3]
    },
    'AAAA': (item) => {
        return item[0] == item[1] && item[0] == item[2] && item[0] == item[3]
    },
    'ABCD': (item) => {
        return parseInt(item[0])+1 == parseInt(item[1]) &&
            parseInt(item[1])+1 == parseInt(item[2]) &&
            parseInt(item[2])+1 == parseInt(item[3])
    },
    'DCBA': (item) => {
        return parseInt(item[1])+1 == parseInt(item[0]) &&
            parseInt(item[2])+1 == parseInt(item[1]) &&
            parseInt(item[3])+1 == parseInt(item[2])
    }
}

export const getFilter = (type) => {
    return filters[type] || ((item) => !!item)
}


export const get5k = (type) => {
    return range(100000).map((item)=> padStart(item, 5, '0'))
        .filter(getFilter(type))
}

export const get4k = (type) => {
    return range(10000).map((item)=> padStart(item, 4, '0'))
        .filter(getFilter(type))
}
