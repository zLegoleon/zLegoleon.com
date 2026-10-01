const legrokInput =
    document.getElementById("legrokInput");

const legrokSend =
    document.getElementById("legrokSend");

const legrokMessages =
    document.getElementById("legrokMessages");

const legrokModel =
    document.getElementById("legrokModel");


const LEGROK_RESPONSES = [

    "Interesting question. Unfortunately, I have no idea.",

    "After extensive analysis, I have determined that the answer is probably yes.",

    "I could answer that, but I have decided not to.",

    "According to my calculations, this is definitely something that requires further calculations.",

    "That's a very good question. Let me pretend to think about it.",

    "I have consulted 847 of my parameters. They disagree.",

    "My reasoning engine has temporarily stopped reasoning.",

    "Based on the available evidence, I recommend turning the device off and on again.",

    "I am 63% confident that this is correct.",

    "I have no evidence for this answer, but I will say it confidently anyway.",

    "After careful consideration: probably.",

    "This question is above my pay grade.",

    "My lawyers have advised me not to answer this question.",

    "According to several highly reliable sources (me), yes.",

    "I spent approximately 0.00003% of a GPU thinking about this."
];


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


function getResponse() {

    const randomIndex =
        Math.floor(
            Math.random() *
            LEGROK_RESPONSES.length
        );

    return LEGROK_RESPONSES[randomIndex];
}


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
     * Fake thinking time.
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


    const thinkingTime =
        900 +
        Math.random() * 1800;


    setTimeout(
        () => {

            thinking.remove();

            addMessage(
                getResponse(),
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