const car = 
{
    price: 1999,
    color: "red",
    numDoors: 4
};


if (car.price < 2000 && car.color == "red" && car.numDoors == 4)
{
    console.log("well take it!!");
}
else 
{
    console.log("its best to keep looking");
}


//teste da condição ou
if (car.price < 2000 || car.color == "red" || car.numDoors == 4)
{
    console.log("well take it to my brother!!");
}
else 
{
    console.log("its best to keep looking");
}

