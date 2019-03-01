  fetch('')
    .then(response => response.json())
    .then((data) => {
      const Followers = data.
      const fraseMotivacionalAutor = data.contents.quotes[0].author


      // verifica array de followers
      Followers.forEach((sites) => {
          if (fraseMotivacionalPersonalizada) {
            alert(fraseMotivacionalPersonalizada)
          } else {
            alert(`${fraseMotivacional} \n \n ${fraseMotivacionalAutor}`)
          }
          history.back()
      });
  })
  .catch(error => console.error(error))
