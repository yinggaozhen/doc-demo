
'use strict';

/**
 * @module annotation.javascript
 * @link http://usejsdoc.org/tags-access.html
 *
 * @desc
 *  `@access` : 访问权限,虽然js里对属性类没有访问限制,但是可以通过注释去进行约束.
 */

class ClassForAccess {

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

const instance = new ClassForAccess();

console.log(instance.publicProperty);    // ok
console.log(instance.protectedProperty); // warning
console.log(instance.privatePerperty);   // warning

instance.publicMethod();    // ok
instance.protectedMethod(); // warning
instance.privateMethod();   // warning