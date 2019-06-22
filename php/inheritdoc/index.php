<?php

/**
 * <p>"@inheritdoc" : 文档继承,会继承父类的文档注释，继承之后可以对父类文档进行重写</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagInheritdoc
{
    /**
     * <1>.此方法注释被继承
     *
     * @param array $array
     */
    public function methodWithInherit($array)
    {
    }

    /**
     * <2>.此方法注释被继承，且注释被重写
     *
     * @param string $string
     * @param array $mixed
     */
    public function methodWithOverride($string, $mixed)
    {
    }
}

class TagInheritdocImpl extends TagInheritdoc
{
    /**
     * @inheritDoc
     */
    public function methodWithInherit($array)
    {
    }

    /**
     * 注释被继承后，重写mixed字段类型为int
     *
     * @inheritDoc
     * @param int $mixed
     */
    public function methodWithOverride($string, $mixed)
    {
    }
}

// PASS.父类定义文档入参类型为array,继承之后所有注释也都被生效
(new TagInheritdocImpl())->methodWithInherit([]);
// WARN.父类文档注释定义入参为array,但是传入是数字
(new TagInheritdocImpl())->methodWithInherit(123456);

// PASS.重写之后正确的入参
(new TagInheritdocImpl())->methodWithOverride('', 123);
// WARN.父类定义文档$string入参类型是string，但是实际传入类型为数组
(new TagInheritdocImpl())->methodWithOverride([], 123);
// WARN.父类定义文档$mixed参类型是array，但是子类对$mixed类型重写为int.
(new TagInheritdocImpl())->methodWithOverride('', []);
