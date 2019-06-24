/**
 * @description 为函数入参定义类型
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 *
 * @param {string}         stringVar - 字符串
 * @param {Array.<string>} arrayVar  - 字符串数组
 */
function TagParam(stringVar, arrayVar) {
    // FIXME. @param定义arrayVar是{Array.<string>}，所以在push一个{number}类型的变量时，因<类型不符>会产生一个告警
    arrayVar.push(123);
}

// PASS.
TagParam("123456", []);

// FIXME. @param定义stringVar类型是{string},而实际入参是{number},因为会产生一个告警
TagParam(123456, ["123456", "456789"]);

