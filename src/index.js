#!/usr/bin/env node
require('dotenv').config();
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const { MostCommon } = require('../data/mostcommon');
const { readJSONFile, writeJSONToFile } = require('./filesystem');
const program = require('commander');
const fs = require('fs');

program
  .version('0.1.0')
  .option('-q, --quiz', 'Start Quiz')
  .option('-l, --learn', 'Learn')
  .option('-t, --time [time]', 'Change Learning Card Repeat interval')
  .option('-r, --reset', 'Delete user progress data')

  .parse(process.argv);

// inquirer.registerPrompt('checkbox-plus', require('./index'));
const arr = [];
function dataFilePath() {
  return '../data/data.json';
}
function loadQuestions() {
  let data;
  const datafile = dataFilePath();
  if (fs.existsSync(datafile)) {
    data = readJSONFile(datafile);
  } else {
    data = MostCommon;
  }
  for (const key in data) {
    MostCommon[key].chinese = key;
    arr.push(MostCommon[key]);
    if (arr[arr.length - 1].rate === undefined) {
      arr[arr.length - 1].rate = arr.length - 1;
    }
  }
}

function saveProgress() {
  console.log('progress saved');
  const data = {};
  for (let i = 0; i < arr.length; i += 1) {
    data[arr[i].chinese] = arr[i];
  }
  writeJSONToFile(dataFilePath(), data, []);
}
function success(message) {
  console.log(
    chalk.white.bgGreen.bold(message),
  );
}
function incorrect(message) {
  console.log(
    chalk.white.bgRed.bold(message),
  );
}

function showWelcome() {
  console.log(
    chalk.green(
      figlet.textSync('Ni Hao', {
        // font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  );
}

async function askQuestions(quiz) {
  const questions = [];
  const choices = [];
  for (let i = 0; i < quiz.options.keys.length; i += 1) {
    const key = quiz.options.keys[i];
    const opt = quiz.options.opt[key];
    if (!opt.hide) {
      choices.push({
        name: `${choices.length + 1})    ${opt.eng}`,
        value: key,
      });
    }
  }
  questions.push({
    type: 'list',
    name: 'choice',
    message: `    ${quiz.question.ask.chinese}`,
    choices,
  });

  const result = await inquirer.prompt(questions);
  return result;
}

function rand(max, notInclude = []) {
  if (max <= notInclude.length) {
    throw new Error('max random is too small');
  }

  let rnd = -1;
  let cnt = 0;
  while (rnd === -1 && notInclude.includes(rnd) === false) {
    rnd = Math.floor(Math.random() * max);
    cnt += 1;
    if (cnt > 100) {
      throw new Error('could not find random');
    }
  }
  return rnd;
}
function sortRate(sortField = 'rate') {
  arr.sort((a, b) => a[sortField] - b[sortField]);
}
function nextquestion() {
  sortRate('rate');
  const options = { keys: [], opt: {} };
  const question = { ask: {}, key: -1 };
  const optioncount = Number.parseInt(process.env.optioncount || 5, 10);

  for (let i = 0; i < optioncount; i += 1) {
    const rnd = rand(20, options.keys);
    const opt = arr[rnd];
    options.keys.push(rnd);
    options.opt[rnd] = opt;
    options.opt[rnd].hide = false;
  }

  const answer = rand(options.keys.length);
  question.ask = options.opt[options.keys[answer]];
  question.key = options.keys[answer];
  return { question, options };
}
async function game() {
  let quiz = nextquestion();
  let answer = {};
  while (true) {
    answer = await askQuestions(quiz);
    // answer = { choice: 1 };
    answer.choice = parseInt(answer.choice, 10);
    if (answer.choice === quiz.question.key) {
      success('correct');
      if (arr[quiz.question.key].rate === undefined) {
        arr[quiz.question.key].rate = 0;
      }
      arr[quiz.question.key].rate += 1;

      console.log('');
      console.log('');
      console.log('');
      quiz = nextquestion();
    } else {
      incorrect('incorrect');
      console.log('');
      console.log('');
      console.log('');
      if (arr[answer.choice].rate === undefined) {
        arr[answer.choice].rate = 0;
      }
      if (arr[answer.choice].rate === undefined) {
        arr[answer.choice].rate = 0;
      }
      arr[quiz.question.key].rate -= 1;
      arr[answer.choice].rate -= 1;
      quiz.options.opt[answer.choice].hide = true;
    }
  }
}
function learnTime() {
  if (program.time) {
    return parseInt(program.time, 10);
  }
  return process.env.time || 5000;
}
function startLearning() {
  console.log('----------');
  const rnd = rand(20);
  const learn = arr[rnd];
  sortRate('learnrate');
  if (arr[rnd].learnrate === undefined) {
    arr[rnd].learnrate = 0;
  }
  arr[rnd].learnrate += 3;
  console.log(learn.chinese);
  setTimeout(() => console.log(learn.eng), learnTime() / 2);
  setTimeout(startLearning, learnTime());
}
async function run() {
  if (program.reset) {
    fs.unlinkSync('./data/data.json');
    console.log('data file has been deleted');
    process.exit();
  }
  showWelcome();
  setInterval(saveProgress, process.env.saveTime || 10000);
  loadQuestions();
  if (program.learn) {
    startLearning();
  } else {
    await game();
  }
}
run();
