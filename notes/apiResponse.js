// 1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ and store it within an object. Print the object to the terminal
// 2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object
// 3). Do the same for the following cities:
//  Los Angeles
// Miami
// Charlotte
// Houston
// Seattle
// 4). Add each city to an array
// 5). Print out the city that will be the warmest in 4 hours

// City Timelines
let timelineNJ = 
{
    data: {
        timelines: [
            {
                "timestep": "1h",
                "endTime": "2024-03-08T21:00:00Z",
                "startTime": "2024-03-08T15:00:00Z",
                intervals: [
                    {
                        startTime: "2024-03-08T15:00:00Z",
                        "values": {
                            "temperature": 45.5
                        }
                    },
                    {
                        startTime: "2024-03-08T16:00:00Z",
                        values: {
                            temperature: 45.94
                        }
                    },
                    {
                        startTime: "2024-03-08T17:00:00Z",
                        "values": {
                            "temperature": 47.43
                        }
                    },
                    {
                        startTime: "2024-03-08T18:00:00Z",
                        "values": {
                            "temperature": 49.12
                        }
                    },
                    {
                        startTime: "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 50.15
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 50.31
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 49.53
                        }
                    }
                ]
            }
        ]
    }
}
let timelineLA =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 61.14
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 62.27
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 64.51
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 65.52
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 64.8
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 63.21
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 60.87
                        }
                    }
                ]
            }
        ]
    }
}
let timelineMIA =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 80.04
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 82.89
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 81.8
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 81.1
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 79.64
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 77.85
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 77.16
                        }
                    }
                ]
            }
        ]
    }
}
let timelineCLT =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 60.24
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 62.53
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 63.43
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 62.92
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 61.27
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 58.54
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 57.83
                        }
                    }
                ]
            }
        ]
    }
}
let timelineHOU =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 81.72
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 75.48
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 75.82
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 75.81
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 75.28
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 72.55
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 70.47
                        }
                    }
                ]
            }
        ]
    }
}
let timelineSEA =
{
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2024-03-09T01:00:00Z",
                "startTime": "2024-03-08T19:00:00Z",
                "intervals": [
                    {
                        "startTime": "2024-03-08T19:00:00Z",
                        "values": {
                            "temperature": 68.56
                        }
                    },
                    {
                        "startTime": "2024-03-08T20:00:00Z",
                        "values": {
                            "temperature": 64.1
                        }
                    },
                    {
                        "startTime": "2024-03-08T21:00:00Z",
                        "values": {
                            "temperature": 61.51
                        }
                    },
                    {
                        "startTime": "2024-03-08T22:00:00Z",
                        "values": {
                            "temperature": 60.62
                        }
                    },
                    {
                        "startTime": "2024-03-08T23:00:00Z",
                        "values": {
                            "temperature": 58.94
                        }
                    },
                    {
                        "startTime": "2024-03-09T00:00:00Z",
                        "values": {
                            "temperature": 55.92
                        }
                    },
                    {
                        "startTime": "2024-03-09T01:00:00Z",
                        "values": {
                            "temperature": 55.23
                        }
                    }
                ]
            }
        ]
    }
}


