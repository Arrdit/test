let paragrafi = document.querySelector('paragrafi1')
// paragrafi.style.color = 'blue'
paragrafi.style.backgroundColor = 'orange'

//lexohe tvetem stili i js
console.log(paragrafi.style.color)



console.log(getComputedStyle(paragrafi))
console.log(getComputedStyle(paragrafi).width)


paragrafi.style.width = Number.parseInt(getComputedStyle(paragrafi).width)  + 100 + 'px'



document.documentElement.style.setProperty('--ngjraTekstit' , 'red')
paragrafi.style.setProperty('background-color','crimson')