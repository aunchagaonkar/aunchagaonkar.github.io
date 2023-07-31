const quotes = [
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author:"Robert Louis Stevenson",

    },
    {
        quote:"Ideas are cheap.Ideas are easy.Ideas are common.Everybody has ideas.Ideas are highly, highly overvalued.Execution is all that matters.",
        author:"Wayne Dyer",

    },
    {
        quote:"If you run you stand a chance of losing, but if you don't run you've already lost.",
        author:"Barack Obama",

    },

    {
        quote:"The greatest mistake you can make in life is to be continually fearing you will make one.",
        author:"Elbert Hubbard",

    },
    {
        quote:"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        author:"Stephen Hawking",

    },
    {
        quote:"The only true wisdom is in knowing you know nothing.",
        author:"Socrates",

    },

    {
        quote:"Players should never fight. A real businessman or entrepreneur has no enemies. Once he understands this, the sky's the limit.",
        author:"Jack Ma",

    },

    {
        quote:"Failure is an option here. If things are not failing, you are not innovating enough.",
        author:"Elon Musk",

    },

    {
        quote:"One of the only ways to get out of a tight box is to invent your way out.”",
        author:"Jeff Bezos",

    },
    {
        quote:"The more I learn, the more I realize how much I don't know.",
        author:"Kevin Systrom, co-founder of Instagram",

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const TodayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodayQuotes.quote;
author.innerText = TodayQuotes.author;