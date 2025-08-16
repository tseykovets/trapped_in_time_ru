# Trapped in Time

Text-based game "Trapped in Time" (Russian: "В ловушке времени") by Simon Christiansen (Russian: Симон Кристиансен) and Nikita Tseykovets (Russian: Никита Цейковец).

The game is in Russian and developed for [UrqW](https://github.com/urqw/UrqW) text-based game engine.

This repository contains the source code and other resources of the game. The game is available for launch in the [UrqW engine online catalog](https://urqw.github.io/UrqW/#trapped_in_time_ru). See the original English version [here](https://github.com/tseykovets/trapped_in_time).

The game was first published on August 16, 2025.

Interactive fiction identifier (IFID) of the game: 5CED8A6C-E644-419A-9A26-EFFF3B610BE9

## Description

Вы стоите перед великолепным небоскрёбом, в котором располагается Копенгагенский институт хронологии — ведущий мировой центр хронологических исследований. Несмотря на многолетние хроно-тренировки, вы не можете отделаться от ощущения порхания бабочек в животе. Сегодня настал тот самый день! Наконец-то ваше обучение даст свои плоды.

## Development

The game is developed using the [game template](https://github.com/urqw/game_template) for [UrqW engine](https://github.com/urqw/UrqW).

Workflow:

1. Clone the Game repository (`git clone`) and go to its directory (`cd`).
2. Install all dependencies:
	```shell
	npm install
	```
3. All game data is stored in the urqw directory. This is where the game development takes place.
4. Open the UrqW documentation if needed:
	```shell
	npm run docs
	```
5. Make your changes to the game files and build the project:
	```shell
	npm run build
	```
6. After the first build, run a local web server with an interpreter to debug the game you are developing:
	```shell
	npm start
	```
7. After significant changes to the project, rebuild it:
	```shell
	npm run build
	```
	The web server with the running interpreter will automatically track the build update and initiate a reload of the page with the new version of the game. \
	At any time, you can open the menu in the interpreter interface and expand the Debugging section to see additional information about the running game. The information is constantly updated.
8. Continue developing the game and debugging it in the running interpreter. In parallel, you can use the version control system to save the development history. Binary builds of the game will not be included in the Git history.
9. Once the game is ready, you can build the release as an archive:
	```shell
	npm run release
	```
	This archive is suitable for running in UrqW. \
	Or you can add or update the game repository to the UrqW instance repository as a Git submodule. The project structure meets the necessary UrqW requirements for adding games as submodules.

For details, please refer to the UrqW documentation.

## License

Trapped in Time - text-based game for UrqW engine

Written in 2013 by Simon Christiansen

Written in 2025 by Nikita Tseykovets

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to the software and the text contained therein to the public domain worldwide. the software and the text contained therein are distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with the software and the text contained therein. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
