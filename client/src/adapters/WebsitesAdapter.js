class WebsitesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/websites"
  }

  getWebsites() {
    return fetch(this.baseUrl).then(res => res.json())
    // debugger
  }

  createWebsite(title, url, listId) {
    const website = {
      title: title,
      link: url,
      list_id: listId
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ website })
    })
    .then(res => res.json())
  }
}


// {"website"=>{"title"=>"I Make the Best Amaretto Sour in The World", "link"=>"https://www.jeffreymorgenthaler.com/i-make-the-best-amaretto-sour-in-the-world/", "list_id"=>"1"}, "controller"=>"api/v1/websites", "action"=>"create"}