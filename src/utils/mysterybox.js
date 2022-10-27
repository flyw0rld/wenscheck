import { range } from "lodash";
import { FEMALE_NAMES, MALE_NAMES} from "./names.js";

export const categories = {
    oneD: '1D',
    twoD: '2D',
    threeD: '3D',
    fourD: '4D',
    fiveD: '5D',
}

export const getAllNumbers = (category, filter) => {
    const config = {
        [categories.oneD]: {min:8, max: 10},
        [categories.twoD]: {min:80, max: 100},
        [categories.threeD]: {min:800, max: 1000},
        [categories.fourD]: {min:8000, max: 10000},
        [categories.fiveD]: {min:80000, max: 100000},
    }[category]
    return range(config.min, config.max)
}
