<h1 align="center">Pig Dice</h1>

Matthew Eilar | [LinkedIn](https://www.linkedin.com/in/eilar-503/) | [email](mailto:<meilar@gmail.com>) | [website](www.mattheweilar.com)

Daniel Lindsey | [LinkedIn](https://www.linkedin.com/in/dlinds/) | [email](mailto:<daniellindsey85254@gmail.com>)

## About this project
 "Pig is a simple dice spel first described in print in John Scarne in 1945.[1] Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1."

- [Wikipedia, "Pig (dice game)"](https://en.wikipedia.org/wiki/Pig_%28dice_game%29)

## Features


## How to view

To view this webpage:

1. Ensure that you have the most recent version of Git installed. [Instructions can be found here.](https://github.com/git-guides/install-git) 
1. Clone this repository to your local machine using the Terminal or Bash command `git clone https://github.com/meilar/CHANGE_ME.git`.
2. Open "index.html" in a CSS3 and HTML5-compliant browser such as Google Chrome, Mozilla Firefox, or Apple Safari.

[Alternately, a hosted version of this pages is available to view on Github Pages.](https://meilar.github.io/CHANGE_ME)

## Technologies Used

This site incorporates the following frameworks and languages:

- HTML 5
- CSS 3
- jQuery 3.6.0
- Bootstrap 4.5

The following software tools were used to develop this page:

- VS Code
- Google Chrome
- Git

## Known Issues

## Tests

#### Describe rollDice()  
Test: "It should return a number between 1 and 6"  
Code: `rollDice()`
Result: `1...2...3...4...5...6`

#### Describe scoreKeeper(roll, player)  
Test: "It should add roll amount to player's score."  
Code: `scoreKeeper(6, 1)`
Result: `Player 1 Score is 6 Player 2 score is 0`

#### Describe changeActivePlayer()  
Test: "It should change both player's isTurn booleans."  
Code: `changeActivePlayer()`
Result: `player1.isTurn = false; player2.isTurn = true


## License 

MIT License

© 2022 Matthew Eilar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.