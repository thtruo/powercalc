ICE - Power Calculator
======================

##Powered by ExP

This is a power calculator web app to compute the minimum required `N` (sample size) and estimated traffic to detect a given percentage `DELTA` in a specified `METRIC` for a given `POWER`.

#Notes

- Required N = 2*POWER([@StdDev]/([@Avg]*[@[Delta %]]),2)*POWER(1.96-NORM.INV(1-[@Power],0,1),2)
- See below for schema

    MKT    Metric                    Avg        N         StdDev     Week
    EN-US  ArPageViewsPerUser        3.855665   12412192  17.84703   1
    EN-US  ArWholePageClicksPerUser  1.260385   12412192  7.882498   1   
    EN-US  GaPageViewsPerUser        1.362621   12412192  9.346896   1    
    EN-US  GaWholePageClicksPerUser  1.028375   12412192  5.899256   1       
    EN-US  NumVisits                 8.487081   12412192  18.05028   1     
    EN-US  PageViewsPerUser          25.16693   12412192  82.30645   1

#Plan

- ~~Mock up UI~~
- ~~TODO: move presentation to App.jsx~~
- ~~Read and display data~~
- Compute output
- Write UI for output
- Form validation


##Later
- Get [dropdown](http://semantic-ui.com/modules/dropdown.html#/usage) to behave 


##Feedback
- Use (%) for Delta/Power/Coverage - more intuitive for users according to analyst
    - TODO: (idea) client-side validation to ensure typed input is in right format  
- Where to link after (let's get feedback from MSN after this is complete)
- "Powered by ExP" looks like a button. Have a subtle font color and no background

-------------------------------------------------------------------------------

###Some things to call out
- This is a [Meteor](http://meteor.com) app
- We are using [Semantic UI](https://atmospherejs.com/semantic/ui)
- Of course, we are using [React](https://facebook.github.io/react/index.html)