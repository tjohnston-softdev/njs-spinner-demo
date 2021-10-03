const ora = require("ora-classic");
console.log("Running 'ora' demo - Classic");
runDemo();


// Main function.
function runDemo()
{
	var spinnerObj = ora("Performing Task").start();
	
	// Perform async task.
	simulateTask(function (taskErr, taskRes)
	{
		// Task complete.
		
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

// Simulates an async task where a loading spinner would be used.
function simulateTask(taskCallback)
{
	var timerLength = getDelayLength();
	var resultFlag = getResult();
	
	// Wait for a random amount of time.
	setTimeout(function()
	{
		// Task complete.
		
		if (resultFlag > 0)
		{
			// Successful.
			return taskCallback(null, true);
		}
		else
		{
			// Error.
			return taskCallback(new Error("Something bad happened"), null);
		}
	}, timerLength);
}


// Randomly decides length of simulated task, 1 to 3 seconds.
function getDelayLength()
{
	var minDelay = 1000;
	var maxDelay = 3000;
	var randomSeed = Math.random() * (maxDelay - minDelay);
	var delayRes = Math.round(minDelay + randomSeed);
	
	return delayRes;
}


// Randomly decides whether simulated task is successful, 50-50.
function getResult()
{
	var randomSeed = Math.random();
	var chosenFlag = Math.round(randomSeed);
	return chosenFlag;
}