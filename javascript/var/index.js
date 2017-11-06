
'use strict';

/**
 * @link http://usejsdoc.org/tags-member.html
 */
class ClassForMember {

    /**
     * @public
     */
    publicMethod() {
    }

    /**
     * @private
     */
    privateMethod() {

    }
}

/** @member {ClassForMember} PersonVariable */
const PersonVariable = new ClassForMember;
PersonVariable.publicMethod();  // right
PersonVariable.privateMethod(); // warning