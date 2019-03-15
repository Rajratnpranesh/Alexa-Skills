/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewMotivationQuoteHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewMotivationQuoteIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Daily Motivation Dose';
const GET_FACT_MESSAGE = 'Here\'s your quote: ';
const HELP_MESSAGE = 'You can say tell me a motivational quote, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
'Start each day thinking about warm fuzzy kittens and cute little puppies and its impossible to have a bad day.',

'What do you want to create today? It’s your choice.',

'What you choose to focus on expands.',

'Today I will make progress towards my goals and keep pushing forward with all of my heart.',

'Follow your dreams. Follow your passions. If you make a mistake, pick yourself up and learn from them. But whatever you do…keep moving forward.',

'When you wake up each morning, see yourself as a new baby being born into the world with no negative past.',

'Be gentle with yourself, you’re doing the best you can.',

'No one controls how I feel about myself, but me.',

'Write down five things you are grateful for. Then no matter what happens today, no one can take that away from you. Stay positive.',

'More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate. ― Roy T. Bennett',

'The secret of happiness: Find something more important than you are and dedicate your life to it. ― Daniel C. Dennett',

'I know I have unlimited potential to create the life of my dreams.',

'Forgive those who try and bring you down and make you feel like they do.',

'Laugh. It’s free medicine you don’t need insurance for.',

'If you want to make your dreams come true, the first thing to do is wake up. – J.M. Power',

'One small positive thought in the morning can change your whole day.',

'You came into the world to do something; So… do something! ― Johnnie Dent Jr.',

'What other people think about you is none of your business.',

'Follow your bliss and don’t be afraid, and doors will open where you didn’t know they were going to be. – Joseph Campbell',

'A beautiful day begins with a beautiful mindset. The moment you start acting like it is a blessing, it will start to feel like one. Good morning.',

'On this new day, I would like to tell you, that time heals everything, that even a reason cannot, so, start your day with a smile, good morning, walk that extra mile!',

'Don’t let other people effect your good day. You do you.',

'No one is in control of your happiness but you; therefore, you have the power to change anything about yourself or your life that you want to change. – Barbara DeAngelis',

'Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy. –Thich Nhat Hanh',

'Great things never came from comfort zones.',

'Choose kindness and laugh often.',

'Work hard and be nice to people.',

'Self confidence is the best outfit.',

'Instead of worrying about what you cannot control, shift your energy to what you can create. ― Roy T. Bennett',

'Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.',

'When you want to succeed as bad as you want to breathe, then you’ll be successful. – Eric Thomas',

'Don’t start your day with the broken pieces of yesterday. Every day is a fresh start. Every morning we wake up is the first day of the rest of our life.',
'Yesterday is gone, tomorrow is mystery, today is blessing.',

'You were put on this earth to achieve your greatest self, to live out your purpose, and to do it courageously. ― Steve Maraboli,',

'Never stop believing in hope because miracles happen everyday.',

'Don’t let the opinions of others consume you.',

'Whatever problems you may have right now, accept them as a challenge and say to yourself, “Bring it on. I will rise up and become stronger.”',

'Let your smile change the world, but don’t let the world change your smile.',

'Start your day with deep breath. Inhale all the love and goodness, and exhale all the tears, fears, worries and stress, then … smile.',

'You are on a magical journey called “life”. It is a precious gift. You will never be this you again. Relax, have fun, and enjoy the ride!',

'You are the executive director and screenwriter of your life. – Eric Thomas',

'No matter what, no matter how, where or who – you can almost always turn around and get a second chance.',

'As you start and end your day, be thankful for every little thing in your life. You will come to realize how blessed you truly are.',

'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett',

'It is not how much we have, but how much we enjoy, that makes happiness. –Charles Spurgeon',

'At some point in life you have to face your fears. – Eric Thomas',

'Remember your dreams and fight for them. You must know what you want from life. There is just one thing that makes your dream become impossible: the fear of failure. – Paulo Coelho',

'In the journey of life, we pass pleasures and pain. There will be sunshine and rain; there will be loss and gain. But we must learn to smile again and again.',

'I am in charge of how I feel and today I am choosing happiness.',

'You’ve never lived this day before, and you never will again. Make the most of it!',

'Be helpful. When you see a person without a smile, give them yours – Zig Ziglar.',

'Upon waking, let your first thought be, “thank you”.',

'Rule your mind or it will rule you. ― Buddha',

'Do more of what lights you up and makes you feel alive. The world needs your spark.',

'No matter how you feel, get up, dress up, show up and never give up.',

'You are amazing, unique and beautiful. There is nothing more you need to be, do or have in order to be happy. You are perfect just as you are. Yes, really. So smile, give love and enjoy every moment of this precious life.',

'Stay focused, go after your dreams and keep moving toward your goals. – LL Cool J',

'Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you’re climbing it. ― Andy Rooney',

'Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua J. Marine',

'When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love. – Marcus Aurelius',

'Being happy doesn’t mean that everything is perfect. It means that you’ve decided to look beyond the imperfections.',

'Take it all one day at a time and enjoy the journey. – Kristi Bartlett',

'When you rise in the morning, give thanks for the light, for your life, for your strength. Give thanks for your food and for the joy of living. If you see no reason to give thanks, the fault lies in yourself. – Tecumseh',

'Morning signifies a new beginning. So this morning start by forgiving yourself for all the mistakes you made yesterday and look forward to the promising day that lies ahead of you. Have a good morning!',

'Don’t ask what the world needs. Ask what makes you come alive and go do it. Because what the world needs is more people who have come alive – Howard Thurman.',

'The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey',

'Go confidently in the direction of your dreams. Live the life you have imagined. – Henry David Thoreau',

'As you change your point of view, your views bring about a change in you. ― George Alexiou',

'Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain… To feel the freedom that comes from being able to continue to make mistakes and choices – today I choose to feel life, not to deny my humanity but embrace it. – Kevyn Aucoin',

'It is never too late to be what you might have been. – George Eliot',

'The best way to make your dreams come true is to wake up. – Paul Valery',

'Stay positive and happy. Work hard and don’t give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people. – Tena Desae',

'Get up today and say, “This is going to be a great day. I’m excited about my future. Something good is going to happen to me.”',

'The best thing you can do for yourself is to stop saying “I wish” and start saying “I will”. And then do something about it.',

'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending. – Carl Bard',

'Don’t rely on someone else for your happiness and self-worth. Only you can be responsible for that. If you can’t love and respect yourself – no one else will be able to make that happen. Accept who you are – completely; the good and the bad – and make changes as YOU see fit – not because you think someone else wants you to be different. – Stacey Charter',

'Even the smallest shift in perspective can bring about the greatest healing. ― Joshua Kai',

'Wake up every morning with the thought that something wonderful is about to happen…',

'The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny. – Albert Ellis',

'Believe with all of your heart that you will do what you were made to do. – Orison Swett Marden',

'Life is too short to waste your time on people who don’t respect, appreciate, and value you. ― Roy T. Bennett',

'Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams. – Ashley Smith',

'I have found that if you love life, life will love you back – Arthur Rubinstein.',

'Some people dream of success, while other people get up every morning and make it happen. – Wayne Huizenga',

'Surround yourself with people who get you.',

'You must expect great things of yourself before you can do them. – Michael Jordan',

'Take responsibility of your own happiness, never put it in other people’s hands. ― Roy T. Bennett',

'Learn to enjoy every minute of your life. Be happy now. Don’t wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it’s at work or with your family. Every minute should be enjoyed and savored. – Earl Nightingale',
'The best love story is when you fall in love with the most unexpected person at the most unexpected time.',

'Learn to express your feelings and emotions without pushing the other persons buttons.',

'Find someone who will love your soul more than your body.',

'You make me want to be a better man. – As Good as It Gets',

'Strong women still need their hands held. – dauvoire',

'Relationships are a school: they are meant to teach you.',

'What you want exists. Don’t settle until you get it.',

'Be with someone who is proud to have you.',

'Sometimes we create our own heartbreaks through expectation.',

'Sometimes the person you love doesn’t deserve you.',

'When people treat you like they don’t care, believe them.',

'Be with someone who embraces your goals, not destroys them.',

'Want to find your soulmate? Find someone with the same playlist on Spotify or Netflix',

'Your partner is a mirror reflecting back to you what you need to learn about yourself.',

'The best and most beautiful things in this world cannot be seen or even heard—they must be felt with the heart. – Helen Keller',

'Know when it’s time to walk away for your well-being and theirs.',

'The biggest coward of a man is to awaken the love of a woman without the intention of loving her. – Bob Marley',

'Guys…feed your women love and gratitude every day and she will give you the world.',
'Ladies…expect nothing from your man and he will give you the world.',

'Practice ‘gratitude’ each day and your relationship will last forever.',

'How people treat you is their karma; how you react is yours. – Wayne Dyer',

'It takes a strong heart to love, but it takes an even stronger heart to continue to love after it’s been hurt.',

'I want to be in a relationship where you telling me you love me is just a ceremonious validation of what you already show me. ― Steve Maraboli',

'Having expectations kills the joy of giving and is the fastest way of destroying a relationship.',

'You learn more about someone at the end of a relationship than at the beginning.',

'Sometimes, you have to give up on people, not because you don’t care but because they don’t.',

'Patience + Love + Understanding + Respect + Communication + Forgiveness. The mathematical formula for a successful relationship.',

'Someday, someone might come into your life and love you the way you’ve always wanted.',

'Real love…is when you want whats best for the other person, even if it means you not getting what you want.',

'A morning text doesn’t only mean “good morning”. It also means “I think about you when I wake up”.',

'You don’t develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity. — Epicurus',

'What hurts more than losing you is knowing you’re not fighting to keep me.',

'Don’t worry about backstabbers, they’re the people who tried their hardest finding faults in your life instead of fixing the faults in theirs.',

'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams. – Dr Seuss',

'You need someone who goes out of their way to make it obvious that they want you in their life.',

'We have to recognise that there cannot be relationships unless there is commitment, unless there is loyalty, unless there is love, patience, persistence.― Cornel West',

'I know I’m a handful but that’s why you got two hands.',

'Fall in love with somebody who will never let you go to sleep wondering if you still matter.',

'What you see is what you get. Stop trying to change the other person hoping they will become what you want. Instead, trust that what you want already exists and go find ',

'Don’t stay in an unhealthy relationship because you think it’ll get better eventually. Know your worth and move on.',

'When you don’t talk, there’s a lot of stuff that ends up not getting said. ― Catherine Gilbert Murdock',

'Before I met you, I never knew what it was like to be able to look at someone and smile for no reason.',

'The two individuals in a relationship must continue to grow together. Or, they grow apart.',

'What we wait around a lifetime for with one person, we can find in a moment with someone else. – Stephanie Klein',

'Sometimes it takes a heartbreak to shake us awake & help us see we are worth so much more than we’re settling for. ― Mandy Hale',

'Cheating and lying aren’t struggles, they’re reasons to break up. ― Patti Callahan Henry',

'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. – Lao-Tzu',

'You meet thousands of people and none of them really touch you. And then you meet one person and your life is changed forever.',

'I’m stronger because I had to be, I’m smarter because of my mistakes, happier because of the sadness I’ve known, and now wiser because I learned.',

'When we face pain in relationships our first response is often to sever bonds rather than to maintain commitment. ― bell hooks',

'Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. – Maya Angelou',

'Never go to bed angry. Love and respect each other enough to at least bring peace to the relationship until tomorrow.',

'One day I am going to wake up, roll over on my side, and kiss the love of my life good morning.',

'If you get that gut feeling that something isn’t right about a person or situation, trust it.',

'The greatest thing you’ll ever learn is just to love and be loved in return. – Moulin Rouge',

'A busy, vibrant, goal-oriented woman is so much more attractive than a woman who waits around for a man to validate her existence. ― Mandy Hale',

'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed. – C.G. Jung',

'Find someone who will love your soul more than your body.',

'It’s okay to wait for the love you deserve, do not compromise or settle because of loneliness.',

'Every person should be in love at least once in their life. It will quickly show you that there is more to life than frivolous things.',

'Motivate and support your partner. You are both a work in progress so grow and build together.',

'There comes a time in your life when you have to choose to turn the page, write another book or simply close it. ― Shannon L. Alder',

'If you focus all of your energy into bringing out the best in each other, you will have very little time left for arguing.',

'Relationships are a lot of work. Stop trying to enter into one thinking that it will solve all your problems. It wont.',

'No matter how long you’ve been with them, there’s no excuse for a lack of attention. – Charles Orlando',

'Everything that irritates us about others can lead us to an understanding of ourselves. – Carl Jung',

'When you struggle with your partner, you are struggling with yourself. Every fault you see in them touches a denied weakness in yourself. ― Deepak Chopra',

'Relationships dont always make sense. Especially from the outside”– Sarah Dessen',

'The ultimate test of a relationship is to disagree but to hold hands. – Alexandra Penney',

'Come sleep with me: We won’t make Love, Love will make us. – Julio Cortázar',

'Work on being in love with the person in the mirror who has been through so much but is still standing.',

'Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering. – Nicole Krauss',

'You will never have to chase what wants to stay with you.',

'It feels good when you can put a smile on someone’s face by simply being yourself.',

'Fall in love with somebody who will never let you go to sleep wondering if you still matter.',

'Never underestimate the importance of having someone in your life who makes you want to be a better person. – dauvoire',

'If I had a flower for every time I thought of you… I could walk through my garden forever. – Alfred Tennyson',

'One of the things that cannot be taken from you is the love you cultivate for yourself within you.',

'You don’t realize how badly you’ve been treated until someone comes along and treats you the way you should be treated.',

'Old doors close so new ones can open. Don’t get stuck on what fell apart just because it hurts. Transformation requires growth and letting go.',

'Stop begging and fighting for people to love you the right way. Stop investing time in people who don’t mind if you stay or leave. – Reyna ',

'Your soul mate exists. Soul mates must often go through many challenges before they can find each other.',

'A dream you dream alone is only a dream. A dream you dream together is reality. – John Lennon',

'Stay away from people who make you feel like you aren’t worth their time.',

'It doesn’t matter if the guy is perfect or the girl is perfect, as long as they are perfect for each other. – Good Will Hunting',

'The best version of you is who you are when you’re completely natural and not trying to impress anyone else for any reason whatsoever.',

'Men don’t like needy women. But they like to be needed.',

'I will not beg you for your time or try to convince you to choose me, the world is too big and I have too much to offer.',

'Sometimes it’s better to move on than to hold on to a person who doesn’t understand you. Your absence will teach what your presence can not.',

'I could drive around all night with someone, listening to music, talking about life and be perfectly satisfied with my night.',

'Eventually you’ll end up where you need to be, with who you’re meant to be with, and doing what you should be doing. Patience is the key.',

'If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you. – Winnie-the-Pooh',

'Selfish people cannot understand what compromising is in a relationship neither will they ever see why it’s necessary in the relationship.',

'If you get that gut feeling that something isn’t right about a person or situation, trust it.',

'You have to be happy with your own company before you try to accompany someone else.',

'To those who have survived an affair: They didn’t cheat on you because of who you are… they cheated because of who they are NOT. – Charles Orlando',

'It’s okay to fight for someone who loves you. It’s not okay to fight for someone to love you. There’s a huge difference.',

'“Work on being in love with the person in the mirror who has been through so much but is still standing.”',

'“Clear your mind. Your heart is trying to tell you something.”',

'The one who doesn’t tell you what you want to hear, but tells you what you need to hear. Keep this person.',

'Be with someone who makes sure you’re always good even when they’re mad at you.',

'If they love you and they’re good to you…please don’t screw it up. Genuine people are an endangered species.',

'Can’t wait for the day that somebody tells me I’m the best thing that’s ever happened to them and they mean it.',

'One of the keys to health conscious relationships is being more concerned with someone’s happiness than what they can do for you. – Maryam Hasnaa',

'I can be someone’s and still be on my own. – Shel Silverstein',

'If they love you and they’re good to you…please don’t screw it up. Genuine people are an endangered species.',

'If you tell me you’re going to do something, I remember. If you don’t do it, I remember. We can still be cool, but your words will mean less.',

'Love who you love. Love what you love. Love hard. And if people don’t love you, then they aren’t your people.',

'Nothing better than enjoying life with the same person you struggled with.',

'It’s a beautiful thing to meet someone who makes you forget your troubles.',

'Never let an ex define your worth or worthiness of love. If they had seen your worth in the first place, maybe they wouldn’t be an ex. – Charles Orlando',

'Selfish people cannot understand what compromising is in a relationship neither will they ever see why it’s necessary in the relationship.',

'Love does not claim possession, but gives freedom. – Rabindranath Tagore',

'Who you spend your time with will have a great impact on what kind of life you live. Spend time with the right people',

