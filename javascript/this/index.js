
'use strict';

/**
 * @desc 例子 - 替换上下文
 * @link http://usejsdoc.org/tags-this.html
 */

class ClassForThisOne {

    /**
     * Method for replaceContext
     */
    replaceContext() {
        // ...
    }
}

class ClassForThisTwo {

    /**
     * Method for replaceContext
     */
    replaceContext() {
        // ...
    }
}

/**
 * @function
 * @this {ClassForThisOne|ClassForThisTwo}
 */
function FunctionForThis() {
    this.replaceContext();
}

FunctionForThis.apply(new ClassForThisOne());