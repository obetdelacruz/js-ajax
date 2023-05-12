const apiKey = "9S7Rxx4vlv9ntvBA20rSVNG7hudSRLr8lko2hD1vxwgHdlV0eeEYNhxK";

async function fetchImages() {
  try {
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=landscape&per_page=9",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const rawData = await response.json();
    const images = rawData.photos.map((photo) => {
      return `
        <img src="${photo.src.large2x}" alt="${photo.photographer}" />
        
      `;
    });

    console.log(rawData);

    return rawData;
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchImages;
