<?php

/**
 * <p>"@internal" : 内部类/方法，只能作用于当前文件，外部文件不可调用</p>
 *
 * <b>此标签建议在PHPStorm中打开此演示文档，可以看到具体的标签效果</b>
 */
class TagInternal
{
    function proxy()
    {
        // PASS. 当前文件可调用
        // 错误调用方法可查看outer.php
        return TagInternalClass::invoke();
    }
}

/**
 * 内部类，只允许当前文件使用，外部文件不可使用
 *
 * @internal
 */
class TagInternalClass
{
    public static function invoke()
    {
        return 'Hello Guozhen';
    }
}