'“Unless your mind is clear of negativity, it will keep choosing similar negative experiences, that keep you far from love.” – Leon Brown',

'It’s okay to wait for the love you deserve, do not compromise or settle because of loneliness.',

'It’s okay to fight for someone who loves you. It’s not okay to fight for someone to love you. There’s a huge difference.',

'Intense love does not measure, it just gives. – Mother Teresa',

'If you find you are trying to force something, this is the time to let go.',

'If you get that gut feeling that something isn’t right about a person or situation, trust it.',

'Love yourself enough to not come off desperate. Trust me. If someone wants you in their life, they would make an obvious effort to do so.',

'People (in a relationship) change and forget to tell each other. – Lillian Hellman',

'relationships, marriages are ruined where one person continues to learn, develop and grow and the other person stands still. – Catherine Pulsifer',

'A good person gives love because they want love in return. A spiritual person gives love because they want more love in the world.',

'The beginning of love is to let those we love be perfectly themselves, and not to twist them to fit our own image. Otherwise we love only the reflection of ourselves we find in them',

'We know from daily life that we exist for other people first of all, for whose smiles and well-being our own happiness depends. ― Albert Einstein',

'Just because you’re lonely doesn’t mean you should invite someone toxic back into your life.',

'The purpose of a relationship is not to have another who might complete you, but to have another with whom you might share your completeness. – Neale Donald Walsch',

'Stop holding on to things that don’t want to be held. You can use that time, space and energy for the things that want you.',

'You are my heart, my life, my one and only thought. – Arthur Conan Doyle',

'Be honest about your intentions with everything. You never want to build any type of relationship on lies. That foundation will always fail.',

'I love you, and because I love you, I would sooner have you hate me for telling you the truth than adore me for telling you lies. – Pietro Aretino',

'Trouble is part of your life, and if you don’t share it, you don’t give the person who loves you enough a chance to love you enough. – Dinah Shore',

'I think for any relationship to be successful, there needs to be loving communication, appreciation, and understanding. Miranda Kerr',

'You are madly in love with something you don’t fully understand.',

'Love who you love. Love what you love. Love hard. And if people don’t love you, then they aren’t your people.',

'The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too. ― Ernest Hemingway',

'Hope for love, pray for love, wish for love, dream for love…but don’t put your life on hold waiting for love. ― Mandy Hale',

'You don’t need a reason to love. Just do it. Love for no reason is the only thing that can eliminate hate for no reason.',

'To know when to go away and when to come closer is the key to any lasting relationship. – Doménico Cieri Estrada',

'My great hope is to laugh as much as I cry; to get my work done and try to love somebody and the courage to accept the love in return. – Maya Angelou',

'When God knows you’re ready for the responsibility of commitment, He’ll reveal the right person under the right circumstances. ― Joshua ',

'When you stop expecting people to be perfect, you can like them for who they are. ― Donald Miller',

'We are afraid to care too much, for fear that the other person does not care at all',

'Being married is like having somebody permanently in your corner. It feels limitless, not limited.”– Gloria Steinem',

'When what you hear and what you see don’t match, trust your eyes. ― Dale Renton',

'If you love someone, set them free. If they come back they’re yours; if they don’t they never were. – Richard Bach',
'“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” – Dale Carnegie',

'“It is better to fail in originality than to succeed in imitation.” ― Herman Melville',

'“Success is not final; failure is not fatal: It is the courage to continue that counts.” – Winston S. Churchill',

'“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.” – Helen Keller',

'“Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.” – Zig Ziglar',

'“Success is getting what you want, happiness is wanting what you get” ― W.P. Kinsella',

'“It is better to fail in originality than to succeed in imitation.” – Herman Melville',

'“Doing the best at this moment puts you in the best place for the next moment.” – Oprah Winfrey',

'The road to success begins with knowing what you need to know and why. ― Savania China',

'“Successful people begin where failures leave off. Never settle for ‘just getting the job done.’ Excel!” —Tom Hopkins',

'“Success is stumbling from failure to failure with no loss of enthusiasm.” ― Winston S. Churchill',

'“Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now.” – Denis Waitley',
'“The road to success and the road to failure are almost exactly the same.” – Colin R. Davis',

'“In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently.” – Tony Robbins',

'“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” – Herman Cain',

'“Our greatest glory is not in never falling, but in rising every time we fall.” ― Oliver Goldsmith',

'“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau',

'“Those who dare to fail miserably can achieve greatly.” – John F. Kennedy',

'“Do not be embarrassed by your failures, learn from them and start again.” – Richard Branson',

'“The foundation stones for a balanced success are honesty, character, integrity, faith, love and loyalty.” —Zig Ziglar',

'“The way to get started is to quit talking and begin doing. ” ― Walt Disney Company',

'“Opportunities don’t happen. You create them.” – Chris Grosser',

'“Success is simple. Do what’s right, the right way, at the right time.” – Arnold H. Glasgow',

'“I know the price of success: dedication, hard work and an unremitting devotion to the things you want to see happen.” — Frank Lloyd Wright',

'“Victory is sweetest when you’ve known defeat.” – Malcolm S. Forbes',

'“It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.” ― Leonardo da Vinci',

'“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” – Thomas A. Edison',

'“I find that the harder I work, the more luck I seem to have.” – Thomas Jefferson',

'“The secret of success in life is for a man to be ready for his opportunity when it comes.” – Benjamin Disraeli',

'“Action is the foundational key to all success.” – Pablo Picasso',

'“Success is most often achieved by those who don’t know that failure is inevitable.” ― Coco Chanel',

'“There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.” – Ray Goforth',

'“The best revenge is massive success.” – Frank Sinatra',

'“The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.” – Albert Ellis',

'“Your true success in life begins only when you make the commitment to become excellent at what you do.” —Brian Tracy',

'“Success is not final, failure is not fatal: it is the courage to continue that counts.” ― Winston S. Churchill',

'“I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.” ― Herbert Bayard Swope',

'“If at first you don’t succeed, try, try again. Then quit. No use being a damn fool about it.” ― W.C. Fields',

'“If opportunity doesn knock, build a door.” – Milton Berle',

'“Try not to become a man of success. Rather become a man of value.” ― Albert Einstein',

'“It is better to fail in originality than to succeed in imitation.” ― Herman Melville',

'“So be sure when you step, Step with care and great tact. And remember that life’s A Great Balancing Act. And will you succeed? Yes! You will, indeed! (98 and ¾ percent guaranteed) Kid, you’ll move mountains.” ― Dr. Seuss',

'“Amateurs sit and wait for inspiration, the rest of us just get up and go to work.”',

'“Success is getting what you want, happiness is wanting what you get” ― W.P. Kinsella',

'“The worst part of success is trying to find someone who is happy for you.”',

'“Have no fear of perfection – you’ll never reach it.” ― Salvador Dalí',

'“Success is stumbling from failure to failure with no loss of enthusiasm.”',

'“Success is most often achieved by those who don’t know that failure is inevitable.” ― Coco Chanel',

'“Success is not how high you have climbed, but how you make a positive difference to the world.” ― Roy T. Bennett',

'“Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better.” – Jim Rohn',

'“I cannot give you the formula for success, but I can give you the formula for failure which is: Try to please everybody.” – Herbert B. Swope',
'“I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has had to overcome while trying to succeed.” — Booker T. Washington',

'“A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.” ― Bob Dylan',

'“Stop chasing the money and start chasing the passion.” – Tony Hsieh',

'“Take up one idea. Make that one idea your life–think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.” – Swami Vivekananda',

'“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” – George Lorimer',

'“Action is the foundational key to all success.” — Pablo Picasso',

'“Don’t aim at success. The more you aim at it and make it a target, the more you are going to miss it. For success, like happiness, cannot be pursued; it must ensue, and it only does so as the unintended side effect of one’s personal dedication to a cause greater than oneself or as the by-product of one’s surrender to a person other than oneself. Happiness must happen, and the same holds for success: you have to let it happen by not caring about it. I want you to listen to what your conscience commands you to do and go on to carry it out to the best of your knowledge. Then you will live to see that in the long-run—in the long-run, I say!—success will follow you precisely because you had forgotten to think about it” ― Viktor E. Frankl',

'“I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.” – G. K. Chesterton',

'“Let the improvement of yourself keep you so busy that you have no time to criticize others.” ― Roy T. Bennett',

'“Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.” – Thomas J. Watson',

'“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.” – Helen Keller',

'“Don’t let the fear of losing be greater than the excitement of winning.” – Robert Kiyosaki',

'“Many of life’s failures are people who did not realize how close they were to success when they gave up.” – Thomas A. Edison',

'“The successful man is the one who finds out what is the matter with his business before his competitors do.” – Roy L. Smith',

'“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.” – Mark Caine',

'“Coming together is a beginning; keeping together is progress; working together is success.” — Henry Ford',

'“Only those who dare to fail greatly can ever achieve greatly.” ― Robert F. Kennedy',

'“If you are not willing to risk the usual, you will have to settle for the ordinary.” – Jim Rohn',

'“There is only one success – to be able to spend your life in your own way.” – Christopher Morley',

'“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.” – Henry Ford',

'“Once you agree upon the price you and your family must pay for success, it enables you to ignore the minor hurts, the opponent’s pressure, and the temporary failures.” — Vince Lombardi',

'“Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.” – Orison Swett Marden',

'“If you really look closely, most overnight successes took a long time.” – Steve Jobs',

'“The size of your success is measured by the strength of your desire, the size of your dream, and how you handle disappointment along the way.” — Robert Kiyosaki',

'“If you try and lose then it isn’t your fault. But if you don’t try and we lose, then it’s all your fault.” ― Orson Scott Card',

'“I have not failed. I’ve just found 10,000 ways that won’t work.” – Thomas A. Edison',

'“The secret of success in life is for a man to be ready for his opportunity when it comes.” – Benjamin Disraeli',

'“Success does not consist in never making mistakes but in never making the same one a second time.” – George Bernard Shaw',

'“You have to learn the rules of the game. And then you have to play better than anyone else.” – Albert Einstein',

'“I’ve failed over and over and over again in my life—and that is why I succeed.” —Michael Jordan',

'“People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.” – Tony Robbins',

'“I attribute my success to this: I never gave or took any excuse.” – Florence Nightingale',

'“Success is simple. Do what’s right, the right way, at the right time.” — Arnold H. Glascow',
'You have one of two choices right now: give up or keep going. One will make you great and the other won’t. Which do you prefer?',

'What makes a boy a “man” and a girl a “woman”? Courage and the willingness to keep going when life gets hard.',

'Life is a stage. Don’t play the victim role.',

'Ask your future self if you should quit or keep going. What’s their answer?',

'Once you learn to quit, it becomes a habit. ― Vince Lombardi Jr.',

'Challenges and obstacles are a part of life. They make us stronger and build character. If life were easy it would be boring and you would never grow.',

'I don’t care how long it takes me, but I’m going somewhere beautiful.',

'Keep going. Everything you need will come to you at the perfect time.',

'Maybe it won’t work out. But maybe seeing if it does will be the best adventure ever.',

'Trust the process.',

'Life can be a scary but fun rollercoaster ride: filled with ups and downs, twist and turns, and you might get dizzy or throw up. But in the end, you will always return safe and sound.',

'Remember that guy that gave up? Neither does anyone else.',

'Good things come to those who believe. Better things come to those who are patient. The best things come to those who never give up.',

'At the end of the day, you can either focus on what’s tearing you apart, or you can focus on what’s keeping you together.',
'Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. ― Roy T. Bennett',

'It does not matter how slowly you go as long as you do not stop. – Confucius',

'Life is tough, my darling, but so are you. – Stephanie Bennett-Henry',

'I have learned a lot this year… I learned that things don’t always turn out the way you planned, or the way you think they should. And I’ve learned that there are things that go wrong that don’t always get fixed or get put back together the way they were before. I’ve learned that some broken things stay broken, and I’ve learned that you can get through bad times and keep looking for better ones, as long as you have people who love you. – Jennifer Weiner',

'Every time you get upset at something, ask yourself if you were to die tomorrow, was it worth wasting your time being angry?',



 

'It’s not about perfect. It’s about effort. And when you implement that effort into your life… every single day, that’s where transformation happens. That’s how change occurs. Keep going, remember why you started.',

'Never stop trying. Never stop believing. Never give up. Your day will come.',

'Fall seven times, stand up eight. – Japanese Proverb',

'If you get tired, learn to rest, not quit.',

'Like the morning sun, you too shall rise and continue to shine.',

'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. ― Dale Carnegie',

'Life is like a car. If you keep going in reverse, you won’t get to your destination, but if you speed up and don’t take the time to enjoy your surroundings, you might get lost.',

'I will breathe. I will think of solutions. I will not let my worry control me. I will simply breathe. And it will be okay. Because I don’t quit.',

'Make time for it. Just get it done. Nobody ever got strong or got in shape by thinking about it. They did it. – Jim Wendler',

'Just keep going. No feeling is final.',

'Determination gives you the resolve to keep going in spite of the roadblocks that lay before you. – Denis Waitley',

'You should never give up. No matter how hard the situation is, always believe that something beautiful is going to happen.',

'When obstacles arise, you change your direction to reach your goal, you do not change your decision to get there. – Zig Ziglar',

'Never give up trying to do what you really want to do. Where there is love and inspiration, you cannot go wrong.',

'Things don’t go wrong and break your heart so you can become bitter and give up. They happen to break you down and build you up so you can be all that you were intended to be. ― Charles Jones',

'Focus on your goal. Don’t look in any direction but ahead.',

'Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill',

'I will persist until I succeed. Always will I take another step. If that is of no avail I will take another, and yet another. In truth, one step at a time is not too difficult. I know that small attempts, repeated, will complete any undertaking. – Og Mandino',

'If you feel like giving up, just look back on how far you are already.',

'Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers',
 
'If you can’t stop thinking about it, don’t stop working for it.',

'I didn’t come this far to only come this far.',

'Don’t think about what can happen in a month. Don’t think about what can happen in a year. Just focus on the 24 hours in front of you and do what you can to get closer to where you want to be.',

'Magic happens when you don’t give up, even though you want to. The universe always falls in love with a stubborn heart, – JmStorm',

'I can and I will. Watch me. – Carrie Green',

'Don’t stop until you’re proud.',
 
'Keep going. No matter what you do, no matter how many times you screw up and think to yourself “there’s no point to carry on”, no matter how many people tell you that you can’t do it – keep going. Don’t quit. Don’t quit, because a month from now you will be that much closer to your goal than you are now. Yesterday you said tomorrow. Make today count.',

'As long as you feel pain, you’re still alive. As long as you make mistakes, you’re still human. And as long as you keep trying, there’s still hope. Never give up on yourself and never abandon your dreams. – Susan Gale',

'The one who falls and gets up is so much stronger than the one who never fell.',

'If you’re going through hell, keep going. – Winston Churchill',

'Keep going when you feel scared because: You’re on the right track! You’re too close to success! You’ll regret if you quit!',

'There are only two mistakes one can make along the road to truth; not going all the way, and not starting. – Buddha',

'Be thankful for what you are now, and keep fighting for what you want to be tomorrow.',

'If you stumble, make it part of the dance.',

'You are what you do, not what you say you’ll do.',

'I learned to keep going, even in bad times. I learned not to despair, even when you world was falling apart.',

'Sometimes the bravest thing you can do is to keep going when you really feel like giving up.',

'Hope is what keeps us going in life, we hope we will be strong, we hope we will pass a test, we hope we will make new friends, we hope we will never lose the old, we hope someone loves us, we hope that love will find us, we hope when all seems lost, we hope when we are hurt and we hope when we cry. Never lose your hope, never give up when someone gives up on you, they may still hope as you do.',

'Anxiety happens when you think you have to figure out everything all at once. Breathe. You’re strong. You got this. Take it day by day. – Karen Salmanjohn',

'It always seems impossible until it’s done. – Nelson Mandela',

'One day I’ll be at the place I always wanted to be.',

'Great works are performed, not by strength, but by perseverance. – Samuel Johnson',

'Our greatest glory is not in never failing, but in rising every time we fall. – Confucius',

'Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich',

'There is a difference between giving up and knowing when you’ve had enough.',

'God has a purpose for your pain, a reason for your struggle and a gift for your faithfulness. Don’t give up!',

'It’s never too late and you’re never too old to become better.',
  

'One of the happiest moments ever, is when you find the courage to let go of what you can’t change.',

'Decide carefully, exactly what you want in life, then work like mad to make sure you get it! – Hector Crawford',

'The comeback is always stronger than the setback.',

'Disappointments are just God’s way of saying: I’ve got something better in store.',

'You are stronger than you think.',

'Strength grows in the moments when you think you can’t go on but you keep going anyway.',

'Victory is always possible for the person who refuses to stop fighting. – Napoleon Hill',

