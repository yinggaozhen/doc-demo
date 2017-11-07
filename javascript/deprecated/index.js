
'use strict';

/**
 * @module annotation.javascript
 * @link http://usejsdoc.org/tags-deprecated.html
 *
 * @desc
 *  `@deprecated` : 表示此方法或类已被遗弃，常配合`@see`使用
 */

class ClassForDeprecated {

    /**
     * 表示此方法已经被废弃
     *
     * @deprecated
     */
    publicMethod() {

    }
}

(new ClassForDeprecated()).publicMethod();