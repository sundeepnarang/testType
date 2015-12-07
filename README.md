# testType
A module to match types of input variables.

# Before You Begin

## What it Does?

Matches the types of inputs to provided types

# Usage

## Install

    npm install test-type

## Initialiize

    var testType       = require("test-type");

# Example

## Inputs

Takes two Arrays of :

1. Inputs
2. Types

## Output

Synchronously returns null if success(i.e. types match) or error.

## Code

    var error = testType(["test",1],['string','number']);

    if(error){
        // handle error
    }

# To Do

* Add support for instance types
* Add support for allowing multiple options like string/number