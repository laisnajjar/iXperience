const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function fetchPosts() {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/jsonn',
    },
  })
  return res.json()
}

function printPosts(posts) {
  let html = '<ul>'
  for (let post of posts) {
    html += '<li>' + posts.title + '</li>'
  }

  html += '</ul>'
  document.body.innerHTML = html
}

async function fetchAndPrintPosts() {
  try {
    const posts = await fetchPosts()
    printPosts(posts)
  } catch (err) {
    console.log(err)
  }
}

async function createPost(post){
    const response = await fetch(url, {
        method: "POSTS",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })

    return response.json();
}

fetchAndPrintPosts()
const newPost = {
    title: 'foo',
    body: 'bar',
    userID: 1,
}
createPost(newPost).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
// fetchPosts()
//   .then((posts) => {
//     console.log(posts)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
