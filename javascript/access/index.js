
'use strict';

/**
 * @link http://usejsdoc.org/tags-access.html
 */
class Person {

    constructor() {

        /**
         * @public
         * @type {null}
         */
        this.publicProperty    = null;

        /**
         * @protected
         * @type {null}
         */
        this.protectedProperty = null;

        /**
         * @private
         * @type {null}
         */
        this.privatePerperty   = null;
    }

    /**
     * @public
     */
    publicMethod() {

    }

    /**
     * @protected
     */
    protectedMethod() {

    }

    /**
     * @private
     */
    privateMethod() {

    }
}

const instance = new Person();

console.log(instance.publicProperty);
console.log(instance.protectedProperty);
console.log(instance.privatePerperty);

instance.publicMethod();

instance.protectedMethod();

instance.privateMethod();