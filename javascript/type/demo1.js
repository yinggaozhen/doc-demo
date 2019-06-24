/**
 * @classdesc 为成员变量定义类型
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 *
 * @constructor
 */
function TagType() {
    /**
     * @type {*}
     */
    this.anyProperty = null;

    /**
     * @type {string}
     */
    this.stringProperty = '';

    /**
     * @type {Array.<string>}
     */
    this.arrayProperty = [];
}

let tag = new TagType();

tag.arrayProperty.push("123456");

// FIXME.@type定义arrayProperty是字符串类型数组，所以在push一个数字类型的变量时,会产生一个告警
tag.arrayProperty.push(123456);

