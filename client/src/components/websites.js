class Websites {
  constructor() {
    this.websites = [];
    this.adapter = new WebsitesAdapter();
    this.fetchAndLoadWebsites();
    this.initBindingsAndEventListeners();
  }


  initBindingsAndEventListeners() {
    
    // saved link container
    this.linkContainer = document.getElementById("savedSite-container");
    
    // form 
    this.newBookmarkTitle = document.querySelector(".form-group #linkTitle");
    this.newBookmarkUrl = document.querySelector(".form-group #linkUrl");
    this.dropdownContainer = document.querySelector(
      ".form-group #ListControlSelect"
    );

    // create new website
    this.bookmarkForm = document.getElementById("myForm");
    this.bookmarkForm.addEventListener(
      "submit",
      this.createBookmark.bind(this)
    );


    // delete 
    // e => console.log(e.target.id)
    this.linkContainer.addEventListener('click', e => this.deleteBookmark(e.target.id))

  }

  deleteBookmark(index) {
    this.adapter.deleteWebsite(index).then(function(){
      let cardDiv = document.getElementById("card-" + index);
      cardDiv.parentElement.removeChild(cardDiv);
    })
    // debugger
    // delete saved bookmark not only from db but also from the this.websites array
    // for (let i=0; i < this.websites.length; i++) {
    //   if (this.websites[i].id === index) {
    //       this.websites.splice(i, 1);
    //   }
    // }
    this.websites.forEach(i => {
      if (this.websites[i].id === index) {
        this.websites.splice(i, 1);
      }
    })
  }

  createBookmark(e) {
    e.preventDefault();
    const title = this.newBookmarkTitle.value;
    const url = this.newBookmarkUrl.value;
    const listId = this.dropdownContainer.value;

    this.adapter.createWebsite(title, url, listId).then(website => {
      this.websites.push(new Website(website.data));
      
      // clear form
      this.newBookmarkTitle.value = '';
      this.newBookmarkUrl.value = '';

      // render newly created card
      this.render();
    });
  }

  fetchAndLoadWebsites() {
    this.adapter
      .getWebsites()
      .then(websites => {
        websites.data.forEach(website =>
          this.websites.push(new Website(website))
        );
        debugger
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.linkContainer.innerHTML = this.websites
      .map(website => website.renderCard())
      .join("");
  }

}
