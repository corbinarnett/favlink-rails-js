class WebsitesService {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/websites"
  }

  getWebsites() {
    return fetch(this.baseUrl).then(res => console.log(res))
  }
}