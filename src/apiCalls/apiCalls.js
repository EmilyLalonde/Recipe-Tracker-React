export const recipeByName = async(letter) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  const response = await fetch(url)
  if(!response) {
    throw new Error('Error returning your data')
  }
  const data = await response.json()
  return data.meals
}