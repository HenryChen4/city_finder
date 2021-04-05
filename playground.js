function generateMap(freq){
    let map = []
    for(let i = 0; i < 9; i++){
        let row = []
        for(let j = 0; j < 9; j++){
            let random = Math.random()
            row.push({value: random < freq ? 1 : 0, marked: false})
        }
        map.push(row)
    }
    return map
}

function pop(array, position){
    let val = array[position]
    array = array.splice(position, 1)
    return val
}

function findNeighbords(map, coords){
    let increments = [[coords[0]+1, coords[1]],[coords[0]-1, coords[1]], [coords[0], coords[1]+1], [coords[0], coords[1]-1]]
    let neighborCoords = []
    increments.forEach((increment)=>{
        if(isValid(increment, map)){
            neighborCoords.push(increment)
        }
    })
    return neighborCoords
}

function isValid(increment, map){
    return (increment[0] >= 0 || increment[1] >= 0) && (increment[0] < map.length || increment[1] < map[0].length) ? true : false
}

function bfs(map, startCoord, p){
    let queue = [startCoord]
    while(queue.length !== 0){
        let val = pop(queue, 0)
        
    }
}