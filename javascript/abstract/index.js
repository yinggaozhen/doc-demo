
'use strict';

/**
 * @desc
 *  `@abstract` : 表示一个抽象类或者方法,需要具体去实现.
 */

/**
 * 一个抽象类
 *
 * @abstract
 */
class ClassForAbstract {

    /**
     * 如果构造函数不被重写,则将抛出异常
     *
     * @param {Boolean} override
     */
    constructor(override = false) {
        if (!override) {
            throw new Error('You have to implement the construct methods');
        }
    }

    /**
     * 一个抽象方法
     *
     * @abstract
     */
    methodNeedImplements() {
        throw new Error('You have to implement the this methods')
    }
}