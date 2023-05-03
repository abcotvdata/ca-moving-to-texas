var config = {
    style: 'mapbox://styles/lindseyf96/ck3tb2x7i2ij61cmn0i6daxe6',
    accessToken: 'pk.eyJ1IjoibGluZHNleWY5NiIsImEiOiJjancyOWJjYzQwdTlwNDNxcDJ1ZmRxMnlkIn0.ysI4KCsqNQdMe14vcKy1cQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'Seattle',
    // subtitle: 'tktktktktk',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Hate Across America',
            // image: './path/to/image/source.png',
            // description: 'tktktktk',
            location: {
                center: [-96.28258, 40.07853],
                zoom: 3.65,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'splc-hate-groups-2018-geocodio',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slug-style-id',
            title: 'Hate groups span the entire country',
            description: 'The location of hate groups look similar to a population map, even with the increasing number. These organizations surround cities, but also take over large areas of the Midwest and South. Florida has 85 hate groups, which is the highest number out of the 50 states. New Mexico is the only state with zero.',
            location: {
                center: [-96.28258, 40.07853],
                zoom: 3.65,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        // {
        //     id: 'other-identifier0',
        //     title: 'Chicago',
        //     description: '<p>While not all of these are shown on the map because they are overlapping, Chicago and the surrounding area have 17 hate groups.</p> <p>There are seven Black Nationalist groups, three white supremacy groups, along with Christian identity groups. Specific hate groups include Nation of Islam (black nationalist), Euro Folk Radio (Christian identity), Identity Evropa (white supremacy), Heterosexuals Organized For A Moral Environment (anti-LGBT), among others.</p> ',
        //     location: {
        //         center: [-87.92842, 41.85550],
        //         zoom: 9.87,
        //         pitch: 45.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [ {
        //         layer: 'splc-hate-groups-2018-geocodio',
        //         opacity: 1
        //     },],
        //     onChapterExit: [ {
        //         layer: 'splc-hate-groups-2018-geocodio',
        //         opacity: 1
        //     },]
        // },
        {
            id: 'other-identifier',
            title: 'New York City',
            description: '<p>New York City has 18 different hate groups, the second highest number for a city in the United States. These include United Riot Records (hate music), The Right Stuff (white nationalist), Nation of Islam (black nationalist), Center for Family and Human Rights (anti-LGBT), American Freedom Defense Initiative (anti-Muslim), among others. Note: the groups were evenly spread across the city to accurately show the number, but these are not the actual headquarter locations.</p> <p>According to the <a href="https://criminaljustice.cityofnewyork.us/programs/ophc/">Office for the Prevention of Hate Crimes</a>, which launched this summer to combat these types of crimes through preventative measures, “New York City’s crime decline continues to outpace the rest of the U.S., yet...hate crime incidents in the city increased by 64 percent between 2018 and 2019.”</p>',
            location: {
                center: [-74.01132, 40.68842],
                zoom: 10.32,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [ {
                layer: 'splc-hate-groups-2018-geocodio',
                opacity: 1
            },],
            onChapterExit: [ {
                layer: 'splc-hate-groups-2018-geocodio',
                opacity: 1
            },]
        },
        {
            id: 'other-identifier1',
            title: 'D.C.',
            description: '<p>D.C. has 27 hate groups, the most out of any city in the country. Some of these include the Family Research Countil (anti-LGBT), Israel United In Christ (black nationalist), Return of Kings (male supremacy), and Patriot Front (white nationalist). Anti-Muslim and black nationalist groups are the majority of hate organizations in the District. Note: the groups were evenly spread across the city to accurately show the number, but these are not the actual headquarter locations.</p> <p>D.C. also has the highest number of hate crimes per capita of any place in the United States. According to an <a href= "https://www.washingtonpost.com/graphics/2019/local/dc-hate-prosecutions-drop/">article</a> in the Washington Post, out of the 204 reported hate crimes in 2018, there were 59 arrests but only three made it to court.</p>',
            location: {
                center: [-77.10083, 38.88344],
                zoom: 10.90,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [ {
                layer: 'splc-hate-groups-2018-geocodio',
                opacity: 1
            },],
            onChapterExit: [ {
                layer: 'splc-hate-groups-2018-geocodio',
                opacity: 1
            },]
        },
        // {
        //     id: 'other-identifier2',
        //     title: 'Atlanta',
        //     description: '<p>Atlanta and the surrounding area have over 15 hate groups (all the ones in Atlanta are not shown on the map because they did not list specific headquarter locations). Some of these hate groups include Sicarii 1715 (black nationalist), Identity Dixie (neo-confederate), Atomwaffen Division (neo-nazi), and Affirmative Right (white nationalist).</p>',
        //     location: {
        //         center: [-84.56517, 33.77316],
        //         zoom: 9.65,
        //         pitch: 45.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [ {
        //         layer: 'splc-hate-groups-2018-geocodio',
        //         opacity: 1
        //     },],
        //     onChapterExit: [ {
        //         layer: 'splc-hate-groups-2018-geocodio',
        //         opacity: 1
        //     },]
        // },
        {
            id: 'other-identifier3',
            title: 'Los Angeles',
            description: 'California has 83 hate groups, most of which are nationalist and general hate groups (male supremacy, Holocause denial, etc.). LA is home to 15 groups, the third highest number in the country, but the surrounding area has many as well -- an anomaly for a city. All of these groups have more of a nationalist, but also identity-based, agenda. Some include Act for America (anti-Muslim), American Freedom Party (white nationalist), Tradition in Action (radical traditional catholicism), and Great Milestone (black nationalist).',
            location: {
                center: [-118.29319, 34.04451],
                zoom: 8.57,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'splc-hate-groups-2018-geocodio',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'splc-hate-groups-2018-geocodio',
                    opacity: 1
                },
            ]
        },
        {
            id: 'other-identifier4',
            title: 'Seattle',
            description: '<p>Washington state has one of the highest hate crimes per capita, with 1 out of almost 15,000 people. While Seattle has very few hate groups (which were evenly spread across the city to accurately show the number), it has a long history of hate crimes.</p> <p>“There were 521 hate crimes, crimes with bias elements and noncriminal bias incidents reported to Seattle police in 2018, representing an increase of nearly 400% since 2012 and an increase of nearly 25% over 2017,” according to an <a href="https://www.seattletimes.com/seattle-news/crime/reported-hate-crimes-and-incidents-up-nearly-400-in-seattle-since-2012/ ">article</a> from The Seattle Times. How did this city become like this?</p>',
            location: {
                center: [-122.38044, 47.59949],
                zoom: 10.56,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'lindseyf96-499igund',
                    opacity: 0
                },
                {
                    layer: 'census-data-seattle1-83pdh1',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'splc-hate-groups-2018-geocodio',
                    opacity: 0
                }
            ]
        },
        {
            id: 'other-identifier5',
            title: 'Old Seattle',
            description: 'This is a map of the original and added neighborhoods of Seattle up until the early 1900s. Seattle was incorporated in 1869, but was built as a segregated city. Starting in 1924 there were official <a href="http://depts.washington.edu/civilr/">neighborhood restrictive covenants</a> mostly for the north part of the city. ',
            location: {
                center: [-122.38044, 47.59949],
                zoom: 10.56,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'lindseyf96-499igund',
                    opacity: 1
                },
                {
                    layer: 'census-data-seattle1-83pdh1',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'other-identifier-add-in',
            title: 'Restrictive Covenants',
            description: '<p>An example from the Laurelhurst neighborhood: “no person other than one of the white race shall ever be permitted to occupy any portion of any lot in said plot or any building.”</p> <p>An example from the Ballard neighborhood: “no part of said property hereby conveyed shall ever be used or occupied by any Hebrew or any person of the Ethiopian, Malay, or any Asiantic race.”</p> ',
            location: {
                center: [-122.37648, 47.67816],
                zoom: 11.60,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'lindseyf96-499igund',
                    opacity: 1
                },
                {
                    layer: 'census-data-seattle1-83pdh1',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'other-identifier6',
            title: 'Modern Day Census Map',
            description: 'The covenants occurred until the late 1960s, when the city passed a fair housing ordinance. Yet, the city is still segregated today: North Seattle went from 99 percent white in the 1960s to 75 percent white, according to the 2010 census. Overall, the <a href="https://datausa.io/profile/geo/seattle-wa/">population of Seattle</a> is 64 percent White, 15.7 percent Asian, and 6.78 Black.',
            location: {
                center: [-122.38044, 47.59949],
                zoom: 10.56,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'lindseyf96-499igund',
                    opacity: 0
                },
                {
                    layer: 'census-data-seattle1-83pdh1',
                    opacity: 1
                },
            ],
            onChapterExit: [
            ]
        },
    ]
};

