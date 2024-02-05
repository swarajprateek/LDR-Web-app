

$(document).ready(function() {
    // async function getData(url){
    //     const res = (await fetch(url)).json();
    //     const data = Promise.all(
    //       res.data.files?.map(item=>item.file)
    //     );
    //     return data
    // }
    // console.log(getData('/images'));
    fetch('/images')
    .then(response => response.json())
    .then(data => {
      const imageContainer = document.getElementById('imageContainer');
      data.forEach(imageUrl => {
        const img = document.createElement('img');
        img.classList.add('photo');
        img.src = imageUrl;
        img.alt = 'Uploaded Image';
        imageContainer.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Error fetching image URLs:', error);
    });
  // async function getData(url){
  //  const data = fetch(url
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }).then(function(response){
  //       console.log(response)
  //       return response.json();
  //     }).then(function(myJson){
  //       console.log(myJson);
  //       return myJson.data;
  //     })

  //   return data;
  //   }
  //  var data = getData('/images').then(function(data){
  //     return data.Data
  //   }).then(function(result){
  //     console.log(result.map(item=>item.file))
  //   })
  // console.log(data);
    
    let imagesPreview = function(input, placeToInsertImagePreview) {
      if (input.files) {
        let filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          let reader = new FileReader();
          reader.onload = function(event) {
            $($.parseHTML("<img>"))
              .attr("src", event.target.result)
              .appendTo(placeToInsertImagePreview);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $("#input-files").on("change", function() {
      imagesPreview(this, "div.preview-images");
    });
  });
  