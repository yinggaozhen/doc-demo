<?php

/**
 * <p>"@throws" : 抛出一个异常，告诉调用方需要做好处理异常相关工作</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagThrows
{
    /**
     * 整数相除
     *
     * @param integer $a
     * @param integer $b
     * @return float|int
     * @throws \Exception 被除数不能为0
     */
    public static function div($a, $b)
    {
        if (empty($b)) {
            throw new Exception('Division by zero');
        }

        return $a / $b;
    }
}

echo TagThrows::div(1, 2);
