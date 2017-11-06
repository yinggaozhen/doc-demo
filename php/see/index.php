<?php

class ClassForSee
{

    /**
     * 以下代码将于下版本移除,请使用方法
     *
     * @deprecated
     * @see ClassForSee::publicNewMethod
     */
    public function publicMethod()
    {
    }

    /**
     * 新方法
     */
    public function publicNewMethod()
    {
    }
}

(new ClassForSee())->publicMethod();