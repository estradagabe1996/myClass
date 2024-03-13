let restaraunts = [
    {
    name: "Mcdonalds",
    driveThroughs: 1,
    },
    {
    name: "Chick-fila",
    driveThroughs: 1,
    },
    {
    name: "Shake Shack",
    driveThroughs: 0,
    },
]

for( let i = 0; i < restaraunts.length; i++) {
    if(restaraunts[i].driveThroughs >= 1) {
        console.log(restaraunts.name, "Don't worry. You can stay in your car!")
    }
}

console.log("anything");