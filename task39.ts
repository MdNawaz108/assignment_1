/**
 * Task # 39
 * City Names: Write a function called city_country() that takes in the name of a city and its country.
 * The function should return a string formatted like this:
 * "Lahore, Pakistan"
 * Call your function with at least three city-country pairs, and print the value that’s returned.
 * Date : 10/02/2022
 */
console.log("\nTask # 39\n");

function city_country(cityName: string, countryName: string) {
  console.log(`"${cityName}, ${countryName}"`);
}

city_country("Karachi", "Pakistan");
city_country("Kolkata", "Bangladesh");
city_country("Dehli", "India");
