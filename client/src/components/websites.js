class Websites {
  constructor() {
    this.websites = []
    this.adapter = new WebsitesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWebsites()
  }

  fetchAndLoadWebsites() {
    this.adapter.getWebsites().then(websites => {
      return console.log(websites)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const websiteContainer = document.getElementById("savedSite-container")
    websiteContainer.innerHTML = "My Saved Websites Here!"
  }
}