<?php

class Image
{
    /**
     * 构建Icon
     *
     * @link https://www.baidu.com/img/bd_logo1.png
     * @return string
     */
    public static function buildMainIcon()
    {
        return 'https://www.baidu.com/img/bd_logo1.png';
    }

    /**
     * 构建主站URL
     *
     * @link https://www.baidu.com
     * @return string
     */
    public static function buildMaiUrl()
    {
        return 'https://www.baidu.com';
    }
}

Image::buildMainIcon();

Image::buildMaiUrl();