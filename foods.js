class LinkGeneration{
    constructor(queryObject){
        this.queryObject = queryObject
        this.queryStr = `${queryObject}`;
        this.URLString = "";
    }
    URLCreate(){
        // console.log(this.queryStr)
        var nameSplit = this.queryStr.split(" ");
        // console.log(nameSplit)
        if (nameSplit.length === 4){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+${nameSplit[1]}+${nameSplit[2]}+${nameSplit[3]}+recipe`
            // console.log(str)
            this.URLString = str;
        }
        else if (nameSplit.length === 3){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+${nameSplit[1]}+${nameSplit[2]}+recipe`
            // console.log(str)
            this.URLString = str;
        }
        else if (nameSplit.length === 2){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+${nameSplit[1]}+recipe`
            // console.log(str)
            this.URLString = str;
        }
        else if (nameSplit.length === 1){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+recipe`
            // console.log(str)
            this.URLString = str;
        }
    }
    // https://www.google.com/search?q=word1+word2+etc
}





var sides = [
    {img:"https://cdn.cookrepublic.com/wp-content/uploads/2020/03/sticky_miso_roasted_carrots07.jpg" , name: 'Miso Glazed Carrots', link: ""},
    {img:"https://www.cookingclassy.com/wp-content/uploads/2018/06/coleslaw-recipe-2.jpg" , name: 'Coleslaw', link: ""},
    {img:"https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg" , name: 'Garden Salad', link: ""},
    {img:"https://www.errenskitchen.com/wp-content/uploads/2018/11/ROAST-POTATOES-2-500x480.jpg" , name: 'Crispy Potatoes', link: ""},
    {img:"https://www.rebootwithjoe.com/wp-content/uploads/2019/02/Sweet_Potato_Tots.png" , name: 'Sweet Potato Tots', link: ""},
    {img:"https://www.jessicagavin.com/wp-content/uploads/2020/03/coconut-rice-16-1200.jpg" , name: 'Coconut Rice', link: ""},
    {img:"https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg" , name: 'Caeser Salad', link: ""},
    {img:"https://media.blueapron.com/recipes/264/square_newsletter_images/20141218-2126-2-6997/Shrimp_20Summer_20Rolls-3062.jpg?quality=80&width=850" , name: 'Shrimp Summer Rolls', link: ""},
    {img:"https://www.rachelcooks.com/wp-content/uploads/2018/09/garlic-butter-mushrooms-web-1-of-6.jpg" , name: 'Garlic Butter Mushrooms', link: ""},
    {img:"https://www.bakingbeauty.net/wp-content/uploads/2020/06/hushpuppies-sq-4.jpg" , name: 'Hush Puppies', link: ""},
]
var mains = [
    {img:"https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4.jpg" , name: "Spaghetti and Meatballs", link: ""},
    {img:"https://www.dinneratthezoo.com/wp-content/uploads/2018/04/pineapple-chicken-5.jpg" , name: "Pineapple Chicken", link: ""},
    {img:"https://www.themediterraneandish.com/wp-content/uploads/2017/01/Shakshuka-Recipe-The-Mediterranean-Dish-102.jpg" , name: "Shakshuka", link: ""},
    {img:"https://pinchofyum.com/wp-content/uploads/Chicken-Curry-Recipe.jpg" , name: "Thai Yellow Curry", link: ""},
    {img:"https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg" , name: "Bibimbap", link: ""},
    {img:"https://www.skinnytaste.com/wp-content/uploads/2012/09/skinny-chicken-parmigiana-550x733.jpg" , name: "Chicken Parmesean", link: ""},
    {img:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/11/Roasted-Butternut-Squash-Soup-1-2.jpg" , name: "Butternut Squash Soup", link: ""},
    {img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_BBQ-Chicken-Burgers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539886689.jpeg" , name: "BBQ Chicken Burgers", link: ""},
    {img:"https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg" , name: "Ramen", link: ""},
    {img:"https://www.mantitlement.com/wp-content/uploads/2020/10/easy-beef-empanadas-top.jpg" , name: "Empanadas", link: ""},
    {img:"https://www.averiecooks.com/wp-content/uploads/2016/01/chickenfriedrice-2-650x975.jpg" , name: "Chicken Fried Rice", link: ""},
    {img:"https://s23209.pcdn.co/wp-content/uploads/2019/07/Sheet-Pan-Chicken-FajitasIMG_9933-600x900.jpg?p=30898" , name: "Sheet Pan Fajitas", link: ""},
    {img:"https://www.skinnytaste.com/wp-content/uploads/2020/05/Margherita-Pizza-1-3.jpg" , name: "Margarita Pizza", link: ""},
]
var desserts = [
    {img:"https://simplyhomecooked.com/wp-content/uploads/2020/04/apple-pie-recipe-13-scaled.jpg" , name: "Apple Pie" , link: ""},
    {img:"" , name: "Lemon Meringue Pie" , link: ""},
    {img:"" , name: "Black Forest Cake" , link: ""},
    {img:"" , name: "Banana Bread" , link: ""},
    {img:"" , name: "Peach Cobbler" , link: ""},
    {img:"" , name: "Cheesecake" , link: ""},
    {img:"" , name: "Funfetti Cake" , link: ""},
    {img:"" , name: "Baklava" , link: ""},
    {img:"" , name: "Flan" , link: ""},
    {img:"" , name: "Macarons" , link: ""},
    {img:"" , name: "Macaroons" , link: ""},
    {img:"" , name: "Chocolate Cupcakes" , link: ""},
    {img:"" , name: "Pavlova" , link: ""},
    {img:"" , name: "Pumpkin Pie" , link: ""},
    {img:"" , name: "Key Lime Pie" , link: ""},
    {img:"" , name: "Tart Tatin" , link: ""},
    {img:"" , name: "Croissants" , link: ""},
    {img:"" , name: "Eclairs" , link: ""},
]


for (var i = sides.length - 1; i >= 0; i--){
    // console.log(i)
    var genLinkPerName = new LinkGeneration(sides[i].name)
    genLinkPerName.URLCreate();
    var URLString = genLinkPerName.URLString;
    sides[i].link = URLString;
}

for (var i = mains.length - 1; i >= 0; i--){
    // console.log(i)
    var genLinkPerName = new LinkGeneration(mains[i].name)
    genLinkPerName.URLCreate();
    var URLString = genLinkPerName.URLString;
    mains[i].link = URLString;
}

for (var i = desserts.length - 1; i >= 0; i--){
    // console.log(i)
    var genLinkPerName = new LinkGeneration(desserts[i].name)
    genLinkPerName.URLCreate();
    var URLString = desserts.URLString;
    desserts[i].link = URLString;
}