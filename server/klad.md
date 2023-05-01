# checklist

[√] API calls are working for favorite recipes;
[√] connection with MongoDB successfull;
[√] API calls for getting recipes is working;
[√] get random recipe connected to frontend button;
[√] added and refactored Quiz relevant code in store/reducers/recipeReducers.ts for api call;
[√] back/next buttons in quiz;
[] setting up quizzzzz

[] see if we can convert the imperial to metric https://spoonacular.com/food-api/docs#Convert-Amounts

to do:
- start quiz button koppelen aan quiz
- bij allergies meerdere opties kunnen selecteren
- laatste next button moet anders heten
(- voortgang)

type?: string, diet?: string, intolerances?: string, cuisine?: string

What are you in the mood for?
- main course
- breakfast
- dessert
- snack

Any diet preferences?
- Gluten Free
- Keto
- Vegetarian
- Vegan
- Pescetarian
- Paleo


Any allergies/intolerances we should know of?
- Dairy
- Egg
- Gluten
- Grain
- Peanut
- Seafood
- Sesame
- Shellfish
- Soy
- Sulfite
- Tree Nut
- Wheat

How much time do you have?
- < 30
- < 60
- > 60

//////////Authentication Firebase step by step//////
- created project; https://firebase.google.com/
- project created; recipe-roulette-auth
- did not add google analytics for now
- frontend; npm install firebase. npm install @types/firebase --save-dev
- backend; npm install firebase-admin, --> npm install @types/firebase-admin hoeft niet! Heb ik opgezocht. firebase-admin komt al met typescript.
- register app on firebase 'recipe roulette'
- created services folder
- created firebase.ts file to connect with firebase
- created component/auth folder
- created signIn.tsx file  --> I use SignIn instead of LogIn because that is default for Firebase!
- created signUp.tsx file
- tested both components. created account for e***@gmail.com pw. --> worked
- created authDetails.tsx which handles the state of the user. In case user is signedIn it can be signedOut. 
- all is imported in the HomePage.tsx, with the next commit fix the layout/buttons, etc. 
