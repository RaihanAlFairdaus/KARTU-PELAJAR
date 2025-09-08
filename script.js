const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const grid = 20; // ukuran kotak
const rows = canvas.height / grid;
const cols = canvas.width / grid;

// Pac-Man awal
let pacman = {
    x: 14 * grid,
    y: 23 * grid,
    dx: 0,
    dy: 0,
    radius: grid/2,
    color: 'yellow'
};

// Input keyboard
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp': pacman.dx = 0; pacman.dy = -grid; break;
        case 'ArrowDown': pacman.dx = 0; pacman.dy = grid; break;
        case 'ArrowLeft': pacman.dx = -grid; pacman.dy = 0; break;
        case 'ArrowRight': pacman.dx = grid; pacman.dy = 0; break;
    }
});

// Buat map sederhana
let map = [
    "############################",
    "#............##............#",
    "#.####.#####.##.#####.####.#",
    "#.####.#####.##.#####.####.#",
    "#..........................#",
    "#.####.##.########.##.####.#",
    "#......##....##....##......#",
    "######.##### ## #####.######",
    "######.##### ## #####.######",
    "#............##............#",
    "#.####.#####.##.#####.####.#",
    "#.####.#####.##.#####.####.#",
    "#..........................#",
    "############################"
];

// Fungsi menggambar map
function drawMap() {
    for(let row=0; row<map.length; row++){
        for(let col=0; col<map[row].length; col++){
            if(map[row][col] === "#"){
                ctx.fillStyle = "blue";
                ctx.fillRect(col*grid, row*grid, grid, grid);
            } else if(map[row][col] === "."){
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(col*grid+grid/2, row*grid+grid/2, 3, 0, Math.PI*2);
                ctx.fill();
            }
        }
    }
}

// Fungsi menggambar Pac-Man
function drawPacman() {
    ctx.fillStyle = pacman.color;
    ctx.beginPath();
    ctx.arc(pacman.x + pacman.radius, pacman.y + pacman.radius, pacman.radius, 0.25*Math.PI, 1.75*Math.PI);
    ctx.lineTo(pacman.x + pacman.radius, pacman.y + pacman.radius);
    ctx.fill();
}

// Update posisi Pac-Man
function update() {
    let nextX = pacman.x + pacman.dx;
    let nextY = pacman.y + pacman.dy;
    
    // Cek tabrakan dinding
    let col = Math.floor(nextX / grid);
    let row = Math.floor(nextY / grid);

    if(map[row] && map[row][col] !== "#"){
        pacman.x = nextX;
        pacman.y = nextY;
    }

    // Hapus layar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar map dan Pac-Man
    drawMap();
    drawPacman();
    
    requestAnimationFrame(update);
}

// Mulai game
update();
