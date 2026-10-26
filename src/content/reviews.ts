/** Review counts as shown on the Google Business Profile and Yelp page.
 *  Every rating line on the site reads from here, so a new review means one
 *  edit, not eleven. Keep the two platforms separate: a combined count would
 *  be a number neither platform shows. */
export const reviewCounts = { google: 26, yelp: 6 } as const;

/** "5.0 on Google (26) and Yelp (6)" — fact strips, badges, tight spaces. */
export const ratingShort = `5.0 on Google (${reviewCounts.google}) and Yelp (${reviewCounts.yelp})`;

/** "5.0 on Google (26 reviews) and Yelp (6 reviews)" — running copy. */
export const ratingLong = `5.0 on Google (${reviewCounts.google} reviews) and Yelp (${reviewCounts.yelp} reviews)`;
