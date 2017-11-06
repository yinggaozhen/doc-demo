<?php

class ClassForInternal
{
    /**
     * @internal
     */
    public function internalMethod()
    {

    }

    public function invoke()
    {
        $this->internalMethod();
    }
}