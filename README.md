### Hexlet tests and linter status:

[![Actions Status](https://github.com/MariaShalunova/backend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MariaShalunova/backend-project-44/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/09cc1170b9af915b8801/maintainability)](https://codeclimate.com/github/MariaShalunova/backend-project-44/maintainability)

### Building backend-project-44

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

## Start game: "GCD"

The essence of the game is as follows: the user is shown two random numbers, for example, 25 50. The user must calculate and enter the greatest common divisor of these numbers.

```sh
make brain-gcd | node bin/brain-gcd.js
```

[![asciicast](https://asciinema.org/a/FY9X0cQhPetmth5JH14uRs2Mr.svg)](https://asciinema.org/a/FY9X0cQhPetmth5JH14uRs2Mr)

## Start game: "Arithmetic progression game"

We show the player a series of numbers forming an arithmetic progression, replacing any of the numbers with two dots. The player must determine this number.

```sh
make brain-progression | node bin/brain-progression.js
```

[![asciicast](https://asciinema.org/a/eDKmVB9bDzJavx0ZWl1Na7hSI.svg)](https://asciinema.org/a/eDKmVB9bDzJavx0ZWl1Na7hSI)

## Start game: "Is the number prime?"

We show the player the number. The player must determine whether this number is prime.

```sh
make brain-prime | node bin/brain-prime.js
```

[![asciicast](https://asciinema.org/a/abvInfoaeNzPyFUpsmouellEH.svg)](https://asciinema.org/a/abvInfoaeNzPyFUpsmouellEH)
