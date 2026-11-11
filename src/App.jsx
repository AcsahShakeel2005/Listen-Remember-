import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import {
 Headphones, Home, Library, Bookmark, Highlighter, Search, UserRound,
 Settings, Play, Pause, SkipBack, SkipForward, Volume2, Clock3, BookOpen,
 Languages, Gauge, Sun, Moon, LogOut, Plus, X, Check, MessageCircle,
 Send, Sparkles, AudioLines, ChevronRight, Menu, Heart, FileText
} from "lucide-react";

const BOOKS = [
 {
 id: 1, title: "Atomic Habits", author: "James Clear", category: "Personal Growth",
 coverUrl: "https://covers.openlibrary.org/b/olid/OL26502528M-L.jpg",
    color: "linear-gradient(135deg,#d9e7ff,#9bbcff)", emoji: "", duration: "5h 35m",
 description: "Small habits, remarkable results. Learn how tiny changes can lead to remarkable outcomes.",
 transcript: "Do you ever feel like youre just floating through life&but not actually getting closer to the person that you want to be. It usually happens around New years, you imagine all the bad habits your going to break free from, and all the good habits you will begin. This time it will be different you say to yourself.This time I AM going to do the things that I say I will. Only to end up back where you began shortly after and no closer to what you had envisaged. So the question is, how do you become the person you dream of becoming? How do you break free from bad habits and make the habits you desire easier and automatic? Atomic Habits by James Clear answers all these questions. We are going to be doing a detailed visual summary of this book, And dive deep into topics like Habit loops Dopamine spikes Priming your environment Plus heaps more And make sure to stick around until the end of the video where we tie everything together from the video and I go step by step through how Ive personally been using this book with my own habits and how you can start applying it to your own habits.I hope this summary inspires you to go out and grab a copy of the book for yourself because this book deserves a space on everyones bookshelf! Lets jump into it Imagine a plane taking off and travelling from New York to Los Angeles. Just before takeoff you adjust the plane just slightly by 3 degrees o r around 80 inches. If you kept flying in a straight line&You would end up closer to Tijuana in Mexico than in your intended destination of Los Angeles. The same goes for our habits. Tiny changes in our habits can change the trajectory of our lives in ways that we cant even notice until many years into the future looking back. In both good ways and bad. You are your habits. The Power of Atomic Habits A slight change in your daily habits can guide your life to a very different destination. (01:41) Massive action Vs 1% improvements Far too often, we convince ourselves that massive success is only possible through massive action in any goal we are pursuing. We expect ourselves to make some quantum leap or momentous improvement that will gain others attention. However it is the tiny improvements, that arent even noticeable at first, that create incredible change. (02:02) Lets look deeper into the Math 1% better every day for a year will compound to nearly 38 times better. 1% worse every day for over a year will bring you close to zero! Your habits can compound against you in the form of things like stress or negative self-talk. Or they can compound for you in the form of things like knowledge, productivity, skills and relationships. Success is the product of daily habits  not once-in a lifetime transformations The Truth About progress When you start any endeavour in your life, here is what we think should happen. Linear progress. Here is what actually happens. Notice this section here. In the beginning, small changes in our progress are not even noticeable.James Clear refers to this part of the graph as the valley of disappointment Youve done so much! Put in so much effort and you can barely see any results! This is where most people fail and slip back into their old routines. The most powerful outcomes of any compounding process are delayed so Patience is required. Goals Vs Systems.  FORGET ABOUT GOALS, FOCUS ON SYSTEMS INSTEAD A goal is the result you want to accomplish. Systems deal with the processes that lead to results. The conventional wisdom suggests that the best way to achieve anything we want in life-getting into better shape, building a successful business, spending more time with family is to set specific, realistic goals. (03:28) But if you completely ignored your goals and focused only on your system, would you still succeed? The Author argues that you would. Here are some problems with only having goals. Successful and unsuccessful people share the same goals, so therefore the goal can not be what differentiates winners from losers. (03:46) Achieving a goal only changes your life for a moment in time. Goals can create an either-or conflict. Either you achieve the goal and succeed, or you dont and you are a failure. Even if you were making progress in the right direction When you achieve a goal, what do you do after? If your goal was running the local marathon, chances are after completing it, your motivation will quickly fade and you will just slip back into your old routines. (04:10) Goals are good for setting a direction, but systems are best for making progress A SYSTEM OF ATOMIC HABITS The problem with changing your habits is not you. The reason why you repeat the same bad habit for so long isnt because you dont want to change, but because you have the wrong system for change.\\n\\n(04:27) Atomic habits are small routines and behaviors that accumulate to produce incremental positive outcomes over time. Big breakthroughs tend to get more attention than small improvements. But what really matters are the little daily decisions and actions we take. Just as atoms are the building blocks of molecules, atomic habits are the building blocks of remarkable results. (04:47) There are 3 layers to behavior change. The first layer is changing outcomes.The result. Losing that weight, writing that book, winning the season. The outcomes are what you get The Second layer is changing your process. What you do. The new workout routine, developing a daily reading habit. And the third layer is changing your identity. What you believe. (05:07) Your worldviews and how you think about yourself and others. Most people focus on the outcomes but the best way to change your habits is by focusing on the person you want to become instead of the results you want. The goal isnt to learn an instrument, it is to become a musician. The goal isnt to run a marathon, It is to become a runner. (05:26) When something you want in your life becomes part of your identity, that is when your behaviors will naturally change. When you tell yourself and others Im a runner. You want to live up to that identity. Remind yourself Every Time you do a workout, you are an athlete. Every time you write a line of code, you are a coder. (05:44) Each time you instruct your team, you are a leader. The Habit Loop A habit is when something has been repeated enough times that it becomes automatic. Ultimately we want our habits to solve problems in our lives with the least amount of effort. A habit is formed and reinforced by means of a continuous feedback loop: Cue + Craving + Response + Reward. (06:06) The key to creating habits that stick is to create feedback loops that are continuously being improved. Cue. Phone buzz. Craving. Want to know who messaged. Response. Pick up phone. Reward. Solve the problem of who messaged. Cue. Mind goes blank at work. Craving. Want to alleviate the frustration. Response. Check social media. Reward. (06:31) Satisfied the need to feel less frustrated Over time, rewards become associated with cues. So, in this example, checking social media becomes tied to your mind going blank at work. And then checking Facebook may be the cue to check Instagram, which becomes the cue to check YouTube. And before you know it, your mind going blank cue has led to 20 minutes of wasted time. (06:49) And you more you repeat these habit loops, the stronger and more automatic they become. Cues can really be anything. A smell, a sound a sight, a person, a location etc. Try to think of any cues in your daily life that are initiating your good or bad habit loops. So how can we influence the habit loop to work for us? This book shows us the 4 laws that will guide us to do just that. (07:15) Law 1 Make it obvious Most of your current habits are so automatic that you dont even realize them. You must first become aware of your habits before you can change them. You can achieve that with your Habit Scorecard. Write down all your daily behaviors on a habits scorecard, from the moment you wake up until the moment you go to bed. (07:32) Your scorecard may look something like this. Based on whether it helps you become the person you aspire to be, categorize each habit as positive (+), negative (-), or neutral (=). At this stage we arent trying to change anything, just observe what is actually going on in our daily lives. Until you make the unconscious conscious, it will direct your life and you will call it fate. (07:54)  Carl Yung Vagueness is a real problem when it comes to habit formation, and studies have shown that quite often the reason people fail to stick to a habit is not because of a lack of motivation, but because of a lack of clarity. One day, I will get into shape is easy to say to yourself but too vague to get any momentum. What you need is a time and a place. (08:12) The most common cues  time and location  will help you achieve your goals. Clearly state your intention to act using the following formula: I will behavior at time in this location. Here is a bad example, I will read more this month Here is a good example I will read a book for 15 minutes daily at 6am in the spare bedroom. (08:34) Another good way to get a habit started is by Habit stacking. To stack habits, tie a desired habit to an existing habit according to the following formula: After [current habit], I will [new habit]. For example, After I brush my teeth, I will stretch for 5 minutes. You can stack habits together, for example after you finish brushing your teeth, you will meditate for 10 minutes, then plan the rest of your day, before checking social media.\\n\\nGet Jarvis & Fridays stories in your inbox\\nJoin Medium for free to get updates from this writer.\\n\\nEnter your email\\nSubscribe\\n\\nRemember me for faster sign in\\n\\n(09:00) A chain of habits is more likely to be sustained if you practice this consistently. Choosing the correct trigger is essential. YOU NEED A TRIGGER CUE Your trigger should be; something that you do automatically without fail during your day, such as waking up, turning off your alarm or brushing your teeth. (09:17) James Clear tells us in the book that Motivation is highly overrated. You can better shape your behavior by designing your environment. We are more influenced by our environment than our willpower or motivation. Its hard to stick to positive habits in a negative environment. Environment is the invisible hand that shapes human behavior. (09:35)  Creating a habit requires you to redesign the space around you (home/work) to 1  make it easier to see the cues for the desired habits and 2  avert bad habits by making them invisible. If you want to drink more water, make the cues visible and obvious. Place water bottles around the house in places you are likely to see them. (09:55) Want to read more? place the book somewhere you will see it. If you want to get better on the guitar, dont leave it out of sight in a closet. CONTEXT IS THE CUE Objects in the environment do not determine our behavior; rather, it is our relationship to them that does. Stop seeing your environment as a place simply filled with objects. Imagine it as a place filled with relationships. (10:18) The couch in the living room is the place where one person reads an hour a night. For another, the couch is where they watch Netflix and eat pizza and relax after work. If your relationship with the couch is a place to relax, then trying to get a work related task done in that environment may be difficult. Try to make separate zones in your house for different activities. (10:35) The author likes to use the mantra One space, One use If you are trying to eliminate a bad habit, You can only rely on self-control in the short-term. Cutting off bad habits at the source is a more reliable solution and one of the most practical ways to eliminate a bad habit is to make it invisible. Eliminate it from your environment. (10:55) For example Put your phone in another room for a few hours if you have trouble getting work done. Put junk food out of sight or remove it from your house if you are trying to lose weight. Law 2 Making it Attractive When we expect to be rewarded, we take action. The more rewarding an action is, the more likely we are to repeat it until it becomes a habit. (11:17) Hence, the first step to forming good habits is to make them more attractive. Understanding how dopamine affects your body will help you DOPAMINE & FEEDBACK LOOPS Our motivation levels are affected by dopamine, a hormone and neurotransmitter. We are more motivated to act when our dopamine levels rise. (11:35) By measuring dopamine, scientists can pinpoint the exact moment at which a craving occurs. It was once assumed that dopamine was just about pleasure, but now we know its vital to many neurological functions, including motivation, memory, learning, punishment as well as voluntary movement. Gambling addicts have a dopamine spike right before they place a bet, not after they win. (12:01) Lets dive deeper into dopamine spikes. Using social media, eating junk food and taking drugs are all associated with high levels of dopamine and are highly habit forming. The hormone dopamine is released not only when we experience pleasure, but also when we anticipate it. Think about before going on a vacation. (12:14) Sometimes the thinking and anticipation of the vacation is better than the actual vacation. Seeing the junk food you desire surges dopamine, not after eating it. Drug addicts increase dopamine when they see the drugs, not after taking them. The craving is what causes us to take action in the first place. (12:33) Making our habits attractive is vital because it is the expectation of a rewarding experience that drives us to act. Here, you can use a strategy known as&. Temptation bundling The temptation bundling process makes a habit more attractive by combining an action we need to do with one we want to do. (12:51) For example you could bundle watching Netflix (something you want to do) with working out (something you need to do). Temptation bundling applies a psychology principle known as Premacks Principle. Developed by professor David Premack, the Premack principle states, More probable behaviors will reinforce less probable behaviors. (13:07)  In other words, even if youre not looking forward to doing some exercise, youll become conditioned to do it because you get to do something else you really enjoy. Group Influence We are continually wondering What will others think of me? and altering our behavior based on the answer. (13:23)  We are influenced by the people closest to us, and the groups we belong to. If you are trying to build a new habit, one of the best ways to reinforce the habit is to find and become part of a culture where that habit is the norm. If you want to get into better shape, surround yourself with fit people.\\n\\n(13:39) If you want to read more, join a book club. Primal motivators : The source of cravings In your normal everyday life you wouldnt say something to yourself like I want to eat this pizza because I need to consume this food to survive Surface level cravings are merely manifestations of our deeper underlying motives. (13:57) And these underlying motives guide our behavior. Here are some examples of underlying motives: Conserving energy Obtaining food and water Finding love and reproducing Connecting and bonding with others Winning social acceptance and approval Reducing uncertainty Achieving status and prestige Your brain did not evolve with a desire to smoke cigarettes, check Instagram every 5 minutes or to play video games. (14:28) Online platforms and products do not invent new motivations, but rather appeal to the underlying motives of human nature that we already have to gain our attention. Your habits are modern-day solutions to ancient desires. New versions of old vices. The underlying motives behind human nature remain the same People who have the underlying motive of connecting with others may jump onto Facebook, others seeking the underlying motive of finding love and reproducing may sign up for Tinder. (14:52) Reducing uncertainty, theres Google for that. Seeking social acceptance, there is Instagram. Reprogramming your brain to enjoy hard habits You can make hard habits more attractive if you can learn to associate them with a positive experience. By highlighting the benefits of a habit rather than its downsides, you can quickly reprogram your mind and make it seem more appealing. (15:15) For example, Fitness = health and wellbeing and not fatigue. Cleaning the house = an environment conducive to peace of mind and not wasted time. Saving money = future financial freedom and not sacrifice. These subtle shifts in mindset arent magic, but they can change your feelings toward some habits or situations. (15:28) Make it Unattractive. To break a bad habit, do the same but highlight the benefits of NOT doing that habit to make it as unattractive to keep doing as possible. Law 3  Make it Easy How long does it actually take to form a new habit? During habit formation, a behavior becomes increasingly automatic as it is repeated. (15:48) As you repeat an activity, your brain changes in order to become more efficient at it. Long before neuroscientists dug into the process of forming habits, repetition was known as a powerful tool for establishing habits. You activate particular neural circuits associated with habits every time you repeat them. (16:05) So framing habit formation in terms of time is flawed. It should be framed in terms of the number of repetitions. Reducing Friction : The Law of Least Effort The more energy required, the less likely it is to happen. It takes almost no energy to get into the habit of reading one page of a book each day. (16:22) Habits are more likely to occur when they require less energy. The bigger the obstacle, the more friction there is between you and the desired outcome. If you need to travel 20 minutes out of your way to go to the gym, chances are you will not. If your gym is located on your commute to work, you will greatly decrease the friction. By making your good habits more convenient, youre more likely to stick to them. (16:42) Your life will be easier if you find ways to reduce friction rather than trying to solve it. In order to build better habits, we have to find ways to reduce friction associated with our good habits and increase friction associated with our bad habits Prime the environment for use By automating or setting up your environment, you can reduce the friction for future action, e.g. I will lay out my workout clothes at night so I can get up and get moving in the morning. (17:08)  Or to prepare a healthier breakfast, place the pan on the stove, and gather the ingredients the night before. Again to reduce any friction. Using the Two-Minute Rule to Stop Procrastinating Using the 2-minute rule can help you establish small habits that will lead to habit momentum and success in bigger goals.\\n\\n(17:28) Find a simple, 2-minute version of your desired habit. You want to scale down your desired outcome. Running a marathon becomes putting on your shoes and stretching for 2 minutes. Reading an hour per day becomes reading one page. You need to get the routine anchored in place and then slowly build up the difficulty. After you have mastered the 2-minute habit, you can progress to the next phase; To make something more difficult, think about ways you can create barriers of friction between yourself and the bad habit. (17:53) Make it as impractical as possible. If you want to watch less TV, unplug the TV after each use and put the remote in an inconvenient location. When you go shopping, leave your credit cards under the seat of your car if you have a bad habit of spontaneous spending. Do anything you can to make your Bad habits less likely to occur. (18:13) Law 4 -Make it satisfying The most important rule of behavior change A feeling of pleasure is a message to the brain: This feels good. Lets repeat this next time. When you experience pleasure, your brain learns that a behavior is worth remembering and repeating. What is immediately rewarded is repeated. What is immediately punished is avoided. (18:36) The first Three habits increase your chances of doing the habit this time. The last law increases your chances of repeating the habit next time. The Mismatch between immediate and delayed returns It is common for us to feel good about our immediate results, but bad about our long-term outcomes when we practice bad habits. (18:56) It is the opposite with good habits: the immediate result is unpleasant, but the ultimate outcome is satisfying. A certain amount of success in just about every field involves ignoring an immediate reward for a long-term one. It is best to add a little immediate pleasure to the habits that will pay off in the long run and a little pain to those that wont. (19:12) How to stick with good habits everyday QUOTE The vital thing in getting a habit to stick is to feel successful  even if its in a small way. The feeling of success is a signal that your habit paid off and that the work was worth the effort. It is satisfying to make progress, and you can monitor your progress using visual measures, such as moving paper clips, hairpins, or marbles. These little wins can go a long way. (19:33) For example, for each sales call you make today, move a marble from one jar to the complete jar. For Each 25 minutes of writing, move a paperclip Visual measurements can take many forms: diet journals, workout logs, download progress bars, or even page numbers in a book. Keeping a habit tracker may be the best method to monitor your progress. (19:54) Using a habit tracker is a simple way to determine whether you did a particular habit. How to recover quickly when your habits break down In spite of your best efforts, it is inevitable that life will interrupt you at some point. A bad day at work, a bad performance, or a bad workout can happen to anyone. (20:19) When youre having a bad day, you dont realize how valuable it is to just show up. Lost days hurt you more than successful days help you. Dont break the chain of continuity. Missing twice is the start of a bad habit; never do it. On a bad day, its better to do 10 sit ups (instead of your normal 50) than not do them at all. (20:46) Breaking a bad habit: Make it Unsatisfying How an accountability partner can change everything. A behavior is less likely to occur when pain is immediate. Being held accountable by a partner is a good way to keep your desired habits in check. We all want to be liked and respected, so we would rather just avoid the punishment. (21:03) For example  I owe you $10 every time I miss a workout, plus the respect I lose for failing to do what I said I would! Behavior is more likely to be influenced by concrete, and immediate consequences. The Habit Contract You can create a habit contract to hold yourself accountable, just as governments use laws to hold citizens accountable. (21:23) You can create a habit contract either verbally or in writing, which makes it clear that you will honor a particular habit and that there will be punishments if you do not. You can then use your accountability partners to enforce that contract. Ok so its one thing to read a book, but another to actually apply it to your life. (21:41) So im going to try and visually represent how I have personally been using this book to build systems around my habits the past few months. After you read the book maybe your approach will be different than mine or better, or maybe there are some parts I completely missed or could improve upon so do let me know in the comments. (22:00) The Good habits I wanted to develop were more consistent workout and reading routines. The Bad habit I wanted to eliminate was becoming distracted and overconsuming social media First I completed the Habit scorecard. This gave me a good idea of habits I could try to eliminate, but more importantly it gave me an idea of daily habits I was already doing that I could stack my new habits with. (22:23) Ultimately, when you find the habits you want to work on. you want to be pushing Desired good habits towards this side of the spectrum, and bad habits towards this side. For the working out habit. The first step was to make the cues more obvious, and I had a few tools I could use from the book. In this case I used what James Clear calls the implementation strategy. (22:42) I will workout at 6am in the living room. Next I tried as best I could to design my environment conducive to this new habit. I took my dumbbell set out of the closet, and put them in the living room. I also found a few pictures of healthy physiques on the internet and put them in places around the house as cues that would remind me of the habit. (23:02) Next, I moved on to the craving phase. To increase dopamine and motivation I bundle the workout with listening to some of my favorite podcasts. I also implement reprogramming my brain. I tell myself repeatedly I dont have to do a workout but that  I get to build strength and a healthier body That subtle shift in mindset has gone a long way. (23:23) Ideally, joining a gym, or finding a group to workout with would be even better to strengthen this habit, but unfortunately all gyms are closed where I live, so Im kind of on my own for now with these two tools. Next, making it easy. Using the 2 minute rule, to make sure I dont end up like most people starting a new habit, that try to do too much too soon. (23:46) I want my habit to not feel like a challenge at all. My 2 minute rule was putting on my workout clothes and stretching. If that was the only thing I accomplished then that was fine, because I showed up. But you will quickly find that once you are there, you are now motivated to get the workout done. It is weird but the motivation seems to come after you get started.\\n\\n(24:08) My mindset is focused on small 1 percent changes compounding into meaningful results AND that my systems will get me to the results, not vague goals. Remembering that my main focus at this point is just making sure I show up and start anchoring this habit in place. Once you are consistently showing up, increase the progression. (24:31) To decrease friction, I made the rule that Im not allowed to check my phone until the workout was complete. If I get distracted by emails or social media, It is one excuse and one step of friction between myself and the workout getting completed. Lastly, this was a game changer for me, priming the environment. (24:49) When I place my shoes, yoga mat and dumbbells out the night before I skyrocket my show up and workout percentage. As soon as I place these items out the night before, I feel like the ritual has begun and the workout is already complete because I have zero excuses. So with those 3 phases of the loop systemized to get me to show up. (25:10) I only had the last phase of the loop left to tackle. To make sure I keep repeating the habit. I use both of these tools somewhat together to close out the loop. I use a habit tracker, crossing the day off the calendar becomes the reward and it forces me to not want to break the chain. (25:28) I also take a of picture of the calories I burnt and send the picture to my partner, and that feels satisfying. Mindset wise, I begin with identity and I remind myself after each workout that I want to become the kind of person that enjoys fitness and doesnt miss workouts I dont put all my focus on outcomes such as I want to be 10kg lighter by such and such a date. (25:51) I also remind myself that I need to be patient for results and that Im probably still somewhere in this Valley of disappointment before I will see results! So that is my personal system for morning workouts. I went through the same process with the reading habit, with a few minor changes. I used the habit stack. (26:10) After [making a coffee] I will [read for 90 minutes] & making a coffee was my trigger cue for reading. My one space one use rule was reading on the balcony of my apartment. One of the best parts of my day is a nice cup of coffee in the morning. So this was the perfect thing to bundle the habit with. Remembering how dopamine raises in anticipation of a reward and not the reward itself. (26:30) I wanted this dopamine spike for wanting coffee to start becoming associated with reading. My 2 minute rule was to read 1 page of The Daily Stoic by Ryan Holiday. Super simple, again in the beginning all I was concerned with was showing up and getting this habit anchored. Then I slowly built up the habit to around 90 minutes. (26:50) For the bad habit I was trying to eliminate To make the habit invisible, I started by making my phone as boring as possible, which required deleting a lot of apps. I use the reprogramming tool, to highlight the unattractive side of overconsuming social media. (27:08) Telling myself things like& & consuming is the easy and lazy option of the masses ,producing things is difficult but rewarding. Do I want to be a consumer or a producer? Random scrolling through feeds is for losers. So try to paint your bad habit in a light that makes it super unattractive to keep doing. To increase friction, I left my phone out of sight whilst working in a drawer in another room. (27:28) To make it unsatisfying, I have an accountability partner, I get my partner to enforce this habit. The punishment is If she sees me using social media during work time, I owe her $10. So that is how I have been using this fantastic book guys with great results so far, and I hope this summary has helped you to better understand the concepts within this book. (27:45) Go out and grab a copy of this book if you havent already, you are going to take in the knowledge at a much deeper level, from all the stories and examples that James Clear goes over some advanced techniques, not in this summary that will help you strengthen your habits. Thankyou for watching. See you in the next video."
 },
 {
 id: 2, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance",
 coverUrl: "https://covers.openlibrary.org/b/isbn/0857197681-L.jpg",
    color: "linear-gradient(135deg,#ffe8bd,#ffc978)", emoji: "", duration: "5h 48m",
 description: "Timeless lessons on wealth, greed, and happiness.",
 transcript: "Doing well with money has little to do with how smart you are and a lot to do with how you behave. And behavior is hard to teach, even to really smart people. A genius who loses control of their emotions can be a financial disaster."
 },
 {
 id: 3, title: "Deep Work", author: "Cal Newport", category: "Productivity",
 coverUrl: "https://covers.openlibrary.org/b/isbn/1455586692-L.jpg",
    color: "linear-gradient(135deg,#d9d5ff,#aaa1ff)", emoji: "", duration: "7h 44m",
 description: "Rules for focused success in a distracted world.",
 transcript: "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. As a consequence, the few who cultivate this skill, and then make it the core of their working life, will thrive."
 },
 {
 id: 4, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction",
 coverUrl: "https://covers.openlibrary.org/b/isbn/0062315005-L.jpg",
    color: "linear-gradient(135deg,#ffe1d9,#ffb8a4)", emoji: "", duration: "4h 9m",
 description: "A journey about following your dreams and listening to your heart.",
 transcript: "When you want something, all the universe conspires in helping you to achieve it. The secret is to listen to your heart. It knows all things, because it came from the Soul of the World, and it will one day return there."
 },
 {
 id: 5, title: "Ikigai", author: "Héctor García & Francesc Miralles", category: "Wellbeing",
 coverUrl: "https://covers.openlibrary.org/b/isbn/0143130722-L.jpg",
    color: "linear-gradient(135deg,#d3f3e6,#8bd8bd)", emoji: "", duration: "3h 26m",
 description: "The Japanese secret to a long and happy life.",
 transcript: "Our ikigai is different for all of us, but one thing we have in common is that we are all searching for meaning. When we spend our days feeling connected to what is meaningful to us, we live more fully."
 },
 {
 id: 6, title: "Think Again", author: "Adam Grant", category: "Psychology",
 coverUrl: "https://covers.openlibrary.org/b/isbn/1984878107-L.jpg",
    color: "linear-gradient(135deg,#e4e9ef,#aebdca)", emoji: "", duration: "6h rethink",
 description: "The power of knowing what you don't know.",
 transcript: "Thinking like a scientist involves more than just reacting with an open mind. It means being actively open-minded. It requires searching for reasons why we might be wrong, not just for reasons why we must be right."
 }
];

