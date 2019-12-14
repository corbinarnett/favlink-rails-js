class Websites {
  constructor() {
    this.websites = []
    this.adapter = new WebsitesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWebsites()
  }

  fetchAndLoadWebsites() {
    this.adapter.getWebsites().then(websites => console.log(websites))
  }
}