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

    // delete website
     this.cardBody = document.querySelectorAll('div.card-body');
    for (let i = 0 ; i < this.cardBody.length; i++) {
      this.cardBody[i].addEventListener('submit' , this.deleteBookmark.bind(this)) ; 
   }
   debugger
  }

  deleteBookmark(e) {
    // e.preventDefault();
    debugger
  }






  createBookmark(e) {
    e.preventDefault();
    const title = this.newBookmarkTitle.value;
    const url = this.newBookmarkUrl.value;
    const listId = this.dropdownContainer.value;

    this.adapter.createWebsite(title, url, listId).then(website => {
      this.websites.push(new Website(website.data));
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
