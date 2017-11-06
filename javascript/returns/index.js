
'use strict';

/**
 * @link http://usejsdoc.org/tags-returns.html
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
