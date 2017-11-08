
'use strict';

/**
 *
 * @link http://usejsdoc.org/tags-throws.html
 * @desc
 *  `@throws` : 表示此方法可能会抛出异常,并指定抛出异常的类型
 */

class ClassForThrows {

    /**
     * 抛出指定异常类型
     *
     * @throws {BeiException}
     */
    static throwBeiException() {
        throw new BeiException();
    }

    /**
     * 抛出多种指定异常类型
     *
     * @param {Boolean} type
     * @throws {BeiException|HuException}
     */
    static throwMixedException(type) {
        if (type) {
            throw new BeiException();
        }

        throw new HuException();
    }
}

class BeiException extends Error {}
class HuException extends Error {}

ClassForThrows.throwBeiException();

ClassForThrows.throwMixedException(true);