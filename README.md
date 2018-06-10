I thought I’d challenge myself to use Google’s Firebase cloud services for it’s database, hosting and storage offerings in a single project. I was curious to see how combining all that in one place would work out.

I’ve loved going to National Parks here in the US for a long time so I decided to use the National Park Service api for most of the individual parks’ info. I grabbed the location data from that api as parameters feeding the OpenWeather’s api for additional weather information.

I used firebase firestore as the database backend, firebase storage for all images, and hosted it all on the firebase hosting service. Vuex and axios were used for populating/managing components.

And goes without saying, all this was made possible with Vue…!
