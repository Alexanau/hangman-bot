hangman-bot
===========

Simple bot that plays Hangman in IRC using a text file of words

Installation/Usage
==========
* Change config variables in hangman.js to desired channel and nick
* Get dictionary file (list of words, or use one of the provided ones)

Run as follows:

```
node hangman.js [DICTIONARY FILE NAME]
```

Commands
===========
* Start game

```
.start hangman
```

* Guess a letter

```
.guess [LETTER]
```

* Guess a word

```
.guessword [WORD]
```

* View available letters

```
.letters
```

* See current hangman and word progress

```
.status
```
