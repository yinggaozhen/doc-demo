@link
=======

`@link` : 此标签可以引导你到指定的**外部跳转链接**.

**此标签推荐使用PhpStorm进行阅读,可以能直观体现标签的作用**

语法
=======

> `@link [URI] [<description>]`

描述
=======

该标签只有1个跳转选项

- `@外部跳转链接` : 必须是满足[RFC2396](https://www.ietf.org/rfc/rfc2396.txt)的跳转链接,例如[http://github.com/yinggaozhen](http://github.com/yinggaozhen)

和@see的区别
=======

| - | @see | @link |
|---|---|---|
|外部链接 | √ | √ |
|内部程序 | √ | X |

