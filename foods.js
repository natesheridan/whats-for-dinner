class LinkGeneration{
    constructor(queryObject){
        this.queryObject = queryObject
        this.queryStr = `${queryObject}`;
        this.URLString = "";
    }
    URLCreate(){
        console.log(this.queryStr)
        var nameSplit = this.queryStr.split(" ");
        console.log(nameSplit)
        if (nameSplit.length === 4){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+${nameSplit[1]}+${nameSplit[2]}+${nameSplit[3]}+recipe`
            // console.log(str)
            this.URLString = str;
        }
        else if (nameSplit.length === 3){
            var str = `https://www.google.com/search?q=${nameSplit[0]}+${nameSplit[1]}+${nameSplit[2]}+recipe`
            console.log(str)
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
                {
                name: 'Miso Glazed Carrots',
                link: "",
                },
                {
                name: 'Coleslaw',
                link: "",
                },
                {
                name: 'Garden Salad',
                link: "",
                },
                {
                name: 'Crispy Potatoes',
                link: "",
                },
                {
                name: 'Sweet Potato Tots',
                link: "",
                },
                {
                name: 'Coconut Rice',
                link: "",
                },
                {
                name: 'Caeser Salad',
                link: "",
                },
                {
                name: 'Shrimp Summer Rolls',
                link: "",
                },
                {
                name: 'Garlic Butter Mushrooms',
                link: "",
                },
                {
                name: 'Hush Puppies',
                link: "",
                },
            ]


        for (var i = sides.length - 1; i >= 0; i--){
            console.log(i)
            var genLinkPerName = new LinkGeneration(sides[i].name)
            genLinkPerName.URLCreate();
            var URLString = genLinkPerName.URLString;
            sides[i].link = URLString;

        }