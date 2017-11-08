
'use strict';

/**
 * @desc 常用于代码内部跳转，也可用于跳转链接
 * @link http://usejsdoc.org/tags-see.html
 */

class ClassForSee {

    /**
     * 以下代码将于下版本移除,请使用方法
     *
     * @deprecated
     * @see ClassForSee.publicNewMethod
     */
    publicMethod() {

    }

    /**
     * 新方法
     */
    publicNewMethod() {

    }
}

(new ClassForSee()).publicMethod();