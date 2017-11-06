<?php

class ClassForDeprecated
{
    /**
     * @desc 表示已经被废弃
     * @deprecated
     */
    public function publicMethod()
    {

    }
}

(new ClassForDeprecated)->publicMethod();