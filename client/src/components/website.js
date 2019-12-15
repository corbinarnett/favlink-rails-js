class Website {

  constructor(websiteJSON) {
    this.title = websiteJSON.attributes.title
    this.link = websiteJSON.attributes.link
    // this.id = websiteJSON.id
    // this.title = websiteJSON.title
    // this.link = websiteJSON.link
    this.listTitle = websiteJSON.attributes.list.title
    this.listId = websiteJSON.attributes.list.id
  }
}



// "data": [
//   {
//     "id": "1",
//     "type": "website",
//     "attributes": {
//       "title": "How to Upgrade Your Spritz This Summer",
//       "link": "https://www.bonappetit.com/story/upgrade-your-spritz#intcid=recommendations_bon-appetit-riser-similar_9df2b699-0355-4fb2-a0d7-d3071c0c0f19_cral2-2",
//       "list": {
//         "id": 1,
//         "title": "Cocktails"
//       }
//     }
//   },
//   {
//     "id": "2",
//     "type": "website",
//     "attributes": {
//       "title": "Spaghetti with No-Cook Puttanesca",
//       "link": "https://www.bonappetit.com/recipe/spaghetti-with-no-cook-puttanesca",
//       "list": {
//         "id": 2,
//         "title": "Recipes"
//       }
//     }
//   },
//   {
//     "id": "3",
//     "type": "website",
//     "attributes": {
//       "title": "Eloquent JavaScript",
//       "link": "https://eloquentjavascript.net/",
//       "list": {
//         "id": 3,
//         "title": "Javascript"
//       }
//     }
//   }
// ]