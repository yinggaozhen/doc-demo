/**
 * "@abstract" : 被此标记标识的成员方法，必须在继承成员的对象中实现。
 */
class TagAbstract {
    /**
     * 一个抽象方法，需要待实现
     *
     * @abstract
     */
    methodNeedImplements() {
        throw new Error('You have to implement the this methods')
    }
}

class TagAbstractSon extends TagAbstract {
}



new TagAbstractSon();
