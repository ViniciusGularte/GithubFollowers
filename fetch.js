  var followers = []

  fetch('https://api.github.com/users/viniciusgularte/followers')
    .then(response => response.json())
    .then((data) => {
      // verifica array de followers
      data.forEach((follower) => {
          followers.push(follower.login)
      });
  })
  .catch(error => console.error(error))
