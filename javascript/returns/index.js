
'use strict';

/**
 * @desc 指定返回类型
 * @link http://usejsdoc.org/tags-returns.html
 *
 *  `@returns` : 为一个返回变量指定类型，常用变量类型有
 *      {*}(即mixed，随意任何类型)
 *      {Null}
 *      {Undefined}
 *      {Number}
 *      {String}
 *      {Array}
 *      {Object}
 *      {ClassName}
 *      {ClassName1|ClassName2}(指定的多种类型)
 */

class ClassForReturn {

    hello() {

    }
}

class InstanceForReturn {

    /**
     * @returns {*}
     */
    methodWithReturnAll() {

    }

    /**
     * @returns {String}
     */
    methodWithReturnString() {

    }

    /**
     * @returns {Array}
     */
    methodWithReturnArray() {

    }

    /**
     * @returns {ClassForReturn}
     */
    methodWithReturnClass() {

    }

    /**
     * @returns {ClassForReturn|Array}
     */
    methodWithReturnMixed() {

    }
}

const personInstance = new InstanceForReturn();

// TODO
personInstance.methodWithReturnAll();
// TODO
personInstance.methodWithReturnString();
// TODO
personInstance.methodWithReturnArray();
// TODO
personInstance.methodWithReturnClass();
// TODO
personInstance.methodWithReturnMixed();