'I want to inspire people. I want someone to look at me and say “because of you, I didn’t give up.”',

'Success seems to be connected with action, Successful people keep moving. They make mistakes, but they don’t quit. – Conrad Hilton',

'In life, many things don’t go according to plan. If you fall, get back up. If you stumble, regain your balance. Never give up.',

'Pain is temporary. Quitting lasts forever.',

'Champions keep playing until they get it right. – Billie Jean King',

'In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost',

'Don’t ever give up. Don’t ever give in. Don’t ever stop trying. Don’t ever sell out. And if you find yourself succumbing to one of the above for a brief moment, pick yourself up, brush yourself off, whisper a prayer, and start where you left off. But never, ever, ever give up. – Richelle E. Goodrich',

'Success . . . seems to be connected with action. Successful men keep moving. They make mistakes, but they don’t quit. – Conrad Hilton',

'Forget about the past. It does not exist, except in your memory. Drop it. And stop worrying about how you’re going to get through tomorrow. Life is going on right here, right now – pay attention to that and all will be well. – Neale Donald Walsch',

'Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. ― Martin Luther',
 
'Life can go up. Life can go down. Things happen… And on the bad, down days, you wonder if you will find the strength to overcome the setbacks in your life. The disappointment can be crushing, but this is not the end of your story. There is more for you and I hope that reading through these quotes will give you the strength to choose to never give up.',

'Never give up on something you really want. It’s difficult to wait, but it’s more difficult to regret.',

'The harder the struggle, the more glorious the triumph.',

'Don’t let today’s troubles bring you down. Don’t let life’s little obstacles keep you from trying. Don’t let your fears keep you from dreaming. Don’t give up for any reason. Believe in yourself.',

'Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says I’ll try again tomorrow. ― Mary Anne Radmacher',

'We all make mistakes, but the winner knows that success comes from perseverance: trying, failing, learning, and doing it again until he succeeds. – Judy Ford',
'Never give up, stay focused, stay positive, stay strong.',

'Don’t be discouraged. It’s often the last key in the bunch that opens the lock.',
 
'Keep smiling… and one day life will get tired of upsetting you.',

'You were given this life because you are strong enough to live it.',

'You’ve got to be willing to lose everything to gain yourself. – Iyanla Vanzant',

'Unless you puke, faint, or die, keep going.',

'Many of life’s failures are people who did not realize how close they were to success when they gave up. ― Thomas A. Edison',

'A difficult time can be more readily endured if we retain the conviction that our existence holds a purpose – a cause to pursue, a person to love, a goal to achieve. – John Maxwell',

'A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles. – Christopher Reeve',

'You’ve got to live life, got to keep going. You just have to be aware and keep your eyes open. – Tom Chambers',

'You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it. ― Maya Angelou',

'Your life does not get better by chance, it gets better by change.',

'Stop beating yourself up. You are a work in progress which means you get there a little at a time, not all at once.',

'You can’t start the next chapter of your life if you keep re-reading the last one.',

'If one dream should fall and break into a thousand pieces, never be afraid to pick one of those pieces up and begin again. – Flavia Weedn',

'Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. -Chantal Sutherland',

'So, what does perseverance mean? It means that one possesses persistence, tenacity, determination, and staying power. This in turn means, when applied to a problem or issue that needs to be resolved, that the individual never gives up, never quits and never sees defeat until the problem, challenge, project, obstacle is resolved to a satisfactory level. – Byron Pulsifer',
'“A year from now…we’ll see who was really working.”',

'“I’m using your hate as my fuel.”',

'“Not all hustle is loud. Sometimes hustle is just you, all alone, grinding, while no one hears a sound.”',

'“Don’t wish it were easier. Wish you were better.” ― Jim Rohn',

'“You will never always be motivated. You have to learn to be disciplined.”',

'“I’ve got a dream that is worth more than my sleep.” – Eric Thomas',

'Entrepreneur – A crazy person who risks their own money for freedom, rather than exchanging their freedom for money.',

'“Be addicted to the feeling of having your shit together.”',

'“Grind and hustle for you. Not because you care about what other people think. Stop looking for other people to validate you.”',

'“Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure, and loss only act as motivation.”',

'“Discipline is just choosing between what you want now and what you want most.”',



 

'“Excuses will always be there for you. Opportunity won’t.”',
'“If you’re still broke…the grind includes Sunday!”',

'“Keep your head up. God gives his hardest battles to his strongest soldiers.”',

'“The best thing someone can do is tell me I can’t do something. Thanks for the coal. I’ll light the fire.”',

'“Starve your distractions. Feed your focus.”',

'“The pain you feel today will be the strength you feel tomorrow.”',

'“I wish everyone well, but you need to focus on yourself. You need to stop putting your hand out. Everyone wants hand outs. Everyone wants things for free. You’ve got to put in the work. You’ve got to grind. You’ve got go through the struggle, and you’ve got to get it.” ',

'“Don’t expect people to understand your grind when God did not give them your vision.”',

'“Do something today that your future self will thank you for.”',
 
'“Strength is the product of struggle. You must do what others don’t to achieve what others wont.” – Henry Rollins',

'“Grind while they sleep. Learn while they party. Live like they dream.”',

'“Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.”',

'“It ain’t about how hard ya hit. It’s about how hard you can get it and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!” – Rocky Balboa',

'“What I lack in talent, I compensate with my willingness to grind it out. That’s the secret of my life.” Guy Kawasaki',

'“Life isn’t about finding yourself. Life is about creating yourself.”',

'“You don’t want to look back and know you could have done better.”',

'“Hustle until you no longer have to introduce yourself.”',

'“I don’t make excuses. I make results.”',

'“You can’t cheat the grind, it knows how much you have invested. It wont give you anything you haven’t worked for.”',

'“The best way to learn is by doing. The only way to build a strong work ethic is getting your hands dirty.” – Alex Spanos',

'“Push yourself because no one else is going to do it for you.”',

'“They want you to shine as long as you don’t outshine them. Everybody loves you until you become competition.”',

'“When you find your why, you find a way to make it happen.” Eric Thomas',

'“No one cares about your problems. Work harder.”',

'“The difference between greed and ambition is a greedy person desires things he isn’t prepared to work for.” – Habeeb Akande',

'“Never stop doing your best just because someone doesn’t give you credit.”',

'“Hard work beats talent when talent doesn’t work hard.” – Tim Notke',

'“5AM – The hour where either legends are either waking up or, going to sleep.”',

'“Hard work without talent is a shame, but talent without hard work is a tragedy”',

'“Developing a good work ethic is key. Apply yourself at whatever you do, whether you’re a janitor or taking your first summer job, because that work ethic will be reflected in everything you do in life.” – Tyler Perry',

'“You cannot afford to live in potential for the rest of your life; at some point, you have to unleash the potential and make your move.” Eric Thomas',

'“Though you can love what you do not master, you cannot master what you do not love.”',

'“Deep inside you…there is a person who refuses to be kept deep inside you.”',

'“Look in the mirror. That’s your competition.”',

'“You won’t get much done if you grind only on the days you feel good.”',

'“A dream does not become reality through magic; it takes sweat, determination and hard work.” – Colin Powell',

'“You can’t have a million dollar dream with a minimum wage work ethic.”',

'“Some of you love sleep more than you love success. If you want to be successful, you gotta be willing to give up sleep. If you go to sleep, you might miss the opportunity to be successful.” Eric Thomas',

'“Your friends will believe in your potential, your enemies will make you live up to it.” ― Tim Fargo',

'“Work hard in silence. Let success make the noise.”',

'“Without hustle, talent will only carry you so far.” – Gary Vaynerchuk',

'“You are only confined by the walls you build yourself.”',

'“Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.” – Dwayne “The Rock” Johnson',

'“Don’t be worry about the next man..make sure your business is tight.” – Dr. Dre',

'“My entire life can be summed up in four words: I hustled. I conquered.”',

'“When you’re in the day-to-day grind, it just seems like it’s another step along the way. But I find joy in the actual process, the journey, the work. It’s not the end. It’s not the end event.” Cal Ripken, Jr.',

'“Invest in your dream. Grind now and shine later.”',

'“You’re not going to become a beast overnight. Grind every day until you become one.”',

'Plans are only good intentions unless they immediately degenerate into hard work. Peter Drucker',

'“There are no shortcuts to any place worth going.” ― Beverly Sills',

'“Pain is temporary. It may last for a minute, or an hour, or a day, or even a year, but eventually it will subside and something else will take its place. If I quit however, it will last forever.” Eric Thomas',

'“Successful people are not gifted; they just work hard, then succeed on purpose.”',

'“No one understands and appreciates the American Dream of hard work leading to material rewards better than a non-American.” – Anthony Bourdain',

'“Live the Life of Your Dreams. When you start living the life of your dreams, there will always be obstacles, doubters, mistakes and setbacks along the way. But with hard work, perseverance and self-belief there is no limit to what you can achieve.” ― Roy T. Bennett',

'“It is easy to make promises – it is hard work to keep them.” -Boris Johnson',

'“Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.” -Kevin Hart',
'Mistakes are proof that you are trying.',

'“Life is not easy.” Who said it was supposed to be?',

'Work on you, for you.',

'Every next level of your life will demand a different version of you.',

'I love who I’ve been, but I really love who I’m becoming.',

'There are no mistakes, only lessons. Growth is a process of trial and error.',

'If you can’t find the opportunities you’re looking for…create them.',

'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',

'We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis',

'A problem is a chance for you to do your best. – Duke Ellington',

'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over.',

'Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.',

'No matter how hard times may get, always hold your head up and be strong; show them you’re not as weak as they think you are.',

'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome.',

'Just when the caterpillar thought the world was ending, he turned into a butterfly.',

'Sometimes you face difficulties not because you’re doing something wrong but because you’re doing something right.',

'Nothing external can have any power over you unless you permit it. Your time is too precious to be sacrificed in wasted days combating the mental forces of hate, jealousy, and envy. Guard your fragile life carefully. – OG Mandino',

'When sore trials come upon us, it’s time to deepen our faith in God, to work hard, and to serve others. Then He will heal our broken hearts. He will bestow upon us personal peace and comfort. – Russell M. Nelson',

'Nothing is a coincidence. Everything you’re experiencing is meant to happen exactly how it’s happening. Embrace the lessons. Be grateful.',

'When you feel like quitting think about why you started.',

'Tough people are not born. They’re made when there’s no one there to dry their tears.',

'Don’t be afraid to start over. It’s a brand new opportunity to rebuild what you truly want.',

'The most beautiful people we have known are those who known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen. – Elisabeth Kubler Ros',

'Be strong enough to let go and patient enough to wait for what you deserve.',

'The harder the struggle, the more glorious the triumph.',

'Strength isn’t about how much you can handle before you break. It’s about how much you can endure after you’ve been broken.',

'When you stop chasing the wrong things you give the right things a chance to catch you.',

'It’s gonna get harder before it gets easier. But it will get better, you just gotta make it through the hard stuff first.',

'Challenges are what make life interesting. Overcoming them is what makes them meaningful.',

'There is no elevator to success. You have to take the stairs.',

'I asked God, “Why are you taking me through troubled water?” He replied, “Because your enemies can’t ',

'It ain’t as bad as you think. It will look better in the morning. – Colin Powell',

'Keep your head up. God gives His hardest battles to His strongest soldiers…',

'Until you’re broken, you don’t know what you’re made of. It gives you the ability to build yourself all over again, but stronger than ever.',

'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',

'Hard times will always reveal true friends.',

'Tough times don’t last. Tough people do.',

'Without rain nothing grows. Learn to embrace the storms of your life.',

'When God pushes you to the edge of difficulty, trust Him fully because two things can happen. Either He’ll catch you when you fall, or He will teach you how to fly.',

'Everything is energy. Your thought begins it, your emotions amplifies it, and your action increases its momentum.',

'Hard times may have held you down, but they will not last forever. When all is said and done, you will be increased. – Joel Osteen',

'When I stumbled, I stumbled not backward, but forward. So when I fell, I fell into grace. – Morgan Harper Nichols',

'Starting today, I need to forget what’s gone. Appreciate what still remains and look forward to what’s coming ',

'Throw me to the wolves and I will return leading the pack.',

'Success is what happens after you have survived all of your disappointments.',

'Stop hating yourself for everything you aren’t and start loving yourself for everything you already are.',

'You have to fight through some bad days to earn the best days of your life.',

'Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.',

'Nothing is more beautiful than the smile that has struggled through the tears. – Demi Lovato',

'We either make ourselves miserable or we make ourselves strong. The amount of work is the same. – Carlos Costaneda',

'Your path is beautiful and crooked and just as it should be.',

'What the caterpillar calls the end of the world the master calls a butterfly. – Richard Bach',

'The struggle you’re in today, is developing the strength you need for tomorrow. Don’t give up. – Robert Tew',

'Nobody said it would be easy, so don’t ever give up when it gets hard.',

'This too, shall pass. When things are bad, remember: it won’t always be this way. Take one day at a time. When things are good, remember: it won’t always be this way. Enjoy every great moment.',

'Remember it’s just a bad day, not a bad life.',

'Dream big. Start small. Work hard. Stay focused. Keep going forward.',

'What screws us up most in life is the picture in our head of how it is supposed to be.',

'I am thankful for all those difficult people in my life. They have shown me exactly who I do not want to be.',

'Sweat is magic. Cover yourself in it daily to grant your health wishes.',

'Doubt kills more dreams than failure ever will.',

'Be strong when you are weak, brave when you are scared, and humble when you are victorious.',

'As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being re-directed to something better.',

'Before you sleep, remember that it’s ok to not be ok. We all have our struggles. God loves you for who you are, but too much to leave you that way.',

'Replace those thoughts of worry with thoughts of hope, faith, and victory. – Joel Osteen',

'You don’t gain anything from stressing. Remember that.',

'Everything will work out in the end. You don’t need to know how. You just have to trust that it will.',

'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',

'Sometimes you have to put everything to the side just to take care of yourself. Don’t be afraid to say no when it’s necessary.',

'Be patient, good things are coming your way.',

'Invest your energy into something that is going to contribute to your growth.',

'Anyone who has grown mentally, physically or spiritually knows that growth is not found in comfort.',

'Be strong now, because things will get better. It might be stormy now, but it can’t rain forever.',

'I will breathe. I will think of solutions. I will not let my worry control me. I will not let my stress level break me. I will simply breathe. And it will be okay. Because I don’t quit. – Shayne McClendon',

'Hard times are often blessings in disguise. Let go and let life strengthen you. No matter how much it hurts, hold your head up and keep going. This is an important lesson to remember when you’re having a rough day, a bad month, or a crappy year. Truth be told, sometimes the hardest lessons to learn are the ones your spirit needs most. Your past was never a mistake if you learned from it. So take all the crazy experiences and lessons and place them in a box labeled “Thank you”.',

'You have to be at your strongest when you’re feeling at your weakest.',

'An arrow can only be shot by pulling it backward. When life is dragging you back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming.',

'People underestimate their capacity for change. There is never a right time to do a difficult thing. – John Porter',

'Someday you will look back, and know exactly why it had to happen.',

'You can’t calm the storm… so stop trying. What you can do is calm yourself. The storm will pass. – Timber Hawkeye',
' and when everything seems hopeless, just take it a day at a time. And if one day seems too much, just take it an hour at a time. And if an hour is too much, just take it a minute at a time.',

'Remember that just because you hit bottom doesn’t mean you have to stay there. – Robert Downey Jr',

'If you need to step back and get away from things for a bit, do exactly what you need to do for you to gain clarity again.',

'When you can’t control what’s happening, challenge yourself to control the way you respond to what’s happening. That’s where your power is!',

'Look for something positive in each day, even if some days you have to look a little harder.',

'You don’t know pain until you’re staring at yourself in the mirror with tears in your eyes, begging yourself to just hold on and be strong. That is pain.',

'Don’t get discouraged by what you’re going through. Your time is coming. Where you are is not where you’re going to stay.',

'You are the only one who can limit your greatness.',

'Always believe that something wonderful is about to happen.',

'When life knocks you down… calmly get back up, smile and very politely say, “You hit like a bitch.”',

'When life puts you in tough situations, don’t say “why me?” Say “try me”.',

'When you come out of the storm you won’t be the same person that walked in. That’s what the storm is all about. – Haruki Murakami',

'In life, you always get what you ask for and it rarely comes in the package you think it’s suppose to come in. – Kurek Ashley',

'We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa',

'Pain has taught me to appreciate the things that don’t hurt. – Melissa Tripp',

'You need to spend time crawling alone through shadows to truly appreciate what it is to stand in the sun. ― Shaun Hick',

'Never let your head hang down. Never give up and sit down and grieve. Find another way. And don’t pray when it rains if you don’t pray when the sun shines. – Leroy Satchel Paige',

