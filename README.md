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
- ~~Compute output~~
- Write UI for output
    + Implement normiv to correctly compute
- Enable selection of multiple markets and metrics
    - Get [dropdown](http://semantic-ui.com/modules/dropdown.html#/usage) to behave 
- Form validation (percentages are treated as so, keep strings separate from numbers)
    - Refer to this [ux.stackexchange](http://ux.stackexchange.com/questions/29267/inputting-percentages-in-decimal-or-whole-number-form) and [form design](http://www.lukew.com/ff/entry.asp?1502) and [accessible forms](http://websemantics.co.uk/tutorials/accessible_forms/) for dealing with input
    - Decision: treat all input as strings and validate to make sure they behave as expected (numbers only and escaped strings). When doing computations, do the actual conversion to numbers then. Be careful for dealing with percentages in decimal form, i.e. 0.5% v 1%
    - Nice validation comes in with [semantic ui's forms](http://semantic-ui.com/behaviors/form.html)


##Feedback
- Use (%) for Delta/Power/Coverage - more intuitive for users according to analyst
    - TODO: (idea) client-side validation to ensure typed input is in right format  
- Where to link after (let's get feedback from MSN after this is complete)
- ~~"Powered by ExP" looks like a button. Have a subtle font color and no background~~
- Change "Coverage" text
- Hide Power as an option - let it be gloabl for now (require a settings)
- Export to xls 
- Menu - one at a time - calculate by MSN Prime, DHP, NTP
- Where to put data? Expectation is that data gets updated on weekly basis
    + Cosmos
    + db
    + local storage

-------------------------------------------------------------------------------

###Some things to call out
- This is a [Meteor](http://meteor.com) app
- We are using [Semantic UI](https://atmospherejs.com/semantic/ui)
- Of course, we are using [React](https://facebook.github.io/react/index.html)
- Using this implementation of the inverse of the [normal cumulative distribution function](http://home.online.no/~pjacklam/notes/invnorm/impl/misra/normsinv.html)