const rows = 10
let counter = 3
let spaceCount = rows - 1
const space = ' '
const star = '*'

// space count needs to at the beginning equal (rows - 1), then go down 1 every loop

for(i = 0; i <= rows; i++) {
    if(i > 1) {
        console.log(space.repeat(spaceCount), star.repeat(counter), space.repeat(spaceCount))
        counter += 2
        spaceCount--
    } else if(i == 1) {
        console.log(space.repeat(spaceCount), '*', space.repeat(spaceCount))
        spaceCount--
    }
}