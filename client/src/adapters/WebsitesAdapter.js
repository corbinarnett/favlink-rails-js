class WebsitesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/websites"
  }

  getWebsites() {
    return fetch(this.baseUrl).then(res => res.json())
    // debugger
  }

//   createWebsite(title, url, list) {
//     const website = {
//       title: title,
//       link: url,
//       list_id: list
//     }
//     return fetch(this.baseUrl, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({ website })
//     })
//     .then(res => res.json())
//   }
}