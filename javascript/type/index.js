
'use strict';

/**
 * @link http://usejsdoc.org/tags-type.html
 */
class ClassForType {
    hello() {

    }
}

class Person {

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

const personInstance = new Person();

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