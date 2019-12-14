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
    this.dropdownContainer = document.querySelector(".form-group #ListControlSelect")
    this.bookmarkForm = document.getElementById("myForm");
    this.bookmarkForm.addEventListener(
      "submit",
      this.createBookmark.bind(this)
    );
  }

  createBookmark(e) {
    e.preventDefault();
    const title = this.newBookmarkTitle.value
    const url = this.newBookmarkUrl.value
    const list = this.dropdownContainer.value
    // this.adapter.createWebsite(title, url, list)
  }

  fetchAndLoadWebsites() {
    this.adapter
      .getWebsites()
      .then(websites => {
        websites.forEach(website => this.websites.push(new Website(website)));
        // console.log(this.websites)
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.websites.forEach(website => this.displayCard(website));
  }

  websiteCard(website) {
    return `
    <div class="card bg-light">
      <div class="card-header">
        ${website.listTitle}
      </div>
      <div class="card-body">
        <h3>${website.title}</h3>
        <button class="btn btn-primary btn-small" onclick="window.open('${website.link}', '_blank')">Visit</button>
        <button type="submit" class="btn btn-danger btn-small">Delete</button>
      </div>
    </div></br>
    `;
  }

  displayCard(website) {
    this.linkContainer.innerHTML += this.websiteCard(website);
  }
}
