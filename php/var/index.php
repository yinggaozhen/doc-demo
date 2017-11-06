<?php

class ClassForType
{
    public function hello() {}
}

class InstanceForType
{
    /**
     * @var mixed
     */
    public $propertyForAll = null;

    /**
     * @var string
     */
    public $propertyForString = null;

    /**
     * @var array
     */
    public $propertyForArray = null;

    /**
     * @var ClassForType
     */
    public $propertyForClass = null;

    /**
     * @var ClassForType|array
     */
    public $propertyForMixed = null;

}

$personInstance = new InstanceForType();

// TODO
strlen($personInstance->propertyForAll);
// TODO
strlen($personInstance->propertyForString);
// TODO
strlen($personInstance->propertyForArray);
// TODO
$personInstance->propertyForClass;
// TODO
$personInstance->propertyForMixed;