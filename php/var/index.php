<?php

/**
 * <p>"@var" : 定义一个数据的类型</p>
 * <p>完整类型可查看README.md</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagVar
{
    /**
     * <1>.第一种使用方法，只定义类型，通常用于类成员变量中
     *
     * @var array 标签数组
     */
    public $tags;
}

$tag = new TagVar();
// WARN.因为@var定义了这个参数类型是string，所以字符串函数strlen产生警告
strlen($tag->tags);

// =========================== 第二种定义方法 ================================

/**
 * <2>.第二种使用方法，给指定变量指定类型
 *
 * @var array $tags 标签数组
 */
// WARN.因为@var定义$tags的参数类型是array，所以字符串函数strlen产生警告
strlen($tags);
