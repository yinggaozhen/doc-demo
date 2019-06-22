<?php

/**
 * <p>"@property" : 当类中包含魔术方法__get/__set时，可以通过此标签定义名称</p>
 * <p>类型可查看README.md</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 *
 * @property int    $intVar    数字
 * @property string $stringVar 字符串
 * @property mixed  $any       任意类型返回值
 */
class TagProperty
{
    public function __get($name)
    {
    }

    public function __set($name, $value)
    {
    }
}

$tag = new TagProperty();

// PASS.
$tag->any = 2;
// WARN.hello未在@property中定义
$tag->hello = 2;
