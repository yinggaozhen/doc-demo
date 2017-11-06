
'use strict';

/**
 * @link http://usejsdoc.org/tags-see.html
 */
class Person {

    /**
     * @desc 跳转到指定链接或者项目代码地址
     * @deprecated
     * @see NewPerson.publicMethod
     * @see http://www.baidu.com
     */
    publicMethod() {

    }
}

class NewPerson {

    publicMethod() {

    }
}

(new Person()).publicMethod();