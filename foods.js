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
    {img:"https://images-gmi-pmc.edge-generalmills.com/a910e898-ce3a-4d64-a6e0-a6580559d6ae.jpg" , name: "Lemon Meringue Pie" , link: ""},
    {img:"https://preppykitchen.com/wp-content/uploads/2016/07/black-forest-master-recipe-image.jpg" , name: "Black Forest Cake" , link: ""},
    {img:"https://www.momontimeout.com/wp-content/uploads/2021/05/easy-banana-bread-recipe-square.jpeg" , name: "Banana Bread" , link: ""},
    {img:"https://joyfoodsunshine.com/wp-content/uploads/2020/05/peach-cobbler-recipe-7.jpg" , name: "Peach Cobbler" , link: ""},
    {img:"https://www.cookingclassy.com/wp-content/uploads/2019/11/cheesecake-8.jpg" , name: "Cheesecake" , link: ""},
    {img:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/167074.jpg?output-format=auto&output-quality=auto" , name: "Funfetti Cake" , link: ""},
    {img:"https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Baklava-Fifteen-Spatulas-11-480x270.jpg" , name: "Baklava" , link: ""},
    {img:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Creamy-Caramel-Flan_EXPS_FT20_2197_F_0723_1.jpg" , name: "Flan" , link: ""},
    {img:"https://www.bakedbyanintrovert.com/wp-content/uploads/2020/05/Strawberry-Macarons-Recipe-Image-735x735.jpg" , name: "Macaroons" , link: ""},
    {img:"https://handletheheat.com/wp-content/uploads/2016/02/best-chocolate-cupcakes-recipe-SQUARE.jpg" , name: "Chocolate Cupcakes" , link: ""},
    {img:"https://preppykitchen.com/wp-content/uploads/2021/04/Pavlova-recpe-new.jpg" , name: "Pavlova" , link: ""},
    {img:"https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Homemade-Pumpkin-Pie-4.jpg?fit=1360%2C1360&ssl=1" , name: "Pumpkin Pie" , link: ""},
    {img:"https://www.onceuponachef.com/images/2019/06/Key-Lime-Pie-760x948.jpg" , name: "Key Lime Pie" , link: ""},
    {img:"https://assets.bonappetit.com/photos/57acf6ad53e63daf11a4dbf3/5:7/w_1270,h_1778,c_limit/vanilla-bean-tarte-tatin.jpg" , name: "Tart Tatin" , link: ""},
    {img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-201217-shortcut-croissants-006-ab-1614354652.jpg?crop=1.00xw:0.751xh;0,0.0480xh&resize=1200:*" , name: "Croissants" , link: ""},
    {img:"https://www.bakefromscratch.com/wp-content/uploads/2019/06/Eclairs175JBfull-1-696x557.jpg" , name: "Eclairs" , link: ""},
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
    var URLString = genLinkPerName.URLString;
    desserts[i].link = URLString;
}