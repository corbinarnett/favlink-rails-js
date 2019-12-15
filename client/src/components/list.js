class List {
  constructor(listJSON) {
    // this.id = listJSON.id
    // this.title = listJSON.title
    this.id = listJSON.attributes.id
    this.title = listJSON.attributes.title
  }
}



// {
//   "data": [
//     {
//       "id": "1",
//       "type": "list",
//       "attributes": {
//         "title": "Cocktails",
//         "id": 1
//       }
//     },
//     {
//       "id": "2",
//       "type": "list",
//       "attributes": {
//         "title": "Recipes",
//         "id": 2
//       }
//     },
//     {
//       "id": "3",
//       "type": "list",
//       "attributes": {
//         "title": "Javascript",
//         "id": 3
//       }
//     }
//   ]
// }