
'use strict';

class BeiException extends Error {}
class HuException extends Error {}

/**
 * @link http://usejsdoc.org/tags-throws.html
 */
class ClassForThrows {

    /**
     * @throws {BeiException}
     */
    static throwBeiException() {
        throw new BeiException();
    }

    /**
     * @param {Boolean} type
     * @throws {BeiException|HuException}
     */
    static throwMixedException(type) {
        if (type) {
            throw new BeiException();
        }

        throw new HuException();
    }
}

ClassForThrows.throwBeiException();

ClassForThrows.throwMixedException(true);