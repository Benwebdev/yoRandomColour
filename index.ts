const hexes = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E" ];
let getColor = (hexes:Array<string>) => {
    let color = '';
    for (let i = 0; i < 6; i++) {
        //@ts-ignore
        let index = parseInt((Math.random() * hexes.length));
        let char = hexes[index];
        color += char;  
    }
    // log(hexesLength);
    return `#${color}`;
}
