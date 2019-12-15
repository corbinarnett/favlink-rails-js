class Websites {
  constructor() {
    this.websites = [];
    this.adapter = new WebsitesAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadWebsites();
  }

  initBindingsAndEventListeners() {
    this.linkContainer = document.getElementById("savedSite-container");
    this.newBookmarkTitle = document.querySelector(".form-group #linkTitle");
    this.newBookmarkUrl = document.querySelector(".form-group #linkUrl");
    this.dropdownContainer = document.querySelector(
      ".form-group #ListControlSelect"
    );
    this.bookmarkForm = document.getElementById("myForm");
    this.bookmarkForm.addEventListener(
      "submit",
      this.createBookmark.bind(this)
    );
  }

  createBookmark(e) {
    e.preventDefault();
    const title = this.newBookmarkTitle.value;
    const url = this.newBookmarkUrl.value;
    const listId = this.dropdownContainer.value;
    // debugger
    this.adapter.createWebsite(title, url, listId).then(website => {
      // debugger
      // console.log(website)
      this.websites.push(new Website(website.data))
      this.render()
    });
  }

  fetchAndLoadWebsites() {
    this.adapter
      .getWebsites()
      .then(websites => {
        // console.log(websites)
        websites.data.forEach(website => this.websites.push(new Website(website)));
        // debugger
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    // console.log('rendering')
    // this.websites.forEach(website => this.displayCard(website));
    this.linkContainer.innerHTML = this.websites.map(website => website.renderCard()).join('')
  //   debugger
  }

  // websiteCard(website) {
  //   return `
  //   <div class="card bg-light">
  //     <div class="card-header" value="${website.listId}">
  //       ${website.listTitle}
  //     </div>
  //     <div class="card-body">
  //       <h3>${website.title}</h3>
  //       <button class="btn btn-primary btn-small" onclick="window.open('${website.link}', '_blank')">Visit</button>
  //       <button type="submit" class="btn btn-danger btn-small">Delete</button>
  //     </div>
  //   </div></br>
  //   `;
  // }

  // displayCard(website) {
  //   this.linkContainer.innerHTML += this.websiteCard(website);
  // }

 
}
