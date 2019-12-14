class Lists {
  constructor() {
    this.lists = [];
    this.adapter = new ListsAdapter()
    this.fetchAndLoadLists()
  }

  fetchAndLoadLists() {
    this.adapter.getLists().then(lists => {
      lists.forEach(list => this.lists.push(new List(list)))
      
    })
  }
}