const initialNotes = [
 { id: 1, bookId: 1, text: "Make the habit obvious, attractive, easy, and satisfying.", time: "00:42" }
];

export default function App() {
 const [screen, setScreen] = useState("welcome");
 const [loginMode, setLoginMode] = useState("login");
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [email, setEmail] = useState("acsah@example.com");
 const [password, setPassword] = useState("");
 const [name, setName] = useState("Acsah Victor");
 const [search, setSearch] = useState("");
 const [activeBookId, setActiveBookId] = useState(1);
 const [playing, setPlaying] = useState(false);
 const [progress, setProgress] = useState(18);
 const [speed, setSpeed] = useState("1x");
 const [language, setLanguage] = useState("English");
 const [narratorVoices, setNarratorVoices] = useState([]);
 const [selectedNarrator, setSelectedNarrator] = useState("");
 const [narrationActive, setNarrationActive] = useState(false);
 const [currentNarrationIndex, setCurrentNarrationIndex] = useState(-1);
 const activeTranscriptLineRef = useRef(null);
 const narrationChunksRef = useRef([]);
 const narrationIndexRef = useRef(0);
 const [showTranscript, setShowTranscript] = useState(true);
 const [dark, setDark] = useState(false);
 const [bookmarks, setBookmarks] = useState([2, 4]);
 const [highlights, setHighlights] = useState(initialNotes);
 const [noteText, setNoteText] = useState("");
 const [toast, setToast] = useState("");
 const [chatInput, setChatInput] = useState("");
 const [chatMessages, setChatMessages] = useState([
 { from: "bot", text: "How can I help you today, Acsah? Tell me what you want to learn, and Ill suggest a book or a useful takeaway." }
 ]);
 const audioRef = useRef(null);

 const activeBook = BOOKS.find((b) => b.id === activeBookId) || BOOKS[0];
 const filteredBooks = useMemo(() => BOOKS.filter((b) =>
 `${b.title} ${b.author} ${b.category}`.toLowerCase().includes(search.toLowerCase())
 ), [search]);
 const savedBooks = BOOKS.filter((b) => bookmarks.includes(b.id));

 useEffect(() => {
 if (!toast) return;
 const t = setTimeout(() => setToast(""), 2600);
 return () => clearTimeout(t);
 }, [toast]);

 useEffect(() => {
 if (audioRef.current) audioRef.current.playbackRate = parseFloat(speed) || 1;
 }, [speed, activeBookId]);

 useEffect(() => {
 if (narrationActive && activeTranscriptLineRef.current) {
 activeTranscriptLineRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
 }
 }, [currentNarrationIndex, narrationActive, activeBookId]);

 useEffect(() => {
 if (!("speechSynthesis" in window)) return;
 const loadVoices = () => {
 const voices = window.speechSynthesis.getVoices();
 setNarratorVoices(voices);
 setSelectedNarrator((current) => {
 if (current && voices.some((voice) => voice.name === current)) return current;
 const preferred = voices.find((voice) => /^en/i.test(voice.lang)) || voices[0];
 return preferred ? preferred.name : "";
 });
 };
 loadVoices();
 window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
 window.speechSynthesis.onvoiceschanged = loadVoices;
 return () => {
 window.speechSynthesis.removeEventListener?.("voiceschanged", loadVoices);
 window.speechSynthesis.onvoiceschanged = null;
 };
 }, []);

 function playWelcomeAudio() {
 if (!("speechSynthesis" in window)) {
 setToast("Audio welcome is not supported in this browser.");
 return;
 }
 window.speechSynthesis.cancel();
 const message = new SpeechSynthesisUtterance("Welcome back! What are we learning today?");
 message.lang = "en-US";
 message.rate = 0.9;
 message.pitch = 1;
 window.speechSynthesis.speak(message);
 }

 function stopNarration() {
 if ("speechSynthesis" in window) window.speechSynthesis.cancel();
 narrationChunksRef.current = [];
 narrationIndexRef.current = 0;
 setNarrationActive(false);
 }

 function speakNextAtomicChunk() {
 const chunks = narrationChunksRef.current;
 const index = narrationIndexRef.current;
 if (index >= chunks.length) {
 setNarrationActive(false);
 setPlaying(false);
 setProgress(100);
 return;
 }

 setCurrentNarrationIndex(index);
 const utterance = new SpeechSynthesisUtterance(chunks[index]);
 const voice = narratorVoices.find((item) => item.name === selectedNarrator);
 if (voice) {
 utterance.voice = voice;
 utterance.lang = voice.lang;
 } else {
 utterance.lang = language === "Urdu" ? "ur-PK" : language === "Spanish" ? "es-ES" : language === "French" ? "fr-FR" : "en-US";
 }
 utterance.rate = parseFloat(speed) || 1;
 utterance.pitch = 1;
 utterance.onend = () => {
 narrationIndexRef.current += 1;
 setProgress(Math.min(99, Math.round(narrationIndexRef.current / chunks.length * 100)));
 speakNextAtomicChunk();
 };
 utterance.onerror = (event) => {
 if (event.error !== "canceled" && event.error !== "interrupted") {
 setNarrationActive(false);
 setPlaying(false);
 setToast("This browser voice could not read the transcript. Try another narrator.");
 }
 };
 window.speechSynthesis.speak(utterance);
 }

 function startAtomicNarration() {
 if (!("speechSynthesis" in window)) {
 setToast("Narration is not supported in this browser. Try a recent version of Chrome or Edge.");
 return;
 }
 window.speechSynthesis.cancel();
 const text = activeBook.transcript || "";
 if (!text.trim()) {
 setToast("There is no transcript available for this book yet.");
 return;
 }
 // Chunk long transcripts so browser speech engines can read the whole summary reliably.
 narrationChunksRef.current = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
 narrationIndexRef.current = 0;
 setCurrentNarrationIndex(0);
 setProgress(0);
 setNarrationActive(true);
 setPlaying(true);
 speakNextAtomicChunk();
 }

 function togglePlayerPlayback() {
 if (activeBook.id === 1) {
 if (narrationActive && window.speechSynthesis) {
 if (window.speechSynthesis.paused) {
 window.speechSynthesis.resume();
 setPlaying(true);
 } else {
 window.speechSynthesis.pause();
 setPlaying(false);
 }
 } else {
 startAtomicNarration();
 }
 return;
 }

 const audio = audioRef.current;
 if (audio && audio.getAttribute("src")) {
 if (playing) {
 audio.pause();
 } else {
 audio.play().catch(() => setToast("Add the audiobook MP3 file in public/audio to play real audio."));
 }
 }
 setPlaying((current) => !current);
 }

 function handleAuth(e) {
 e.preventDefault();
 if (!email.trim() || !password.trim()) {
 setToast("Please enter your email and password.");
 return;
 }
 setIsLoggedIn(true);
 setScreen("home");
 if (loginMode === "login") {
 // Most browsers require a user interaction before speaking audio.
 setTimeout(playWelcomeAudio, 150);
 setToast("Welcome back, Acsah!");
 } else {
 setToast("Your demo account is ready!");
 }
 }

 function openBook(book, startPlaying = false) {
 stopNarration();
 setActiveBookId(book.id);
 setProgress(18);
 setScreen("player");
 setPlaying(startPlaying);
 if (audioRef.current) {
 audioRef.current.pause();
 audioRef.current.currentTime = 0;
 }
 }

 function toggleBookmark(id) {
 setBookmarks((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
 setToast(bookmarks.includes(id) ? "Removed from your library" : "Saved to your library");
 }

 function addHighlight() {
 if (!noteText.trim()) {
 setToast("Write a note or highlight first.");
 return;
 }
 setHighlights((prev) => [{
 id: Date.now(), bookId: activeBook.id, text: noteText.trim(),
 time: `${Math.floor(progress * 0.6)}:${String(Math.floor((progress * 3) % 60)).padStart(2, "0")}`
 }, ...prev]);
 setNoteText("");
 setToast("Highlight saved!");
 }

 function saveHighlightText(text, message = "Highlight saved!") {
 const cleanText = (text || "").trim();
 if (!cleanText) return;
 setHighlights((prev) => [{
 id: Date.now() + Math.random(),
 bookId: activeBook.id,
 text: cleanText,
 time: `${Math.floor(progress * 0.6)}:${String(Math.floor((progress * 3) % 60)).padStart(2, "0")}`
 }, ...prev]);
 setToast(message);
 }

 function sendChat(e) {
 e.preventDefault();
 if (!chatInput.trim()) return;
 const question = chatInput.trim();
 setChatMessages((prev) => [...prev, { from: "you", text: question }]);
 setChatInput("");
 const response = /focus|work|product/i.test(question)
 ? "Try Deep Work. Start with one distraction-free 25-minute session, then write down what you learned."
 : /money|finance|save/i.test(question)
 ? "The Psychology of Money is a great start. One takeaway: your habits and patience often matter more than financial complexity."
 : /habit|routine|change/i.test(question)
 ? "Start with Atomic Habits. Make the habit tiny and attach it to something you already do every day."
 : "A good place to start is Atomic Habits. Choose one small idea, save a highlight, and revisit it tomorrow. Want a book about focus, money, or wellbeing?";
 setTimeout(() => setChatMessages((prev) => [...prev, { from: "bot", text: response }]), 300);
 }

 const theme = {
 page: dark ? "#10131b" : "#f7f8fc",
 surface: dark ? "#1b202b" : "#ffffff",
 text: dark ? "#f4f6fc" : "#1d2340",
 muted: dark ? "#a5adbf" : "#7b829b",
 line: dark ? "#303747" : "#e9ebf4",
 soft: dark ? "#242b3a" : "#f0f2ff",
 accent: "#6558e8",
 accent2: "#8c7cf7"
 };

 const styles = `
 *{box-sizing:border-box} body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
 button,input,textarea,select{font:inherit} button{cursor:pointer}
 .lr-app{min-height:100vh;background:${theme.page};color:${theme.text};transition:background .2s,color .2s}
 .lr-layout{max-width:1400px;margin:0 auto;display:flex;min-height:100vh}
 .lr-sidebar{width:240px;padding:28px 18px;border-right:1px solid ${theme.line};background:${theme.surface};display:flex;flex-direction:column;gap:28px;flex-shrink:0}
 .lr-brand{display:flex;align-items:center;gap:10px;padding:0 10px;font-size:18px;font-weight:800;letter-spacing:-.5px}
 .lr-logo{width:38px;height:38px;border-radius:13px;background:linear-gradient(135deg,#7668f0,#9a83ff);color:white;display:grid;place-items:center;box-shadow:0 8px 20px #7465e633}
 .lr-nav{display:grid;gap:7px}.lr-nav button{border:0;background:transparent;color:${theme.muted};display:flex;align-items:center;gap:12px;padding:12px 13px;border-radius:12px;text-align:left;font-weight:600}
 .lr-nav button.active,.lr-nav button:hover{background:${theme.soft};color:${theme.accent}}
 .lr-sidebar-bottom{margin-top:auto;display:grid;gap:10px}.lr-profile-mini{display:flex;align-items:center;gap:10px;border-top:1px solid ${theme.line};padding:18px 8px 0}
 .lr-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#c9c3ff,#e8ddff);color:#4e43b8;font-weight:800;flex-shrink:0}
 .lr-main{flex:1;min-width:0;padding:30px clamp(18px,4vw,48px) 50px}.lr-topbar{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:28px}
 .lr-search{display:flex;align-items:center;gap:10px;background:${theme.surface};border:1px solid ${theme.line};border-radius:13px;padding:11px 14px;width:min(360px,100%);color:${theme.muted}}
 .lr-search input{border:0;outline:0;background:transparent;color:${theme.text};width:100%;min-width:0}
 .lr-iconbtn{width:42px;height:42px;border:1px solid ${theme.line};background:${theme.surface};color:${theme.text};border-radius:13px;display:grid;place-items:center}
 .lr-greeting{display:flex;justify-content:space-between;align-items:center;gap:18px;margin:22px 0 28px}.lr-eyebrow{color:${theme.accent};font-size:12px;letter-spacing:1.4px;text-transform:uppercase;font-weight:800}
 h1{font-size:clamp(27px,3vw,36px);line-height:1.15;letter-spacing:-1.2px;margin:8px 0 10px}.lr-sub{color:${theme.muted};line-height:1.6;margin:0}
 .lr-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:0;background:${theme.accent};color:#fff;border-radius:12px;padding:12px 16px;font-weight:700;box-shadow:0 7px 18px #6558e82b}
 .lr-btn:hover{filter:brightness(1.05);transform:translateY(-1px)}.lr-btn.secondary{background:${theme.soft};color:${theme.accent};box-shadow:none}.lr-btn.ghost{background:transparent;border:1px solid ${theme.line};color:${theme.text};box-shadow:none}
 .lr-section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:28px 0 15px}.lr-section-head h2{font-size:19px;letter-spacing:-.4px;margin:0}.lr-link{border:0;background:transparent;color:${theme.accent};font-weight:700}
 .lr-hero{position:relative;overflow:hidden;border-radius:24px;padding:30px;background:linear-gradient(120deg,#e6e8ff,#f0e9ff 58%,#e1f2ff);color:#24234b;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:210px}
 .lr-hero:after{content:"";position:absolute;width:240px;height:240px;border-radius:50%;background:#ffffff66;right:8%;top:-100px}.lr-hero-copy{max-width:480px;position:relative;z-index:1}.lr-hero h2{font-size:clamp(23px,3vw,32px);letter-spacing:-1px;margin:9px 0}.lr-hero p{line-height:1.6;color:#62658b;margin:0 0 18px}
 .lr-hero-art{position:relative;z-index:1;width:150px;height:150px;display:grid;place-items:center;font-size:76px;flex-shrink:0}.lr-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
 .lr-book{background:${theme.surface};border:1px solid ${theme.line};border-radius:18px;padding:13px;min-width:0;transition:transform .2s,box-shadow .2s}.lr-book:hover{transform:translateY(-3px);box-shadow:0 12px 25px #24234b0b}
 .lr-cover{height:155px;border-radius:13px;display:grid;place-items:center;font-size:56px;position:relative;overflow:hidden}.lr-cover:after{content:"";position:absolute;width:110px;height:110px;border:1px solid #ffffff77;border-radius:50%;right:-25px;top:-20px}
 .lr-book-meta{padding:13px 3px 2px}.lr-book-meta h3{font-size:15px;margin:0 0 5px;line-height:1.35}.lr-book-meta p{font-size:12px;color:${theme.muted};margin:0 0 12px}.lr-book-bottom{display:flex;align-items:center;justify-content:space-between;gap:7px}.lr-mini-btn{border:0;border-radius:10px;background:${theme.soft};color:${theme.accent};padding:9px;display:grid;place-items:center}
 .lr-tag{display:inline-flex;background:${theme.soft};color:${theme.accent};border-radius:7px;padding:5px 8px;font-size:11px;font-weight:800}
 .lr-two-col{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(240px,.8fr);gap:18px}.lr-panel{background:${theme.surface};border:1px solid ${theme.line};border-radius:18px;padding:20px}
 .lr-progress-track{height:7px;border-radius:20px;background:${theme.line};overflow:hidden}.lr-progress-fill{height:100%;background:linear-gradient(90deg,#6558e8,#a08cff);border-radius:20px}
 .lr-player-cover{height:230px;border-radius:20px;display:grid;place-items:center;font-size:84px;margin-bottom:20px}.lr-player-controls{display:flex;align-items:center;justify-content:center;gap:18px;margin:18px 0}.lr-play{height:56px;width:56px;border-radius:50%;border:0;background:${theme.accent};color:white;display:grid;place-items:center}
 .lr-textarea{width:100%;resize:vertical;min-height:90px;border:1px solid ${theme.line};border-radius:12px;background:${theme.page};color:${theme.text};padding:12px;outline-color:${theme.accent}}
 .lr-select{background:${theme.surface};color:${theme.text};border:1px solid ${theme.line};border-radius:10px;padding:8px}
 .lr-highlight{padding:14px 0;border-bottom:1px solid ${theme.line}}.lr-highlight:last-child{border-bottom:0}.lr-highlight p{line-height:1.6;margin:8px 0;color:${theme.text}}
 .lr-chat{display:flex;flex-direction:column;gap:12px;min-height:250px;max-height:430px;overflow:auto;padding:4px}.lr-bubble{max-width:85%;padding:12px 14px;border-radius:14px;line-height:1.5;font-size:14px}.lr-bubble.bot{align-self:flex-start;background:${theme.soft};border-bottom-left-radius:4px}.lr-bubble.you{align-self:flex-end;background:${theme.accent};color:#fff;border-bottom-right-radius:4px}
 .lr-chat-form{display:flex;gap:8px;margin-top:14px}.lr-chat-form input{min-width:0;flex:1;border:1px solid ${theme.line};background:${theme.page};color:${theme.text};padding:12px;border-radius:12px;outline-color:${theme.accent}}
 .lr-auth-wrap{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;background:${theme.surface}}.lr-auth-visual{background:linear-gradient(145deg,#e4e6ff,#f0e8ff 55%,#dff4ff);padding:clamp(30px,6vw,80px);display:flex;flex-direction:column;justify-content:space-between;color:#24234b;overflow:hidden;position:relative}.lr-auth-visual:after{content:"";width:370px;height:370px;border:1px solid #ffffffaa;border-radius:50%;position:absolute;right:-100px;bottom:-120px;box-shadow:0 0 0 35px #ffffff33,0 0 0 70px #ffffff22}
 .lr-auth-visual h1{font-size:clamp(36px,5vw,58px);max-width:520px;line-height:1.07;margin:40px 0 18px}.lr-auth-visual p{max-width:410px;color:#66668c;line-height:1.7}.lr-auth-icon{font-size:100px;margin-top:22px;position:relative;z-index:1}.lr-auth-form-wrap{display:grid;place-items:center;padding:30px}.lr-auth-form{width:min(390px,100%)}.lr-auth-form h2{font-size:28px;margin:0 0 8px;letter-spacing:-.8px}.lr-auth-form>p{color:${theme.muted};margin:0 0 26px;line-height:1.5}.lr-field{display:grid;gap:7px;margin:14px 0}.lr-field label{font-size:13px;font-weight:700}.lr-field input{width:100%;padding:13px 14px;border:1px solid ${theme.line};border-radius:11px;background:${theme.page};color:${theme.text};outline-color:${theme.accent}}
 .lr-full{width:100%;margin-top:8px}.lr-small{font-size:12px;color:${theme.muted};line-height:1.6}.lr-mobile-nav{display:none}.lr-empty{text-align:center;padding:42px 20px;color:${theme.muted}}.lr-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#22243a;color:white;padding:12px 18px;border-radius:12px;box-shadow:0 12px 35px #0002;z-index:100;display:flex;align-items:center;gap:8px;font-size:14px}
 @media(max-width:980px){.lr-sidebar{width:205px}.lr-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.lr-two-col{grid-template-columns:1fr}.lr-hero-art{width:110px;font-size:62px}}
 @media(max-width:680px){.lr-layout{display:block}.lr-sidebar{display:none}.lr-main{padding:20px 16px 95px}.lr-topbar{margin-bottom:20px}.lr-greeting{align-items:flex-start;flex-direction:column}.lr-hero{padding:23px;min-height:0}.lr-hero-art{display:none}.lr-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.lr-cover{height:130px;font-size:45px}.lr-book{padding:9px}.lr-book-meta{padding:10px 2px 2px}.lr-book-meta h3{font-size:13px}.lr-mobile-nav{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-around;background:${theme.surface};border-top:1px solid ${theme.line};padding:9px 4px calc(9px + env(safe-area-inset-bottom));z-index:20}.lr-mobile-nav button{border:0;background:transparent;color:${theme.muted};display:grid;justify-items:center;gap:4px;font-size:10px;min-width:48px}.lr-mobile-nav button.active{color:${theme.accent}}.lr-auth-wrap{grid-template-columns:1fr}.lr-auth-visual{padding:28px;min-height:270px}.lr-auth-visual h1{font-size:36px;margin:24px 0 10px}.lr-auth-icon{font-size:58px;margin-top:8px}.lr-auth-visual .lr-small{display:none}.lr-auth-form-wrap{padding:32px 22px}.lr-player-cover{height:190px}.lr-panel{padding:16px}}
 `;

 const navItems = [
 { id: "home", label: "Home", icon: Home },
 { id: "library", label: "My Library", icon: Library },
 { id: "highlights", label: "Highlights", icon: Highlighter },
 { id: "buddy", label: "Book Buddy", icon: MessageCircle },
 { id: "profile", label: "Profile", icon: UserRound }
 ];

 function navigate(id) {
 if (id !== "player") stopNarration();
 setScreen(id);
 if (id !== "player") setPlaying(false);
 if (id === "buddy" && "speechSynthesis" in window) {
 window.speechSynthesis.cancel();
 const message = new SpeechSynthesisUtterance("How can I help you today, Acsah?");
 message.lang = "en-US";
 message.rate = 0.95;
 message.pitch = 1;
 window.speechSynthesis.speak(message);
 }
 }

 function BookCard({ book }) {
 return (
 <article className="lr-book">
 <button className="lr-cover" style={{ background: book.color, width: "100%", border: 0 }} onClick={() => openBook(book)} aria-label={`Open ${book.title}`}>
 <span className="lr-cover-fallback">{book.emoji}</span>
        <img
          className="lr-cover-image"
          src={book.coverUrl}
          alt={`Original cover of ${book.title}`}
          loading="lazy"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
 </button>
 <div className="lr-book-meta">
 <span className="lr-tag">{book.category}</span>
 <h3 style={{ marginTop: 9 }}>{book.title}</h3>
 <p>{book.author}</p>
 <div className="lr-book-bottom">
 <span style={{ color: theme.muted, fontSize: 11, display: "flex", gap: 4, alignItems: "center" }}><Clock3 size={12} /> {book.duration}</span>
 <div style={{ display: "flex", gap: 6 }}>
 <button className="lr-mini-btn" onClick={() => toggleBookmark(book.id)} aria-label="Bookmark book" title="Save book">
 <Bookmark size={16} fill={bookmarks.includes(book.id) ? "currentColor" : "none"} />
 </button>
 <button className="lr-mini-btn" onClick={() => openBook(book, true)} aria-label="Play audiobook" title="Play audiobook"><Play size={16} fill="currentColor" /></button>
 </div>
 </div>
 </div>
 </article>
 );
 }

 if (!isLoggedIn) {
 return (
 <div className="lr-app">
 <style>{styles}</style>
 <div className="lr-auth-wrap">
 <section className="lr-auth-visual">
 <div className="lr-brand" style={{ padding: 0 }}>
 <span className="lr-logo"><Headphones size={22} /></span>
 <span>Listen <span style={{ color: "#7568e9" }}>&</span> Remember</span>
 </div>
 <div>
 <span className="lr-eyebrow">Your learning companion</span>
 <h1>Listen. Highlight. Remember.</h1>
 <p>Turn the best ideas from audiobooks into knowledge you can use every day.</p>
 <div className="lr-auth-icon"><Headphones size={28} /></div>
 </div>
 <p className="lr-small">A calmer way to learn something new, one chapter at a time.</p>
 </section>
 <section className="lr-auth-form-wrap">
 <form className="lr-auth-form" onSubmit={handleAuth}>
 <div className="lr-logo" style={{ marginBottom: 24 }}><AudioLines size={22} /></div>
 <h2>{loginMode === "login" ? "Welcome back" : "Create your account"}</h2>
 <p>{loginMode === "login" ? "Sign in and pick up where your curiosity left off." : "Start saving the ideas you want to remember."}</p>
 {loginMode === "signup" && <div className="lr-field"><label>Your name</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" /></div>}
 <div className="lr-field"><label>Email address</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></div>
 <div className="lr-field"><label>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter any password for demo" required /></div>
 <button className="lr-btn lr-full" type="submit">{loginMode === "login" ? "Sign in" : "Create account"} <ChevronRight size={18} /></button>
 <p style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: theme.muted }}>
 {loginMode === "login" ? "New here? " : "Already have an account? "}
 <button type="button" className="lr-link" onClick={() => setLoginMode(loginMode === "login" ? "signup" : "login")}>{loginMode === "login" ? "Create an account" : "Sign in"}</button>
 </p>
 <p className="lr-small" style={{ textAlign: "center" }}>Demo interface only  no real account is created and your password is not sent anywhere.</p>
 </form>
 </section>
 </div>
 </div>
 );
 }

 return (
 <div className="lr-app">
 <style>{styles}</style>
 <div className="lr-layout">
 <aside className="lr-sidebar">
 <div className="lr-brand"><span className="lr-logo"><Headphones size={22} /></span><span>Listen <span style={{ color: theme.accent }}>&</span> Remember</span></div>
 <div>
 <p className="lr-eyebrow" style={{ padding: "0 12px", marginBottom: 10 }}>Workspace</p>
 <nav className="lr-nav">
 {navItems.map((item) => {
 const Icon = item.icon;
 return <button key={item.id} className={screen === item.id ? "active" : ""} onClick={() => navigate(item.id)}><Icon size={19} /> {item.label}</button>;
 })}
 </nav>
 </div>
 <div className="lr-sidebar-bottom">
 <button className="lr-btn secondary" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />} {dark ? "Light appearance" : "Dark appearance"}</button>
 <div className="lr-profile-mini"><div className="lr-avatar">AV</div><div style={{ minWidth: 0 }}><div style={{ fontWeight: 800, fontSize: 13 }}>{name || "Acsah Victor"}</div><div style={{ color: theme.muted, fontSize: 11, marginTop: 3 }}>{email}</div></div><button className="lr-mini-btn" onClick={() => { setIsLoggedIn(false); setScreen("welcome"); window.speechSynthesis?.cancel(); }} title="Sign out"><LogOut size={16} /></button></div>
 </div>
 </aside>

 <main className="lr-main">
 <header className="lr-topbar">
 <div className="lr-search"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search books, authors..." /></div>
 <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
 <button className="lr-iconbtn" onClick={() => setDark(!dark)} title="Toggle appearance">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
 <button className="lr-iconbtn" onClick={() => navigate("profile")} title="Profile"><UserRound size={18} /></button>
 </div>
 </header>

 {screen === "home" && <>
 <div className="lr-greeting">
 <div><span className="lr-eyebrow">Wednesday, your next chapter awaits</span><h1>Good Morning, {name.split(" ")[0] || "Acsah"}</h1><p className="lr-sub">A few minutes of listening can spark a big idea.</p></div>
 <button className="lr-btn secondary" onClick={playWelcomeAudio}><Volume2 size={17} /> Hear welcome message</button>
 </div>
 <section className="lr-hero">
 <div className="lr-hero-copy"><span className="lr-eyebrow">Continue your journey</span><h2>Make room for a new idea.</h2><p>Pick up where you left off and turn listening into lasting knowledge.</p><button className="lr-btn" onClick={() => openBook(BOOKS[0], true)}><Play size={17} fill="currentColor" /> Continue listening</button></div>
 </section>
 <div className="lr-section-head"><h2>Pick up where you left off</h2><button className="lr-link" onClick={() => navigate("library")}>My library <ChevronRight size={15} style={{ verticalAlign: "middle" }} /></button></div>
 <div className="lr-panel" style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 26 }}>
 <div className="lr-continue-cover" style={{ width: 76, height: 100, flex: "0 0 76px", overflow: "hidden", borderRadius: 10 }}><img src={BOOKS[0].coverUrl} alt="Atomic Habits book cover" style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} onError={(event) => { event.currentTarget.style.display = "none"; }} /></div>
 <div style={{ flex: 1, minWidth: 0 }}><h3 style={{ margin: "0 0 5px" }}>Atomic Habits</h3><p style={{ color: theme.muted, margin: "0 0 12px", fontSize: 13 }}>James Clear · Chapter 3</p><div className="lr-progress-track"><div className="lr-progress-fill" style={{ width: `${progress}%` }} /></div><p style={{ fontSize: 11, color: theme.muted, margin: "7px 0 0" }}>{progress}% complete</p></div>
 <button className="lr-play" onClick={() => openBook(BOOKS[0], true)}><Play size={21} fill="currentColor" /></button>
 </div>
 <div className="lr-section-head"><h2>Recommended for you</h2><span className="lr-tag"><Sparkles size={12} /> Curated picks</span></div>
 <div className="lr-grid">{filteredBooks.slice(0, 3).map((book) => <BookCard key={book.id} book={book} />)}</div>
 </>}

 {screen === "library" && <>
 <div className="lr-greeting"><div><span className="lr-eyebrow">Your personal shelf</span><h1>My Library</h1><p className="lr-sub">Keep your favorite books close and your next listen easy to find.</p></div><span className="lr-tag">{savedBooks.length} saved books</span></div>
 <div className="lr-section-head"><h2>Saved books</h2></div>
 {savedBooks.length ? <div className="lr-grid">{savedBooks.map((book) => <BookCard key={book.id} book={book} />)}</div> : <div className="lr-panel lr-empty"><Library size={32} /><h3>Your shelf is waiting</h3><p>Save a book with the bookmark icon to see it here.</p><button className="lr-btn" onClick={() => navigate("home")}>Explore books</button></div>}
 <div className="lr-section-head"><h2>Explore all books</h2></div>
 <div className="lr-grid">{filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}</div>
 </>}

 {screen === "player" && <>
 <div className="lr-greeting"><div><span className="lr-eyebrow">Now listening</span><h1>Your listening space</h1><p className="lr-sub">Listen, follow the transcript, and save ideas worth remembering.</p></div><button className="lr-btn ghost" onClick={() => navigate("library")}><Library size={17} /> Library</button></div>
 <div className="lr-two-col">
 <section className="lr-panel">
 <div className="lr-player-cover" style={{ background: activeBook.color }}>
                  <span className="lr-player-cover-fallback">{activeBook.emoji}</span>
                  <img
                    src={activeBook.coverUrl}
                    alt={`Original cover of ${activeBook.title}`}
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                </div>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}><div><span className="lr-tag">{activeBook.category}</span><h2 style={{ margin: "10px 0 5px", fontSize: 25 }}>{activeBook.title}</h2><p style={{ color: theme.muted, margin: 0 }}>{activeBook.author}</p></div><button className="lr-iconbtn" onClick={() => toggleBookmark(activeBook.id)}><Bookmark size={19} fill={bookmarks.includes(activeBook.id) ? "currentColor" : "none"} /></button></div>
 <div style={{ marginTop: 24 }}>
 <input aria-label="Audio progress" type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(Number(e.target.value))} style={{ width: "100%", accentColor: theme.accent }} />
 <div style={{ display: "flex", justifyContent: "space-between", color: theme.muted, fontSize: 11 }}><span>{Math.floor(progress * 2.1)}:{String(Math.floor(progress * 0.6) % 60).padStart(2, "0")}</span><span>{activeBook.duration}</span></div>
 </div>
 <div className="lr-player-controls">
 <button className="lr-iconbtn" onClick={() => setProgress(Math.max(0, progress - 5))} title="Back 5%"><SkipBack size={20} /></button>
 <button className="lr-play" onClick={togglePlayerPlayback} aria-label={playing ? "Pause audiobook" : "Play audiobook"}>{playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}</button>
 <button className="lr-iconbtn" onClick={() => setProgress(Math.min(100, progress + 5))} title="Forward 5%"><SkipForward size={20} /></button>
 </div>
 <audio ref={audioRef} src={`/audio/${activeBook.id === 1 ? "atomic-habits" : activeBook.id === 2 ? "psychology-of-money" : activeBook.id === 3 ? "deep-work" : activeBook.id === 4 ? "the-alchemist" : activeBook.id === 5 ? "ikigai" : "think-again"}.mp3`} onTimeUpdate={(e) => { if (e.currentTarget.duration) setProgress(Math.round(e.currentTarget.currentTime / e.currentTarget.duration * 100)); }} onEnded={() => setPlaying(false)} style={{ display: "none" }} />
 <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${theme.line}`, paddingTop: 16 }}>
 <label style={{ display: "flex", gap: 8, alignItems: "center", color: theme.muted, fontSize: 13 }}><Gauge size={17} /> Speed <select className="lr-select" value={speed} onChange={(e) => setSpeed(e.target.value)}>{["0.75x", "1x", "1.25x", "1.5x", "2x"].map((s) => <option key={s}>{s}</option>)}</select></label>
 <label style={{ display: "flex", gap: 8, alignItems: "center", color: theme.muted, fontSize: 13 }}><Languages size={17} /> <select className="lr-select" value={language} onChange={(e) => setLanguage(e.target.value)}>{["English", "Urdu", "Spanish", "French"].map((s) => <option key={s}>{s}</option>)}</select></label>
 {activeBook.id === 1 && <label style={{ display: "flex", gap: 8, alignItems: "center", color: theme.muted, fontSize: 13, flexWrap: "wrap" }}><Headphones size={17} /> Narrator <select className="lr-select" value={selectedNarrator} onChange={(e) => { const nextVoice = e.target.value; setSelectedNarrator(nextVoice); if (narrationActive) { window.speechSynthesis.cancel(); setNarrationActive(false); setPlaying(false); setToast("Narrator changed. Press play to continue with the new voice."); } }}><option value="">Default voice</option>{narratorVoices.map((voice) => <option key={`${voice.name}-${voice.lang}`} value={voice.name}>{voice.name} ({voice.lang})</option>)}</select></label>}
 </div>
 <p className="lr-small" style={{ marginTop: 12 }}>{activeBook.id === 1 ? "Atomic Habits summary is narrated aloud using your browser's available voices. Choose a narrator above, then press play. Voice options depend on your device and browser." : <>Audio files are optional for the demo. To use recorded audio for this book, place its MP3 in <code>public/audio/</code>.</>}</p>
 </section>
 <section className="lr-panel">
 <div className="lr-section-head" style={{ marginTop: 0 }}><h2><FileText size={19} style={{ verticalAlign: "middle", marginRight: 6 }} /> Transcript & notes</h2><button className="lr-btn secondary" onClick={() => setShowTranscript(!showTranscript)}>{showTranscript ? "Hide" : "Show"} transcript</button></div>
 {showTranscript && (() => {
 const transcriptSentences = activeBook.transcript.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [activeBook.transcript];
 return (
 <div>
 <p className="lr-small" style={{ margin: "0 0 8px" }}>
 {activeBook.id === 1 && narrationActive
 ? "The purple line follows the narrator. Swipe a sentence right to save it."
 : "Swipe a sentence right to save it to Highlights."}
 </p>
 <div
 style={{
 lineHeight: 1.65, color: theme.text, fontSize: 14,
 background: theme.page, borderRadius: 13, padding: 10,
 marginBottom: 18, maxHeight: "17.5em", overflowY: "auto",
 overscrollBehavior: "contain"
 }}
 >
 {transcriptSentences.map((sentence, index) => {
 const isCurrent = activeBook.id === 1 && narrationActive && index === currentNarrationIndex;
 let touchStartX = 0;
 return (
 <div
 key={`${index}-${sentence.slice(0, 18)}`}
 ref={isCurrent ? activeTranscriptLineRef : null}
 onTouchStart={(event) => { touchStartX = event.changedTouches[0].clientX; }}
 onTouchEnd={(event) => {
 const swipeDistance = event.changedTouches[0].clientX - touchStartX;
 if (swipeDistance > 55) {
 saveHighlightText(sentence, "Swiped sentence saved to Highlights!");
 }
 }}
 style={{
 padding: "9px 10px", marginBottom: 4, borderRadius: 9,
 background: isCurrent ? (dark ? "#39315f" : "#e9e5ff") : "transparent",
 borderLeft: isCurrent ? `3px solid ${theme.accent}` : "3px solid transparent",
 transition: "background .2s ease",
 touchAction: "pan-y"
 }}
 >
 <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
 <span style={{ flex: 1 }}>{sentence.trim()}</span>
 <button
 type="button"
 onClick={() => saveHighlightText(sentence, "Sentence saved to Highlights!")}
 title="Save this sentence"
 aria-label="Save this sentence as a highlight"
 style={{
 border: 0, background: isCurrent ? theme.accent : theme.soft,
 color: isCurrent ? "#fff" : theme.accent,
 borderRadius: 8, padding: "5px 7px", flexShrink: 0,
 fontSize: 11, fontWeight: 700
 }}
 >
 {isCurrent ? "Save" : "+"}
 </button>
 </div>
 {isCurrent && <div style={{ color: theme.accent, fontSize: 10, fontWeight: 800, marginTop: 4, letterSpacing: ".04em" }}>? NOW READING</div>}
 </div>
 );
 })}
 </div>
 </div>
 );
 })()}
 <label style={{ display: "block", fontWeight: 800, fontSize: 13, marginBottom: 8 }}>Save a highlight or note</label>
 <textarea className="lr-textarea" value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Add your own note, or swipe a transcript sentence right to save it." />
 <button className="lr-btn" style={{ marginTop: 10 }} onClick={addHighlight}><Highlighter size={17} /> Save highlight</button>
 <div className="lr-section-head"><h2>Recent highlights</h2><button className="lr-link" onClick={() => navigate("highlights")}>View all</button></div>
 {highlights.filter((h) => h.bookId === activeBook.id).slice(0, 2).map((h) => <div key={h.id} className="lr-highlight"><span className="lr-tag">{h.time}</span><p>{h.text}</p></div>)}
 {!highlights.some((h) => h.bookId === activeBook.id) && <p className="lr-small">Your saved notes for this book will appear here.</p>}
 </section>
 </div>
 </>}

 {screen === "highlights" && <>
 <div className="lr-greeting"><div><span className="lr-eyebrow">Ideas worth keeping</span><h1>Highlights & Notes</h1><p className="lr-sub">A personal collection of the things you want to remember.</p></div><span className="lr-tag">{highlights.length} saved ideas</span></div>
 <section className="lr-panel">
 {highlights.length ? highlights.map((h) => {
 const book = BOOKS.find((b) => b.id === h.bookId) || BOOKS[0];
 return <div className="lr-highlight" key={h.id}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}><span className="lr-tag">{book.title}</span><div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ color: theme.muted, fontSize: 12 }}>{h.time}</span><button className="lr-mini-btn" onClick={() => setHighlights((prev) => prev.filter((x) => x.id !== h.id))} title="Delete highlight"><X size={15} /></button></div></div><p>{h.text}</p><button className="lr-link" onClick={() => openBook(book)}>Open audiobook <ChevronRight size={14} style={{ verticalAlign: "middle" }} /></button></div>;
 }) : <div className="lr-empty"><Highlighter size={32} /><h3>No highlights yet</h3><p>Open an audiobook and save an idea to see it here.</p><button className="lr-btn" onClick={() => navigate("home")}>Find a book</button></div>}
 </section>
 </>}

 {screen === "buddy" && <>
 <div className="lr-greeting"><div><span className="lr-eyebrow">Your learning companion</span><h1>Book Buddy <span>?</span></h1><p className="lr-sub">Ask for book ideas, learning tips, or a simple next step.</p></div></div>
 <section className="lr-panel" style={{ maxWidth: 800 }}>
 <div style={{ display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${theme.line}`, paddingBottom: 16, marginBottom: 16 }}><div className="lr-logo"><Sparkles size={20} /></div><div><h2 style={{ margin: 0, fontSize: 17 }}>Ask Book Buddy</h2><p style={{ margin: "4px 0 0", color: theme.muted, fontSize: 12 }}>Friendly suggestions based on your goals</p></div></div>
 <div className="lr-chat">{chatMessages.map((m, i) => <div className={`lr-bubble ${m.from === "you" ? "you" : "bot"}`} key={i}>{m.text}</div>)}</div>
 <form className="lr-chat-form" onSubmit={sendChat}><input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="e.g. I want to improve my focus..." /><button className="lr-btn" type="submit"><Send size={17} /></button></form>
 <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>{["Build better habits", "Improve my focus", "Learn about money"].map((q) => <button key={q} className="lr-btn secondary" onClick={() => { setChatInput(q); }}>{q}</button>)}</div>
 <p className="lr-small" style={{ marginTop: 16 }}>This is a simple demo chatbot with predefined suggestions, not a live AI service.</p>
 </section>
 </>}

 {screen === "profile" && <>
 <div className="lr-greeting"><div><span className="lr-eyebrow">Your account</span><h1>Profile & Settings</h1><p className="lr-sub">Personalize your learning space.</p></div></div>
 <div className="lr-two-col">
 <section className="lr-panel">
 <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}><div className="lr-avatar" style={{ width: 64, height: 64, fontSize: 21 }}>AV</div><div><h2 style={{ margin: "0 0 5px" }}>{name}</h2><p style={{ color: theme.muted, margin: 0 }}>{email}</p></div></div>
 <div className="lr-field"><label>Full name</label><input value={name} onChange={(e) => setName(e.target.value)} /></div>
 <div className="lr-field"><label>Email address</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
 <button className="lr-btn" onClick={() => setToast("Profile updated for this session.")}><Check size={17} /> Save changes</button>
 </section>
 <section className="lr-panel">
 <h2 style={{ marginTop: 0 }}>Preferences</h2>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "15px 0", borderBottom: `1px solid ${theme.line}` }}><div><strong>Dark appearance</strong><p className="lr-small" style={{ margin: "5px 0 0" }}>Make your reading space easier on the eyes.</p></div><button className="lr-btn secondary" onClick={() => setDark(!dark)}>{dark ? "On" : "Off"}</button></div>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "15px 0", borderBottom: `1px solid ${theme.line}` }}><div><strong>Preferred audio speed</strong><p className="lr-small" style={{ margin: "5px 0 0" }}>Choose your default listening speed.</p></div><select className="lr-select" value={speed} onChange={(e) => setSpeed(e.target.value)}>{["0.75x", "1x", "1.25x", "1.5x", "2x"].map((s) => <option key={s}>{s}</option>)}</select></div>
 <div style={{ padding: "15px 0" }}><strong>Welcome voice</strong><p className="lr-small">Hear Welcome back! What are we learning today? spoken by your browser voice.</p><button className="lr-btn secondary" onClick={playWelcomeAudio}><Volume2 size={17} /> Play welcome audio</button></div>
 <button className="lr-btn ghost" onClick={() => { setIsLoggedIn(false); setScreen("welcome"); window.speechSynthesis?.cancel(); }}><LogOut size={17} /> Sign out</button>
 </section>
 </div>
 </>}
 </main>
 </div>
 <nav className="lr-mobile-nav">{navItems.map((item) => { const Icon = item.icon; return <button key={item.id} className={screen === item.id ? "active" : ""} onClick={() => navigate(item.id)}><Icon size={19} /><span>{item.label}</span></button>; })}</nav>
 {toast && <div className="lr-toast"><Check size={17} /> {toast}</div>}
 </div>
 );
}
