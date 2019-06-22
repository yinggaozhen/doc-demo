<?php

/**
 * <p>"@see" : 可用作于跳转到外部链接/内部程序跳转</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagSee
{
    /**
     * <1>.引导外部跳转链接
     *
     * @see http://test.com/logo.png
     */
    public static function buildLogoUrl()
    {
        return 'http://test.com/logo.png';
    }

    /**
     * <2>.引导到内部程序
     *
     * @see TagSee::buildLogoUrl
     *
     * @param callable $method
     * @return mixed
     */
    public static function logoProxy($method)
    {
        return $method();
    }
}
