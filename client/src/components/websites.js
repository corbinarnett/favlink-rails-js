class Websites {
  constructor() {
    this.websites = []
    this.adapter = new WebsitesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadWebsites()
  }

  fetchAndLoadWebsites() {
    this.adapter.getWebsites().then(websites => {
      websites.forEach(website => this.websites.push(new Website(website)))
      console.log(this.websites)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const websiteContainer = document.getElementById("savedSite-container")
    websiteContainer.innerHTML = "My Saved Websites Here!"
    console.log("my saved sites are", this.websites)
  }
}