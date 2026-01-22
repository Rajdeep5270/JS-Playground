const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "Inspiration",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Steve_Jobs_Headshot_2010-CROP.jpg"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "Motivation",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Eleanor_Roosevelt_portrait_1933.jpg"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "Perseverance",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Confucius_Museum_-_Portrait_of_Confucius.jpg"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "Success",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_1941_Statesman.jpg"
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis",
        category: "Resilience",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/C._S._Lewis_profile_1947.jpg"
    },

    // — Added 50 quotes
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Oscar_Wilde_portrait.jpg"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot",
        category: "Motivation",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/98/George_Eliot_by_William_Taylor.jpg"
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
        category: "Self‑esteem",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ralph_Waldo_Emerson_ca1857_retouched.jpg"
    },
    {
        text: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami",
        category: "Life",
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "All the world's a stage, and all the men and women merely players.",
        author: "William Shakespeare",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg"
    },
    {
        text: "Be kind, for everyone you meet is fighting a hard battle.",
        author: "Plato",
        category: "Kindness",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Plato_Silanion_Musei_Capitolini_MC1377.jpg"
    },
    {
        text: "Don’t let your happiness depend on something you may lose.",
        author: "C.S. Lewis",
        category: "Happiness",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/C._S._Lewis_profile_1947.jpg"
    },
    {
        text: "We are all broken, that's how the light gets in.",
        author: "Ernest Hemingway",
        category: "Resilience",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ernest_Hemingway_1940.jpg"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/John_Lennon_1969_%28cropped%29.jpg"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        category: "Change",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Robert_Frost_NYWTS.jpg"
    },
    {
        text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        author: "Edmund Burke",
        category: "Action",
        image: "https://images.unsplash.com/photo-1581804928340‑d0c922a1e6c2?auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "What you do speaks so loudly that I cannot hear what you say.",
        author: "Ralph Waldo Emerson",
        category: "Action",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ralph_Waldo_Emerson_ca1857_retouched.jpg"
    },
    {
        text: "It always seems impossible until it’s done.",
        author: "Nelson Mandela",
        category: "Motivation",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nelson_Mandela_1994.jpg"
    },
    {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
        category: "Motivation",
        image: "https://images.pexels.com/photos/209841/pexels‑photo‑209841.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        text: "The best way out is always through.",
        author: "Robert Frost",
        category: "Perseverance",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Robert_Frost_NYWTS.jpg"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mae_West_1935.jpg"
    },
    {
        text: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford",
        category: "Mindset",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Henry_Ford.jpg"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        category: "Motivation",
        image: "https://images.pexels.com/photos/207983/pexels‑photo‑207983.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman",
        category: "Positivity",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Walt_Whitman_%28photo%29.jpg"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        category: "Leadership",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ralph_Waldo_Emerson_ca1857_retouched.jpg"
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        category: "Empathy",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Booker_T_Washington_cph.3b30293.jpg"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        category: "Success",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Henry_David_Thoreau.jpg"
    },
    {
        text: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford",
        category: "Mindset",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Henry_Ford.jpg"
    },
    {
        text: "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
        category: "Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Robert_Louis_Stevenson.jpg"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        category: "Change",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        category: "Courage",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        category: "Action",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.jpg"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "Belief",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/President_Roosevelt.jpg"
    },
    {
        text: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt",
        category: "Courage",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Eleanor_Roosevelt_portrait_1933.jpg"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won’t work.",
        author: "Thomas Edison",
        category: "Perseverance",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg"
    },
    {
        text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus",
        category: "Courage",
        image: "https://images.unsplash.com/photo-1524963660522-0ceb5c1ea3ee?auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        category: "Hope",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/FDR_1944_Color_Portrait.jpg"
    },
    {
        text: "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.",
        author: "Mark Twain",
        category: "Regret",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
    }
];


let currentIndex = 0;
let intervalId;

document.getElementById("prevBtn").addEventListener("click", () => prevQuote());
document.getElementById("nextBtn").addEventListener("click", () => nextQuote());
document.getElementById("startBtn").addEventListener("click", () => start());
document.getElementById("stopBtn").addEventListener("click", () => stop());

loadQuote();


function loadQuote() {
    const quote = quotes[currentIndex];

    document.getElementById("quote-text").innerHTML = quote.text;
    document.getElementById("quote-author").innerHTML = quote.author;
    document.getElementById("quote-category").innerHTML = quote.category;
    document.getElementById("quote-img").src = quote.image;
}

function nextQuote() {
    if (currentIndex < quotes.length - 1) {
        currentIndex += 1;
        loadQuote();
    }
}

function prevQuote() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        loadQuote();
    }
}

function start() {
    intervalId = setInterval(() => {
        if (currentIndex < quotes.length - 1) {
            currentIndex += 1;
            loadQuote();
        }
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
}