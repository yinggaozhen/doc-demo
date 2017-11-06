<?php

require './index.php';

class OuterClass
{
    public function outerInstance()
    {
        new ClassForInternal();
    }

    public function outerInvoke()
    {
        (new ClassForInternal())->internalMethod();
    }
}