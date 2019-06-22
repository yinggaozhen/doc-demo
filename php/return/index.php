<?php

/**
 * <p>"@return" : 用于在函数/方法返回值信息</p>
 * <p>完整类型可查看README.md</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagReturn
{
    private static $config = [];

    /**
     * <1.> 返回主机名称
     *
     * @return string 主机名称
     */
    public static function getHost()
    {
        return $_SERVER['host'] ?: '127.0.0.1';
    }

    /**
     * <2.> 返回配置信息，如果name为null，返回所有配置
     *
     * @param string|null $name 配置名称
     * @return string|array 主机名称(返回值多类型)
     */
    public static function getConfig($name = null)
    {
        return isset(static::$config[$name]) ? static::$config[$name] : static::$config;
    }
}

$host = TagReturn::getHost();
// PASS.
strlen($host);
// WARN. TagReturn::getHost返回值定义为string,所以$host用array方法会产生一个警告
array_pop($host);
