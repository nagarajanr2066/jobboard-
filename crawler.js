const axios = require("axios");
const cheerio = require("cheerio");

// Function to fetch job listings
const fetchJobListings = async (keyword) => {
  const url = `https://www.example.com/jobs?q=${keyword}`; // Replace with actual job site URL
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const jobListings = [];

  // Extract job details (modify selectors based on actual site structure)
  $(".job-listing").each((index, element) => {
    const jobTitle = $(element).find(".job-title").text();
    const company = $(element).find(".company").text();
    const location = $(element).find(".location").text();
    const experience = $(element).find(".experience").text();
    const applicationLink = $(element).find("a").attr("href");

    jobListings.push({
      jobTitle,
      company,
      location,
      experience,
      applicationLink,
    });
  });

  return jobListings;
};

// Example usage
fetchJobListings("Product Manager")
  .then((listings) => {
    console.log(listings);
  })
  .catch((err) => {
    console.error("Error fetching job listings:", err);
  });
