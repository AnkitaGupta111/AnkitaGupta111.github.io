(function () {
    var isPageOpened = localStorage.getItem('isPageOpened');
    if (!isPageOpened) {
        var arr = [];
        var obj1 = {
            desc: "beautiful sea",
            name: "sea",
            uploadDate: "2019-06-20",
            url: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"

        }
        var obj2 = {
            desc: "aeroplane in sky",
            name: "aerplane",
            uploadDate: "2019-06-19",
            url: "https://s.ftcdn.net/r/v2013/911327b0c295bc45915c754d06600ab37d40516d/pics/all/categories2013/10958-245x180.jpg"
        }
        arr.push(obj1);
        arr.push(obj2);
        localStorage.setItem("images", JSON.stringify(arr));
        localStorage.setItem('isPageOpened', true);
    }
}
)();