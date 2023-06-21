function d6(){
    return Math.floor(Math.random() * 6) + 1
}

function getRolls(n){
    return Array.from( {length: n}, () => d6() )
}

function sum(nums){
    return nums.reduce((prev, cur) => prev + cur, 0)
}

function lessthan4(num){
    return sum(num) < 4 
}

function sameValue(num){
    return num.every(v => v === num[0])
}

export { d6, getRolls, sum, lessthan4, sameValue }