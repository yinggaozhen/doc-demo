
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
 * 表示此函数的上下文为 : ClassForThisOne
 * 加入{@this}，则IDE认为`replaceContext`只属于ClassForThisOne，能让代码更加清晰
 *
 * @function
 * @this {ClassForThisOne}
 */
function FunctionForThis() {
    this.replaceContext();
}

FunctionForThis.apply(new ClassForThisOne());