setTimeout(()=>{
loader.style.display="none"
},1500)


const cheats=[

// PLAYER

{title:"Invincibility",keyboard:"PAINKILLER",phone:"1-999-724-654-5537",ps5:["RIGHT","X"],xbox:["RIGHT","A"],cat:"player"},
{title:"Max Health",keyboard:"TURTLE",phone:"1-999-887-853",ps5:["CIRCLE"],xbox:["B"],cat:"player"},
{title:"Super Jump",keyboard:"HOPTOIT",phone:"1-999-467-8648",ps5:["L2"],xbox:["LT"],cat:"player"},
{title:"Fast Run",keyboard:"CATCHME",phone:"1-999-228-8463",ps5:["TRIANGLE"],xbox:["Y"],cat:"player"},
{title:"Slow Motion",keyboard:"SLOWMO",phone:"1-999-756-966",ps5:["LEFT"],xbox:["LEFT"],cat:"player"},
{title:"Skyfall",keyboard:"SKYFALL",phone:"1-999-759-3255",ps5:["L1"],xbox:["LB"],cat:"player"},
{title:"Recharge Ability",keyboard:"POWERUP",phone:"1-999-769-3787",ps5:["X"],xbox:["A"],cat:"player"},

// WEAPONS

{title:"All Weapons",keyboard:"TOOLUP",phone:"1-999-8665-87",ps5:["TRIANGLE"],xbox:["Y"],cat:"weapon"},
{title:"Explosive Ammo",keyboard:"HIGHEX",phone:"1-999-444-439",ps5:["R1"],xbox:["RB"],cat:"weapon"},
{title:"Flaming Bullets",keyboard:"INCENDIARY",phone:"1-999-462-363-4279",ps5:["L1"],xbox:["LB"],cat:"weapon"},
{title:"Explosive Punch",keyboard:"HOTHANDS",phone:"1-999-4684-2637",ps5:["RIGHT"],xbox:["RIGHT"],cat:"weapon"},
{title:"Give Parachute",keyboard:"SKYDIVE",phone:"1-999-759-3483",ps5:["DOWN"],xbox:["DOWN"],cat:"weapon"},

// VEHICLES

{title:"Spawn Comet",keyboard:"COMET",phone:"1-999-266-38",ps5:["R1"],xbox:["RB"],cat:"vehicle"},
{title:"Spawn Buzzard",keyboard:"BUZZOFF",phone:"1-999-289-9633",ps5:["CIRCLE"],xbox:["B"],cat:"vehicle"},
{title:"Spawn Bike",keyboard:"ROCKET",phone:"1-999-762-538",ps5:["R2"],xbox:["RT"],cat:"vehicle"},
{title:"Spawn Plane",keyboard:"BARNSTORM",phone:"1-999-2276-78676",ps5:["L2"],xbox:["LT"],cat:"vehicle"},
{title:"Spawn Limo",keyboard:"VINEWOOD",phone:"1-999-846-39663",ps5:["LEFT"],xbox:["LEFT"],cat:"vehicle"},
{title:"Spawn Trashmaster",keyboard:"TRASHED",phone:"1-999-872-433",ps5:["RIGHT"],xbox:["RIGHT"],cat:"vehicle"},
{title:"Spawn Caddy",keyboard:"HOLEIN1",phone:"1-999-4653-461",ps5:["UP"],xbox:["UP"],cat:"vehicle"},

// POLICE

{title:"Lower Wanted",keyboard:"LAWYERUP",phone:"1-999-5299-3787",ps5:["R1"],xbox:["RB"],cat:"police"},
{title:"Raise Wanted",keyboard:"FUGITIVE",phone:"1-999-3844-8483",ps5:["L1"],xbox:["LB"],cat:"police"},
{title:"Drunk Mode",keyboard:"LIQUOR",phone:"1-999-547-861",ps5:["LEFT"],xbox:["LEFT"],cat:"fun"},
{title:"Moon Gravity",keyboard:"FLOATER",phone:"1-999-356-2837",ps5:["RIGHT"],xbox:["RIGHT"],cat:"fun"}

,
// WEATHER

{title:"Change Weather",keyboard:"MAKEITRAIN",phone:"1-999-625-348-7246",ps5:["R2"],xbox:["RT"],cat:"fun"},
{title:"Snow Weather",keyboard:"SNOWDAY",phone:"1-999-7669-329",ps5:["L2"],xbox:["LT"],cat:"fun"},
{title:"Clear Weather",keyboard:"SUNNY",phone:"1-999-786-932",ps5:["UP"],xbox:["UP"],cat:"fun"},

// MOVEMENT

{title:"Fast Swim",keyboard:"GOTGILLS",phone:"1-999-468-44557",ps5:["DOWN"],xbox:["DOWN"],cat:"player"},
{title:"Slow Motion Aim",keyboard:"DEADEYE",phone:"1-999-332-3393",ps5:["LEFT"],xbox:["LEFT"],cat:"player"},
{title:"Low Gravity",keyboard:"FLOATER",phone:"1-999-356-2837",ps5:["RIGHT"],xbox:["RIGHT"],cat:"player"},
{title:"Slide Cars",keyboard:"SNOWDAY",phone:"1-999-7669-329",ps5:["CIRCLE"],xbox:["B"],cat:"fun"},

// VEHICLES MORE

{title:"Spawn Sanchez",keyboard:"OFFROAD",phone:"1-999-633-7623",ps5:["R1"],xbox:["RB"],cat:"vehicle"},
{title:"Spawn Rapid GT",keyboard:"RAPIDGT",phone:"1-999-727-4348",ps5:["L1"],xbox:["LB"],cat:"vehicle"},
{title:"Spawn Stunt Plane",keyboard:"BARNSTORM",phone:"1-999-2276-78676",ps5:["TRIANGLE"],xbox:["Y"],cat:"vehicle"},
{title:"Spawn Duster",keyboard:"FLYSPRAY",phone:"1-999-359-77729",ps5:["SQUARE"],xbox:["X"],cat:"vehicle"},
{title:"Spawn BMX",keyboard:"BANDIT",phone:"1-999-226-348",ps5:["X"],xbox:["A"],cat:"vehicle"},
{title:"Spawn PCJ",keyboard:"ROCKET",phone:"1-999-762-538",ps5:["R2"],xbox:["RT"],cat:"vehicle"},
{title:"Spawn Tank (mod)",keyboard:"TANK",phone:"1-999-8265",ps5:["UP"],xbox:["UP"],cat:"vehicle"},

// FUN MORE

{title:"Big Jump",keyboard:"HOPTOIT",phone:"1-999-467-8648",ps5:["L2"],xbox:["LT"],cat:"fun"},
{title:"Super Punch",keyboard:"HOTHANDS",phone:"1-999-4684-2637",ps5:["R2"],xbox:["RT"],cat:"fun"},
{title:"Explode Cars",keyboard:"BOOM",phone:"1-999-2666",ps5:["DOWN"],xbox:["DOWN"],cat:"fun"},
{title:"Fire Ammo",keyboard:"INCENDIARY",phone:"1-999-462-363-4279",ps5:["LEFT"],xbox:["LEFT"],cat:"fun"},
{title:"Drift Mode",keyboard:"DRIFT",phone:"1-999-37438",ps5:["RIGHT"],xbox:["RIGHT"],cat:"fun"},

// EXTRA PLAYER

{title:"Invisible",keyboard:"GHOST",phone:"1-999-44678",ps5:["L1"],xbox:["LB"],cat:"player"},
{title:"Super Speed",keyboard:"FLASH",phone:"1-999-35274",ps5:["R1"],xbox:["RB"],cat:"player"},
{title:"High Jump",keyboard:"JUMP",phone:"1-999-5867",ps5:["X"],xbox:["A"],cat:"player"},
{title:"God Mode",keyboard:"GOD",phone:"1-999-463",ps5:["TRIANGLE"],xbox:["Y"],cat:"player"},
{title:"Unlimited Ammo",keyboard:"AMMO",phone:"1-999-2666",ps5:["SQUARE"],xbox:["X"],cat:"weapon"},

// POLICE MORE

{title:"No Police",keyboard:"NOPOLICE",phone:"1-999-665",ps5:["L1"],xbox:["LB"],cat:"police"},
{title:"Max Wanted",keyboard:"MAXCOP",phone:"1-999-629",ps5:["R1"],xbox:["RB"],cat:"police"},
{title:"Police Ignore",keyboard:"IGNORE",phone:"1-999-446",ps5:["UP"],xbox:["UP"],cat:"police"},

// RANDOM FUN

{title:"Clown Mode",keyboard:"CLOWN",phone:"1-999-25696",ps5:["DOWN"],xbox:["DOWN"],cat:"fun"},
{title:"Dance Mode",keyboard:"DANCE",phone:"1-999-32623",ps5:["LEFT"],xbox:["LEFT"],cat:"fun"},
{title:"Party Mode",keyboard:"PARTY",phone:"1-999-72789",ps5:["RIGHT"],xbox:["RIGHT"],cat:"fun"},
{title:"Mega Jump",keyboard:"MEGA",phone:"1-999-6342",ps5:["L2"],xbox:["LT"],cat:"fun"},
{title:"Slow World",keyboard:"SLOW",phone:"1-999-7569",ps5:["R2"],xbox:["RT"],cat:"fun"},
{title:"Fast World",keyboard:"FAST",phone:"1-999-3278",ps5:["TRIANGLE"],xbox:["Y"],cat:"fun"}

];


