const questions = [
    {
        question : "What team won the 2016 MLS Cup?",
        answerOptions :[
            
                {answerText : "Montreal Impact",isCorrect : false},
                {answerText : "Toronto FC",isCorrect : false},
                {answerText : "Seattle Sounders",isCorrect : true},
                {answerText : "Colorado ",isCorrect : false}

            
        ],
        level : "easy",
        category : "Sports"

    },
    {
        question : "Which year did Jenson Button won his first ever Formula One World Drivers",
        answerOptions :[
            
                {answerText : "2009",isCorrect : true},
                {answerText : "2011",isCorrect : false},
                {answerText : "2022",isCorrect : false},
                {answerText : "2008",isCorrect : false}
            
        ],
        level : "easy",
        category : "Sports"
    },
    {
        question : "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
        answerOptions :[
                {answerText : "2",isCorrect : false},
                {answerText : "9",isCorrect : false},
                {answerText : "4",isCorrect : true},
                {answerText : "7",isCorrect : false}

            
        ],
        level : "easy",
        category : "Sports"
     }
// ,  {
//         question : "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
//         answerOptions :[
//                 {answerText : "Watford",isCorrect : false},
//                 {answerText : "Tottenham",isCorrect : false},
//                 {answerText : "Leicester",isCorrect : true},
//                 {answerText : "Stoke",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "Sports"
//     },
//     {
//         question : "Who is often called &quot;the Maestro tennis circuit?",
//         answerOptions :[
//                 {answerText : "Bill Tilden",isCorrect : false},
//                 {answerText : "Tottenham",isCorrect : false},
//                 {answerText : "Roger Federer",isCorrect : true},
//                 {answerText : "Pete Sampras",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "Sports"
//     },
//     {
//         question : "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany ?",
//         answerOptions :[
//                 {answerText : "1-7",isCorrect : false},
//                 {answerText : "1-4",isCorrect : false},
//                 {answerText : "0-7",isCorrect : true},
//                 {answerText : "4-4",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "Sports"
//     },



//     {
//         question : "which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
//         answerOptions :[
//                 {answerText : "Benetton",isCorrect : false},
//                 {answerText : "Mercedes",isCorrect : false},
//                 {answerText : "Jordan",isCorrect : true},
//                 {answerText : "Ferrari",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     },


//     {
//         question : "What cricketing term denotes a batsman being dismissed with a score of zero?",
//         answerOptions :[
//                 {answerText : "Bye",isCorrect : false},
//                 {answerText : "Beamer",isCorrect : false},
//                 {answerText : "Duck",isCorrect : true},
//                 {answerText : "Carry",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     },
//     {
//         question : "In the 2004 FIFA World Cup, what was the final score in the match Brazil - italia ?",
//         answerOptions :[
//                 {answerText : "0-5",isCorrect : false},
//                 {answerText : "1-4",isCorrect : false},
//                 {answerText : "1-7",isCorrect : true},
//                 {answerText : "4-4",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     },
//     {
//         question : "Which of the following player scored a hat-trick during their Manchester United debut?",
//         answerOptions :[
//                 {answerText : "Cristiano Ronaldo",isCorrect : false},
//                 {answerText : "Robin Van Persie",isCorrect : false},
//                 {answerText : "Wayne Rooney",isCorrect : true},
//                 {answerText : "David Beckham",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     },
//     {
//         question : "Who won the 2011 Stanley Cup ?",
//         answerOptions :[
//                 {answerText : "New York Rangers",isCorrect : false},
//                 {answerText : "Montreal Canadiens",isCorrect : false},
//                 {answerText : "Boston Bruins",isCorrect : true},
//                 {answerText : "Toronto",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     },
//     {
//         question : "What country hosted the 2014 Winter Olympics?",
//         answerOptions :[
//                 {answerText : "Canada",isCorrect : false},
//                 {answerText : "Germany",isCorrect : false},
//                 {answerText : "Russia",isCorrect : true},
//                 {answerText : "USA",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "Sports"
//     }, 
    
//     {
//         question : "What tool lends it name to a last-stone advantage in an end in Curling?",
//         answerOptions :[
//                 {answerText : "Drill",isCorrect : false},
//                 {answerText : "Wrench",isCorrect : false},
//                 {answerText : " Hammer",isCorrect : true},
//                 {answerText : "Screwdriver",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "Sports"
//     },
//     {
//         question : "With which doubles partner did John McEnroe have most success?",
//         answerOptions :[
//                 {answerText : "Stichs",isCorrect : false},
//                 {answerText : "Michael",isCorrect : false},
//                 {answerText : "Peter Fleming",isCorrect : true},
//                 {answerText : "Mary",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "Sports"
//     },
//     {
//         question : "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging  it wide, during the match Italy-Germany, UEFA EURO 2016??",
//         answerOptions :[
//                 {answerText : "Insigne",isCorrect : false},
//                 {answerText : "Barzagli",isCorrect : false},
//                 {answerText : "pelle",isCorrect : true},
//                 {answerText : "Giaccherini",isCorrect : false}
//         ],
//         level : "hard",
//         category : "Sports"
//     },
//     {
//         question : "What is the full name of the footballer &quot;Cristiano Ronaldo?",
//         answerOptions :[
//                 {answerText : "Cristiano Ronaldo dos Santos biosos",isCorrect : false},
//                 {answerText : "Cristiano Ronaldo oes Santos Aveiro",isCorrect : false},
//                 {answerText : "Cristiano Ronaldo dos Santos Aveiro",isCorrect : true},
//                 {answerText : "Cristiano Ronaldo boes ados Aveiro",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "Sports"
//     },
//     {
//         question : "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
//         answerOptions :[
//                 {answerText : "Xl-xis",isCorrect : false},
//                 {answerText : "Axeois",isCorrect : false},
//                 {answerText : "Ding",isCorrect : true},
//                 {answerText : "bibyos",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "Sports"
//     },
//     {
//         question : "Which city features all of their professional sports teams&#039; jersey&#039;s with the same color scheme?",
//         answerOptions :[
//                 {answerText : "Canada",isCorrect : false},
//                 {answerText : "Germany",isCorrect : false},
//                 {answerText : "Pittsburgh",isCorrect : true},
//                 {answerText : "USA",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "Sports"
//     }











// ,





//     {
//         question : "What was William Frederick Cody better known as?",
//         answerOptions :[
//                 {answerText : "Billy the Kid",isCorrect : false},
//                 {answerText : "Wild Bill Hickok",isCorrect : false},
//                 {answerText : "Buffalo Bill",isCorrect : true},
//                 {answerText : "Pawnee Bill",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "History"
//     },
//     {
//         question : "During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?",
//         answerOptions :[
//                 {answerText : "Kawasaki",isCorrect : false},
//                 {answerText : "Germany",isCorrect : false},
//                 {answerText : "Nagasaki",isCorrect : true},
//                 {answerText : "Tokyo",isCorrect : false}

//         ],
//         level : "easy",
//         category : "History"
//     },
//     {
//         question : "gujarat Capital?",
//         answerOptions :[
//                 {answerText : "Amhedabad",isCorrect : false},
//                 {answerText : "surat",isCorrect : false},
//                 {answerText : "Gandinagar",isCorrect : true},
//                 {answerText : "Ambaji",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "History"
//     },
//     {
//         question : " Which famous military commander marched an army, which included war elephants, over the Alps during the Second Punic War?",
//         answerOptions :[
//                 {answerText : "Garmanicus",isCorrect : false},
//                 {answerText : "Tiberi",isCorrect : false},
//                 {answerText : "Hannibal",isCorrect : true},
//                 {answerText : "Tiberius",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "History"
//     },
//     {
//         question : "Which city features all of their professional sports teams;s with the same color scheme?",
//         answerOptions :[
//                 {answerText : "Canada",isCorrect : false},
//                 {answerText : "Germany",isCorrect : false},
//                 {answerText : "Pittsburgh",isCorrect : true},
//                 {answerText : "USA",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "History"
//     },
//     {
//         question : " Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
//         answerOptions :[
//                 {answerText : "Bang-Ding Ow",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "The Polish President",isCorrect : true},
//                 {answerText : "Pope John Paul II",isCorrect : false}

            
//         ],
//         level : "easy",
//         category : "History"
//     },








//     {
//         question : " Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
//         answerOptions :[
//                 {answerText : "Bang-Ding Ow",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "The Polish President",isCorrect : true},
//                 {answerText : "Pope John Paul II",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "History"
//     },
//     {
//         question : "  In what year did the North American Video Game Crash occur?",
//         answerOptions :[
//                 {answerText : "1982",isCorrect : false},
//                 {answerText : "1993", isCorrect : false},
//                 {answerText : "1983",isCorrect : true},
//                 {answerText : "1950",isCorrect : false}

//         ],
//         level : "medium",
//         category : "History"
//     },
//     {
//         question : " Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
//         answerOptions :[
//                 {answerText : "Bang-Ding Ow",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "The Polish President",isCorrect : true},
//                 {answerText : "Pope John Paul II",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "History"
//     },
//     {
//         question : " The Tsar Bomba, the most powerful nuclear bomb ever tested, had a yield of 50 megatons but theoretically had a maximum yield of how much?",
//         answerOptions :[
//                 {answerText : "200",isCorrect : false},
//                 {answerText : "70",isCorrect : false},
//                 {answerText : "100",isCorrect : true},
//                 {answerText : "150",isCorrect : false}

          
//         ],
//         level : "medium",
//         category : "History"
//     },
//     {
//         question : "Which of the following is not in the Indo-European language family?",
//         answerOptions :[
//                 {answerText : "English",isCorrect : false},
//                 {answerText : "Hindi",isCorrect : false},
//                 {answerText : "Finnish",isCorrect : true},
//                 {answerText : "Russian",isCorrect : false}        
//         ],
//         level : "medium",
//         category : "History"
//     },
//     {
//         question : "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
//         answerOptions :[
//                 {answerText : "Tornados",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "Typhoons",isCorrect : true},
//                 {answerText : "Economic depression",isCorrect : false}

            
//         ],
//         level : "medium",
//         category : "History"
//     }



//     ,


//     {
//         question : " What is the name of the Boeing B-29 that dropped the &#039;Little Boy&#039; atomic bomb on Hiroshima?",
//         answerOptions :[
//                 {answerText : "Necessary Evil",isCorrect : false},
//                 {answerText : "Full House",isCorrect : false},
//                 {answerText : "Enola Gay",isCorrect : true},
//                 {answerText : "Economic depression",isCorrect : false}

              
//         ],
//         level : "hard",
//         category : "History"
//     },  {
//         question : " When did the French Revolution begin?",
//         answerOptions :[
//                 {answerText : "1823",isCorrect : false},
//                 {answerText : "1756",isCorrect : false},
//                 {answerText : "1789",isCorrect : true},
//                 {answerText : "1799",isCorrect : false}
//         ],
//         level : "hard",
//         category : "History"
//     },  {
//         question : "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
//         answerOptions :[
//                 {answerText : "Tornados",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "Typhoons",isCorrect : true},
//                 {answerText : "Economic depression",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "History"
//     },    {
//         question : "Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?",
//         answerOptions :[
//                 {answerText : "Galicia",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "Aragon",isCorrect : true},
//                 {answerText : "Navarre",isCorrect : false}

            
//         ],
//         level : "hard",
//         category : "History"
//     },  {
//         question : " Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
//         answerOptions :[
//                 {answerText : "Attack on Truk Island",isCorrect : false},
//                 {answerText : "Attack on Pearl Harbor",isCorrect : false},
//                 {answerText : "Battle of Midway",isCorrect : true},
//                 {answerText : "Battle of the Coral Sea",isCorrect : false}
        
//         ],
//         level : "hard",
//         category : "History"
//     },  {
//         question : "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
//         answerOptions :[
//                 {answerText : "Tornados",isCorrect : false},
//                 {answerText : "Albert Putin",isCorrect : false},
//                 {answerText : "Typhoons",isCorrect : true},
//                 {answerText : "Economic depression",isCorrect : false}
//         ],
//         level : "hard",
//         category : "History"
//     }



]

export{questions};


