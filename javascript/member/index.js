
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

// =========== 指定某个值的类型
/** @member {ClassForMember} PersonVariable */
const PersonVariable = new ClassForMember;
PersonVariable.publicMethod();  // right
PersonVariable.privateMethod(); // warning


// =========== 数组类型
/** @member {ClassForMember[]} PersonVariable */
const PersonVariables = [];
PersonVariables.push(PersonVariable); // right
PersonVariables.push(1); // waring