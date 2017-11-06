<?php

require './index.php';

class OuterClass
{
    public function outerMethod()
    {
        (new ClassForInternal())->internalMethod();
    }
}