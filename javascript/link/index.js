
'use strict';

/**
 * @link http://usejsdoc.org/tags-see.html
 *
 * @desc
 *  `@link` : 表示一个链接.
 */

class Image {

    /**
     * 构建Icon
     *
     * @link https://www.baidu.com/img/bd_logo1.png
     * @return {string}
     */
    static buildMainIcon() {
        return 'https://www.baidu.com/img/bd_logo1.png';
    }

    /**
     * 构建主站URL
     *
     * @link https://www.baidu.com
     * @return {string}
     */
    static buildMainUrl() {
        return 'https://www.baidu.com';
    }
}

Image.buildMainIcon();

Image.buildMainUrl();