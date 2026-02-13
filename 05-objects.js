const cookie = 
{
    name: "cookie de gotas de chocolate",
    isGlutenFree: false,

    eatCookie: function()
    {
        console.log("i am eating " + this.name);
    }
    
};

//console.log(cookie);
cookie.eatCookie();


class Cookie
{
    constructor(name, isGlutenFree)
    {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie()
    {
        console.log("i am eating " + this.name);
    }
}

const myCookie = new Cookie("cookie de framboesa e limão", false);
myCookie.eatCookie();