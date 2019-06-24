/**
 * @description 为函数入参定义类型
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 *
 * @param {string}         stringVar - 字符串
 * @param {Array.<string>} arrayVar  - 字符串数组
 */
function TagParam(stringVar, arrayVar) {
    // FIXME. @param定义arrayVar是字符串类型数组，所以在push一个数字类型的变量时，会产生一个告警
    arrayVar.push(123);
}

// PASS.
TagParam("123456", []);

// FIXME. @param定义stringVar类型是字符串,而实际入参是数字,所以会产生一个告警
TagParam(123456, ["123456", "456789"]);

