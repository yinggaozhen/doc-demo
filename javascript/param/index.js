
'use strict';

/**
 * @link http://usejsdoc.org/tags-param.html
 */
class PersonForParam {

    /**
     * @param {String}              stringVariable
     * @param {Array}               arrayVariable
     * @param {ClassForParam}       studentVariable
     * @param {Array|ClassForParam} mixedVariable
     */
    constructor(stringVariable, arrayVariable, studentVariable, mixedVariable) {

    }
}

class ClassForParam {
}

class ClassForParam2 {
}

// right
new PersonForParam('', [], new ClassForParam, new ClassForParam);
// right
new PersonForParam('', [], new ClassForParam, []);
// error
new PersonForParam([], [], new ClassForParam, []);
// error
new PersonForParam('', 123, new ClassForParam, []);
// error
new PersonForParam('', [], new ClassForParam2, []);
// error
new PersonForParam('', [], new ClassForParam, '');