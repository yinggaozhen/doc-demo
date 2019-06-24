/**
 * @description 两数相加
 * @param {Array.<number>} array
 * @param {number} number
 * @returns {Array.<number>}
 */
function push(array, number) {
    // FIXME. 由@returns标记返回值为{Array.<number>},而实际返回值为string,所以会产生一个告警
    return "NAN";
}

let array = push([1, 2, 3], 4);

// FIXME. 由@returns标记返回值为{Array.<number>},而实际push值为string,所以会产生一个告警
array.push("5");