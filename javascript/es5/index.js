
'use strict';

/**
 * @module module.javascript.es5
 *
 * @desc
 *  补充一些ES5的常用代码注释
 *  主要补充
 *      `@class`          -- 表示此函数为class
 *      `@constructor`    -- 表示此函数为构造函数
 *      `@method`         -- 表示此函数为成员方法
 *      `@memberOf`       -- 表示此函数属于具体哪个class
 *      `@static`         -- 表示此方法为静态方法
 */


/**
 * demo class for `class`
 *
 * @class
 * @public
 * @constructor
 */
function FunctionForClass() {
    this.age = 18;
}

/**
 * static function
 *
 * @static
 * @public
 * @method FunctionForStaticMethod
 * @memberOf FunctionForClass
 * @return void
 */
function FunctionForStaticMethod() {
}

/**
 * @method FunctionForMethod
 * @public
 * @memberOf FunctionForClass
 * @return void
 */
function FunctionForMethod() {

}

FunctionForClass.prototype.FunctionForMethod = FunctionForMethod;
// static function
FunctionForClass.FunctionForStaticMethod = FunctionForStaticMethod;