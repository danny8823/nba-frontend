const data = [
    {
        "id": 1,
        "name": "Atlanta Hawks",
        "nickname": "Hawks",
        "code": "ATL",
        "city": "Atlanta",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Southeast"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Southeast"
            },
            "sacramento": {
                "conference": "East",
                "division": "Southeast"
            }
        }
    },
    {
        "id": 2,
        "name": "Boston Celtics",
        "nickname": "Celtics",
        "code": "BOS",
        "city": "Boston",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Atlantic"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Atlantic"
            },
            "sacramento": {
                "conference": "East",
                "division": "Atlantic"
            }
        }
    },
    {
        "id": 4,
        "name": "Brooklyn Nets",
        "nickname": "Nets",
        "code": "BKN",
        "city": "Brooklyn",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brooklyn_Nets_primary_icon_logo_2024.svg/1200px-Brooklyn_Nets_primary_icon_logo_2024.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Atlantic"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Atlantic"
            },
            "sacramento": {
                "conference": "East",
                "division": "Atlantic"
            }
        }
    },
    {
        "id": 5,
        "name": "Charlotte Hornets",
        "nickname": "Hornets",
        "code": "CHA",
        "city": "Charlotte",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Southeast"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Southeast"
            },
            "sacramento": {
                "conference": "East",
                "division": "Southeast"
            }
        }
    },
    {
        "id": 6,
        "name": "Chicago Bulls",
        "nickname": "Bulls",
        "code": "CHI",
        "city": "Chicago",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Central"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Central"
            },
            "sacramento": {
                "conference": "East",
                "division": "Central"
            }
        }
    },
    {
        "id": 7,
        "name": "Cleveland Cavaliers",
        "nickname": "Cavaliers",
        "code": "CLE",
        "city": "Cleveland",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1200px-Cleveland_Cavaliers_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Central"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Central"
            },
            "sacramento": {
                "conference": "East",
                "division": "Central"
            }
        }
    },
    {
        "id": 8,
        "name": "Dallas Mavericks",
        "nickname": "Mavericks",
        "code": "DAL",
        "city": "Dallas",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Southwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Southwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Southwest"
            }
        }
    },
    {
        "id": 9,
        "name": "Denver Nuggets",
        "nickname": "Nuggets",
        "code": "DEN",
        "city": "Denver",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Northwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Northwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Northwest"
            }
        }
    },
    {
        "id": 10,
        "name": "Detroit Pistons",
        "nickname": "Pistons",
        "code": "DET",
        "city": "Detroit",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_of_the_Detroit_Pistons.png/300px-Logo_of_the_Detroit_Pistons.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Central"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Central"
            },
            "sacramento": {
                "conference": "East",
                "division": "Central"
            }
        }
    },
    {
        "id": 11,
        "name": "Golden State Warriors",
        "nickname": "Warriors",
        "code": "GSW",
        "city": "Golden State",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Pacific"
            },
            "sacramento": {
                "conference": "California",
                "division": null
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Pacific"
            }
        }
    },
    {
        "id": 14,
        "name": "Houston Rockets",
        "nickname": "Rockets",
        "code": "HOU",
        "city": "Houston",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Southwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Southwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Southwest"
            }
        }
    },
    {
        "id": 15,
        "name": "Indiana Pacers",
        "nickname": "Pacers",
        "code": "IND",
        "city": "Indiana",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Central"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Central"
            },
            "sacramento": {
                "conference": "East",
                "division": "Central"
            }
        }
    },
    {
        "id": 16,
        "name": "LA Clippers",
        "nickname": "Clippers",
        "code": "LAC",
        "city": "LA",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Pacific"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Pacific"
            },
            "sacramento": {
                "conference": "West",
                "division": "Pacific"
            }
        }
    },
    {
        "id": 17,
        "name": "Los Angeles Lakers",
        "nickname": "Lakers",
        "code": "LAL",
        "city": "Los Angeles",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Pacific"
            },
            "sacramento": {
                "conference": "California",
                "division": null
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Pacific"
            }
        }
    },
    {
        "id": 19,
        "name": "Memphis Grizzlies",
        "nickname": "Grizzlies",
        "code": "MEM",
        "city": "Memphis",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Southwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "Utah",
                "division": null
            },
            "sacramento": {
                "conference": "West",
                "division": "Southwest"
            }
        }
    },
    {
        "id": 20,
        "name": "Miami Heat",
        "nickname": "Heat",
        "code": "MIA",
        "city": "Miami",
        "logo": 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1920px-Miami_Heat_logo.svg.png',
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Southeast"
            },
            "sacramento": {
                "conference": "California",
                "division": null
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Southeast"
            }
        }
    },
    {
        "id": 21,
        "name": "Milwaukee Bucks",
        "nickname": "Bucks",
        "code": "MIL",
        "city": "Milwaukee",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1920px-Milwaukee_Bucks_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Central"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Central"
            },
            "sacramento": {
                "conference": "East",
                "division": "Central"
            }
        }
    },
    {
        "id": 22,
        "name": "Minnesota Timberwolves",
        "nickname": "Timberwolves",
        "code": "MIN",
        "city": "Minnesota",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Northwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Northwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Northwest"
            }
        }
    },
    {
        "id": 23,
        "name": "New Orleans Pelicans",
        "nickname": "Pelicans",
        "code": "NOP",
        "city": "New Orleans",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Southwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Southwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Southwest"
            }
        }
    },
    {
        "id": 24,
        "name": "New York Knicks",
        "nickname": "Knicks",
        "code": "NYK",
        "city": "New York",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/3/34/Knicks_de_NY.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Atlantic"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Atlantic"
            },
            "sacramento": {
                "conference": "East",
                "division": "Atlantic"
            }
        }
    },
    {
        "id": 25,
        "name": "Oklahoma City Thunder",
        "nickname": "Thunder",
        "code": "OKC",
        "city": "Oklahoma City",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/2560px-Oklahoma_City_Thunder.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Northwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "Utah",
                "division": null
            },
            "sacramento": {
                "conference": "West",
                "division": "Northwest"
            }
        }
    },
    {
        "id": 26,
        "name": "Orlando Magic",
        "nickname": "Magic",
        "code": "ORL",
        "city": "Orlando",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1200px-Orlando_Magic_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Southeast"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Southeast"
            },
            "sacramento": {
                "conference": "East",
                "division": "Southeast"
            }
        }
    },
    {
        "id": 27,
        "name": "Philadelphia 76ers",
        "nickname": "76ers",
        "code": "PHI",
        "city": "Philadelphia",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1920px-Philadelphia_76ers_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Atlantic"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "Utah",
                "division": null
            },
            "sacramento": {
                "conference": "East",
                "division": "Atlantic"
            }
        }
    },
    {
        "id": 28,
        "name": "Phoenix Suns",
        "nickname": "Suns",
        "code": "PHX",
        "city": "Phoenix",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Pacific"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Pacific"
            },
            "sacramento": {
                "conference": "West",
                "division": "Pacific"
            }
        }
    },
    {
        "id": 29,
        "name": "Portland Trail Blazers",
        "nickname": "Trail Blazers",
        "code": "POR",
        "city": "Portland",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Northwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Northwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Northwest"
            }
        }
    },
    {
        "id": 30,
        "name": "Sacramento Kings",
        "nickname": "Kings",
        "code": "SAC",
        "city": "Sacramento",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Pacific"
            },
            "sacramento": {
                "conference": "California",
                "division": null
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Pacific"
            }
        }
    },
    {
        "id": 31,
        "name": "San Antonio Spurs",
        "nickname": "Spurs",
        "code": "SAS",
        "city": "San Antonio",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Southwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "West",
                "division": "Southwest"
            },
            "sacramento": {
                "conference": "West",
                "division": "Southwest"
            }
        }
    },
    {
        "id": 38,
        "name": "Toronto Raptors",
        "nickname": "Raptors",
        "code": "TOR",
        "city": "Toronto",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Atlantic"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Atlantic"
            },
            "sacramento": {
                "conference": "East",
                "division": "Atlantic"
            }
        }
    },
    {
        "id": 40,
        "name": "Utah Jazz",
        "nickname": "Jazz",
        "code": "UTA",
        "city": "Utah",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "West",
                "division": "Northwest"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "Utah",
                "division": null
            },
            "sacramento": {
                "conference": "West",
                "division": "Northwest"
            }
        }
    },
    {
        "id": 41,
        "name": "Washington Wizards",
        "nickname": "Wizards",
        "code": "WAS",
        "city": "Washington",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png",
        "allStar": false,
        "nbaFranchise": true,
        "leagues": {
            "standard": {
                "conference": "East",
                "division": "Southeast"
            },
            "vegas": {
                "conference": "summer",
                "division": null
            },
            "utah": {
                "conference": "East",
                "division": "Southeast"
            },
            "sacramento": {
                "conference": "East",
                "division": "Southeast"
            }
        }
    }
]

module.exports = data