'Remember, most of your stress comes from the way you respond, not the way life is. Adjust your attitude, and all that extra stress is gone.',

'Everyone is breakable, but not everyone is aware that it’s a choice to stay broken. – Stanley Behrman',

'You should never view your challenges as a disadvantage. Instead, it’s important for you to understand that your experience facing and overcoming adversity is actually one of your biggest advantages. – Michelle Obama',

'Life is at its best when everything has fallen out of place, and you decide that you’re going to fight to get them right, not when everything is going your way and everyone is praising you. ― Thisuri Wanniarachchi',

'Stay strong. You never know who you are inspiring.',

'Everything will work out in the end. You don’t need to know how. You just have to trust that it will.',

'Make up your mind that no matter what comes your way, no matter how difficult, no matter how unfair, you will do more than simply survive. You will thrive in spite of it. – Joel Osteen',

'Sometimes you learn your worth through disappointment. It’s okay, we’ve all been there.',

'It’s funny how, when things seem the darkest, moments of beauty present themselves in the most unexpected places. ― Karen Marie Moning,',

'Everything that happens helps you grow, even if it’s hard to see right now.”',

'You may be sad, disappointed, heartbroken or even scarred. But wake each day with a new sense of hope, a will to fight on and not give up.',

'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, “I will try again tomorrow.” – Mary Anne Radmacher',

'You are so much more than what you are going through.” – John Tew',

'“I love who I’ve been, but I really love who I’m becoming.”',

'“I love the thought that great things are coming. No matter what you’re going through, there’s so much to look forward to.”',

'Quote Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley',

'“No matter how painful or long the process is, it’s so beautiful and amazing seeing people being shamelessly authentic with themselves.”',

'Anyone can hide. Facing up to things, working through them, that’s what makes you strong.',
'There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time. – Malcolm X',

'“There are two ways to be happy: change the situation, or change your mindset towards it.”',

'I love when people that have been through hell walk out of the flames carrying buckets of water for those still consumed by the fire. – Stephanie Sparkles',

'In my life I’ve gone through a lot of really hard times. I went through depression and had so many challenges that I overcame. And I overcame because I just decided to be happy. –',

'Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi',

'It’s natural to be upset when faced with hardship. But try to pull yourself together. Your efforts won’t go to waste. – Mufti Menk',

'“Work on being in love with the person in the mirror who has been through so much but is still standing.”',

'All the adversity I’ve had in my life, all my troubles and obstacles, have strengthened me… You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you. – Walt Disney',

'The most important thing is that sometimes you have to go through hard times to get to the good stuff. – Abby Wambach',

'“The beautiful thing about life is that you can always change, grow and get better. You aren’t defined by your past. You aren’t your mistakes.”',

'“If you’re having a bad day, just remember that you have managed to get through every bad day you’ve had. You’ll make it through this one too.”',

'“Everything happens for a reason. People change so you can learn to let go. Things go wrong so you can appreciate them when they go right.”',

'I truly believe that it’s all of the hard times that make you step up to the next level, and that’s what makes you a champion. Caroline Buchanan',

'In times of great stress or adversity, it’s always best to keep busy, to plow your anger and your energy into something positive. Lee Iacocca',

'You’re going to go through tough times – that’s life. But I say, ‘Nothing happens to you, it happens for you.’ See the positive in negative events. – Joel Osteen',

'“You always have the choice to be happy. Learn to understand the purpose of bumps in the road, grow from them and stay positive.”',

'“You always get tested the most before you progress to the next level.”',

'“Being optimistic really has nothing to do with happiness, it’s just taking whatever life chucks at you and not letting it break you down.”',

'Everyone is handed adversity in life. No one’s journey is easy. It’s how they handle it that makes people unique. Kevin Conroy',

'“Don’t give up when you can’t see results right away. Some things take time. Just be patient with yourself.”',

'“We don’t always choose what happens to us, but we can choose to see it as positive, to believe it is for the best, and to use it to grow.”',

'“I’ve never met a strong person with an easy past…be proud of your scars and that you’re still standing.”',

'As with the butterfly, adversity is necessary to build character in people. – Joseph B. Wirthlin',

'Soon, when all is well, you’re going to look back on this period of your life and be so glad that you never gave up. ― Brittany Burgunder',

'“People who make you feel better about yourself when you’re sad are so important.”',

'“Focusing on your purpose is everything. Don’t allow negativity to distract you from where you’re headed.”',

'“No matter what knocks you down in life, get back up and keep going. Never give up. Great blessings are a result of great perseverance.”',

'“You are both the problem AND the solution.”',

'When adversity strikes, that’s when you have to be the most calm. Take a step back, stay strong, stay grounded and press on. – LL Cool J',

'“Don’t be hard on yourself. It’s okay to have a moment of uncertainty about life. It’s a transformative period to find your purpose.”',

'“Be thankful for your blessings and never doubt your struggles. Don’t ask why it happened, just be thankful for the strength it gave you.”',

'“Be aware as often as possible of the great transformation process you are going through.”',

'“Sometimes a situation you think of as “bad” is actually putting you on a path to the best thing that could possibly happen to you.”',

'“Don’t allow yourself to be a victim. Take control of your life. Let go of people who don’t serve you no good. Start doing things to make you happy.” – Reyna Biddy',

'“Never accept failure, no matter how often it visits you. Keep on going. Never give up… NEVER.” – Michael Smurfit',

'“Nothing is a coincidence. Everything you’re experiencing is meant to happen exactly how it’s happening. Embrace the lessons. Be grateful.”',

'“Don’t give up when you can’t see results right away. Some things take time. Just be patient with yourself.”',

'I’ve never met a strong person with an easy past…be proud of your scars and that you’re still standing.',

'“No matter what you’re going through, you are not alone. The Light is always with you. You might not see it, but you can trust it.”',

'“Do your future self a favor and work hard now.”',

'In difficult times, we’re not supposed to quit believing; we’re not supposed to quit growing. Joel Osteen',

'“It takes a ton of courage to push through hard times. Don’t give up. Good things are coming your way.”',

'“You have the power within yourself to make anything possible, you must diminish the doubt and ignite the self belief.” – Leon Brown',

'“Eventually you’ll end up where you need to be, with who you’re meant to be with, and doing what you should be doing. Patience is the key.”',

'“It’s okay to restart and recreate. Don’t spend time beating yourself up over something that went wrong. There’s always another chance.”',

'“Be gentle with yourself. You’re doing the best you can.”',

'“Fear is a natural byproduct of change. It takes time to get familiar with new thoughts and situations. Don’t let it stop you from changing.” – Jerry Corsten',

'You have to accept whatever comes and the only important thing is that you meet it with courage and with the best that you have to give. Eleanor Roosevelt',

'“Life chips away at us all. Some play the victim. Some choose to be a survivor. And then there are those who choose to conquer.”',

'People that are brilliant and successful, we think they’ve just always been that way. That’s not the case. Most of them have had some tough adversity in their life. It’s prepared them. I’ve never felt like you could develop character without adversity. Bobby Bowden',

'You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you. – James Allen',

'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. – Marie Curie',

'“Don’t stay stuck in a low chapter. Zoom out. And have faith that everything you’re going through is setting you up to prosper.”',

'Understand that the universe is giving you challenges to help you to become the greatest version of yourself',

'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along. Eleanor Roosevelt',

'Be thankful for the hard times. They are heaven sent to teach you lessons, make you stronger, and ultimately lead you to a better destiny.',

'It doesn’t matter how slow you go, as long as you don’t stop. – Confucius',

'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. – Dale Carnegie',

'To uncover your true potential you must first find your own limits and then you have to have the courage to blow past them. – Picabo Street',

'Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit. Napoleon Hill',

'It’s important to feel good about yourself. When you feel good about yourself, nothing negative can touch you.',

'Jump, and you will find out how to unfold your wings as you fall. Ray Bradbury',

'Remember that failure is an event, not a person.',

'If you don’t like something change it; if you can’t change it, change the way you think about it. – Mary Engelbreit',

'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',

'You’ll never find a better sparring partner than adversity. Golda Meir',

'Courage is not limited to the battlefield or the Indianapolis 500 or bravely catching a thief in your house. The real tests of courage are much quieter. They are the inner tests, like remaining faithful when nobody’s looking, like enduring pain when the room is empty, like standing alone when you’re misunderstood. – Charles Swindoll',

'He who is not courageous enough to take risks will accomplish nothing in life. Muhammad Ali',

'The only courage that matters is the kind that gets you from one moment to the next. – Mignon McLaughlin',

'We don’t always choose what happens to us, but we can choose to see it as positive, to believe it is for the best, and to use it to grow.',

'When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity. – John F. Kennedy',

'The secret to happiness is freedom… And the secret to freedom is courage. – Thucydides',

'Just as we develop our physical muscles through overcoming opposition – such as lifting weights – we develop our character muscles by overcoming challenges and adversity. – Stephen Covey',

'Don’t get discouraged; it is often the last key in the bunch that opens the lock.',

'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over.',

'Tough times never last, but tough people do. – Robert H. Schuller',



 

'If we could all just laugh at ourselves, in hard times or good times, it would be an incredible world. – Jena Malone',

'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. Nelson Mandela',

'Don’t give up. All of your hard work will pay off soon, stick with what you’re doing no matter how hard it gets.',

'Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill',

'Sometimes you don’t realize your own strength until you come face to face with your greatest weakness. – Susan Gale',

'One isn’t necessarily born with courage, but one is born with potential. Without courage, we cannot practice any other virtue with consistency. We can’t be kind, true, merciful, generous, or honest.- Maya Angelou',

'By seizing the opportunities that disruption presents and leveraging hard times into greater success through outworking, out innovating, and outthinking everyone around you, this just might be the richest time of your life so far. – Robin S. Sharma',

'The difference between stumbling blocks and stepping stones is how you use them.',

'Any fool can know. The point is to understand. ― Albert Einstein',

'It is the mark of an educated mind to be able to entertain a thought without accepting it. – Aristotle',

'Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi',

'I have no special talent. I am only passionately curious. – Albert Einstein',

'I am not a teacher, but an awakener. ― Robert Frost',



 

'Tell me and I forget, teach me and I may remember, involve me and I learn. ― Benjamin Franklin',

'Learning is a treasure that will follow its owner everywhere. – Chinese Proverbs',

'Education is a gift that none can take away. – American proverb',

'Study while others are sleeping, work while others are loafing, prepare while others are playing and dream while others are wishing. – William Arthur Ward.',

'By learning you will teach; by teaching you will learn. – Latin Proverb',

'Teaching is more than imparting knowledge, it is inspiring change. Learning is more than absorbing facts, it is acquiring understanding. – William Arthur Ward',

'Education breeds confidence. Confidence breeds hope. Hope breeds peace. – Confucius',

'Education is the most powerful weapon which you can use to change the world. – Nelson Mandela',

'The difference between school and life? In school, you’re taught a lesson and then given a test. In life, you’re given a test that teaches you a lesson.',

'Children must be taught how to think, not what to think. – Margaret Mead',

'Children are great imitators, so give them something great to imitate.',

'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today. – Malcolm X',

'Trust yourself. You know more than you think you do. – Benjamin Spock',
'it’s not just learning that’s important. It’s learning what to do with what you learn and learning why you learn things that matters. – Norton Juster',

'True teachers are those who use themselves as bridges over which they invite their students to cross; then, having facilitated their crossing, joyfully collapse, encouraging them to create their own. – Nikos Kazantzakis',

'Listen and silent are spelled with the same letters. Think about it.',

'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. – Brian Herbert',

'A good education helps us make sense of the world and find our way in it. – Mike Rose',

'Study hard. Do good and the good life will follow.',

'Anyone who stops learning is old, whether twenty or eighty. Anyone who keeps learning stays young. – Henry Ford',

'The beautiful thing about learning is that no one can take it away from you. – BB King',

'What is important is to keep learning, to enjoy challenge, and to tolerate ambiguity. In the end there are no certain answers. – Martina Horner',

'It is the supreme art of the teacher to awaken joy in creative expression and knowledge. – Albert Einstein',

'Every student can learn, just not on the same day, or the same way. – George Evans',

'Learn as if you were not reaching your goal and as though you were scared of missing it. – Confucius',

'The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires. – William Arthur Ward',


'In an effective classroom, students should not only know what they are doing. They should also know why and how. – Harry Wong',

'Children learn as they play. Most importantly, in play children learn how to learn. – O. Fred Donaldson',

'The more that you read, the more things you will know. The more you learn, the more places you’ll go. – Dr. Seuss',

'Practice isn’t the thing you do once you’re good. It’s the thing you do that makes you good. – Malcolm Gladwell',

'Every child has a different learning style and pace. Each child is unique, not only capable of learning but also capable of succeeding. – Robert John Meehan',

'It is the mark of an educated mind to be able to entertain a thought without accepting it. – Aristotle',

'Once you stop learning, you start dying. – Albert Einstein',

'Nine tenths of education is encouragement. – Anatole France',

'Every act of conscious learning requires the willingness to suffer an injury to one’s self-esteem. That is why young children, before they are aware of their own self-importance, learn so easily; and why older persons, especially if vain or important, cannot learn at all. – Thomas Szasz',

'The ability to learn is the most important quality a leader can have.',

'Tell me and I’ll forget. Show me and I may remember. Involve me and I learn. – Benjamin Franklin',

'If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.',

'Play is not frivolous. It is not a luxury. It is not something to fit in after completing all the important stuff. Play is the important stuff. Play is a drive, a need, a brain-building must-do. – Jeff A Johnson & Denita Dinger',

'It is what we know already that often prevents us from learning. – Claude Bernard',

'The importance of repetition until automaticity cannot be overstated. Repetition is the key to learning. – John Wooden',

'Play is often talked about as if were a relief from serious learning. But for children play is serious learning. Play is really the work of childhood. – Fred Rogers',

'I never teach my pupils, I only provide the conditions in which they can learn. – Albert Einstein',

'Educating the mind without educating the heart is no education at all. – Aristotle',

'Every situation in life is a learning experience. It is a daily choice to make decisions and live with them. No matter the outcome right or wrong, we are learning and if we are learning then we are succeeding everyday.',

'It is not so very important for a person to learn facts. For that he does not really need a college. He can learn them from books. The value of an education is a liberal arts college is not learning of many facts but the training of the mind to think something that cannot be learned from textbooks. – Albert Einstein',

'Reading is to the mind what exercise is to the body. – Sir Richard Steele',

'Education is not preparation for life; education is life itself. – John Dewey',

'Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality. Searching and learning is where the miracle process all begins. – Jim Rohn',

'The world is a book and those who do not travel read only one page. ― Augustine of Hippo',

'Study without desire spoils the memory, and it retains nothing that it takes in.— Leonardo da Vinci',

'Change is the end result of all true learning. ― Leo Buscaglia',

'Education without application is just entertainment. — Tim Sanders',

'Children must be taught how to think, not what to think. ― Margaret Mead',

'Education is simply the soul of a society as it passes from one generation to another. – G.K. Chesterton',

'You don’t learn to walk by following rules. You learn by doing, and by falling over. – Richard Branson',
'Always walk through life as if you have something new to learn and you will. — Vernon Howard',

'It is impossible for a man to learn what he thinks he already knows. – Epictetus',

'Education is not the filling of a pot but the lighting of a fire. — W.B. Yeats',

'Education is the most powerful weapon which you can use to change the world. ― Nelson Mandela',

'I like to listen. I have learned a great deal from listening carefully. Most people never listen. – Ernest Hemingway',

'There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning. – Jiddu Krishnamurti',

'Education must not simply teach work – it must teach Life. – W. E. B. Du Bois',

'The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. – Martin Luther King, Jr.',

'The difference between school and life? In school, you’re taught a lesson and then given a test. In life, you’re given a test that teaches you a lesson. – Tom Bodett',

'Develop a passion for learning. If you do, you will never cease to grow. – Anthony J. D’Angelo',

'Educating the mind without educating the heart is no education at all. ― Aristotle',

'Let the improvement of yourself keep you so busy that you have no time to criticize others. ― Roy T. Bennett',

'You are always a student, never a master. You have to keep moving forward. – Conrad Hall',


'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young. — Henry Ford',

'You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives. – Clay P. Bedford',

'Education is not just about going to school and getting a degree. It’s about widening your knowledge and absorbing the truth about life. – Shakuntala Devi',

'Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life. Remember that fear always lurks behind perfectionism. – David M. Burns',

'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X',

'The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover, to create men who are capable of doing new things. – Jean Piaget',

'The only person who is educated is the one who has learned how to learn and change. — Carl Rogers',

'A good head and good heart are always a formidable combination. But when you add to that a literate tongue or pen, then you have something very special. ― Nelson Mandela',

