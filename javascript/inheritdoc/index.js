
'use strict';

/**
 * @link http://usejsdoc.org/tags-inheritdoc.html
 */
class PersonForInheritDoc {

    /**
     * @desc 此方法文档被继承
     * @param {String} stringVariable
     * @param {Array} ArrayVariable
     */
    methodWithInherit(stringVariable, ArrayVariable) {

    }

    /**
     * @desc 此方法文档不被继承
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