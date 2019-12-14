class Websites {
  constructor() {
    this.websites = [];
    this.adapter = new WebsitesAdapter();
    // this.bindEventListeners()
    this.fetchAndLoadWebsites();
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
    this.websites.forEach(website => this.displayCard(website))
  }

  websiteCard(website) {
    return `
    <div class="card bg-light">
      <div class="card-header">
        ${website.listTitle}
      </div>
      <div class="card-body">
        <h3>${website.title}</h3>
        <button class="btn btn-primary" onclick="window.open('${website.link}', '_blank')">Visit</button>
      </div>
    </div></br>
    `
  }

  displayCard(website) {
    const linkContainer = document.getElementById("savedSite-container");
    linkContainer.innerHTML += this.websiteCard(website)
  }
}
