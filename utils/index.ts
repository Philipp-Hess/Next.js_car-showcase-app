export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "85209e03damsh6a4d963c9c90cd2p15e220jsnabbc37892512",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
