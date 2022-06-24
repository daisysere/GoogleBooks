function getirGotur() {
    $('.sil').remove();
    fetch("https://www.googleapis.com/books/v1/volumes?q="+document.getElementById("input").value+"&AIzaSyAmjRjp9ztf6QphRwLoztfJDlZqtmBavYE")
    .then(x => x.json())
    .then(response => {
        $("#gelenler").html("");
        for (var i = 0; i < response.items.length; i++) {
            console.log(response);
            let item = response.items;
            let title = item[i].volumeInfo.title;
            let previewLink = item[i].volumeInfo.previewLink;
            if(item[i].volumeInfo.imageLinks != undefined){
            console.log(item[i].volumeInfo.imageLinks.thumbnail);
            let pic = item[i].volumeInfo.imageLinks.thumbnail === undefined ? "" : item[i].volumeInfo.imageLinks.thumbnail;
            let html =  "<div class='theCard' style='width: 14rem; margin: 30px;'>"
                        +"<a href="+previewLink+" target='_blank'><img src="+pic+" class='card-img-top' alt='...' style='height: 300px'></a>"
                        +"<div class='card-body oke'>"
                        +"<h3 class='card-title' >"+title+"</h3>"
                        +"</div>"
                        +"</div>";
            $("#gelenler").append(html);
            }
            else
            i++;
            
            
        }
    });
}