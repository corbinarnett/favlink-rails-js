class WebsitesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/websites"
  }

  getWebsites() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  // createWebsite(title, url, list_id) {
  //   const website = {
  //     title: title,
  //     link: url,
  //     list_id: list_id
  //   }
  //   return fetch(this.baseUrl, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ website })
  //   })
  // }
}