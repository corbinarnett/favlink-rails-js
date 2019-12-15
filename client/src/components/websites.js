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

  // render() {
  //   this.linkContainer.innerHTML = this.websites
  //     .map(website => website.renderCard())
  //     .join("");
  // }

  render() {
    this.linkContainer.innerHTML = this.websites
      .map(website => { return `
      <div class="card bg-light">
        <div class="card-header">
          ${website.listTitle}
        </div>
        <div class="card-body">
          <h3 value="${website.id}">${website.title}</h3>
          <button class="btn btn-primary btn-small" onclick="window.open('${website.link}', '_blank')">Visit</button>
          <button onclick="Websites.deleteFromCard(${website.id})" class="btn btn-danger btn-small">Delete</button>
        </div>
      </div></br>
      ` })
      .join("");
  }

  static deleteFromCard(id) {
    alert(id)
    // debugger
    return fetch("http://localhost:3000/api/v1/websites" + "/" + id, {
          method: 'delete',
          headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
          },
        }).then(res => console.log(res))
    // WebsitesAdapter.deleteData(id)
  }
}
