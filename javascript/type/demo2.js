/**
 * @classdesc 为一个普通变量定义类型
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 */

class HelloType {
    /**
     * @public
     */
    hello() {
    }
}

// 这里我们定义一个未知类型的变量，但通过注释对其指定变量
/** @type {HelloType} tag */
let tag;

// TODO 需要一个下拉
// tag.;

// PASS. {HelloType}里包含了成员方法hello
tag.hello();


// FIXME.因为变量tag被@type定义成{HelloType}类型，而{HelloType}不包含world成员方法.所以会产生一个告警
tag.world();