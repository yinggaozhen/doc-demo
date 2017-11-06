
'use strict';

/**
 * @link http://usejsdoc.org/tags-see.html
 */
class ClassForSee {

    /**
     * @desc 以下代码将于下版本移除,请使用方法
     *
     * @deprecated
     * @see ClassForSee.publicNewMethod
     */
    publicMethod() {

    }

    /**
     * @desc 新方法
     */
    publicNewMethod() {

    }
}

(new ClassForSee()).publicMethod();