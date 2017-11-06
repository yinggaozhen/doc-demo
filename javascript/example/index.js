
'use strict';

/**
 * @classdesc 例子 - 用单例创建类
 * @link http://usejsdoc.org/tags-example.html
 */
class ClassForExample {

    /**
     * @param {Boolean} isSingle 是否走单例
     *
     * @example :
     *  默认实例是走单例 ClassForExample.getInstance()
     *
     * @example :
     *  实例化新类 ClassForExample.getInstance(false)
     *
     * @returns {ClassForExample}
     */
    static getInstance(isSingle = true) {
        if (isSingle) {
            if (ClassForExample.instance === undefined) {
                ClassForExample.instance = new ClassForExample();
            }

            return ClassForExample.instance;
        }

        return new ClassForExample();
    }
}

ClassForExample.getInstance();