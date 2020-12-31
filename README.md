# react-covid19-tracker


# Resources 
API: https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest#6b6045c7-ee07-40a8-a733-f3bc077beda9
DATA FROM: 
- JHUCSSE(Data from Johns Hopkins University)

- NYT(Data from New York Times)

API Calls used: (Following documentation is from the postman link above)
1. GET County Data
https://corona.lmao.ninja/v2/nyt/counties?county=
Return all NYT county data or individual county data if specified. Each entry returned represents data for a given day.

PARAMS
county
The county that you'd like to search for, separated by comma if you want to search for multiple (i.e. 'Alameda, Humboldt'). Default is full data set.

2. GET Historical Data for all Counties in a Specified State
https://corona.lmao.ninja/v2/historical/usacounties/:state?lastdays=30
Get time series info from the JHU CSSE Data Repository. Every date since 1/22/20 has an entry tracking deaths and cases. Updated each day at 23:59 UTC. Data is updated every 10 minutes.

PARAMS
lastdays30
number of days you want the data to go back to. Default is 30. Use all for full data set. Ex: 15, all, 24. Default value: 30

PATH VARIABLES
stateguam
Required. A valid US state name, validated in the array returned from /v2/historical/usacounties.

CHART: https://www.chartjs.org/

---

# Development Commands
- npm i: install project dependencies
- npm run dev: will run the front end and the back end concurrently. 

---

# TODOS
- Split the stat display component up into 3 parts. <br />
- Possibly make this work for multiple states <br />