let currentCat="all"

function renderButtons(arr,type){

return arr.map(b=>`<span class="btn ${type}">${b}</span>`).join("")

}

function show(){

let p=platform.value
let s=search.value.toLowerCase()

let data=cheats.filter(c=>

(currentCat=="all"||c.cat==currentCat)
&& c.title.toLowerCase().includes(s)

)

list.innerHTML=""

data.forEach(c=>{

let code=""

if(p=="keyboard") code=`<div class="code">${c.keyboard}</div>`

if(p=="phone") code=`<div class="code">${c.phone}</div>`

if(p=="ps5") code=`<div class="controller">${renderButtons(c.ps5,"ps")}</div>`

if(p=="xbox") code=`<div class="controller">${renderButtons(c.xbox,"xbox")}</div>`

list.innerHTML+=`

<div class="card">

<div class="title">${c.title}</div>

${code}

<button class="copy"
onclick="copyCode('${c.keyboard}',this)">
Copy
</button>

</div>

`

})

}

function copyCode(text,btn){

navigator.clipboard.writeText(text)

btn.innerText="Copied"

setTimeout(()=>{
btn.innerText="Copy"
},1500)

clickSound.play()

}

function filterCat(c){

currentCat=c
show()

}

search.oninput=show
platform.onchange=show

show()