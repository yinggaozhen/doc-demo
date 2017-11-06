<?php

/**
 * @classdesc 例子 - 用单例创建类
 */
class ClassForExample
{
    /**
     * @var self
     */
    public static $instance = null;

    /**
     * @param Boolean $isSingle 是否走单例
     *
     * @example :
     *  默认实例是走单例 ClassForExample.getInstance()
     *
     * @example :
     *  实例化新类 ClassForExample.getInstance(false)
     *
     * @return self
     */
    static public function getInstance($isSingle = true)
    {
        if ($isSingle) {
            if (self::$instance === null) {
                self::$instance = new self();
            }

            return self::$instance;
        }

        return new self();
    }
}

ClassForExample::getInstance();