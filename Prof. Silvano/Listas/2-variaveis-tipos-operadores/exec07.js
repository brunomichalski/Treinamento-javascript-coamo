"use strict"

// CONSTANTES PARA ESTILOS DO CARACTERE (ST = STYLE)
const ST_RESET = "\x1b[0m"
const ST_BRIGHT = "\x1b[1m"
const ST_DIM = "\x1b[2m"
const ST_UNDERSCORE = "\x1b[4m"
const ST_BLINK = "\x1b[5m"
const ST_REVERSE = "\x1b[7m"
const ST_HIDDEN = "\x1b[8m"
// CONSTANTES PARA CORES DO CARACTERE (FG = FOREGROUND)
const FG_BLACK = "\x1b[30m"
const FG_RED = "\x1b[31m"
const FG_GREEN = "\x1b[32m"
const FG_YELLOW = "\x1b[33m"
const FG_BLUE = "\x1b[34m"
const FG_MAGENTA = "\x1b[35m"
const FG_CYAN = "\x1b[36m"
const FG_WHITE = "\x1b[37m"
// CONSTANTES PARA CORES DE FUNDO (BG = BACKGROUND)
const BG_BLACK = "\x1b[40m"
const BG_RED = "\x1b[41m"
const BG_GREEN = "\x1b[42m"
const BG_YELLOW = "\x1b[43m"
const BG_BLUE = "\x1b[44m"
const BG_MAGENTA = "\x1b[45m"
const BG_CYAN = "\x1b[46m"
const BG_WHITE = "\x1b[47m"

console.log(ST_UNDERSCORE+"                ");
console.log(ST_UNDERSCORE + "CORES & ESTILOS" + FG_WHITE, ST_RESET +"\n");
console.log(FG_WHITE,ST_UNDERSCORE +"BRANCO"+ ST_RESET);
console.log(FG_BLACK,ST_UNDERSCORE  +"PRETO"+ ST_RESET);
console.log(FG_RED,ST_UNDERSCORE  +"VERMELHO"+ ST_RESET);
console.log(FG_GREEN,ST_UNDERSCORE  +"VERDE"+ ST_RESET);
console.log(FG_BLUE,ST_UNDERSCORE  +"AZUL"+ ST_RESET);
console.log(FG_CYAN,ST_UNDERSCORE  +"CIANO"+ ST_RESET);
console.log(FG_MAGENTA,ST_UNDERSCORE  +"MAGENTA"+ ST_RESET);
console.log(FG_YELLOW,ST_UNDERSCORE  +"AMARELO"+ ST_RESET);
