export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  let portland = server.create('city', {
    name: 'Portland',
    description: "Portland (/ˈpɔːrtlənd/) is the largest city in the U.S. state of Oregon and the seat of Multnomah County. It is located in the Willamette Valley region of the Pacific Northwest, at the confluence of the Willamette and Columbia Rivers. The city covers 145 square miles (380 square kilometers) and had an estimated population of 632,309 in 2015,[7][9] making it the 26th most populous city in the United States. Approximately 2,389,228 people live in the Portland metropolitan statistical area (MSA), the 23rd most populous MSA in the United States. Its Combined Statistical Area (CSA) ranks 17th with a population of 3,022,178. Roughly 60% of Oregon's population resides within the Portland metropolitan area.[10]"
  })

  let nyc = server.create('city', {
    name: 'New York City',
    description: "New York, NY ... the city so great, they named it twice... nuff said!"
  })

  let pearl = server.create('neighborhood', {
    name: 'Pearl',
    description: "Trendy and upscale, the Pearl is where you will find fancy restuarants and hi-rise apartments for rent",
    city: portland
  })
}
