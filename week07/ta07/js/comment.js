export default class Comments {
  commentList = [];
  constructor(name, date, content, type) {
    this.name = name;
    this.date = date;
    this.content = content;
    this.type = type;
  }
  
  loadList() {
    let temp = JSON.parse(localStorage.getItem("comments"));
    if (temp != null) this.commentList = temp;
  }

  // create function to get all comments
  getAllComments(type) {
    const hikeComments = [];
    for (let comments of commentList) {
      if (commentList.type === "hike") {
        hikeComments.push(comments);
      }
    }
    return hikeComments;
  }

  renderCommentList(hikename) {
    let list = document.createElement("ul");
    //this.commentList.forEach(element => {
    this.filterCommentsByName(hikename).forEach((element) => {
      console.log(element);
      let item = document.createElement("li");
      item.innerHTML = `<p>${element.content}</p>`;
      list.appendChild(item);
    });
    console.log(list);
    return list;
  }
  filterCommentsByName(hikename) {
    return this.commentList.filter((comment) => comment.name == hikename);
  }

  addComment(hikename, commentText) {
    this.commentList.push({
      name: hikename,
      date: new Date(),
      content: commentText,
    });
    console.log(this.commentList);
    localStorage.setItem("comments", JSON.stringify(this.commentList));
  }
  
}