'If someone is going down the wrong road, he doesn’t need motivation to speed him up. What he needs is education to turn him around. – Jim Rohn',


'The goal of education is the advancement of knowledge and the dissemination of truth. John F. Kennedy',



 

'Education is not preparation for life; education is life itself. – John Dewey',

'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. – Maya Angelou',

'Your mind will answer most questions if you learn to relax and wait for the answer. – William S. Burroughs',

'The beautiful thing about learning is that nobody can take it away from you. ― B.B. King',

'Intelligence plus character-that is the goal of true education. ― Martin Luther King Jr.',

'The best education I have ever received was through travel. Lisa Ling',

'For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You’d be surprised how far that gets you.',

'I’ve learned… that the best classroom in the world is at the feet of an elderly person.',

'Education is the kindling of a flame, not the filling of a vessel. ― Socrates',

'The aim of education should be to teach us rather how to think, than what to think — rather to improve our minds, so as to enable us to think for ourselves, than to load the memory with thoughts of other men. – Bill Beattie',

'Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family. – Kofi Annan',

'To learn something new, you need to try new things and not be afraid to be wrong. ― Roy T. Bennett',

'The educated differ from the uneducated as much as the living differ from the dead. ― Aristotle',
'All real education is the architecture of the soul. – William Bennett',

'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime. – Maimonides',

'That is what learning is. You suddenly understand something you’ve understood all your life, but in a new way. ― Doris Lessing',

'Nine tenths of education is encouragement. – Anatole France',

'Formal education will make you a living; self-education will make you a fortune. ― Jim Rohn',

'The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover, to create men who are capable of doing new things. – Jean Piaget',

'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible. ― Richard Feynman',

'Education without values, as useful as it is, seems rather to make man a more clever devil.',

'The aim of education is the knowledge, not of facts, but of values. – William S. Burroughs',

'Self-education is, I firmly believe, the only kind of education there is. ― Isaac Asimov',

'Life is a series of experiences, each one of which makes us bigger, even though sometimes it is hard to realize this. For the world was built to develop character, and we must learn that the setbacks and grieves which we endure help us in our marching onward. – Henry Ford',

'All men who have turned out worth anything have had the chief hand in their own education. ― Walter Scott',

'Many highly intelligent people are poor thinkers. Many people of average intelligence are skilled thinkers. The power of the car is separate from the way the car is driven. – Edward De Bono',

'If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. – ',

'One hour a day withdrawn from frivolous pursuits and profitably employed would enable any man of ordinary capacity to master a complete science. One hour a day would in ten years make an ignorant man a well-informed man…In an hour a day, a boy or girl could read twenty pages thoughtfully—over seven thousand pages, or eighteen large volumes in a year. An hour a day might make all the difference between bare existence and useful, happy living. An hour a day might make—nay, has made—an unknown man a famous one, a useless man a benefactor to his race. ― Orison Swett Marden',

'“You said ‘tomorrow’ yesterday.”',

'“Set a goal that makes you want to jump out of bed in the morning.”',

'“Setting goals is the first step into turning the invisible into the visible.” – Tony Robbins',

'“Mirror mirror on the wall, I’ll always get up after I fall. And whether I run, walk or have to crawl, I’ll set my goals and achieve them all!”',

'“A goal is a dream with a deadline.” – Napoleon Hill',

'“You have to set goals that are almost out of reach. If you set a goal that is attainable without much work or thought, you are stuck with something below your true talent and potential.” – Steve Garvey',

'“I never dreamed about success. I worked for it.” – Estee Lauder',

'“A year from now you may wish you had started today.” – Karen Lamb',
'“A goal without a plan is just a wish.”',

'“You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own.” Mark Victor Hansen',


'“The harder you work for something, the greater you’ll feel when you achieve it.”',

'“Set a goal so big that you can’t achieve it until you grow into the person who can.”',

'“A little progress each day adds up to big results.”',

'“Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures, and on the next action steps they need to take to get them closer to the fulfillment of their goals rather than all the other distractions that life presents to them.” Jack Canfield',

'“Take it day by day. Results don’t come overnight. Change doesn’t happen immediately. Keep working towards your goals.”',

'“Courage doesn’t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life.” ― Shannon L. Alder',

'“A good goal is like a strenuous exercise – it makes you stretch.” – Mary Kay Ash',

'“Don’t try to be perfect. Just try to be better than you were yesterday.”',

'“Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.” Golda Meir',

'“People with goals succeed because they know where they are going. It’s as simple as that.” – Earl Nightingale',

'“Work like there is someone else working twenty-four hours a day to take it away from you.” – Mark Cuban',

'“If you don’t know where you are going, you’ll end up someplace else.” ― Yogi Berra',

'“It’s going to be hard. But hard is not impossible.”',

'“It always seems impossible until it’s done.” – Nelson Mandela',

'“Just as your car runs more smoothly and requires less energy to go faster and farther when the wheels are in perfect alignment, you perform better when your thoughts, feelings, emotions, goals, and values are in balance.” Brian Tracy',

'“When you know what you want, and want it bad enough, you’ll find a way to get it.” – Jim Rohn',

'“The world wasn’t formed in a day, and neither were we. Set small goals and build upon them.”',

'“To conquer frustration, one must remain intensely focused on the outcome, not the obstacles.” ― T.F. Hodge',

'“When defeat comes, accept it as a signal that your plans are not sound, rebuild those plans, and set sail once more toward your coveted goal.” ― Napoleon Hill',

'“Don’t wait to reach your goal to be proud of yourself. Be proud of every step you take toward reaching the goal.”',

'“What did you do today to bring you one step closer to your goal?”',

'“Goals. There is no telling what you can do when you get inspired by them. There’s no telling what you can do when you believe in them. And there’s no telling what will happen when you act upon them.” – Jim Rohn',

'“Your goals are the roadmaps that guide you and show you what is possible for your life.” – Les Brown',

'“A goal is not always meant to be reached, it often serves simply as something to aim at.”',

'“What you get by achieving your goals is not as important as what you become by achieving your goals.” – Henry David Thoreau',

'“If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you.” Les Brown',

'“A dream can fortify a man’s life, or it can bring suffering upon it. A dream can make a man feel alive, or it can kill him instead. Even if a man is abandoned by that dream, part of it will remain smoldering in his heart. Every man has envisioned his life in this way, at least once. A life as a martyr to his dream, his God. To simply exist just because one’s been born is the sort of notion that I hate. I can’t stand it.” – Griffith',

'“Success is not measured by what you accomplish but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.',

'“If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you are always in the same place.” – Nora Roberts',

'“You never know what’s around the corner. It could be everything. Or it could be nothing. You keep putting one foot in front of the other, and then one day you look back and you’ve climbed a mountain.” ― Tom Hiddleston',

'“The odds of hitting your target go up dramatically when you aim at it.” – Mal Pancoast',

'“Every accomplishment begins with the decision to try.”',

'“Don’t call it a dream. Call it a plan.”',

'“What the mind can conceive and believe, and the heart desire, you can achieve.',

'“Great achievement is usually born of great sacrifice, and is never the result of selfishness.” Napoleon Hill',

'“Do not be desirous of having things done quickly. Do not look at small advantages. Desire to have things done quickly prevents their being done thoroughly. Looking at small advantages prevents great affairs from being accomplished.” Confucius',

'“Disciplining yourself to do what you know is right and important, although difficult, is the high road to pride, self-esteem, and personal satisfaction. ” – Brian Tracy',

'“To be successful, the first thing to do is fall in love with your work.” – Sister Mary Lauretta',

'“Only those who dare to fail greatly can ever achieve greatly.” ― Robert F. Kennedy',

'“Be grateful for what you already have while you pursue your goals.',
'If you aren’t grateful for what you already have, what makes you think you would be happy with more.” ― Roy T. Bennett',

'“A dream becomes a goal when action is taken toward its achievement.” Bo Bennett',

'“I don’t focus on what I’m up against. I focus on my goals and I try to ignore the rest.” Venus Williams',

'“When they ‘why’ is clear, the ‘how’ is easy.”',

'“If it doesn’t challenge you it wont change you.”',

'“I may not be there yet but I am closer than I was yesterday!”',

'“Be stubborn about your goals and flexible about your methods.”',
'“Everyone who got where he is has had to begin where he was.” – Robert Louis Stevenson',

'“It is good to have an end to journey toward; but it is the journey that matters, in the end.” ― Ursula K. Le Guin',

'“Discipline is the bridge between goals and accomplishment.” Jim Rohn',

'“There is only one thing that makes a dream impossible to achieve: the fear of failure.”―Paulo Coelho',

'“It’s perseverance that’s the key. It’s persevering for long enough to achieve your potential.” Lynn Davies',

'“The starting point of all achievement is desire.” Napoleon Hill',

'“What consumes your mind controls your life.”',

'“What you choose to focus on expands and grows.”',

'“Confidence comes from discipline and training.” – Robert Kiyosaki',

'“No one can make you feel inferior without your consent.” – Eleanor Roosevelt',

'“It takes courage to grow up and become who you really are.” ― E.E. Cummings',
'“Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, ‘Who am I to be brilliant, gorgeous, talented, fabulous?’ Actually, who are you not to be?” – Marianne Williamson',

'“Love who you are, embrace who you are. Love yourself. When you love yourself, people can kind of pick up on that: they can see confidence, they can see self-esteem, and naturally, people gravitate towards you.” – Lilly Singh',
'“Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” – Helen Keller',

'“What you think of yourself is much more important than what people think of you.”',

'“Always be yourself and have faith in yourself. Do not go out and look for a successful personality and try to duplicate it.” – Bruce Lee',

'“The moment you doubt whether you can fly, you cease for ever to be able to do it.',

'“Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.” – Norman Vincent Peale',

'“Confidence is something you create in yourself by believing in who you are.”',

'“Confidence comes not from always being right but from not fearing to be wrong.” – Peter T. Mcintyre',

'“Don’t be afraid of your fears. They’re not there to scare you. They’re there to let you know that something is worth it.” ― C. JoyBell C.',

'“The best way to gain self-confidence is to do what you are afraid to do.” – Swati Sharma',

'“Don’t think about what might go wrong. Think about what might go right.”',

'“You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along.” Eleanor Roosevelt',

'“Because one believes in oneself, one doesn’t try to convince others. Because one is content with oneself, one doesn’t need others’ approval. Because one accepts oneself, the whole world accepts him or her.” ― Lao Tzu',

'“Whether you think you can or can’t, your’e right.”',

'“The worst enemy to creativity is self-doubt.” ― Sylvia Plath',
'“The pain you feel today is the strength you feel tomorrow.”',

'“As long as you look for someone else to validate who you are by seeking their approval, you are setting yourself up for disaster. You have to be whole and complete in yourself. No one can give you that. You have to know who you are – what others say is irrelevant.” ― Nic Sheff',

'“Be humble in your confidence yet courageous in your character.” – Melanie Koulouris',

'“Remember…you are braver than you believe, stronger than you seem, and smarter than you think.”',

'Don’t wait until everything is just right. It will never be perfect. There will always be challenges, obstacles and less than perfect conditions. So what. Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident and more and more successful. – Mark Victor Hansen',

'“Confidence is a habit that can be developed by acting as if you already had the confidence you desire to have.” Brian Tracy',

'“With confidence you have won before you have started.” – Marcus Garvey',
'“I am in charge of how I feel and today I am feeling happiness.”',

'“Even the greatest were beginners. Don’t be afraid to take that first step.”',

'“I am thankful for all of those who said no to me. It’s because of them I am doing it myself.”',

'To have faith doesn’t mean you get any less frustrated when you don’t do your best, but you know that it’s not life and death. Take what you’re given, and when you continue to work hard, you will see results. That will give you the confidence you need to keep going. Tom Lehman',

'“Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.” Dale Carnegie',

'“Train your mind to see the good in any situation.”',

'“Talk to yourself in the same way you would to someone you love.”',

'“Courage is resistance to fear, mastery of fear – not absence of fear.” ― Mark Twain',

'“Self-confidence is the most attractive quality a person can have. How can anyone see how great you are if you can’t see it yourself?”',

'“It is not the mountain we conquer, but ourselves.” Sir Edmund Hillary',

'“Your positive action combined with positive thinking results in success.”',

'“Confront the dark parts of yourself, and work to banish them with illumination and forgiveness. Your willingness to wrestle with your demons will cause your angels to sing.”',

'“With realization of one’s own potential and self-confidence in one’s ability, one can build a better world.” – Dalai Lama',

'“Successful people have fear, successful people have doubts, and successful people have worries. They just don’t let these feelings stop them.” – T. Harv Eker',

'The only person who can pull me down is myself, and I’m not going to let myself pull me down anymore.”',
'Going to college is not easy. Whether you are dealing with grades, bills, pressure from your parents, and having to answer the big question, “What should I do with my life?“, there is a lot of expectations on your plate.',

'Our mission at Motivation Ping is to give you the inspiration you need so you can accomplish your goals and become the best version of yourself.',

'On this page, we have compiled over 100 motivational and inspirational quotes for college students. These are a blend of quotes about success, being positive, and living a kick ass life.',

'“If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.” James Cameron',

'“The way get started is to quit talking and begin doing.” -Walt Disney',

'“If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced.” – Vincent Van Gogh',

'“Do something now; your future self will thank you for later” —unknown',

'“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”',
'“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” Pele',

'“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.” – Christian D. Larson',

'“Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough” ― Oprah Winfrey',

'“Things work out best for those who make the best of how things work out.” John Wooden',

'“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” -Winston Churchill',

'“Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michaelangelo, Mother Teresea, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.” – H. Jackson Brown Jr.',

'“Life has many ways of testing a person’s will, either by having nothing happen at all or by having everything happen all at once.” – Paulo Coelho',
'“Your positive action combined with positive thinking results in success.”',

'“People tend to be generous when sharing their nonsense, fear, and ignorance. And while they seem quite eager to feed you their negativity, please remember that sometimes the diet we need to be on is a spiritual and emotional one. Be cautious with what you feed your mind and soul. Fuel yourself with positivity and let that fuel propel you into positive action.” ― Steve Maraboli',

'“We can complain because rose bushes have thorns, or rejoice because thorns have roses.',

'“If you are not willing to risk the usual, you will have to settle for the ordinary.” Jim Rohn',

'“When you want to succeed as bad as you want to breathe, then you’ll be successful.” Eric Thomas',

'“A creative man is motivated by the desire to achieve, not by the desire to beat others.” —Ayn Rand',

'“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”- Steve Jobs',

'“Take up one idea. Make that one idea your life–think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.” Swami Vivekananda',

'“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.” Colin Powell',

'“Pain is temporary. It may last for a minute, or an hour or a day, or even a year. But eventually, it will subside. And something else take its place. If I quit, however, it will last forever.” – Eric Thomas',

'“With everything that has happened to you, you can either feel sorry for yourself or treat what has happened as a gift. Everything is either an opportunity to grow or an obstacle to keep you from growing. You get to choose.” – Dr. Wayne W Dyer',

'“The true measure of success is how many times you can bounce back from failure.',

'“Instead of worrying about what you cannot control, shift your energy to what you can create.',

'“Knowing is not enough; we must apply. Wishing is not enough; we must do.”- Johann Wolfgang Von Goethe',

'“I have not failed. I’ve just found 10,000 ways that won’t work.” — Thomas A. Edison',

