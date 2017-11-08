
'use strict';

/**
 * @link http://usejsdoc.org/tags-type.html
 *
 * @desc
 *  `@type` : 为一个变量指定类型，常用变量类型有
 *      {*}(即mixed，随意任何类型)
 *      {Null}
 *      {Undefined}
 *      {Number}
 *      {String}
 *      {Array}
 *      {Object}
 *      {ClassName}
 *      {ClassName1|ClassName2}(指定的多种类型)
 *
 */
class ClassForType {
    hello() {

    }
}

class InstanceForType {

    constructor() {

        /**
         * @type {*}
         */
        this.propertyForAll = null;

        /**
         * @type {String}
         */
        this.propertyForString = null;

        /**
         * @type {Array}
         */
        this.propertyForArray = null;

        /**
         * @type {ClassForType}
         */
        this.propertyForClass = null;

        /**
         * @type {ClassForType|Array}
         */
        this.propertyForMixed = null;
    }

}

const personInstance = new InstanceForType();

// TODO
personInstance.propertyForAll;
// TODO
personInstance.propertyForString;
// TODO
personInstance.propertyForArray;
// TODO
personInstance.propertyForClass;
// TODO
personInstance.propertyForMixed;



//================================================
class ClassForTypeVar {

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
/** @type {ClassForTypeVar} PersonVariable */
let unknownVariable = null; // 这里我们定义一个未知类型的变量，但通过注释对其指定变量
PersonVariable.publicMethod();  // right
PersonVariable.privateMethod(); // warning


// =========== 数组类型
/** @type {ClassForTypeVar[]} PersonVariable */
let PersonVariables = []; // 这里我们定义PersonVariables是ClassForMember数组类型,所以约定上只能往里边加入ClassForMember类型变量
PersonVariables.push(unknownVariable); // right
PersonVariables.push(1);               // waring(因为是数字类型,所以warning)