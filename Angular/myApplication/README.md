to install latest version of angular : npm i -g @angular/cli
to install angular cli bersionwise: npm i -g @angular/cli@16
to check installed or not : ng v
 
create project : ng new projectName

failure: delete node_modules folder and regenerate it by : npm i or npm install or 
if node_module not present in structure then create new project

to run project, always open terminal on project folder
: ng serve or ng s or  ng serve --open or ng s -o
-o means application will get opened on default browser


to resolve pwershell unauthorized issue:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 

What is the use of README file: In this file, we do not write programs or code. We can write notes/ messages for team members or ourselves.


Now, coming to all folder under Angular--myApplication
1- .angular,  2- .vscode folders are catches , so not much impact

3-node_modules- This folder contains all npm packages. This folder is generated locally, so we do not push it on git
More the project grows, more dependencies increase, so high size will be there, so git push pull takes more time.

6- .gitignore- Here we write files that needs to be ignored for git. If we do any changes in node_modules file, then those changes will not get reflected in source control tree because git ignores that. so changes cannot be pushed in git. Put the files in gitignore, which will not get pushed or pulled on git

After taking pull from Poonam mam's branch, if I want to run the code, I will 1st have to install npm packages and then run the code
npm i , then ng s -o
then only you can run code locally on vs code

if node_module is corrupt or not available, then u can never run a project successfully

5- angular.json- This file is backbone of angular application. Project name, configuration , what to do to run, serve- opens server and processes, test etc, all data is there in this file


7- package.json: This file contains all dependencies. Which 3rd party libraries are used in project- Bootstrap, angular material used or not are this can be seen in dependencies header inside package. json file.


tsconfig.app.json, tsconfig.json,  tsconfig.spec.json are configuration files

package-lock.json- Meta data of dependencies in package.json is present here. Contains in detail explanation of dependencies.


src- src folder is most important for developer-

i) app- Its a root folder. This folder has following-
a- app-routing.module.ts- Its a root routing module
b-app.component.css
c-app.component.html
d-app.component.spec.ts
e-app.component.ts
f-app.module.ts- Its a root module
Angular is component based architecture.
1 component is made up of 4 files-app.component.css,  app.component.html,   app.component.spec.ts  , app.component.ts


main.ts is entry point for angular JS execution tehn goes to app module- 6 files then goes to index.html
In index.html, app-root is used as tag which is a seklector is app.component.ts, then it loads app.component.html which we can see in UI


assets folder contains public data like wallpaper, icon etc. This we want to show to public, so we keep such data in asset


style.css - Project background, screen backgroynd, color, header, footer. This is written in style.css

Angular is single page application because at the end only index.html is there on UI. Body gets over written as Components gets over written. Screen changes but application does not bet refreshed.





