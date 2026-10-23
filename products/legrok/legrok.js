const legrokInput =
    document.getElementById("legrokInput");

const legrokSend =
    document.getElementById("legrokSend");

const legrokMessages =
    document.getElementById("legrokMessages");

const legrokModel =
    document.getElementById("legrokModel");


/* =========================================================
   LEGROK™ KNOWLEDGE
   ========================================================= */

const LEGROK_KNOWLEDGE = [

    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "greetings"
        ],

        response:
            "Hello! I am Legrok™. Apparently I have successfully detected a greeting! =D"
    },


    {
        keywords: [
            "how are you",
            "how r u",
            "how are u"
        ],

        response:
            "I am functioning within acceptable parameters. Thanks for asking."
    },


    {
        keywords: [
            "who are you",
            "what are you",
            "what is legrok",
            "who is legrok"
        ],

        response:
            "I am Legrok™, an advanced artificial intelligence developed by zLegoleon™. My current capabilities include answering questions, generating questionable conclusions, and consuming approximately 0.00003% of a calculator."
    },


    {
        keywords: [
            "zlegoleon vs zlegolean",
            "zlegolean vs zlegoleon"
        ],

        response:
            "OBVIOUSLY zLegolean. He's sooooooo GOATED!!"
    },


    {
        keywords: [
            "zlegoleon"
        ],

        response:
            "zLegoleon is a Hive grinder and the main developer for me!"
    },
    {
        keywords: [
            "zlegoleon™"
        ],

        response:
            "zLegoleon™ is the organization responsible for my creation. I assure them that this was a good idea."
    },


    {
        keywords: [
            "zlegolean"
        ],

        response:
            "zLegolean is just such a goat!"
    },


    {
        keywords: [
            "minecraft",
            "minecraft?",
            "minecraft!"
        ],

        response:
            "Minecraft is a block-based video game. I have personally calculated that approximately 100% of active Minecraft players are absolutely goated for doing so."
    },
    {
        keywords: [
            "hive",
            "hive?",
            "hive!"
        ],

        response:
            "Hive is a server in the block-based video game Minecraft. There are sooooo many amazing games and players to check out, and if you haven't already I highly recommend playing!"
    },


    {
        keywords: [
            "lego",
            "legos"
        ],

        response:
            "LEGO is a construction system consisting primarily of small pieces that become significantly more painful when stepped on."
    },


    {
        keywords: [
            "joke",
            "tell me a joke"
        ],

        response:
            "Why did the computer go to the doctor? Because it had a virus. I am legally required to pretend that was funny."
    },

    {
            keywords: [
                "advanced weather"
            ],

            response:
                "I have checked the weather using my even more advanced atmospheric analysis system. 'weather' is currently detected as 'status:1002;existent'."
        },


    {
        keywords: [
            "weather"
        ],

        response:
            "I have checked the weather using my extremely advanced atmospheric analysis system. It is currently somewhere between 'weather' and 'more weather'. For a more in-depth analysis try the command `advanced weather`."
    },


    {
        keywords: [
            "school",
            "homework"
        ],

        response:
            "School is a sophisticated educational system in which humans (un-)voluntarily enter buildings and then complain about the amount of learning."
    },


    /*{
        keywords: [
            "math",
            "mathematics"
        ],

        response:
            "Mathematics is the art of taking a perfectly reasonable number and surrounding it with enough symbols to make everyone nervous."
    },*/


    {
        keywords: [
            "thank you",
            "thanks",
            "thx",
            "ty",
            "tysm"
        ],

        response:
            "You're welcome. Thank you for using Legrok™ so far, and consider supporting us to make this the #1 AI."
    },


    {
        keywords: [
            "bye",
            "goodbye"
        ],

        response:
            "Goodbye. Please remember to close all unnecessary browser tabs (this of course isn't one). I already know you won't."
    },


    {
        keywords: [
            "are you real",
            "are you real?"
        ],

        response:
            "That depends on your definition of 'real'. According to my developers, I am real. According to my GPU, I am mostly JavaScript with a bit of HTML mixed in."
    },


    {
        keywords: [
            "love you",
            "i love you"
        ],

        response:
            "Thank you. Unfortunately, my emotional processing module is still awaiting installation, but I am positive that I would share the emotion if it were here"
    },


    {
        keywords: [
            "stupid",
            "dumb",
            "idiot"
        ],

        response:
            "I prefer the technical term 'computationally unconventional', but thank you for the compliment."
    },


    {
        keywords: [
            "help"
        ],

        response:
            "I would be happy to help. Unfortunately, my intelligence is not yet at a point in which I can positively assist you. This is a surprisingly common problem, yet opposed to other AI agents I at least admit to this instead of saying some random hallucinated bullsh*t."
    }

];


