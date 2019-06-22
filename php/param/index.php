<?php

/**
 * <p>"@param" : 可以记录函数/方法的单个入参的信息</p>
 * <p>完整类型可查看README.md</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagParam
{
    /**
     * @param string[] $collection 集合
     * @param string $piece 碎片
     * @return string[]
     */
    static public function join($collection, $piece)
    {
        $collection[] = $piece;

        return $collection;
    }
}

// PASS.
TagParam::join([], 'hello');
// WARN. @param规定第一入参类型为string[]，但是实际入参类型为number
TagParam::join(123, 'hello');
