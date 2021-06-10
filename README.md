# SimpleListApp

This project is a frontend application with a simple list that shows the F1 world champions starting from 2005 until
now.

## Getting started

For running application install all dependencies throw `npm install` and run `npm start`.

## Architecture decisions

### Modules

Application includes following module types:

* Features (lazy-loaded for better performance)
* Core (includes main components and logic which are reused throw all application)

### State Management

Application uses NgRx architecture under the hood, including Actions, Effects, Reducers and Selectors which communicate with each other.

### Dev environment

I tried to configure dev environment to make further development comfortable/easier.

For linting I used eslint with a few angular-, typescript-support libraries.
For testing I prefer jest, that's why configured it too.
You can check it's work with `npm lint` and `npm test` commands.

### Iconic font

Custom iconic font is added for showing my experience and understanding how it works. 
I would agree that in my case it could be just simple png/svg stored in assets :) 

### Styles setup

I added global styles which are used in whole application + Setup global variables which simplify markup writing. 

### Final words

The whole structure may look a bit massive and huge. For example, I personally agree with idea that state management for small applications is redundant.

Take into account that I just wanted to show my knowledge and create architecture which will be convenient for big applications. 
