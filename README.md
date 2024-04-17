### Hexlet tests and linter status:

[![Actions Status](https://github.com/MariaShalunova/backend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MariaShalunova/backend-project-44/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/09cc1170b9af915b8801/maintainability)](https://codeclimate.com/github/MariaShalunova/backend-project-44/maintainability)

## Building backend-project-44

```sh
git clone https://github.com/MariaShalunova/backend-project-44.git
cd backend-project-44
make install | npm ci
```

## Start game: "Parity Check"

The essence of the game is this: the user is shown a random number. And he needs to answer 'yes' if the number is even, or 'no' if it’s odd.

```sh
make brain-even | node bin/brain-even.js
```

[![asciicast](https://asciinema.org/a/WJeq9WSm27HpWziYPhZdxHWOl.svg)](https://asciinema.org/a/WJeq9WSm27HpWziYPhZdxHWOl)


## Start game: "Calculator"

The essence of the game is as follows: the user is shown a random mathematical expression, for example 35 + 16, which must be calculated and the correct answer written down.

```sh
make brain-calc | node bin/brain-calc.js
```

[![asciicast](https://asciinema.org/a/jh3medwmk0LtlBuHwIhxH7HgC.svg)](https://asciinema.org/a/jh3medwmk0LtlBuHwIhxH7HgC)