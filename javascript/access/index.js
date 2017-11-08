
'use strict';

/**
 * @link http://usejsdoc.org/tags-access.html
 *
 * @desc
 *  `@access` : 访问权限,虽然js里对属性类没有访问限制,但是可以通过注释去进行约束.
 */

class ClassForAccess {

    constructor() {

        /**
         * @type {null}
         * @public
         */
        this.publicProperty    = null;

        /**
         * @type {null}
         * @protected
         */
        this.protectedProperty = null;

        /**
         * @type {null}
         * @private
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

const instance = new ClassForAccess();

console.log(instance.publicProperty);    // ok
console.log(instance.protectedProperty); // warning
console.log(instance.privatePerperty);   // warning

instance.publicMethod();    // ok
instance.protectedMethod(); // warning
instance.privateMethod();   // warning