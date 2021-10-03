const ora = require("ora-classic");
console.log("Running 'ora' demo - Classic");
runDemo();


function runDemo()
{
	var spinnerObj = ora("Performing Task").start();
	
	simulateTask(function (taskErr, taskRes)
	{
		if (taskErr !== null)
		{
			spinnerObj.fail("Task Failed");
			console.log(taskErr.message);
		}
		else
		{
			spinnerObj.succeed("Task Successful");
		}
	});
}


function simulateTask(taskCallback)
{
	var timerLength = getDelayLength();
	var resultFlag = getResult();
	
	setTimeout(function()
	{
		if (resultFlag > 0)
		{
			return taskCallback(null, true);
		}
		else
		{
			return taskCallback(new Error("Something bad happened"), null);
		}
	}, timerLength);
}


function getDelayLength()
{
	var minDelay = 1000;
	var maxDelay = 3000;
	var randomSeed = Math.random() * (maxDelay - minDelay);
	var delayRes = Math.round(minDelay + randomSeed);
	
	return delayRes;
}


function getResult()
{
	var randomSeed = Math.random();
	var chosenFlag = Math.round(randomSeed);
	return chosenFlag;
}