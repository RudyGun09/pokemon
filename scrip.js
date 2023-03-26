async function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const results = data.results;

      //get url result
      for (let i = 0; i < results.length; i++) {
        const address = results[i].url;
        // console.log(address);
        fetch(address)
          .then((respone) => respone.json())
          .then((data) => {
            const name = data.name;
            const image = data.sprites.front_default;
            const type = data.types[0].type.name;

            //create element to appenchild
            const wrapper = document.getElementById("wrapper");
            const wrap = document.createElement("div");
            wrap.id = "wrap";
            wrap.className = type;

            //Create and Update elemnt
            const title = document.createElement("h2");
            title.innerText = `Name: ${name}`;

            const img = document.createElement("img");
            img.src = `${image}`;

            const family = document.createElement("h3");
            family.innerText = `type: ${type}`;

            //create appenchild
            wrapper.appendChild(wrap);
            wrap.appendChild(title);
            wrap.appendChild(img);
            wrap.appendChild(family);
          });
      }
    });
}
