<?php

/**
 * <p>"@method" : 此标签可告诉类有哪些魔术方法可以调用</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 *
 * @method int incr($number, $step = 1) 递增数字
 * @method array explode(string $delimiter, string $string) 分割字符串
 * @method static void incrStatic($number, $step = 1) 递增数字(静态)
 */
class TagMethod
{
    function __call($name, $arguments)
    {
    }

    static function __callStatic($name, $arguments)
    {
    }
}

$tagMethod = new TagMethod();

// PASS.
$tagMethod->incr(1);
// PASS.
$tagMethod->explode('|', 'a|b|c');
// PASS.
$tagMethod::incrStatic(1);
// WARN.因为方法定义第一个入参类型为string,实际传入为array
$tagMethod->explode([], 'a|b|c');
// WARN.没有用@method申明
$tagMethod->noobMethod();
