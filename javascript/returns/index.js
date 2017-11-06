
'use strict';

/**
 * @link http://usejsdoc.org/tags-returns.html
 */
class ClassForReturn {

    hello() {

    }
}

class Person {

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

const personInstance = new Person();

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
