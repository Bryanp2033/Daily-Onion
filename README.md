# Daily-Onion
A web application using cheerio and mongo to scrap data from The Onion to provide a daily feed for the user.

# Concept:

This project idea came to mind when working alongside the node packages request and cheerio. This allowed me to do web scraping on what website I pleased. With this idea in mind, I decided to build a website that scrapes the only latest articles of the Onion and provide a more visual and fast experience for the user to digust their daily fix of onion articles faster.

# Front Page and Scrape Button

Upon entering the website, users finds themselves upon the front page which displays a navbar for quick navigation and a scrape button that will start up the functionality of the website and start the web scraping process of the Onion website.

![Front Page and Scrape Button](/gifs/scrape-button.gif "Front Page and Scrape Button")


# Saving Articles

Since the scrape button scrapes the latest feed of onion articles everyday, the save articles button allows the feature to save or "favorite" an article of the user's choice and that article will disappear from the front page and make it's way to the saved articles page.

This is possible by first saving the article to a mongo collection in which has a custom default false boolean of "saved". Once the save button is clicked, in the backend the current selected article's saved boolean is changed to true and in the saved articles page will only display articles with the "saved" boolean of true.

![Saving Articles](/gifs/saving.gif "Saving Articles")

# Saved Articles Page

When clicking on the saved articles tab on the navbar, the page will navigate to the /saved route in which displays the the articles that the user has saved/"favorite".

![Saved Articles Page](/gifs/saved-articles.gif "Saved Articles Page")

# Delete and Write Note Button

On the saved articles page, the articles that are saved can be deleted from the page and within the mongo database

![Delete Button](/gifs/delete.gif "Delete Button")

The Write Note Button allows the user to write a note for the selected saved article and save it. The feature allows the user to not only have saved articles on a page but have a message attached that the saved article. This was implemented if the user wanted a feature to note down and write custom message on why that article was saved.

![Write Note Button](/gifs/write-note.gif "Write Note")

# Technologies Used:

- Express
- Node
- express-handlebars
- MongoDb with Mongoose 
- body-parse node package
- cheerio node package
- request node package
- Bootstrap v4
- HTML 5
- CSS3