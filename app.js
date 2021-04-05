const { RSA_NO_PADDING } = require('constants')
const rp = require('request-promise')

//master variables
const cityPromiseArry = []

const node = (coords)=>{
    this.marked = false
    this.coords = coords
}

const getOriginalCoords = (location)=>{
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiaGVudGhlY2hlbiIsImEiOiJja2VjYWhudmswNXFvMnFzNGFqd3pqY21wIn0.5_RBCZtZG_uuYq9nQWrlCg`
    return rp({url: url, json: true})
}

const checkDuplicates = (citiesArry) => {
    for(let i = 0; i < citiesArry.length; i++){
        
    }
}   

const findNeighbors = (originalCoords, radius)=>{
    let increments = [[0.25, 0], [-0.25, 0], [0, 0.25], [0, -0.25]]
    let mutableCoords
    increments.forEach((increment)=>{
        mutableCoords = originalCoords
        for(let i = 1; i <= radius; i++){
            mutableCoords = [mutableCoords[0] + increment[0], mutableCoords[1]+increment[1]]
            let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${mutableCoords[0]},${mutableCoords[1]}.json?access_token=pk.eyJ1IjoiaGVudGhlY2hlbiIsImEiOiJja2VjYWhudmswNXFvMnFzNGFqd3pqY21wIn0.5_RBCZtZG_uuYq9nQWrlCg`
            cityPromiseArry.push(rp({url: url, json: true}).then((res)=>{
                console.log({name: res.features[2].text, coords: res.features[2].center})
                return {name: res.features[2].text, coords: res.features[2].center}
            }).catch((err)=>{
                console.log(err)
                return err
            }))
        }
    })
    return 'async operation running properly'
}

const parsePromises = (promiseArry)=>{
    const resultArry = []
    promiseArry.forEach((promise)=>{
        promise.then((res)=>{
            resultArry.push(res)
            console.log(resultArry)
        }).catch((err)=>{
            return {err: true, msg: 'connection error'}
        })
    })
    return resultArry
}   

const middleOut = ()=>{

}

getOriginalCoords('salt lake city').then((res)=>{
    findNeighbors(res.features[0].center, 2)
    console.log(parsePromises(cityPromiseArry))
}).catch((err)=>{
    console.log(err)
})
