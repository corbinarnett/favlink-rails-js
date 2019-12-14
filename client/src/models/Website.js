class Website {
  static all = []
  constructor(title, link) {
    this.title = title;
    this.link = link;
    Website.all.push(this);
  }
}
