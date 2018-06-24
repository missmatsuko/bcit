# Weather App

## Assignment
- [x] Create a new React application, name it “weather-app”.
- [x] This app will display weather forecast information for a select few cities. Note that you should display the forecast for the next few days, not just the current day.
- [x] Create a dropdown select input with at least 5 different cities. When selecting one of the cities from the dropdown, the view should display the weather information for that specific city.
- [x] You will need to make http requests to fetch for data. Documentation is here: [YAHOO! Weather API](https://developer.yahoo.com/weather/)
- [x] If you make the API request below, you will get data for the weather forecast for Vancouver, for the next few days. Display the forecast, with weather information, temperature, etc.
- [x] Users of your application should be able to use the dropdown to select different cities, and see weather for them.
- [x] Make good use of Component composition. Break parts of your application into sub-components, as you see fit.
- [x] Display images for each weather type. A rainy day should display a rainy icon.
- [x] The http request above returns data in American measurements. Since we’re in Canada, ensure that the data displayed uses the metric system/Celsius. There are a number of ways to do this. It’s up to you to figure out.
- [x] To facilitate your lives, I’ll give you the specific endpoint that you need to make requests to.
```
# Note that there are invalid characters for an url on the API endpoint below.
# If you make a http request with these characters, the request utility will encode
# these characters automatically for you!
GET https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="vancouver, bc")
```
