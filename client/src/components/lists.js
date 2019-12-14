class Lists {
  constructor() {
    this.lists = [];
    this.adapter = new ListsAdapter()
    this.initBindingsAndEventListeners();
    this.fetchAndLoadLists()
  }

  initBindingsAndEventListeners() {
    this.dropdownContainer = document.querySelector(".form-group #ListControlSelect")
  }

  fetchAndLoadLists() {
    this.adapter.getLists().then(lists => {
      lists.forEach(list => this.lists.push(new List(list)))
      
    })
    .then(() => {
      this.render();
    })
  }

  render() {
    this.lists.forEach(list => this.listInput(list))
  }

  listHtml(list) {
    return `
    <option>${list.title}</option>
    `
  }

  listInput(list) {
    this.dropdownContainer.innerHTML += this.listHtml(list)
  }
}