# Getting Started with Jons Sample LD App 

## Description

This is a simple, SPA demonstrating my usage of the Launchdarkly SDK and my understanding of the platform.

(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).

## Installation

Once you've downloaded this repo, cd to the folder.
In the project directory, you can run the folowing command in your terminal

### `npm start` 

The Launchdarkly React SDK should be a part of the package. If the apps fails to operate properly, please manually load the SDK at https://github.com/launchdarkly/react-client-sdk

The app will run in development mode and will open up in your brownser via port 3000. If not available, you will be presented with an option to use a different port

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Alternatively, you can fire up a clean environment via https://github.com/codespaces
1. Choose the Blank template by clicking "use this template"
2. In the VS terminal, download the repo gh repo clone jonkim2/ld-sampleapp
3. cd into the new folder
4. npm start

# How To Configure LaunchDarkly

1. Start a new Project in your LaunchDarkly instance and retrieve the Client Side ID (account settings -> projects). Copy the ID and paste it into line 50 of App.js
2. We're going to create 3 feature flags
    - urlChange
        - Boolean
        - Variation 1's value is true, name is url1
        - Variation 2's value is false, name is url2
        - default variation will be url1 when toggled on
    - advertisementBanner
        - Boolean
        Targeting
            - Custom Rule #1 titled Gmail Users
            If user(context) email (attribute) contains (operator) @gmail.com (values), server adBanner (Rollout)
            - Custom Rule #2 titled Yahoo Users
            If user(context) email (attribute) contains (operator) @yahoo.com (values), server adBanner2 (Rollout)
            - Default rule
            When the toggle is "on": and contexts dont match, configure a percentage roll out of 50/50 adBanner / adBanner 2
    - newHeader
        - Boolean
        - Variation 1's value is true, name is Header Text
        - Variation 2's value is false, name is Blank
        - default variation will be Header Text when toggled on
3. Create a Metric called ''urlClick''
    - Event Information
        - Choose Click
        - enter '.app-logo'
        - select Exact Match and enter **https://www.linkedin.com/in/jonathan-kim-99a6a210a/**
        - add another target URL, select Exact Match and enter **https://www.linkedin.com/in/jonathan-kim-99a6a210a/details/recommendations/?detailScreenTabIndex=0**
        - Randomization unit - user
        
        **Please note that during the free trial, a user gets access to one experiment. I exhausted the one time while testing other aspects of the platform and was not able to capture the specific configurations used to capture data of the experiment. The below description is a generalization**

    - Create Experiment
        - Choose the proper randomization unit and attribuites
        - Choose the above metric to experiment with
        - Configure Variations
        - Configure Allocations, Targeting Rules


# Testing the Application

1. Please have 2 windows open, one being your LD dashboard, the other being the application. 
2. Toggle "newHeader" feature flag on and save. You will see a new, white header appear with some text. Toggle it off, and it will disappear. This satisfies the assessment's requirement of configuring one feature flag.
3. Please enter at least 5 fake first names and email addresses and click submit. Please make sure that the fake emails are a mix of @gmail.com and @yahoo.com. This coincides with the logic configures for the feature flag "advertisementBanner". Please observe the text in the ad banner at the bottom fo the web page when toggled both on and off. This feature is also configured with a rollout logic, which adds a layer of sophistication beyond the simple boolean feature flag. Feel free to play around with this and even enter a non gmail or yahoo email address. Please observe the ad banner text as you continue to register and login with different email addresses
4. Please toggle on the "urlChange" feature flag in LD and then click on the LinkedIn logo. You will be redirected to my LinkedIn profile page. Please toggle off the feature flag and click the logo again. You will be directed to the Recommendations page of my LinkedIn profile. This feature was created to showcase my understanding of of metrics and experiments. The  intent is to be able to capture the quantity of clicks of each url link, mimicking A/B testing for example.

**Please note that I am aware that call track and flush must be configured properly in order to record events properly back into LD to record metrics. I was not able to configure this successfully without the availability of experiments. I hope that whoever tests this applications understands the intent and the effort put into this application despite limited access.**

I hope I did a good job of showcasing my understanding of the platform.

Thank you!



