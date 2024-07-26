const data = [
    {
        "year": 1989,
        "name": "Agus Budiman",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Lilian Budiman",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Ruth Budiman",
        "message": ""
    },
    {
        "year": 1995,
        "name": "Leonardo Anwar",
        "message": "As God blesses you, you will multiply and you will witness an increase in your life. He will not only bless you but will bless your generation (Psalm 115:12-14)"
    },
    {
        "year": 1996,
        "name": "Firmanto Sosiawan",
        "message": "Awesome"
    },
    {
        "year": 2019,
        "name": "Ipun",
        "message": "Co-Leading Camp 2024"
    },
    {
        "year": 1991,
        "name": "Eliana",
        "message": "Don't forget us as the older generation of IPC!"
    },
    {
        "year": 1996,
        "name": "Wahyudi Sosiawan / Aseng",
        "message": "Every camp is a blessing. All you can eat Indomie!"
    },
    {
        "year": 1996,
        "name": "Suryadi",
        "message": "Fun, cold and hungry"
    },
    {
        "year": 1996,
        "name": "Evans",
        "message": "It was called Winter Camp back then haha!"
    },
    {
        "year": 1992,
        "name": "Johnny",
        "message": "God worked amazingly!"
    },
    {
        "year": 1993,
        "name": "Budiyono Salimun",
        "message": "Great personal experience with God"
    },
    {
        "year": 1995,
        "name": "Budi utomo",
        "message": "Thank you IPC for your ministry, I have encountered the Lord Jesus and have been saved. God bless Ps. Agus Budiman & family abundantly always"
    },
    {
        "year": 1996,
        "name": "Tony Setiobudi",
        "message": "I have fond memories of Ko Agus, Cik Lily and IPC as a whole. God bless you"
    },
    {
        "year": 1989,
        "name": "Peterfi",
        "message": "The first time I arrived in Melbourne I attended an Indonesian church in Chadstone. There were 50 congregants. In 1989, they moved to North Caulfield and IPC was born! I always came to camp and I served in the sound team. Back then there were two song leaders, a dancer, keyboardist, drummer, electric guitarist, bass and trumpet serving on the worship team"
    },
    {
        "year": 2001,
        "name": "Henry",
        "message": "I received Jesus Christ in IPC. The camp experience was really great. It was the first time I experienced worship and sermon in great depth, first time with the Holy Spirit. I'm so blessed by my time in IPC and it has become my solid foundation for my life until now. God Bless IPC"
    },
    {
        "year": 1995,
        "name": "Antonius (Tony)",
        "message": "I remembered my first IPC winter camp back in 1995. The presence of God was so strong and I got spiritually transformed and recharged by the Holy Spirit. Always blessed and looking forward for the winter camp each year until I went back to Indonesia for good in 2000"
    },
    {
        "year": 1996,
        "name": "Dennya Kristanto",
        "message": "I still call IPC home"
    },
    {
        "year": 2003,
        "name": "Jeffry",
        "message": "I was a member of this church community from 2003-2004"
    },
    {
        "year": 2015,
        "name": "Ricent",
        "message": "I was baptised in 2015, since then my life has changed"
    },
    {
        "year": 1993,
        "name": "Hartono",
        "message": "I was in IPC from 1993-1995"
    },
    {
        "year": 2022,
        "name": "David",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Joseph",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Kelly",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Nadia",
        "message": ""
    },
    {
        "year": 2022,
        "name": "nenes",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Samuel Gunawan",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Valgon",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Angel",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Angie",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Bill",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Gracia Edhyta",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Janice",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Jastine",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Inge",
        "message": "I was in IPC from 1998-1999"
    },
    {
        "year": 1995,
        "name": "Elisa",
        "message": "I've been a member of this church since 1995"
    },
    {
        "year": 1994,
        "name": "Lenny",
        "message": "IPC is awesome"
    },
    {
        "year": 1992,
        "name": "Edyanto Tedy / Jajank",
        "message": "IPC was my \"homestay\". A second family. The place I met God, was made ready, shaped and given direction for my life. I know Mr. Agus Budiman as my pastor and he has become my friend"
    },
    {
        "year": 2003,
        "name": "Rocky",
        "message": ""
    },
    {
        "year": 2018,
        "name": "Joanne",
        "message": ""
    },
    {
        "year": 2017,
        "name": "Samuel Wibowo",
        "message": "2018 games team"
    },
    {
        "year": 2014,
        "name": "Indra",
        "message": "Led encounter camp 2015"
    },
    {
        "year": 2001,
        "name": "Yosie",
        "message": "Great Time! Learned so many great values that are useful for my life till now"
    },
    {
        "year": 2023,
        "name": "Nathan / Nate",
        "message": "HAPPY SERVING!"
    },
    {
        "year": 2016,
        "name": "Eyre",
        "message": "Best camp games ever!"
    },
    {
        "year": 1992,
        "name": "Wiyanto",
        "message": "Hopefully you have a wonderful and impactful camp for everyone. Tip: Try to mingle with everyone especially new joiners, so they feel welcome"
    },
    {
        "year": 2010,
        "name": "Fenny",
        "message": "It was a great fellowship and made us grow closer"
    },
    {
        "year": 2008,
        "name": "Stephanie / Tetep",
        "message": "It was the most memorable church camp ever! Thank you, IPC, for the opportunity"
    },
    {
        "year": 1994,
        "name": "Teddy",
        "message": "It's amazing because we this is where we can share life together and be spiritually filled. I miss it!"
    },
    {
        "year": 2004,
        "name": "Stephen (Bongky) Djuana",
        "message": "It's the right place to grow our Faith in Jesus"
    },
    {
        "year": 2015,
        "name": "Joshua",
        "message": "Jesus loves you"
    },
    {
        "year": 1988,
        "name": "Lina / Cun Cun",
        "message": "Keep moving forward IPC Melbourne. God bless you all!"
    },
    {
        "year": 1996,
        "name": "Jusuf Tamrin",
        "message": "Keep up the good work and my respect to all volunteers"
    },
    {
        "year": 1997,
        "name": "Rebecca Budiman",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Novi",
        "message": "Last year's camp was the best camp so far!"
    },
    {
        "year": 2015,
        "name": "Mokson",
        "message": "Led camp in 2017"
    },
    {
        "year": 1998,
        "name": "Iponk",
        "message": "First IPC Winter Camp 1998 was a very memorable experience. Was the leader of IPC Camp - Black or White (forgot which year)"
    },
    {
        "year": 1999,
        "name": "Henry",
        "message": "Led the camp"
    },
    {
        "year": 1997,
        "name": "Shirley Halim",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Andy Chaidir",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Chandra",
        "message": "Life-changing camp"
    },
    {
        "year": 2022,
        "name": "Pastor Kim Hammond",
        "message": "Loved speaking and serving and getting to know the community"
    },
    {
        "year": 2010,
        "name": "Jonathan Tan / Fanny Juliani",
        "message": "May God bless IPC's Ministry to glorify His name through the new generation"
    },
    {
        "year": 2003,
        "name": "Amanda/Noni",
        "message": "Miss you guys"
    },
    {
        "year": 2017,
        "name": "Marcelyn",
        "message": "Praise God for His faithfulness! Praying for a fruitful harvest in church camp this year and that the team will trust in God’s provision throughout the prep!"
    },
    {
        "year": 1999,
        "name": "Jimmy Wiranto",
        "message": "Still remember the fellowship and the experience"
    },
    {
        "year": 2015,
        "name": "Tommy",
        "message": "Such an amazing experience! Encountered God, felt his presence and was blessed by this community who truly cares for one another"
    },
    {
        "year": 2016,
        "name": "Andre",
        "message": "That year, I met Jesus at the camp and gave my life to Him!"
    },
    {
        "year": 2017,
        "name": "Sonia",
        "message": ""
    },
    {
        "year": 1993,
        "name": "Joe H",
        "message": "This is the church where I served in every department."
    },
    {
        "year": 2000,
        "name": "Audi",
        "message": "Used to be called winter camp - I only knew less than 5 people's names at the start. But when it was done, it felt like I knew everyone! It was truly a family thing that I needed as a young man back then. We were accepted for who we were and then transformed to be more like Christ! This camp is not just a camp, but this is a home for everyone!"
    },
    {
        "year": 2018,
        "name": "Joanne",
        "message": ""
    },
    {
        "year": 2008,
        "name": "Daniel",
        "message": "Was a great experience"
    },
    {
        "year": 2010,
        "name": "Raynardhi Kose (didi)",
        "message": "Was always involved in the camp games team"
    },
    {
        "year": 1996,
        "name": "George",
        "message": "Funtastic"
    },
    {
        "year": 2023,
        "name": "Louisa",
        "message": "Meeting life giving people was life changing for me"
    },
    {
        "year": 2018,
        "name": "Emily Wang",
        "message": "Praise the Lord!"
    },
    {
        "year": 2018,
        "name": "Vic Intan/Ky",
        "message": "His faithful love endures forever!"
    },
    {
        "year": 1998,
        "name": "Edu",
        "message": "Winter Camp Leader 2002"
    },
    {
        "year": 1999,
        "name": "Natasha Susanto",
        "message": "Wonderful time and memory!"
    },
    {
        "year": 1989,
        "name": "Benny Langi",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Ester Djaja",
        "message": ""
    },
    {
        "year": 1997,
        "name": "Gary",
        "message": "God is good, all the time. All the time, God is good"
    },
    {
        "year": 1989,
        "name": "Goenawan Surip",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Janto Djaja",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Jenny Johari",
        "message": ""
    },
    {
        "year": 1990,
        "name": "Emil",
        "message": ""
    },
    {
        "year": 1990,
        "name": "John",
        "message": ""
    },
    {
        "year": 1991,
        "name": "Grace Budiman",
        "message": ""
    },
    {
        "year": 1991,
        "name": "Lusijati Tanojo",
        "message": ""
    },
    {
        "year": 1992,
        "name": "Rudy",
        "message": ""
    },
    {
        "year": 1992,
        "name": "Suryani",
        "message": ""
    },
    {
        "year": 1993,
        "name": "Hendy",
        "message": ""
    },
    {
        "year": 1993,
        "name": "Liesje",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Andi Susilo",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Kent",
        "message": ""
    },
    {
        "year": 1994,
        "name": "kowil",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Like",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Lisa",
        "message": ""
    },
    {
        "year": 1994,
        "name": "Maureen",
        "message": ""
    },
    {
        "year": 1994,
        "name": "William",
        "message": ""
    },
    {
        "year": 1995,
        "name": "Monica Halim",
        "message": ""
    },
    {
        "year": 1995,
        "name": "Carlos Halim",
        "message": ""
    },
    {
        "year": 2017,
        "name": "Pastor CJ and Pastor Mye Nunag",
        "message": ""
    },
    {
        "year": 1995,
        "name": "Yenny",
        "message": ""
    },
    {
        "year": 1996,
        "name": "Ivan / IP",
        "message": ""
    },
    {
        "year": 1996,
        "name": "Richardt",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Oliver",
        "message": ""
    },
    {
        "year": 1997,
        "name": "Alexander Sutanto",
        "message": ""
    },
    {
        "year": 1997,
        "name": "Felly",
        "message": ""
    },
    {
        "year": 1997,
        "name": "Teddy Setiawan",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Anton19",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Citra hartono",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Roy",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Shelvia",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Shirley",
        "message": ""
    },
    {
        "year": 1998,
        "name": "Yoppy",
        "message": ""
    },
    {
        "year": 1999,
        "name": "Franklyn",
        "message": ""
    },
    {
        "year": 1999,
        "name": "Hardy",
        "message": ""
    },
    {
        "year": 1999,
        "name": "Harry Sunarko",
        "message": ""
    },
    {
        "year": 1999,
        "name": "Monika/Monjo",
        "message": ""
    },
    {
        "year": 1999,
        "name": "Sufi",
        "message": ""
    },
    {
        "year": 2000,
        "name": "Calvin",
        "message": ""
    },
    {
        "year": 2000,
        "name": "Iin",
        "message": ""
    },
    {
        "year": 2019,
        "name": "Netania",
        "message": ""
    },
    {
        "year": 2001,
        "name": "Emil",
        "message": ""
    },
    {
        "year": 2001,
        "name": "Sugi",
        "message": ""
    },
    {
        "year": 2001,
        "name": "Yanty",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Cynthia",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Edwin",
        "message": "I saw my wife at one of the many camps I’ve been in as she is the pastor’s daughter, I didn’t come to camp for her of course but seeing her loving God that way was very inspiring and now she’s my wife. So, the moral of the story, come to camp!"
    },
    {
        "year": 2002,
        "name": "Jody",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Sciela",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Valentino",
        "message": ""
    },
    {
        "year": 2002,
        "name": "William",
        "message": ""
    },
    {
        "year": 2003,
        "name": "Laura",
        "message": ""
    },
    {
        "year": 2003,
        "name": "Monica L",
        "message": ""
    },
    {
        "year": 2003,
        "name": "Ricky",
        "message": ""
    },
    {
        "year": 2004,
        "name": "Andreas KP",
        "message": ""
    },
    {
        "year": 2004,
        "name": "Gerry",
        "message": ""
    },
    {
        "year": 2005,
        "name": "Anie",
        "message": ""
    },
    {
        "year": 2006,
        "name": "Jeremy",
        "message": ""
    },
    {
        "year": 2007,
        "name": "Firman",
        "message": ""
    },
    {
        "year": 2007,
        "name": "Junius",
        "message": ""
    },
    {
        "year": 2008,
        "name": "Nelly",
        "message": ""
    },
    {
        "year": 2008,
        "name": "Sisca",
        "message": ""
    },
    {
        "year": 2009,
        "name": "Simon",
        "message": ""
    },
    {
        "year": 2010,
        "name": "Jovan",
        "message": ""
    },
    {
        "year": 2010,
        "name": "Keisha",
        "message": ""
    },
    {
        "year": 2011,
        "name": "Natasha",
        "message": ""
    },
    {
        "year": 2012,
        "name": "Dara Jessica",
        "message": ""
    },
    {
        "year": 2013,
        "name": "Maureen / Momo",
        "message": ""
    },
    {
        "year": 2015,
        "name": "Carina",
        "message": ""
    },
    {
        "year": 2015,
        "name": "Eric",
        "message": ""
    },
    {
        "year": 2015,
        "name": "Gwen Florencia Ali",
        "message": ""
    },
    {
        "year": 2015,
        "name": "Shannel",
        "message": ""
    },
    {
        "year": 2016,
        "name": "Chacha",
        "message": ""
    },
    {
        "year": 2016,
        "name": "Jasmine",
        "message": ""
    },
    {
        "year": 2016,
        "name": "Karissa",
        "message": ""
    },
    {
        "year": 2016,
        "name": "Willsoen",
        "message": ""
    },
    {
        "year": 2017,
        "name": "Yolanda",
        "message": ""
    },
    {
        "year": 2018,
        "name": "Caroline",
        "message": ""
    },
    {
        "year": 2018,
        "name": "Jasslyn",
        "message": ""
    },
    {
        "year": 2016,
        "name": "Levi Tedjokusumo",
        "message": "I loved being a part of camp. The worship, food and games were amazing"
    },
    {
        "year": 2018,
        "name": "Josia",
        "message": ""
    },
    {
        "year": 2019,
        "name": "Daniel Tan",
        "message": ""
    },
    {
        "year": 2019,
        "name": "Elly",
        "message": ""
    },
    {
        "year": 2019,
        "name": "Jeje",
        "message": ""
    },
    {
        "year": 2019,
        "name": "Michael",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Angela",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Chloweeee",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Daniel",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Lydia Oey",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Mael",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Wendy",
        "message": ""
    },
    {
        "year": 2024,
        "name": "Jessica",
        "message": ""
    },
    {
        "year": 2010,
        "name": "Ricky Pratama",
        "message": ""
    },
    {
        "year": 2010,
        "name": "Yosie",
        "message": ""
    },
    {
        "year": 2017,
        "name": "Sharen",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Patricia",
        "message": ""
    },
    {
        "year": 2008,
        "name": "Bella Chaidir",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Zach Chaidir",
        "message": ""
    },
    {
        "year": 2009,
        "name": "Monique",
        "message": ""
    },
    {
        "year": 2023,
        "name": "Rafa",
        "message": ""
    },
    {
        "year": 2022,
        "name": "Charles Chen",
        "message": ""
    },
    {
        "year": 2003,
        "name": "Sandra",
        "message": ""
    },
    {
        "year": 2002,
        "name": "Candice",
        "message": ""
    },
    {
        "year": 2018,
        "name": "Evie Intan",
        "message": "He is our rock!"
    },
    {
        "year": 2018,
        "name": "Owen Intan",
        "message": "He is our constant helper!"
    },
    {
        "year": 2019,
        "name": "Celine S",
        "message": ""
    },
    {
        "year": 1989,
        "name": "Indonesian Praise Centre (IPC)",
        "message": "The Right Place To Grow"
    },
    {
        "year": 2017,
        "name": "Praise Centre",
        "message": "Love God. Help People Follow Jesus"
    },
    {
        "year": 2024,
        "name": "More To Life",
        "message": "Luke 19:10 For the Son of Man came to seek and to save the lost"
    }
];
export default data;