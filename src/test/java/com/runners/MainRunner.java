package com.runners;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\raghu\\eclipse-workspace\\POMWebDriverUniversity\\src\\test\\java\\com\\features", //the path of the feature files
		glue={"com\\stepDefinitions"},//the path of the step definition files
		plugin = {"pretty","html:test-outout","com.cucumber.listener.ExtentCucumberFormatter:target/report.html"},
		monochrome = true,
		strict = true,
		dryRun = false
	    //tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"} //~ is used as disable
			
		)

public class MainRunner extends AbstractTestNGCucumberTests {

}








