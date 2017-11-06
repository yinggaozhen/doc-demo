<?php

/**
 * @internal
 */
class ClassForInternal
{
    /**
     * @internal
     */
    public function internalMethod()
    {

    }

    protected function invoke()
    {
        $this->internalMethod();
    }

    public static function instance()
    {
        return new ClassForInternal();
    }
}