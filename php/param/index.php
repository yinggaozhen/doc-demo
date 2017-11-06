<?php

class PersonForParam
{

    /**
     * @param string              $stringVariable
     * @param array               $arrayVariable
     * @param ClassForParam       $studentVariable
     * @param array|ClassForParam $mixedVariable
     */
    function __construct($stringVariable, $arrayVariable, $studentVariable, $mixedVariable)
    {

    }
}

class ClassForParam {}

class ClassForParam2 {}

// right
new PersonForParam('', [], new ClassForParam, new ClassForParam);
// right
new PersonForParam('', [], new ClassForParam, []);
// error
new PersonForParam([], [], new ClassForParam, []);
// error
new PersonForParam('', 123, new ClassForParam, []);
// error
new PersonForParam('', [], new ClassForParam2, []);
// error
new PersonForParam('', [], new ClassForParam, '');