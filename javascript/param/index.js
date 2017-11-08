
'use strict';

/**
 * @desc 指定入参类型
 * @link http://usejsdoc.org/tags-param.html
 *
 *  `@param` : 为一个变量指定类型，常用变量类型有
 *      {*}(即mixed，随意任何类型)
 *      {Null}
 *      {Undefined}
 *      {Number}
 *      {String}
 *      {Array}
 *      {Object}
 *      {ClassName}
 *      {ClassName1|ClassName2}(指定的多种类型)
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
// right(这里mixedVariable数组也能通过，因为注释申明里表示可以同时接收Array|ClassForParam)
new PersonForParam('', [], new ClassForParam, []);
// warning(第一个类型错误,期望string,实际则传入array)
new PersonForParam([], [], new ClassForParam, []);
// warning(第二个类型错误,期望array,实际则传入number)
new PersonForParam('', 123, new ClassForParam, []);
// warning(第三个类型错误,期望传入ClassForParam,实际传入ClassForParam2)
new PersonForParam('', [], new ClassForParam2, []);
// warning(第四个类型错误,期望传入Array|ClassForParam,实际传入string)
new PersonForParam('', [], new ClassForParam, '');