'“The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.” – Vince Lombardi',
'If you are playing any type of sport, we have compiled over 1000 of the best motivational and inspirational quotes for athletes that will keep you pumped so you can push through any obstacle or roadblock.',
'Playing sports will be one of the most challenging things you ever do both mentally, physically, and spiritually.',
'Whether you are going out to practice or play a game/competition, you are being called to put your best foot forward.',
'Everything starts with your mind and the level of commitment you are willing to make. And it is through this level of commitment where your choices will be made.',
'Will you give up and throw in the towel when the going gets tough?',
'Or…will you rise up and be the very best version of yourself and take your game to the next level?',
'Only you can decide each and every day when you wake up.',
'“It never gets easier. You just get better.”',
'“Look in the mirror. That’s your competition.”',
'“Success trains. Failure complains.”',
'“The dream is free. But the hustle is sold separately.”', 
'“Remember that guy that gave up? Neither does anyone else.”',
'“I don’t chase dreams. I hunt goals.”',
'“Sports do not build character. They reveal it.” – Heywood Broun',
'“You don’t get what you wish for. You get what you work for.”',
'“Champions keep playing until they get it right.” – Billie Jean King',
'“I’ve never lost a game. I just ran out of time.” ― Michael Jordan',
'“Your talent is God’s gift to you. What you do with it is your gift back to God.”',
'“The miracle isn’t that I finished. The miracle is that I had the courage to start.” ― John Bingham',
'“There is only one thing that makes a dream impossible to achieve: the fear of failure.” ― Paulo Coelho',
'“The only way to prove that you’re a good sport is to lose.” – Ernie Banks',
'“Show me a guy who’s afraid to look bad, and I’ll show you a guy you can beat every time.” – Lou Brock',
'“Courage is taking those first steps toward your dreams even if you can’t see the path ahead.”',
'“Ability is what you are capable of doing. Motivation determines what you do. Attitude determines how well you do it.”',
'“Adversity causes some men to break; others to break records.― William Arthur Ward',
'“Skill is only developed by hours and hours of work.” – Usain Bolt',
'“There may be people that have more talent than you, but theres no excuse for anyone to work harder than you.” – Derek Jeter',
'“Nobody who ever gave his best regretted it.” – George Halas',
'“There is no getting around the fact that the moment you are at your very best is the moment you begin to become worse and worse. Others will come along who can run faster, jump higher, hit harder, and you will be forgotten. Your winning moment is dated to die.” ― Charlie Higson',
'Remember, you don’t compete with anyone, you make them compete with you. You can control what you put on yourself; you can’t control what the other guy puts on you. So you focus only on the internal pressure that drives you. Run to it, embrace it, feel it, so no one else can throw more at you than you’ve already put on yourself. ― Tim S Grover',
'“Good, better, best. Never let it rest. Until your good is better and your better is best.” – Tim Duncan',
'“If it is important to you, you will find a way. If not, you’ll find an excuse.”',
'“The sweat. The time. The devotion. It pays off.”',
'“Continuous effort — not strength or intelligence — is the key to unlocking our potential.” – Liane Cardes',
'“Failure is the condiment that gives success its flavor.” ― Truman Capote',
'“If you don´t fall, how are you going to know what getting up feels like?” ― Stephen Curry',
'“The five S’s of sports training are: stamina, speed, strength, skill, and spirit; but the greatest of these is spirit.” – Ken Doherty',
'“When you want to succeed as bad as you want to breathe, you will be successful.”',
'“If you want to find the real competition, just look in the mirror. After awhile you’ll see your rivals scrambling for second place.”',
'“The pain you feel today, will be the strength you feel tomorrow.”',
'“Losers quit when they’re tired. Winners quit when they’ve won.”', 
'“I think that the good and the great are only separated by the willingness to sacrifice.” — Kareem Abdul-Jabbar',
'“Never give up, never give in, and when the upper hand is ours, may we have the ability to handle the win with the dignity that we absorbed the loss.” – Doug Williams',
'“Hard work beats talent when talent doesn’t work hard.” – Tim Notke',
'“The road to athletic greatness is not marked by perfection, but the ability to constantly overcome adversity and failure.”',
'“Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.”',
'“The harder the battle. The sweeter the victory.” Les Brown',
'“Talent is never enough. With few exceptions the best players are the hardest workers.” – Magic Johnson',
'“If you are afraid of failure, you don’t deserve to be successful.” – Charles Barkley',
'“Success is no accident. It is hard work, perseverance, learning, studying, sacrafice, and most of all, love of what you are doing or learning to do.” – Pele',
'“The difference between the impossible and the possible lies in a person’s determination.” – Tommy Lasorda',
'“It’s not about perfect. It’s about effort. And when you implement that effort into your life…every single day, that’s where transformation happens. That’s how change occurs. Keep going and remember why you started.”',
'“Make sure your worst enemy doesn’t live between your own two ears.” – Laird Hamilton',
'“If you believe it, the mind can achieve it.” – Ronnie Lott',
'“The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who don’t want it badly enough. They’re there to stop the other people.” ― Randy Pausch',
'“My attitude is if you push me towards a weakness, I will turn that weakness into a strength.” – Michael Jordan',
'“Success is not final, failure is not fatal: it is the courage to continue that counts.” ― Winston S. Churchill',
'“Every champion was once a contender that refused to give up.” – Rocky Balboa',
'“You don’t have to be great to start. But you do have to start to be great.” – Zig Ziglar',
'“Courage is the most important of all the virtues because without courage, you can’t practice any other virtue consistently.”',
'“A champion is afraid of losing. Everyone else is afraid of winning.”',
'“It’s hard to beat a person who never gives up.”',
'“People ask me what I do in winter when there’s no baseball. I’ll tell you what I do. I stare out the window and wait for spring.” – Rogers Hornsby',
'“Everyone has talent. What’s rare is the courage to follow it to the dark places where it leads.” ― Erica Jong',
'“Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.” — Michael Jordan',
'“There are only two options regarding commitment. You’re either IN or you’re OUT. There is no such thing as life in-between.” – Pat Riley',
'“Keep your thoughts positive because your thoughts become your words. Keep your words positive because your words become your behavior. Keep your behavior positive because your behavior becomes your habits. Keep your habits positive because your habits become your values. Keep your values positive because your values become your destiny.–Ghandi',
'If you are going through some hardships, then the first thing you must do is welcome the challenge into your life as an opportunity to learn and grow.',
'If you expect to come out of the other side stronger, then you must accept the obstacle and hardship. It is only then when you will find ways to overcome and transform this difficult time. And one of the best ways to do these is by keeping a positive mind.',
'Your mind is going to be the greatest asset you have in overcoming these difficult times so make sure to bookmark this page as a way to help inspire and motivate you.',
'Mistakes are proof that you are trying.',
'“Life is not easy.” Who said it was supposed to be?',
'Work on you, for you.',
'Every next level of your life will demand a different version of you.',
'I love who I’ve been, but I really love who I’m becoming.',
'There are no mistakes, only lessons. Growth is a process of trial and error.',
'If you can’t find the opportunities you’re looking for…create them.',
'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',
'We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis',
'A problem is a chance for you to do your best. – Duke Ellington',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over.',
'Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.',
'No matter how hard times may get, always hold your head up and be strong; show them you’re not as weak as they think you are.',
'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome. – Unknown',
'Just when the caterpillar thought the world was ending, he turned into a butterfly.',
'Sometimes you face difficulties not because you’re doing something wrong but because you’re doing something right.',
'Nothing external can have any power over you unless you permit it. Your time is too precious to be sacrificed in wasted days combating the mental forces of hate, jealousy, and envy. Guard your fragile life carefully. – OG Mandino',
'When sore trials come upon us, it’s time to deepen our faith in God, to work hard, and to serve others. Then He will heal our broken hearts. He will bestow upon us personal peace and comfort. – Russell M. Nelson',
'Nothing is a coincidence. Everything you’re experiencing is meant to happen exactly how it’s happening. Embrace the lessons. Be grateful.',
'When you feel like quitting think about why you started.',
'Tough people are not born. They’re made when there’s no one there to dry their tears.',
'Don’t be afraid to start over. It’s a brand new opportunity to rebuild what you truly want.',
'The most beautiful people we have known are those who known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen. – Elisabeth Kubler Ros',
'Be strong enough to let go and patient enough to wait for what you deserve.',
'The harder the struggle, the more glorious the triumph.',
'Strength isn’t about how much you can handle before you break. It’s about how much you can endure after you’ve been broken.',
'When you stop chasing the wrong things you give the right things a chance to catch you.',
'It’s gonna get harder before it gets easier. But it will get better, you just gotta make it through the hard stuff first.',
'Challenges are what make life interesting. Overcoming them is what makes them meaningful.',
'There is no elevator to success. You have to take the stairs.',
'I asked God, “Why are you taking me through troubled water?” He replied, “Because your enemies can’t swim.”',
'It ain’t as bad as you think. It will look better in the morning. – Colin Powell',
'Keep your head up. God gives His hardest battles to His strongest soldiers…',
'Until you’re broken, you don’t know what you’re made of. It gives you the ability to build yourself all over again, but stronger than ever.',
'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
'Hard times will always reveal true friends.',
'Tough times don’t last. Tough people do.',
'Without rain nothing grows. Learn to embrace the storms of your life.',
'When God pushes you to the edge of difficulty, trust Him fully because two things can happen. Either He’ll catch you when you fall, or He will teach you how to fly.',
'Everything is energy. Your thought begins it, your emotions amplifies it, and your action increases its momentum.',
'Hard times may have held you down, but they will not last forever. When all is said and done, you will be increased. – Joel Osteen',
'When I stumbled, I stumbled not backward, but forward. So when I fell, I fell into grace. – Morgan Harper Nichols',
'Starting today, I need to forget what’s gone. Appreciate what still remains and look forward to what’s coming next.',
'Throw me to the wolves and I will return leading the pack.',
'Success is what happens after you have survived all of your disappointments.',
'Stop hating yourself for everything you aren’t and start loving yourself for everything you already are.',
'You have to fight through some bad days to earn the best days of your life.',
'Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.',
'Nothing is more beautiful than the smile that has struggled through the tears. – Demi Lovato',
'We either make ourselves miserable or we make ourselves strong. The amount of work is the same. – Carlos Costaneda',
'Your path is beautiful and crooked and just as it should be.',
'What the caterpillar calls the end of the world the master calls a butterfly. – Richard Bach',
'The struggle you’re in today, is developing the strength you need for tomorrow. Don’t give up. – Robert Tew',
'Nobody said it would be easy, so don’t ever give up when it gets hard.',
'This too, shall pass. When things are bad, remember: it won’t always be this way. Take one day at a time. When things are good, remember: it won’t always be this way. Enjoy every great moment.',
'Remember it’s just a bad day, not a bad life.',
'Dream big. Start small. Work hard. Stay focused. Keep going forward.',
'What screws us up most in life is the picture in our head of how it is supposed to be.',
'I am thankful for all those difficult people in my life. They have shown me exactly who I do not want to be.',
'Sweat is magic. Cover yourself in it daily to grant your health wishes.',
'Doubt kills more dreams than failure ever will.',
'Be strong when you are weak, brave when you are scared, and humble when you are victorious.',
'As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being re-directed to something better.',
'Before you sleep, remember that it’s ok to not be ok. We all have our struggles. God loves you for who you are, but too much to leave you that way.',
'Replace those thoughts of worry with thoughts of hope, faith, and victory. – Joel Osteen',
'You don’t gain anything from stressing. Remember that.',
'Everything will work out in the end. You don’t need to know how. You just have to trust that it will.',
'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',
'Sometimes you have to put everything to the side just to take care of yourself. Don’t be afraid to say no when it’s necessary.',
'Be patient, good things are coming your way.',
'Invest your energy into something that is going to contribute to your growth.',
'Anyone who has grown mentally, physically or spiritually knows that growth is not found in comfort.',
'Be strong now, because things will get better. It might be stormy now, but it can’t rain forever.',
'I will breathe. I will think of solutions. I will not let my worry control me. I will not let my stress level break me. I will simply breathe. And it will be okay. Because I don’t quit. – Shayne McClendon',
'Hard times are often blessings in disguise. Let go and let life strengthen you. No matter how much it hurts, hold your head up and keep going. This is an important lesson to remember when you’re having a rough day, a bad month, or a crappy year. Truth be told, sometimes the hardest lessons to learn are the ones your spirit needs most. Your past was never a mistake if you learned from it. So take all the crazy experiences and lessons and place them in a box labeled “Thank you”.',
'You have to be at your strongest when you’re feeling at your weakest.',
'An arrow can only be shot by pulling it backward. When life is dragging you back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming.',
'People underestimate their capacity for change. There is never a right time to do a difficult thing. – John Porter',
'Someday you will look back, and know exactly why it had to happen.',
'You can’t calm the storm… so stop trying. What you can do is calm yourself. The storm will pass. – Timber Hawkeye',
'… and when everything seems hopeless, just take it a day at a time. And if one day seems too much, just take it an hour at a time. And if an hour is too much, just take it a minute at a time.',
'Remember that just because you hit bottom doesn’t mean you have to stay there. – Robert Downey Jr',
'If you need to step back and get away from things for a bit, do exactly what you need to do for you to gain clarity again.',
'When you can’t control what’s happening, challenge yourself to control the way you respond to what’s happening. That’s where your power is!',
'Look for something positive in each day, even if some days you have to look a little harder.',
'You don’t know pain until you’re staring at yourself in the mirror with tears in your eyes, begging yourself to just hold on and be strong. That is pain.',
'Don’t get discouraged by what you’re going through. Your time is coming. Where you are is not where you’re going to stay.',
'You are the only one who can limit your greatness.',
'Always believe that something wonderful is about to happen.',
'When life knocks you down… calmly get back up, smile and very politely say, “You hit like a bitch.”',
'When life puts you in tough situations, don’t say “why me?” Say “try me”.',
'When you come out of the storm you won’t be the same person that walked in. That’s what the storm is all about. – Haruki Murakami',
'In life, you always get what you ask for and it rarely comes in the package you think it’s suppose to come in. – Kurek Ashley',
'We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa',
'Pain has taught me to appreciate the things that don’t hurt. – Melissa Tripp',
'You need to spend time crawling alone through shadows to truly appreciate what it is to stand in the sun. ― Shaun Hick',
'Never let your head hang down. Never give up and sit down and grieve. Find another way. And don’t pray when it rains if you don’t pray when the sun shines. – Leroy Satchel Paige',
'Remember, most of your stress comes from the way you respond, not the way life is. Adjust your attitude, and all that extra stress is gone.',
'Everyone is breakable, but not everyone is aware that it’s a choice to stay broken. – Stanley Behrman',
'You should never view your challenges as a disadvantage. Instead, it’s important for you to understand that your experience facing and overcoming adversity is actually one of your biggest advantages. – Michelle Obama',
'Life is at its best when everything has fallen out of place, and you decide that you’re going to fight to get them right, not when everything is going your way and everyone is praising you. ― Thisuri Wanniarachchi',
'Stay strong. You never know who you are inspiring.',
'Everything will work out in the end. You don’t need to know how. You just have to trust that it will.',
'Make up your mind that no matter what comes your way, no matter how difficult, no matter how unfair, you will do more than simply survive. You will thrive in spite of it. – Joel Osteen',
'Sometimes you learn your worth through disappointment. It’s okay, we’ve all been there.',
'It’s funny how, when things seem the darkest, moments of beauty present themselves in the most unexpected places. ― Karen Marie Moning,',
'Everything that happens helps you grow, even if it’s hard to see right now.”',
'You may be sad, disappointed, heartbroken or even scarred. But wake each day with a new sense of hope, a will to fight on and not give up.',
'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, “I will try again tomorrow.” – Mary Anne Radmacher',
'You are so much more than what you are going through.” – John Tew',
'“I love who I’ve been, but I really love who I’m becoming.”',
'“I love the thought that great things are coming. No matter what you’re going through, there’s so much to look forward to.”',
'Quote Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley',
'“No matter how painful or long the process is, it’s so beautiful and amazing seeing people being shamelessly authentic with themselves.”',
'Anyone can hide. Facing up to things, working through them, that’s what makes you strong.',
'There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time. – Malcolm X',
'“There are two ways to be happy: change the situation, or change your mindset towards it.”',
'I love when people that have been through hell walk out of the flames carrying buckets of water for those still consumed by the fire. – Stephanie Sparkles',
'In my life I’ve gone through a lot of really hard times. I went through depression and had so many challenges that I overcame. And I overcame because I just decided to be happy-Lilly Singh',
'Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi',
'It’s natural to be upset when faced with hardship. But try to pull yourself together. Your efforts won’t go to waste. – Mufti Menk',
'“Work on being in love with the person in the mirror who has been through so much but is still standing.”',
'All the adversity I’ve had in my life, all my troubles and obstacles, have strengthened me… You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you. – Walt Disney',
'The most important thing is that sometimes you have to go through hard times to get to the good stuff. – Abby Wambach',
'“The beautiful thing about life is that you can always change, grow and get better. You aren’t defined by your past. You aren’t your mistakes.”',
'“If you’re having a bad day, just remember that you have managed to get through every bad day you’ve had. You’ll make it through this one too.”',
'“Everything happens for a reason. People change so you can learn to let go. Things go wrong so you can appreciate them when they go right.”',
'I truly believe that it’s all of the hard times that make you step up to the next level, and that’s what makes you a champion. Caroline Buchanan',
'In times of great stress or adversity, it’s always best to keep busy, to plow your anger and your energy into something positive. Lee Iacocca',
'You’re going to go through tough times – that’s life. But I say, ‘Nothing happens to you, it happens for you.’ See the positive in negative events. – Joel Osteen',
'“You always have the choice to be happy. Learn to understand the purpose of bumps in the road, grow from them and stay positive.”',
'“You always get tested the most before you progress to the next level.”',
'“Being optimistic really has nothing to do with happiness, it’s just taking whatever life chucks at you and not letting it break you down.”',
'Everyone is handed adversity in life. No one’s journey is easy. It’s how they handle it that makes people unique. Kevin Conroy',
'“Don’t give up when you can’t see results right away. Some things take time. Just be patient with yourself.”',
'“We don’t always choose what happens to us, but we can choose to see it as positive, to believe it is for the best, and to use it to grow.”',
'“I’ve never met a strong person with an easy past…be proud of your scars and that you’re still standing.”',
'As with the butterfly, adversity is necessary to build character in people. – Joseph B. Wirthlin',
'Soon, when all is well, you’re going to look back on this period of your life and be so glad that you never gave up. ― Brittany Burgunder',
'“People who make you feel better about yourself when you’re sad are so important.”',
'“Focusing on your purpose is everything. Don’t allow negativity to distract you from where you’re headed.”',
'“No matter what knocks you down in life, get back up and keep going. Never give up. Great blessings are a result of great perseverance.”',
'“You are both the problem AND the solution.”',
'When adversity strikes, that’s when you have to be the most calm. Take a step back, stay strong, stay grounded and press on. – LL Cool J',
'“Don’t be hard on yourself. It’s okay to have a moment of uncertainty about life. It’s a transformative period to find your purpose.”',
'“Be thankful for your blessings and never doubt your struggles. Don’t ask why it happened, just be thankful for the strength it gave you.”',
'“Be aware as often as possible of the great transformation process you are going through.”',
'“Sometimes a situation you think of as “bad” is actually putting you on a path to the best thing that could possibly happen to you.”',
'“Don’t allow yourself to be a victim. Take control of your life. Let go of people who don’t serve you no good. Start doing things to make you happy.” – Reyna Biddy',
'“Never accept failure, no matter how often it visits you. Keep on going. Never give up… NEVER.” – Michael Smurfit',
'“Nothing is a coincidence. Everything you’re experiencing is meant to happen exactly how it’s happening. Embrace the lessons. Be grateful.”',
'“Don’t give up when you can’t see results right away. Some things take time. Just be patient with yourself.”',
'I’ve never met a strong person with an easy past…be proud of your scars and that you’re still standing.',
'“No matter what you’re going through, you are not alone. The Light is always with you. You might not see it, but you can trust it.”',
'“Do your future self a favor and work hard now.”',
'In difficult times, we’re not supposed to quit believing; we’re not supposed to quit growing. Joel Osteen',
'“It takes a ton of courage to push through hard times. Don’t give up. Good things are coming your way.”',
'“You have the power within yourself to make anything possible, you must diminish the doubt and ignite the self belief.” – Leon Brown',
'“Eventually you’ll end up where you need to be, with who you’re meant to be with, and doing what you should be doing. Patience is the key.”',
'“It’s okay to restart and recreate. Don’t spend time beating yourself up over something that went wrong. There’s always another chance.”',
'“Be gentle with yourself. You’re doing the best you can.”',
'“Fear is a natural byproduct of change. It takes time to get familiar with new thoughts and situations. Don’t let it stop you from changing.” – Jerry Corsten',
'You have to accept whatever comes and the only important thing is that you meet it with courage and with the best that you have to give. Eleanor Roosevelt',
'“Life chips away at us all. Some play the victim. Some choose to be a survivor. And then there are those who choose to conquer.”',
'People that are brilliant and successful, we think they’ve just always been that way. That’s not the case. Most of them have had some tough adversity in their life. It’s prepared them. I’ve never felt like you could develop character without adversity. Bobby Bowden',
'You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you. – James Allen',
'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. – Marie Curie',
'“Don’t stay stuck in a low chapter. Zoom out. And have faith that everything you’re going through is setting you up to prosper.”',
'Understand that the universe is giving you challenges to help you to become the greatest version of yourself.',
'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along. Eleanor Roosevelt',
'Be thankful for the hard times. They are heaven sent to teach you lessons, make you stronger, and ultimately lead you to a better destiny.',
'It doesn’t matter how slow you go, as long as you don’t stop. – Confucius',
'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. – Dale Carnegie',
'To uncover your true potential you must first find your own limits and then you have to have the courage to blow past them. – Picabo Street',
'Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit. Napoleon Hill',
'It’s important to feel good about yourself. When you feel good about yourself, nothing negative can touch you.',
'Jump, and you will find out how to unfold your wings as you fall. Ray Bradbury',
'Remember that failure is an event, not a person.',
'If you don’t like something change it; if you can’t change it, change the way you think about it. – Mary Engelbreit',
'Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better.',
'You’ll never find a better sparring partner than adversity. Golda Meir',
'Courage is not limited to the battlefield or the Indianapolis 500 or bravely catching a thief in your house. The real tests of courage are much quieter. They are the inner tests, like remaining faithful when nobody’s looking, like enduring pain when the room is empty, like standing alone when you’re misunderstood. – Charles Swindoll',
'He who is not courageous enough to take risks will accomplish nothing in life. Muhammad Ali',
'The only courage that matters is the kind that gets you from one moment to the next. – Mignon McLaughlin',
'We don’t always choose what happens to us, but we can choose to see it as positive, to believe it is for the best, and to use it to grow.',
'When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity. – John F. Kennedy',
'I learned there are troubles of more than one kind.',
'The secret to happiness is freedom… And the secret to freedom is courage. – Thucydides',
'Just as we develop our physical muscles through overcoming opposition – such as lifting weights – we develop our character muscles by overcoming challenges and adversity. – Stephen Covey',
'Don’t get discouraged; it is often the last key in the bunch that opens the lock.',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over.',
'Tough times never last, but tough people do. – Robert H. Schuller',
'If we could all just laugh at ourselves, in hard times or good times, it would be an incredible world. – Jena Malone',
'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. Nelson Mandela',
'Don’t give up. All of your hard work will pay off soon, stick with what you’re doing no matter how hard it gets.',
'Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill',
'Sometimes you don’t realize your own strength until you come face to face with your greatest weakness. – Susan Gale',
'One isn’t necessarily born with courage, but one is born with potential. Without courage, we cannot practice any other virtue with consistency. We can’t be kind, true, merciful, generous, or honest.- Maya Angelou',
'By seizing the opportunities that disruption presents and leveraging hard times into greater success through outworking, out innovating, and outthinking everyone around you, this just might be the richest time of your life so far. – Robin S. Sharma',
'The difference between stumbling blocks and stepping stones is how you use them.',
'Your imagination is the most powerful tool you have. It is the engine that brings all solutions to you.',
'Make sure to spend each day day dreaming and visualizing things you can do that will help you overcome your obstacles.',
'Our greatest glory is not in never falling, but in rising every time we fall. — Confucius',
'All our dreams can come true, if we have the courage to pursue them. – Walt Disney',
'It does not matter how slowly you go as long as you do not stop. – Confucius',
'Everything you’ve ever wanted is on the other side of fear. — George Addair',
'Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill',
'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett',
'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela',
'There is only one thing that makes a dream impossible to achieve: the fear of failure. ― Paulo Coelho',
'It’s not whether you get knocked down. It’s whether you get up. – Vince Lombardi',
'Your true success in life begins only when you make the commitment to become excellent at what you do. — Brian Tracy',
'Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. – Chantal Sutherland',
'Definiteness of purpose is the starting point of all achievement. – W. Clement Stone',
'Too many of us are not living our dreams because we are living our fears. – Les Brown',
'If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer',
'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak. – Thomas Carlyle',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you. – Les Brown',
'Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley',
'Believe you can and you’re halfway there. — Theodore Roosevelt',
'Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. – Unknown',
'Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis of Assisi',
'I attribute my success to this: I never gave or took any excuse. – Florence Nightingale',
'Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life. ― Tony Robbins',
'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. — Dale Carnegie',
'Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi',
'Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich',
'The future belongs to those who believe in the beauty of their dreams – Franklin D. Roosevelt',
'I am not a product of my circumstances. I am a product of my decisions. — Stephen Covey',
'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett',
'You’re going to go through tough times – that’s life. But I say, ‘Nothing happens to you, it happens for you.’ See the positive in negative events. – Joel Osteen',
'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. – Helen Keller',
'If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily. ― Jack Canfield',
'Whatever the mind can conceive and believe, it can achieve. ― Napoleon Hill',
'Don’t wish it were easier. Wish you were better. ― Jim Rohn',
'It is during our darkest moments that we must focus to see the light. — Aristotle Onassis',
'It’s not about perfect. It’s about effort. And when you bring that effort every single day, that’s where transformation happens. That’s how change occurs. – Jillian Michaels',
'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. – Pele',
'Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers',
'Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. – Denis Waitley',
'We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis',
'Fortune always favors the brave, and never helps a man who does not help himself. – P. T. Barnum',
'Go confidently in the direction of your dreams. Live the life you have imagined. –Henry David Thoreau',
'If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want. – Zig Ziglar',
'The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson',
'Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi',
'Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll',
'If you don’t like something, change it. If you can’t change it, change your attitude. – Maya Angelou',
'You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper you set in motion the process of becoming the person you most want to be. Put your future in good hands your own - Mark Victor Hansen',
'Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino',
'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. – Dale Carnegie',
'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. —Jamie Paolinetti',
'Setting goals is the first step into turning the invisible into the visible. – Tony Robbins',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'Only those who dare to fail greatly can ever achieve greatly. ― Robert F. Kennedy',
'Remember that not getting what you want is sometimes a wonderful stroke of luck. —Dalai Lama',
'Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out. – Unknown',
'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along. – Eleanor Roosevelt',
'No matter how hard times may get, always hold your head up and be strong; show them you’re not as weak as they think you are. – Unknown',
'We may encounter many defeats but we must not be defeated. – Maya Angelou',
'Twenty years from now you will be more disappointed by the things you didn’t do than by the things you did. – Mark Twain',
'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale',
'In order to carry a positive action we must develop here a positive vision. — Dalai Lama',
'Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs',
'Be so happy that when others look at you they become happy too. – Unknown',
'Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua Marine',
'I never dreamed about success. I worked for it. – Estee Lauder',
'You cannot afford to live in potential for the rest of your life; at some point, you have to unleash the potential and make your move. – Eric Thomas',
'It is never too late to be what you might have been. – George Eliot',
'There is no greater disability in society than the inability to see a person as more. – Robert M. Hensel',
'The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma',
'When obstacles arise, you change your direction to reach your goal, you do not change your decision to get there. – Zig Ziglar',
'The Secret of Change Is to Focus All of Your Energy, Not on Fighting the Old, But on Building the New – Socrates',
'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill',
'You will never find time for anything. If you want time you must make it. – Charles Buxton',
'The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it. – Michaelangelo',
'The two most important days in your life are the day you are born and the day you find out why. – Mark Twain',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over. – Unknown',
'It is less about becoming a better person, and more of being better, as a person. ― J.R. Rim',
'You can’t litter negativity everywhere and then wonder why you’ve got a trashy life. – Unknown',
'Life is not about waiting for the storm to pass but learning to dance in the rain. – Vivian Greene',
'When you know what you want, and want it bad enough, you’ll find a way to get it. – Jim Rohn',
'If you can see yourself as an artist, and you can see that your life is your own creation, then why not create the most beautiful story for yourself? ― Miguel Ruiz',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over. – Unknown',
'Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua Marine',
'In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently. – Tony Robbins',
'I find it sad that too many do not understand themselves, or their potential. They don’t even take the time to get to know their unconsciousness. You can truly learn so much, by simply getting to know the “you” that is behind the reality of yourself. ― Lionel Suggs',
'By making yourself a life-long learner you’ll keep discovering new and exciting things about yourself and others. ― Rachel Robins',
'Who you spend your time with will have a great impact on what kind of life you live. Spend time with the right people. – Joel Osteen',
'When change happens, you have a choice for how you are going to respond. You can either lose your composure and react impetuously or use the event or situation as a learning opportunity to shift your mindset and respond appropriately. Begin to notice your responses when changes occur and do your best to choose a breakthrough over a breakdown. ― Susan C. Young',
'If you chase anything in life chase the things that get you excited about living. Chase the things that give you hope, happiness and a glimpse of a better life. Chase the things that make you want to be a better person. Chase the things that inspire you to think, create and live joyfully. Chase the things that reinforce in your soul that you can make a difference. Chase the things that make you want to transform your heart from selfish to selfless. When you chase that kind of storm you are chasing rainbows. ― Shannon L. Alder',
'Happiness is letting go of what you think your life is supposed to look like and enjoying it for everything that it is. – Mandy Hale',
'Experience is the teacher of all things. – Julius Caesar',
'What you want exists. Don’t settle until you get it.',
'Be with someone who is proud to have you.',
'Love is when the other persons happiness is more important than your own.',
'You don’t marry someone you can live with. You marry someone you can’t live without.',
'The best love story is when you fall in love with the most unexpected person at the most unexpected time.',
'Someday, someone might come into your life and love you the way you’ve always wanted.',
'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams. – Dr Seuss',
'It takes a strong heart to love, but it takes an even stronger heart to continue to love after it’s been hurt.',
'The couples that are meant to be are the ones who go through everything that is meant to tear them apart, and come out even stronger.',
'Without respect, love is lost. Without caring, love is boring. Without honesty, love is unhappy. Without trust, love is unstable.',
'We have to recognize that there cannot be relationships unless there is commitment, unless there is loyalty, unless there is love, patience, persistence. ― Cornel West',
'If you find it in your heart to care for somebody else, you will have succeeded. – Maya Angelou',
'Never love anyone who treats you like you’re ordinary. – Oscar Wilde',
'The best kiss is the one that has been exchanged a thousand times between the eyes before it reaches the lips. Unknown',
'When you love someone, you love the person as they are, and not as you’d like them to be. Leo Tolstoy',
'I’d rather hustle 24/7 than slave 9 to 5',
'You never lose in business. You either win or learn.',
'The best way to predict the future is to create it. – Peter Drucker',
'It’s not about ideas. It’s about making ideas happen.  – Scott Belsky',
'As an entrepreneur, you never stop learning.  – Daymond John',
'Success is what happens after you have survived your disappointments.',
'Chase the vision, not the money. The money will end up following you.  – Tony Hsieh',
'We are never in lack of money. We lack people with dreams who can die for those dreams. – Jack Ma',
'When something is important enough, you do it even if the odds are not in your favor. – Elon Musk',
'All things equal, people will do business with, and refer business to, people they know trust and like. – Bob Burg',
'From my very first day as an entrepreneur, I’ve felt the only mission worth pursuing in business is to make people’s lives better. – Richard Branson',
'It takes twenty years to build a reputation. And five minutes to ruin it. If you think about that, you’ll do things differently. – Warren Buffet',
'Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure, and loss only act as motivation. – Unknown',
'Grind while they sleep. Learn while they party. Live like they dream. – Unknown',
'It’s not whether you get knocked down. It’s whether you get up. – Vince Lombardi',
'I’ve learned that making a ‘living’ is not the same thing as ‘making a life’. ― Maya Angelou',
'Every job is a self portrait of a person who does it. Autograph your work with excellence. – Unknown',
'Don’t be busy. Be productive. – Unknown',
'If the plan doesn’t work, change the plan. But never the goal. – Unknown',
'Ability: is what you are capable of doing. Motivation: determines what you do. Attitude: determines how well you do it. – Unknown',
'To do great work is to love what you do. – Unknown',
'Work hard in silence. Let success make the noise. – Unknown',
'If you want to achieve greatness, stop asking for permission. – Unknown',
'You will never always be motivated. You have to learn to be disciplined. – Unknown',
'Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny. – Unknown',
'Working hard for something we don’t care about is called stress. Working hard for something we love is called passion. – Unknown',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'The truth is that our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy, or unfulfilled. For it is only in such moments, propelled by our discomfort, that we are likely to step out of our ruts and start searching for different ways or truer answers. – M. Scott Peck',
'Find out what you like doing best, and get someone to pay you for doing it. – Katherine Whitehorn',
'Whatever you are, be a good one. – Abraham Lincoln',
'It never gets easier. You just get better.',
'Look in the mirror. That’s your competition.',
'Don’t wish it were easier. Wish you were better. ― Jim Rohn',
'Confidence comes from discipline and training. – Robert Kiyosaki',
'Success is what comes after your stop making excuses. – Luis Galarza',
'Setting goals is the first step into turning the invisible into the visible. – Tony Robbins',
'Results happen over time, not overnight. Work hard, stay consistent, and be patient.',
'There is only one thing that makes a dream impossible to achieve: the fear of failure. ― Paulo Coelho',
'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. – Helen Keller',
'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome. – Unknown',
'Starve your distractions. Feed your focus.',
'There is no elevator to success. You have to take the stairs.',
'Excuses will always be there for you. Opportunity won’t.',
'Maturity comes when you stop making excuses and start making changes.',
'Your life is a school. Everything that happens is teaching you something. Pay attention.',
'What you think of yourself is much more important than what people think of you.',
'The harder you work for something, the greater you’ll feel when you achieve it.',
'Education is the most powerful weapon which you can use to change the world. – Nelson Mandela',
'Confidence comes not from always being right but from not fearing to be wrong. – Peter T. Mcintyre',
'We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De ',
'Challenges and obstacles are a part of life. They make us stronger and build character. If life were easy it would be boring and you would never grow.',
'Your personal growth is the only thing that matters. You own and write your story; no one else does. Believe in the unique step up the mountain. ― Brittany Burgunder',
'Failure doesn’t mean it’s over. It means try with more experience.',
'Be a student as long as you still have something to learn, and this will mean all your life. – Henry L. Doherty',
'The future belongs to those who believe in the beauty of their dreams – Franklin D. Roosevelt',
'Embrace The Journey',
'Life is a long journey and all too often people get caught up in trying to attain something or get somewhere that they forget that the goal is the journey.',
'No matter where you are at in life right now, no matter where you are going, the whole point of the “end result” is the journey itself.',
'It’s along this journey that you discover more of who you are.',
'It’s during the process that you learn and grow as a person.',
'Life is going to be filled with many ups and downs so the best thing to do is buckle up and enjoy the ride.',
'Know What You Want',
'If you don’t know what you want, then you don’t know where you are going.',
'For you to be able to enjoy the journey, you do need a destination in mind so that your desire can pull you in that direction.',
'And sometimes the best way to know what you want, is by knowing what you don’t want.',
'Never discount learning experiences where you discover that you don’t like something. There is great value in this experience because now you know what you don’t want.',
'If you have not done so already, write down five goals or things you would like to accomplish in the next five years.',
'The best way to figure out what you do want in life is by following your passion and excitement.',
'All too often this type of message gets lost in New Age rhetoric but it is actually a powerful tool if you strip away all of the “woowoo” from it and keep it this simple',
'Every day, you will have many things to choose from. Choose the one that is the most exciting that you can take action on without expectation of what is to come from it and see where it leads you.',
'When you can no longer take it any further, move on to the next exciting thing.',
'Your excitement is like a compass needle pointing you in a specific direction that says, “Go this way.”',
'Our greatest glory is not in never falling, but in rising every time we fall. — Confucius',
'All our dreams can come true, if we have the courage to pursue them. – Walt Disney',
'It does not matter how slowly you go as long as you do not stop. – Confucius',
'Everything you’ve ever wanted is on the other side of fear. — George Addair',
'Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill',
'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett',
'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela',
'There is only one thing that makes a dream impossible to achieve: the fear of failure. ― Paulo Coelho',
'It’s not whether you get knocked down. It’s whether you get up. – Vince Lombardi',
'Your true success in life begins only when you make the commitment to become excellent at what you do. — Brian Tracy',
'Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. – Chantal Sutherland',
'Definiteness of purpose is the starting point of all achievement. – W. Clement Stone',
'Too many of us are not living our dreams because we are living our fears. – Les Brown',
'If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer',
'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak. – Thomas Carlyle',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you. – Les Brown',
'Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley',
'Believe you can and you’re halfway there. — Theodore Roosevelt',
'Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. – Unknown',
'Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis of Assisi',
'I attribute my success to this: I never gave or took any excuse. – Florence Nightingale',
'Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life. ― Tony Robbins',
'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. — Dale Carnegie',
'Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi',
'Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich',
'The future belongs to those who believe in the beauty of their dreams – Franklin D. Roosevelt',
'I am not a product of my circumstances. I am a product of my decisions. — Stephen Covey',
'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett',
'You’re going to go through tough times – that’s life. But I say, ‘Nothing happens to you, it happens for you.’ See the positive in negative events. – Joel Osteen',
'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. – Helen Keller',
'If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily. ― Jack Canfield',
'Whatever the mind can conceive and believe, it can achieve. ― Napoleon Hill',
'Don’t wish it were easier. Wish you were better. ― Jim Rohn',
'It is during our darkest moments that we must focus to see the light. — Aristotle Onassis',
'It’s not about perfect. It’s about effort. And when you bring that effort every single day, that’s where transformation happens. That’s how change occurs. – Jillian Michaels',
'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. – Pele',
'Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers',
'Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. – Denis Waitley',
'We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis',
'Fortune always favors the brave, and never helps a man who does not help himself. – P. T. Barnum',
'Go confidently in the direction of your dreams. Live the life you have imagined. –Henry David Thoreau',
'If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want. – Zig Ziglar',
'The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson',
'Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi',
'Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll', 
'If you don’t like something, change it. If you can’t change it, change your attitude. – Maya Angelou',
'You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own. – Mark Victor Hansen',
'Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino',
'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. – Dale Carnegie',
'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. —Jamie Paolinetti',
'Setting goals is the first step into turning the invisible into the visible. – Tony Robbins',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'Only those who dare to fail greatly can ever achieve greatly. ― Robert F. Kennedy',
'Remember that not getting what you want is sometimes a wonderful stroke of luck. —Dalai Lama',
'Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out. – Unknown',
'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along. – Eleanor Roosevelt',
'No matter how hard times may get, always hold your head up and be strong; show them you’re not as weak as they think you are. – Unknown',
'We may encounter many defeats but we must not be defeated. – Maya Angelou',
'Twenty years from now you will be more disappointed by the things you didn’t do than by the things you did. – Mark Twain',
'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale',
'In order to carry a positive action we must develop here a positive vision. — Dalai Lama',
'Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs',
'Be so happy that when others look at you they become happy too. – Unknown',
'Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua Marine',
'I never dreamed about success. I worked for it. – Estee Lauder',
'You cannot afford to live in potential for the rest of your life; at some point, you have to unleash the potential and make your move. – Eric Thomas',
'It is never too late to be what you might have been. – George Eliot',
'There is no greater disability in society than the inability to see a person as more. – Robert M. Hensel',
'The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma',
'When obstacles arise, you change your direction to reach your goal, you do not change your decision to get there. – Zig Ziglar',
'The Secret of Change Is to Focus All of Your Energy, Not on Fighting the Old, But on Building the New – Socrates',
'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill',
'You will never find time for anything. If you want time you must make it. – Charles Buxton',
'The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it. – Michaelangelo',
'The two most important days in your life are the day you are born and the day you find out why. – Mark Twain',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over. – Unknown',
'It is less about becoming a better person, and more of being better, as a person. ― J.R. Rim',
'You can’t litter negativity everywhere and then wonder why you’ve got a trashy life. – Unknown',
'Life is not about waiting for the storm to pass but learning to dance in the rain. – Vivian Greene',
'When you know what you want, and want it bad enough, you’ll find a way to get it. – Jim Rohn',
'If you can see yourself as an artist, and you can see that your life is your own creation, then why not create the most beautiful story for yourself? ― Miguel Ruiz',
'Free yourself from your past mistakes, by forgiving yourself for what you have done or went through. Every day is another chance to start over. – Unknown',
'Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua Marine',
'In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently. – Tony Robbins',
'I find it sad that too many do not understand themselves, or their potential. They don’t even take the time to get to know their unconsciousness. You can truly learn so much, by simply getting to know the “you” that is behind the reality of yourself. ― Lionel Suggs',
'By making yourself a life-long learner you’ll keep discovering new and exciting things about yourself and others. ― Rachel Robins',
'Who you spend your time with will have a great impact on what kind of life you live. Spend time with the right people. – Joel Osteen',
'When change happens, you have a choice for how you are going to respond. You can either lose your composure and react impetuously or use the event or situation as a learning opportunity to shift your mindset and respond appropriately. Begin to notice your responses when changes occur and do your best to choose a breakthrough over a breakdown. ― Susan C. Young',
'If you chase anything in life chase the things that get you excited about living. Chase the things that give you hope, happiness and a glimpse of a better life. Chase the things that make you want to be a better person. Chase the things that inspire you to think, create and live joyfully. Chase the things that reinforce in your soul that you can make a difference. Chase the things that make you want to transform your heart from selfish to selfless. When you chase that kind of storm you are chasing rainbows. ― Shannon L. Alder',
'Happiness is letting go of what you think your life is supposed to look like and enjoying it for everything that it is. – Mandy Hale',
'Experience is the teacher of all things. – Julius Caesar',
'What you want exists. Don’t settle until you get it.',
'Be with someone who is proud to have you.',
'Love is when the other persons happiness is more important than your own.',
'You don’t marry someone you can live with. You marry someone you can’t live without.',
'The best love story is when you fall in love with the most unexpected person at the most unexpected time.',
'Someday, someone might come into your life and love you the way you’ve always wanted.',
'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams. – Dr Seuss',
'It takes a strong heart to love, but it takes an even stronger heart to continue to love after it’s been hurt.',
'The couples that are meant to be are the ones who go through everything that is meant to tear them apart, and come out even stronger.',
'Without respect, love is lost. Without caring, love is boring. Without honesty, love is unhappy. Without trust, love is unstable.',
'We have to recognize that there cannot be relationships unless there is commitment, unless there is loyalty, unless there is love, patience, persistence. ― Cornel West',
'If you find it in your heart to care for somebody else, you will have succeeded. – Maya Angelou',
'Never love anyone who treats you like you’re ordinary. – Oscar Wilde',
'The best kiss is the one that has been exchanged a thousand times between the eyes before it reaches the lips. Unknown',
'When you love someone, you love the person as they are, and not as you’d like them to be. Leo Tolstoy',
'I’d rather hustle 24/7 than slave 9 to 5.',
'You never lose in business. You either win or learn.',
'The best way to predict the future is to create it. – Peter Drucker',
'It’s not about ideas. It’s about making ideas happen.  – Scott Belsky',
'As an entrepreneur, you never stop learning.  – Daymond John',
'Success is what happens after you have survived your disappointments.',
'Chase the vision, not the money. The money will end up following you.  – Tony Hsieh',
'We are never in lack of money. We lack people with dreams who can die for those dreams. – Jack Ma',
'When something is important enough, you do it even if the odds are not in your favor. – Elon Musk',
'All things equal, people will do business with, and refer business to, people they know trust and like. – Bob Burg',
'It takes twenty years to build a reputation. And five minutes to ruin it. If you think about that, you’ll do things differently. – Warren Buffet',
'Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure, and loss only act as motivation. – Unknown',
'Grind while they sleep. Learn while they party. Live like they dream. – Unknown',
'It’s not whether you get knocked down. It’s whether you get up. – Vince Lombardi',
'I’ve learned that making a ‘living’ is not the same thing as ‘making a life’. ― Maya Angelou',
'Every job is a self portrait of a person who does it. Autograph your work with excellence. – Unknown',
'Don’t be busy. Be productive. – Unknown',
'If the plan doesn’t work, change the plan. But never the goal. – Unknown',
'Ability: is what you are capable of doing. Motivation: determines what you do. Attitude: determines how well you do it. – Unknown',
'To do great work is to love what you do. – Unknown',
'Work hard in silence. Let success make the noise. – Unknown',
'If you want to achieve greatness, stop asking for permission. – Unknown',
'You will never always be motivated. You have to learn to be disciplined. – Unknown',
'Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny. – Unknown',
'Working hard for something we don’t care about is called stress. Working hard for something we love is called passion. – Unknown',
'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. – Zig Ziglar',
'The truth is that our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy, or unfulfilled. For it is only in such moments, propelled by our discomfort, that we are likely to step out of our ruts and start searching for different ways or truer answers. – M. Scott Peck',
'Find out what you like doing best, and get someone to pay you for doing it. – Katherine Whitehorn',
'Whatever you are, be a good one. – Abraham Lincoln',
'It never gets easier. You just get better.',
'Look in the mirror. That’s your competition.',
'Don’t wish it were easier. Wish you were better. ― Jim Rohn',
'Confidence comes from discipline and training. – Robert Kiyosaki',
'Success is what comes after your stop making excuses. – Luis Galarza',
'Setting goals is the first step into turning the invisible into the visible. – Tony Robbins',
'Results happen over time, not overnight. Work hard, stay consistent, and be patient.',
'There is only one thing that makes a dream impossible to achieve: the fear of failure. ― Paulo Coelho',
'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. – Helen Keller',
'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome. – Unknown',
'Starve your distractions. Feed your focus.',
'There is no elevator to success. You have to take the stairs.',
'Excuses will always be there for you. Opportunity won’t.',
'Maturity comes when you stop making excuses and start making changes.',
'Your life is a school. Everything that happens is teaching you something. Pay attention.',
'What you think of yourself is much more important than what people think of you.',
'The harder you work for something, the greater you’ll feel when you achieve it.',
'Education is the most powerful weapon which you can use to change the world. – Nelson Mandela',
'Confidence comes not from always being right but from not fearing to be wrong. – Peter T. Mcintyre',
'Challenges and obstacles are a part of life. They make us stronger and build character. If life were easy it would be boring and you would never grow.',
'Your personal growth is the only thing that matters. You own and write your story; no one else does. Believe in the unique step up the mountain. ― Brittany Burgunder',
'Failure doesn’t mean it’s over. It means try with more experience.',
'Be a student as long as you still have something to learn, and this will mean all your life. – Henry L. Doherty',
'The future belongs to those who believe in the beauty of their dreams – Franklin D. Roosevelt',
'Embrace The Journey',
'Life is a long journey and all too often people get caught up in trying to attain something or get somewhere that they forget that the goal is the journey.',
'No matter where you are at in life right now, no matter where you are going, the whole point of the “end result” is the journey itself.',
'It’s along this journey that you discover more of who you are.',
'It’s during the process that you learn and grow as a person.',
'Life is going to be filled with many ups and downs so the best thing to do is buckle up and enjoy the ride.',
'Know What You Want.',
'If you don’t know what you want, then you don’t know where you are going.',
'For you to be able to enjoy the journey, you do need a destination in mind so that your desire can pull you in that direction.',
'And sometimes the best way to know what you want, is by knowing what you don’t want.',
'Never discount learning experiences where you discover that you don’t like something. There is great value in this experience because now you know what you don’t want.',
'If you have not done so already, write down five goals or things you would like to accomplish in the next five years.',
'The best way to figure out what you do want in life is by following your passion and excitement.',
'All too often this type of message gets lost in New Age rhetoric but it is actually a powerful tool if you strip away all of the “woowoo” from it and keep it this simple.',
'Every day, you will have many things to choose from. Choose the one that is the most exciting that you can take action on without expectation of what is to come from it and see where it leads you.',
'When you can no longer take it any further, move on to the next exciting thing.',
'Your excitement is like a compass needle pointing you in a specific direction that says Go this way.',
'Keep A Positive Mind & Healthy Body',
'Life is filled with lots of negativity.',
'It will be your job to surround yourself with positive energy and people.',
'it will be your job to fill your body with the right foods that keep you feeling healthy and clean.',
'Your mind and a body is a vessel: what you put in is what you get out.',
'If you want to live a life filled with joy and passion, fill your mind and body with good things.',
'If you don’t take the time to stop and smell the roses, life can seem mundane (even though its not).',
'All too often, people get lost in their day-to-day activities and then life becomes boring or a drag.',
'Their are no boring situations, just bored minds.',
'If you stay in a state of gratitude and are thankful for each moment, then you will be in a state where you can attract better things in your life.',
'You are an antennae that is broadcasting and receiving energy.',
'Remain in a state of gratitude and you will attract that in your life.',
'“Sometimes a situation you think of as “bad” is actually putting you on a path to the best thing that could possibly happen to you.”',
'“Don’t allow yourself to be a victim. Take control of your life. Let go of people who don’t serve you no good. Start doing things to make you happy.” – Reyna Biddy',
'“Never accept failure, no matter how often it visits you. Keep on going. Never give up… NEVER.” – Michael Smurfit',
'“Nothing is a coincidence. Everything you’re experiencing is meant to happen exactly how it’s happening. Embrace the lessons. Be grateful.”',
'“Don’t give up when you can’t see results right away. Some things take time. Just be patient with yourself.”',
'I’ve never met a strong person with an easy past…be proud of your scars and that you’re still standing.',
'“No matter what you’re going through, you are not alone. The Light is always with you. You might not see it, but you can trust it.”',
'“Do your future self a favor and work hard now.”',
'In difficult times, we’re not supposed to quit believing; we’re not supposed to quit growing. Joel Osteen',
'“It takes a ton of courage to push through hard times. Don’t give up. Good things are coming your way.”',
'“You have the power within yourself to make anything possible, you must diminish the doubt and ignite the self belief.” – Leon Brown',
'“Eventually you’ll end up where you need to be, with who you’re meant to be with, and doing what you should be doing. Patience is the key.”',
'“It’s okay to restart and recreate. Don’t spend time beating yourself up over something that went wrong. There’s always another chance.”',
'“Be gentle with yourself. You’re doing the best you can.”',
'“Fear is a natural byproduct of change. It takes time to get familiar with new thoughts and situations. Don’t let it stop you from changing.” – Jerry Corsten',

];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewMotivationQuoteHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
