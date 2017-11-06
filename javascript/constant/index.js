
'use strict';

class ClassForA {

    constructor() {

        /**
         * @constant
         */
        this.constant = 2;
    }
}

const personInstance = new ClassForA();

personInstance.constant = 3; // error