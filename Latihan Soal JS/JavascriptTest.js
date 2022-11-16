const obj = [];
obj[0] = {
    nama :"Monica",
    gender : "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: "Yes",
    education: [
        
        {
        name: "SD 01", 
        city: "Jakarta", 
        graduated: 2016,
        },

        {
        name: "SMP 02", 
        city: "Jakarta", 
        graduated: 2019.
        },

        {
            name: "SMA 03", 
            city: "Tangerang", 
            
        },
    ],
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", 
    "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"],
};


obj[1] = {
    nama :"Wendy",
    gender : "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue", "Black", "Grey"],
    isHavePet: "No",
    education: [
    {
        name: "SD 02", 
        city: "Jakarta", 
        graduated: 2010,
    },
    

    {
        name: "SMP 03", 
        city: "Bogor", 
        graduated: 2013,
    },

    {
        name: "SMA 01", 
        city: "Surabaya", 
        graduated: 2016,
    },

    {
        name: "Universitas Maju", 
        city: "Tangerang", 
    
    },
],
favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"],
};


console.log("Nama : " + obj[1].nama);
console.log("SMA : " + obj[1].education[2].name);
console.log("Kota : " + obj[1].education[2].city);
console.log("Makanan Favorit : " + obj[1].favoriteRestaurant[5]);