// City whether
let whetherNJ =
{
    data: {
        "time": "2024-03-08T16:19:00Z",
        values: {
            "cloudBase": 0.77,
            "cloudCeiling": 0.77,
            "cloudCover": 100,
            "dewPoint": 35.26,
            "freezingRainIntensity": 0,
            "humidity": 49,
            precipitationProbability: 0,
            "pressureSurfaceLevel": 30.25,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            temperature: 47.86,
            "temperatureApparent": 47.86,
            "uvHealthConcern": 1,
            uvIndex: 3,
            "visibility": 9.94,
            "weatherCode": 1001,
            windDirection: 37.19,
            "windGust": 6.29,
            windSpeed: 2.24,
        }
    },
    "location": {
        "lat": 40.73565673828125,
        "lon": -74.17236328125,
        "name": "Newark, Essex County, New Jersey, United States",
        "type": "administrative"
    }
}
let whetherLA =
{
    "data": {
        "time": "2024-03-08T18:47:00Z",
        "values": {
            "cloudBase": 0.33,
            "cloudCeiling": 0.33,
            "cloudCover": 63,
            "dewPoint": 69.46,
            "freezingRainIntensity": 0,
            "humidity": 78,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.91,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 77,
            "temperatureApparent": 77,
            "uvHealthConcern": 0,
            "uvIndex": 0,
            "visibility": 9.51,
            "weatherCode": 1102,
            "windDirection": 1.31,
            "windGust": 3.78,
            "windSpeed": 1.54
        }
    },
    "location": {
        "lat": 15.02397632598877,
        "lon": 120.67779541015625,
        "name": "Las Angeles, Capitol Boulevard, Magdalena, Purok 1, San Juan, San Fernando, Pampanga, Central Luzon, 2000, Philippines",
        "type": "garden_centre"
    }
}
let whetherMIA =
{
    "data": {
        "time": "2024-03-08T18:49:00Z",
        "values": {
            "cloudBase": 0.23,
            "cloudCeiling": 0.23,
            "cloudCover": 60,
            "dewPoint": 74.97,
            "freezingRainIntensity": 0,
            "humidity": 85,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.94,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 80.04,
            "temperatureApparent": 85.01,
            "uvHealthConcern": 2,
            "uvIndex": 6,
            "visibility": 9.94,
            "weatherCode": 1101,
            "windDirection": 146.13,
            "windGust": 14.26,
            "windSpeed": 4.75
        }
    },
    "location": {
        "lat": 25.774173736572266,
        "lon": -80.19361877441406,
        "name": "Miami, Miami-Dade County, Florida, United States",
        "type": "city"
    }
}
let whetherCLT =
{
    "data": {
        "time": "2024-03-08T18:49:00Z",
        "values": {
            "cloudBase": 0.26,
            "cloudCeiling": 0.26,
            "cloudCover": 100,
            "dewPoint": 53.38,
            "freezingRainIntensity": 0,
            "humidity": 81,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.38,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 59.34,
            "temperatureApparent": 59.34,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 9.8,
            "weatherCode": 1001,
            "windDirection": 130.5,
            "windGust": 13.14,
            "windSpeed": 8.25
        }
    },
    "location": {
        "lat": 35.22720718383789,
        "lon": -80.84308624267578,
        "name": "Charlotte, Mecklenburg County, North Carolina, United States",
        "type": "administrative"
    }
}
let whetherHOU =
{
    "data": {
        "time": "2024-03-08T18:49:00Z",
        "values": {
            "cloudBase": 0.26,
            "cloudCeiling": 0.26,
            "cloudCover": 100,
            "dewPoint": 53.38,
            "freezingRainIntensity": 0,
            "humidity": 81,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.38,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 59.34,
            "temperatureApparent": 59.34,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 9.8,
            "weatherCode": 1001,
            "windDirection": 130.5,
            "windGust": 13.14,
            "windSpeed": 8.25
        }
    },
    "location": {
        "lat": 35.22720718383789,
        "lon": -80.84308624267578,
        "name": "Charlotte, Mecklenburg County, North Carolina, United States",
        "type": "administrative"
    }
}
let whetherSEA =
{
    "data": {
        "time": "2024-03-08T18:51:00Z",
        "values": {
            "cloudBase": 0.73,
            "cloudCeiling": 0.73,
            "cloudCover": 72,
            "dewPoint": 51.8,
            "freezingRainIntensity": 0,
            "humidity": 55,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 21.65,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 68.34,
            "temperatureApparent": 68.34,
            "uvHealthConcern": 3,
            "uvIndex": 7,
            "visibility": 6.25,
            "weatherCode": 1102,
            "windDirection": 176.19,
            "windGust": 18.6,
            "windSpeed": 7.13
        }
    },
    "location": {
        "lat": -1.234231948852539,
        "lon": -78.60224151611328,
        "name": "Seatle, Ambato, Tungurahua, 180110, Ecuador",
        "type": "residential"
    }
}

// City Objects 
let newark = {};
let losAngeles = {};
let miami ={};
let charlotte ={};
let houston ={};
let seattle ={};


//  Data Function
function whetherData(cityName, whetherCity, timelineCity) {
cityName.temperature = whetherCity.data.values.temperature
cityName.uvIndex = whetherCity.data.values.uvIndex
cityName.windSpeed = whetherCity.data.values.windSpeed
cityName.rainChance = whetherCity.data.values.precipitationProbability
cityName.windDirection = whetherCity.data.values.windDirection
cityName.fourHourTemp = timelineCity.data.timelines[0].intervals[4].values.temperature
console.log(cityName) 
}
whetherData(newark, whetherNJ, timelineNJ);
whetherData(losAngeles, whetherLA, timelineLA)
whetherData(miami, whetherMIA, timelineMIA)
whetherData(charlotte, whetherCLT, timelineCLT)
whetherData(houston, whetherHOU, timelineHOU)
whetherData(seattle, whetherSEA, timelineSEA)


// newark.temperature = whetherCity.data.values.temperature
// newark.uvIndex = whetherCity.data.values.uvIndex
// newark.windSpeed = whetherCity.data.values.windSpeed
// newark.rainChance = whetherCity.data.values.precipitationProbability
// newark.windDirection = whetherCity.data.values.windDirection
// newark.fourHourTemp = timelineCity.data.timelines[0].intervals[3].values.temperature
// console.log(newark)

// how work for the weekend, look up how to look through a object if we are pulling api info directly into vscode
