/**
 * @TODO 少了docs
 * @classdesc 指明这个标识应继承其父类的文档
 */
class FatherInheritDoc {

    /**
     * 此方法注释被继承
     *
     * @param {String} string
     */
    methodWithInherit(string) {

    }

    /**
     * 此方法注释不被继承
     *
     * @param {String} string
     */
    methodWithoutInherit(string) {

    }
}

class SonInheritDoc extends FatherInheritDoc {

    /**
     * @inheritDoc
     */
    methodWithInherit(string) {

    }

    methodWithoutInherit(string) {

    }
}

// FIXME. 文档继承之后，第一个入参被认为应当传入string类型，所以传入错误参数会警告
(new SonInheritDoc()).methodWithInherit([1, 2, 3, 4, 5]);

// 文档没有被继承，即便传入错误参数也不会警告
(new SonInheritDoc()).methodWithoutInherit([]);