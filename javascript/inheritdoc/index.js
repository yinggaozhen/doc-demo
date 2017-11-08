
'use strict';

/**
 * @link http://usejsdoc.org/tags-inheritdoc.html
 * @desc
 *  `@inheritdoc` : 文档继承
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

(new Student()).methodWithInherit([], ''); // 文档继承之后，传入错误参数会警告

(new Student()).methodWithoutInherit([], ''); // 文档没有被继承，即便传入错误参数也不会警告