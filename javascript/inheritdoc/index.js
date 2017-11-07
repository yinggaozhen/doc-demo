
'use strict';

/**
 * @link http://usejsdoc.org/tags-inheritdoc.html
 */
class PersonForInheritDoc {

    /**
     * 此方法注释被继承
     *
     * @param {String} stringVariable
     * @param {Array} ArrayVariable
     */
    methodWithInherit(stringVariable, ArrayVariable) {

    }

    /**
     * 此方法注释不被继承
     *
     * @param {String} stringVariable
     * @param {Array} ArrayVariable
     */
    methodWithoutInherit(stringVariable, ArrayVariable) {

    }
}

class Student extends PersonForInheritDoc {

    /**
     * @inheritDoc
     */
    methodWithInherit(stringVariable, ArrayVariable) {

    }

    methodWithoutInherit(stringVariable, ArrayVariable) {

    }
}

(new Student()).methodWithInherit([], '');
(new Student()).methodWithoutInherit([], '');