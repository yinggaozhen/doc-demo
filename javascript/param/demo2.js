/**
 * @description 如果函数的入参是一个对象，可以定义入参对象属性类型
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 *
 * @param {string} people.name - 名字
 * @param {number} people.age  - 年龄
 */
function TagParam(people) {
    // PASS
    Math.abs(people.age);

    // FIXME. @param定义people.name类型为string，而Math.abs要求入参是number,所以会产生一个告警
    Math.abs(people.name);
}
