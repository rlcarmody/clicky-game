# Clicky Game

A React based memory game

## Overview

How strong is your memory?

Challenge yourselft by clicking each image only once. Each unique image will increase your score by 10 points.

Clicking the same image more than once will reset your score.

## Technical details

A list of Pokemon is fetched using PokeApi and a subsequent call is made for the image for each result in the initial response.

Each image is a component that stores whether it was already clicked in it's own state and using a method from the main container on each click to pass back whether the click was unique or not.

Each unique click calls a shuffle function recursively to ensure fully randomized selection and provide an interesting animation powered by React Flip Move.


### Credits

Images sourced through [PokeApi](https://pokeapi.co)

Spinner animation from [SpinKit](https://github.com/tobiasahlin/SpinKit)

Shuffle animation from [React Flip Move](https://github.com/joshwcomeau/react-flip-move)

