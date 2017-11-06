<?php

abstract class ClassForMixin
{
    public function world()
    {
    }
}

/**
 * @mixin ClassForMixin
 */
trait TraitForMixin
{
    public function hello()
    {
        $this->world();
    }
}