#! /usr/bin/env node
import inquirer from "inquirer";
const home = await inquirer.prompt([
    {
        name: "choices",
        type: "list",
        message: "WELCOME",
        choices: ['New student', 'Existing student']
    }
]);
if (home.choices == 'New student') {
    console.log('You are a new student');
    let queries = await inquirer.prompt([
        {
            name: 'firstName',
            type: "input",
            message: 'Enter first name: '
        },
        {
            name: 'lastName',
            type: "input",
            message: 'Enter last name: '
        },
        {
            name: 'courses',
            type: 'list',
            message: 'Select the courses you want to enroll',
            choices: ['Python', 'HTML', 'Typescript', 'Javascript', 'MS office', 'Graphic designing']
        }
    ]);
    let counter = 1;
    function uniqueId() {
        const id = counter.toString().padStart(5, '0');
        counter++;
        return id;
    }
    console.log(`Hello ${queries.firstName} ${queries.lastName}!`);
    let saveId = uniqueId();
    console.log(`ID: ${saveId}`);
    let newChoices = await inquirer.prompt([
        {
            name: 'choices2',
            type: 'list',
            message: 'More options',
            choices: ['Enrolled', 'View balance', 'Pay tuition fee', 'Show status']
        }
    ]);
    if (newChoices.choices2 == 'Enrolled') {
        console.log(`You are enrolled in ${queries.courses}`);
    }
    else if (newChoices.choices2 == 'View balance') {
        console.log(`Current balance: Rs. 15000`);
    }
    else if (newChoices.choices2 == 'Pay tuition fee') {
        let fee = await inquirer.prompt([
            {
                name: 'voucher',
                message: 'FEE VOUCHER',
                type: 'list',
                choices: ['This month', 'Previous month']
            }
        ]);
        if (fee.voucher == 'This month') {
            console.log('FEE VOUCHER FOR THE MONTH OF MAY');
            console.log(`Name: ${queries.firstName} ${queries.lastName}`);
            console.log(`ID: ${saveId}`);
            console.log('Rs. 5000');
        }
        else {
            console.log('FEE VOUCHER FOR THE MONTH OF APRIL');
            console.log(`Name: ${queries.firstName} ${queries.lastName}`);
            console.log(`ID: ${saveId}`);
            console.log('Rs. 5000');
        }
    }
    else if (newChoices.choices2 == 'Show status') {
        console.log(`Name: ${queries.firstName} ${queries.lastName}`);
        console.log(`ID: ${saveId}`);
        console.log(`Enrolled in ${queries.courses}`);
        console.log(`Current balance: 15000`);
    }
}
else {
    let existingName = await inquirer.prompt([
        {
            name: 'prevStd',
            type: 'input',
            message: 'Enter your name'
        }
    ]);
    console.log(`Welcome back ${existingName.prevStd}`);
    let newChoices = await inquirer.prompt([
        {
            name: 'choices2',
            type: 'list',
            message: 'More options',
            choices: ['Enrolled', 'View balance', 'Pay tuition fee', 'Show status']
        }
    ]);
    if (newChoices.choices2 == 'Enrolled') {
        console.log(`You are enrolled in Typescript`);
    }
    else if (newChoices.choices2 == 'View balance') {
        console.log(`Current balance: Rs. 15000`);
    }
    else if (newChoices.choices2 == 'Pay tuition fee') {
        let fee = await inquirer.prompt([
            {
                name: 'voucher',
                message: 'FEE VOUCHER',
                type: 'list',
                choices: ['This month', 'Previous month']
            }
        ]);
        if (fee.voucher == 'This month') {
            console.log('FEE VOUCHER FOR THE MONTH OF MAY');
            console.log(`Name: ${existingName.prevStd}`);
            console.log(`ID: 00001`);
            console.log('Rs. 5000');
        }
        else {
            console.log('FEE VOUCHER FOR THE MONTH OF APRIL');
            console.log(`Name: ${existingName.prevStd}`);
            console.log(`ID: 00001`);
            console.log('Rs. 5000');
        }
    }
    else if (newChoices.choices2 == 'Show status') {
        console.log(`Name: ${existingName.prevStd}`);
        console.log(`ID: 00001`);
        console.log(`Enrolled in Typescript`);
        console.log(`Current balance: 15000`);
    }
}
