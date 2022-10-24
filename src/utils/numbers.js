import { range, padStart } from "lodash";
import {FEMALE_NAMES, MALE_NAMES} from "./names.js";


export const categories = {
    fourD: '4D',
    fiveD: '5D',
    name: 'NAME',
}

export const getFilters = (type) => {
    if(type === categories.fourD) {
        return {
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
    } else if(type === categories.fiveD) {
        return {
            'NONE': () => true,
            'AAAAA': (item) => {
                return item[0] == item[1] && item[0] == item[2] && item[0] == item[3] && item[0] == item[4]
            },
        }
    } else if(type === categories.name) {
        return {
            'FEMALE': (item) => FEMALE_NAMES.includes(item),
            'MALE': (item) => MALE_NAMES.includes(item),
        }
    }
}

export const getFilter = (category, type) => {
    return getFilters(category)[type] || ((item) => !!item)
}

export const getAllNumbers = (category, filter) => {
    if(category === categories.fourD) {
        return range(10000).map((item)=> padStart(item, 4, '0'))
            .filter(getFilter(category, filter))
    } else if(category === categories.fiveD) {
        return range(100000).map((item)=> padStart(item, 5, '0'))
            .filter(getFilter(category, filter))
    } else if(category === categories.name) {
        return ([].concat(MALE_NAMES).concat(FEMALE_NAMES)).filter(getFilter(category, filter))
    }
}
