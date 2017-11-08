
'use strict';

/**
 * @link http://usejsdoc.org/tags-constant.html
 *
 * @desc
 *  `@constant` : 表示该值为常量,不能对其进行修改
 */

class ClassForConstant {

    constructor() {

        /**
         * @constant
         */
        this.constant = 2;
    }
}

const personInstance = new ClassForConstant();

personInstance.constant = 3; // error