# zLegoleon

# 404 page
```  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>404 - zLegoleon</title>

    <style>
        body {
            margin: 0;
            height: 100vh;

            display: flex;
            justify-content: center;
            align-items: center;

            font-family: Arial, sans-serif;
            text-align: center;

            background: #111;
            color: white;
        }

        .error {
            max-width: 600px;
        }

        h1 {
            font-size: 100px;
            margin: 0;
        }

        p {
            font-size: 20px;
        }

        a {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 20px;

            background: white;
            color: black;
            text-decoration: none;

            border-radius: 8px;
        }

        a:hover {
            transform: scale(1.05);
        }
    </style>
</head>

<body>

<div class="error">

    <h1>404</h1>

    <h2>Uh oh.</h2>

    <p>
        This page doesn't exist.
    </p>

    <p>
        It may have been eaten by a creeper.
    </p>

    <a href="/">Return to civilization</a>

</div>

</body>
</html>
```

# Secret snake game
`html`
``` 
<div id="snake-game">

    <h2>Snake</h2>

    <canvas id="snakeCanvas"
            width="400"
            height="400"></canvas>

    <p>
        Score: <span id="score">0</span>
    </p>

    <button onclick="startSnake()">Start</button>

</div>
```
`css`
```
#snake-game {
    text-align: center;
}

#snakeCanvas {
    background: #111;
    border: 2px solid #555;
}
```
`js`
``` const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake;
let food;

let dx;
let dy;

let score;
let gameLoop;

function startSnake() {

    snake = [
        { x: 10, y: 10 }
    ];

    dx = 1;
    dy = 0;

    score = 0;

    document.getElementById("score").textContent = score;

    placeFood();

    clearInterval(gameLoop);

    gameLoop = setInterval(updateSnake, 100);
}

function updateSnake() {

    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    // Wall collision
    if (
        head.x < 0 ||
        head.x >= tileCount ||
        head.y < 0 ||
        head.y >= tileCount
    ) {
        endSnake();
        return;
    }

    // Self collision
    for (const part of snake) {
        if (
            head.x === part.x &&
            head.y === part.y
        ) {
            endSnake();
            return;
        }
    }

    snake.unshift(head);

    // Food
    if (
        head.x === food.x &&
        head.y === food.y
    ) {

        score++;

        document.getElementById("score").textContent = score;

        placeFood();

    } else {

        snake.pop();

    }

    drawSnake();
}

function drawSnake() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Snake
    ctx.fillStyle = "limegreen";

    for (const part of snake) {

        ctx.fillRect(
            part.x * gridSize,
            part.y * gridSize,
            gridSize - 1,
            gridSize - 1
        );
    }

    // Food
    ctx.fillStyle = "red";

    ctx.fillRect(
        food.x * gridSize,
        food.y * gridSize,
        gridSize - 1,
        gridSize - 1
    );
}

function placeFood() {

    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

function endSnake() {

    clearInterval(gameLoop);

    alert(
        "Game over!\nScore: " + score
    );
}

document.addEventListener("keydown", event => {

    if (event.key === "ArrowUp" && dy !== 1) {
        dx = 0;
        dy = -1;
    }

    if (event.key === "ArrowDown" && dy !== -1) {
        dx = 0;
        dy = 1;
    }

    if (event.key === "ArrowLeft" && dx !== 1) {
        dx = -1;
        dy = 0;
    }

    if (event.key === "ArrowRight" && dx !== -1) {
        dx = 1;
        dy = 0;
    }

});
```
# Legrok Copy button
`js`
```
function processLegrokCopyButtons(text) { /* Looks for: [COPY:whatever text] and converts it into: <button ...>Copy</button> */ const copyRegex = /\[COPY:([\s\S]*?)\]/g; return text.replace( copyRegex, function(match, copyText) { /* Give every button a unique ID. */ const id = "copy-" + Date.now() + "-" + Math.random() .toString(36).substring(2, 8); /* Store the actual text safely in a data attribute. */ const encodedText =encodeURIComponent(copyText); return ` <div class="legrok-copy-container"> <button class="legrok-copy-button" data-copy="${encodedText}" onclick="copyLegrokText(this)" > 📋 Copy </button> </div> `; } ); } // ============================================================ // COPY FUNCTION // ============================================================ async functioncopyLegrokText(button) { const encodedText = button.dataset.copy; const text = decodeURIComponent(encodedText);try { await navigator.clipboard.writeText(text); const originalText = button.innerHTML; button.innerHTML = "✓ Copied!"; button.classList.add( "copied" ); setTimeout(() => { button.innerHTML = originalText;button.classList.remove( "copied" ); }, 1500); } catch (error) { console.error( "Copy failed:", error ); button.innerHTML ="❌ Failed"; setTimeout(() => { button.innerHTML = "📋 Copy"; }, 1500); } } // 
```
`example keyword`
```
{ keywords: ["html"], response: "Here's some extremely advanced HTML:\n\n" + "[COPY:<h1>Hello World!</h1>]" },
```
`css`
```
/* ============================================================
   LEGROK COPY BUTTON
   ============================================================ */

.legrok-copy-container {
    margin-top: 10px;
}


.legrok-copy-button {
    padding: 7px 12px;

    border: 1px solid #444;

    border-radius: 7px;

    background: #202020;

    color: white;

    font-size: 13px;

    cursor: pointer;

    transition:
        background 0.15s,
        transform 0.15s;
}


.legrok-copy-button:hover {
    background: #303030;

    transform: translateY(-1px);
}


.legrok-copy-button:active {
    transform: translateY(0);
}


.legrok-copy-button.copied {
    background: #237a3b;

    border-color: #3ca95a;
}
```
`html`
```
<div id="legrok-chat" class="legrok-chat"></div>

<div class="legrok-input-area">

    <input
        id="legrok-input"
        type="text"
        placeholder="Talk to Legrok..."
        autocomplete="off"
    >

    <button onclick="sendLegrokMessage()">
        Send
    </button>

</div>
```
# API

# Legrok Response  # General text