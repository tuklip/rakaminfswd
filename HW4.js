angka =[]
for (let i = 1; i<=100; i++){
    angka[i] = Math.ceil(Math.random() * 50);
    console.log(i)
    console.log("angka = "+angka[i])
}

ganjil = []
genap = []

for (let i = 1; i<=100; i++){
    if(i % 2 == 0){
        genap.push(angka[i])
    }else{
        ganjil.push(angka[i])
    }
}
console.log(genap)
console.log(ganjil)

ganjil_terbesar = 0
//Max ganjil
for(let i = 1; i < ganjil.length; i++){
    if(ganjil[i] > ganjil_terbesar ){
        ganjil_terbesar = ganjil[i];
    }
}
console.log("ganjil terbesar = "+ganjil_terbesar)
genap_terbesar = 0
//Max genap
for(let i = 1; i < genap.length; i++){
    if(genap[i] > genap_terbesar ){
        genap_terbesar = genap[i];
    }
}
console.log("genap terbesar = "+genap_terbesar)

ganjil_terkecil = 50
//Min ganjil
for(let i = 1; i < ganjil.length; i++){
    if(ganjil[i] < ganjil_terkecil ){
        ganjil_terkecil = ganjil[i];
    }
}
console.log("ganjil terkecil = "+ganjil_terkecil)
genap_terkecil = 50
//Min genap
for(let i = 1; i < genap.length; i++){
    if(genap[i] < genap_terkecil ){
        genap_terkecil = genap[i];
    }
}
console.log("genap terkecil = "+genap_terkecil)

//Total

ganjil_total = 0
//Total ganjil
for(let i = 1; i < ganjil.length; i++){
    ganjil_total += ganjil[i]
}
console.log("ganjil Total = "+ganjil_total)
genap_total = 0
//Total genap
for(let i = 1; i < genap.length; i++){
    genap_total += genap[i]
}
console.log("genap total = "+genap_total)

//Rata-rata
rata_ganjil = (ganjil_total/50)
console.log("rata-rata ganjil = "+rata_ganjil)
rata_genap = (genap_total/50)
console.log("rata-rata genap = "+rata_genap)

//Perbandingan 2 array
//perbandingan max
if (ganjil_terbesar > genap_terbesar){
    console.log("Lebih besar ganjil max yaitu = "+ganjil_terbesar)
} else if(ganjil_terbesar < genap_terbesar){
    console.log("Lebih besar genap max yaitu = "+genap_terbesar)
} else{
    console.log("sama")
}

//perbandingan min
if (ganjil_terkecil > genap_terkecil){
    console.log("Lebih besar ganjil min yaitu = "+ganjil_terkecil)
} else if(ganjil_terkecil < genap_terkecil){
    console.log("Lebih besar genap min yaitu = "+genap_terkecil)
} else{
    console.log("sama")
}

//perbandingan total
if (ganjil_total > genap_total){
    console.log("Lebih besar ganjil total yaitu = "+ganjil_total)
} else if(ganjil_total < genap_total){
    console.log("Lebih besar genap total yaitu = "+genap_total)
} else{
    console.log("sama")
}

//perbandingan rata-rata
if (rata_ganjil > rata_genap){
    console.log("Lebih besar ganjil rata-rata yaitu = "+rata_ganjil)
} else if(rata_ganjil < rata_genap){
    console.log("Lebih besar genap rata-rata yaitu = "+rata_genap)
} else{
    console.log("sama")
}