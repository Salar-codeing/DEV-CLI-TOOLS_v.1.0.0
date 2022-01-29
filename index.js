#!user/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import open from 'open'

let users_name;
console.clear();
const sleep_for_loading = (ms = 4000) => new Promise((r) => setTimeout(r, ms));
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function commands(){
    const command_s = await inquirer.prompt({
        name: 'commandaction',
        type: 'list',
        message: 'Commands ->:',
        choices: [
            'Code Problem Solver',
            'GitHub',
            'Coding News',
            'Google',
            'Spotify',
            'SoundCloud',
            'YouTube',
            'Practice Typing',
            `${chalk.red('Exit')}`,
        ],
    });
    return take_action(command_s.commandaction);
}

function take_action(command){
    if (command === "Code Problem Solver"){

    }else if (command === "GitHub"){
        open("https://www.github.com");
        console.clear();
        commands();
    }else if (command === "Coding News"){
        open("https://www.wired.com/tag/coding/");
        console.clear();
        commands();
    }else if (command === "Google"){
        open("https://www.google.com");
        console.clear();
        commands();
    }else if (command === "Spotify"){
        open("https://www.spotify.com");
        console.clear();
        commands();
    }else if (command === "SoundCloud"){
        open("https://www.soundcloud.com");
        console.clear();
        commands();
    }else if (command === "YouTube"){
        open("https://www.youtube.com");
        console.clear();
        commands();
    }else if (command === "Practice Typing"){
        open("https://monkeytype.com/");
        console.clear();
        commands();
    }
}

async function loading(){
    const loadingtitle = chalkAnimation.glitch(
        'Loading...\n'
    );
    await sleep_for_loading();

    loadingtitle.stop();

    console.clear();

    console.log(`
    CLI-DEV tools
    Made by ${chalk.blue('Salar Hashemian')}
    Github${chalk.gray('(Salar-codeing)')}: https://github.com/Salar-codeing
    `);

    await sleep();
    await greetings();
}

async function greetings(){
    var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  

    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "Good morning";  
    } else if (hour < 17) {  
      welcome = "Good afternoon";  
    } else {  
      welcome = "Good evening";  
    }
    console.clear();
    console.log(`${chalk.green(welcome)}\n`);

    await commands();
}
await loading();