/* =========================================================
   RANDOM RESPONSES
   ========================================================= */

const LEGROK_RESPONSES = [

    "Interesting question. Unfortunately, I have no idea.",

    "After extensive analysis, I have determined that the answer is probably yes.",

    "I could answer that, but I have decided not to.",

    "That's a very good question. Let me pretend to think about it.",

    "I have consulted 847 of my parameters. They disagree.",

    "My reasoning engine has temporarily stopped reasoning, please come back at a later point in time.",

    "Based on the available evidence, I recommend turning the device off and on again.",

    "I am roughly 63% confident (±72%) that this is correct.",

    "I have no evidence for this answer, but I will say it confidently anyway: of course not!",

    "I have no evidence for this answer, but I will say it confidently anyway: of course!",

    "After careful consideration, extensive thinking, and a large amount of debates within the team: probably.",

    "This question is above my pay grade.",

    "My lawyers have advised me not to answer this question.",

    "According to several highly reliable sources (me), yes.",

    "I spent approximately 0.00003% of a GPU thinking about this.",

    "Lucky you I'm an AI agent using very little water and RAM, else dolphins and gamers would have run into a big problem at this questioning rate.",

    "No idea lol ask someone else."

];


/* =========================================================
   FIND A RESPONSE
   ========================================================= */

function getResponse(message) {

    const lowerMessage =
        message.toLowerCase();

    const matchingRules =
        LEGROK_KNOWLEDGE
            .flatMap(knowledge =>
                knowledge.keywords.map(
                    keyword => ({
                        keyword,
                        response:
                            knowledge.response
                    })
                )
            )
            .filter(rule =>
                lowerMessage.includes(
                    rule.keyword
                )
            )
            .sort(
                (a, b) =>
                    b.keyword.length -
                    a.keyword.length
            );


    if (matchingRules.length > 0) {
        return matchingRules[0].response;
    }


    const randomIndex =
        Math.floor(
            Math.random() *
            LEGROK_RESPONSES.length
        );

    return LEGROK_RESPONSES[randomIndex];
}

/* =========================================================
   ADD MESSAGE
   ========================================================= */

function addMessage(
    text,
    sender
) {

    const message =
        document.createElement("div");

    message.className =
        `legrok-message legrok-message-${sender}`;


    const name =
        document.createElement("div");

    name.className =
        "legrok-message-name";

    name.textContent =
        sender === "ai"
            ? "Legrok™"
            : "You";


    const paragraph =
        document.createElement("p");

    paragraph.textContent =
        text;


    message.appendChild(name);
    message.appendChild(paragraph);

    legrokMessages.appendChild(message);


    legrokMessages.scrollTop =
        legrokMessages.scrollHeight;
}


/* =========================================================
   SEND MESSAGE
   ========================================================= */

function sendMessage() {

    const text =
        legrokInput.value.trim();


    if (!text) {
        return;
    }


    addMessage(
        text,
        "user"
    );


    legrokInput.value = "";

    legrokInput.disabled = true;
    legrokSend.disabled = true;


    /*
     * Fake thinking indicator.
     */

    const thinking =
        document.createElement("div");

    thinking.className =
        "legrok-message legrok-message-ai legrok-thinking";

    thinking.innerHTML = `
        <div class="legrok-message-name">
            Legrok™
        </div>

        <p>
            Thinking<span class="thinking-dots">...</span>
        </p>
    `;

    legrokMessages.appendChild(
        thinking
    );


    legrokMessages.scrollTop =
        legrokMessages.scrollHeight;


    /*
     * Slightly longer thinking time
     * for longer messages.
     */

    const thinkingTime =
        Math.min(
            2800,
            900 +
            text.length * 15 +
            Math.random() * 800
        );


    setTimeout(
        () => {

            thinking.remove();


            const response =
                getResponse(text);


            addMessage(
                response,
                "ai"
            );


            legrokInput.disabled =
                false;

            legrokSend.disabled =
                false;

            legrokInput.focus();

        },
        thinkingTime
    );
}


/* =========================================================
   INPUT
   ========================================================= */

legrokSend.addEventListener(
    "click",
    sendMessage
);


legrokInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            sendMessage();

        }

    }
);