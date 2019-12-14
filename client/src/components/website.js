class Website {
//   id: 1
// link: "https://www.bonappetit.com/story/upgrade-your-spritz#intcid=recommendations_bon-appetit-riser-similar_9df2b699-0355-4fb2-a0d7-d3071c0c0f19_cral2-2"
// list: {id: 1, title: "Cocktails"}
// list_id: 1
// title: "How to Upgrade Your Spritz This Summer"
  constructor(websiteJSON) {
    this.id = websiteJSON.id
    this.title = websiteJSON.title
    this.link = websiteJSON.link
    this.listTitle = websiteJSON.list.title
    this.listId = websiteJSON.list_id
  }
}