
What I did while working on this task includes the below:

# 1-	Migration to the App router:
a- I created a folder called App and created all routes in that folder.
b- Deleted all routes in the pages folder , and deleted the app.tsx and document.tsx as well.
2-	Implemented Authentication without using NextAuth:
a-  Created a login route handler under the App/[locale]/api folder, where I have created a POST handler that handles incoming login requests. It Simply validated the username & password against the values “user” & “password” for username and password respectively. If the values match, a new token will be generated and a response object will be returned to the client side including a message “login successful” and the generated token.
b- On the Front-end I receive the response of the login route handler and check if it is successful, I will login the user and route them to the home page, and set a copy of the access token in the AppContext, so that it is globally available on the application level if needed.
c- In the Home Page there is a Log out button. When clicked it sends an http request to the logout route handler which deletes the token from the browser cookies and then returns a success response to the front-end.
d- On the front-end side once I receive a successful logout status, I route the user back to the login page.
e- If the user tries to access a protected route like the comments page for example while he is not logged in, the middleware will redirect the user to the login page to force him to login first.
3-	Internationalization:
a- Implemented Next JS built-in Internationalization feature with 2 locales “en-US” & “ar-EG”.
b- Created a middleware file that checks the incoming request and detects if the url includes a locale or not.
c- if the url has a locale the user will be normally directed to the requested route.
d- if the url does not include a locale then a default locale will be added which is the “en-US” locale, then the user will be redirected to the requested route.
4-	Multi-language support:
a- Enabled multi-language support ( Ar – En ) ,without using i18n,  in the login page only for the sake of simplicity and time saving.
b- Please find the JSON translation files in the dictionaries folder under the app/[locale] folders.
5-	Code analysis & improvement:
a- I was mainly focused on implementing the required features without depending on the written code.
6-	Removed Redux/Redux toolkit completely from the project and used the Context API only when needed.
7-	TailwindCSS Design:
a- Impelmented the attached Figma design in light & dark modes using Tailwind CSS & Shadcn UI, but I did not make it responsive deliberately for the sake of simplicity and time saving.
b- you can access the designed page by clicking the “Tailwind page” link in the Navbar, but make sure to login first using “user” as a username and “password” as a password.
8-	Responsive design (bonus-task):
a- As mentioned above, I preferred to focus on implementing the required UI & features without implementing a responsive design just to save more time.
9-	SEO & MetaData:
a- Implemented the title & description metadata to all routes.
10-	Comments:
a- Created a comments api route handler under the app/[locale]/api folder.
b- Created a data.js file where I store an array of comments and an array of users where each user has one or more comments.
c- In the route handler file I am fetching the comments from the data.js file depending on the pageNumber and pageSize. The pageNumber is already included in the GET request payload and I assumed the pageSize to be 10 comments.
d- Implemented pagination by sending a pageNumber in the payload of the GET http request to comments route handler and using that page number I am sending the comments as explained above.
e- In the Comments page, I added a button called “load more comments” , each time the button is clicked a new http request is sent to the comments api to get more comments. It basically fetches the next page of comments until all comments are loaded, then the button is removed from the UI.
f- Implemented a POST comment route handler, so that users can submit and add new comments. I assumed that the userId is always = “1”
g- I kept the input validation that makes sure the comment is not an empty value.
h- After the POST comment request is sent in the route handler I create a new comment object with a new id, then push the newly created comment object to the comments array in the data.js file, so it is all a temporary memory just for demonstration purposes.
11-	Testing:
a- I decided to focus on implementing the required features & UI and just implement manual testing.
12-	Deployment ( bonus-task):
a- I did deploy the project to Vercel and here is the deployed version : https://massaq-assignment.vercel.app/
b- However, I realized that the deployed version of the app is not consistent when it comes to performance & routing for some reason, even though everything seems to be in order when it comes to the deployment process itself.
c- I prefer that you download the project and run “npm install”, then “npm run dev” to run the app on the dev server instead of testing it on the deployed version.

