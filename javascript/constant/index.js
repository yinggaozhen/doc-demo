
'use strict';

/**
 * @link http://usejsdoc.org/tags-constant.html
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