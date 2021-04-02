## Server Side Rendering 
__Angular Universal__ is the technology responsible for Server Side Rendering in Angular. 
You can easily prepare an app for server-side rendering using the Angular CLI. 

To create the server-side module, `app.server.module.ts`, run the following CLI command 
```
> ng add @nguniversal/express-engine
``` 
This command will install the following packages 
* `@angular/platform-server`
* `@nguniversal/express-engine`
* `express`
* `@nguniversal/builders` 
* `@types/express`  

the comand will also generate 
* `server.ts` 
* `tsconfig.server.json`  
* `src/main.server.ts`  
* `src/app/app.server.module.ts` 

and it will modify 
* `angular.json` by adding a `server` block to the json file and updating the `outputPath` of the `build.options` block 
* `src/main.ts` 
* `src/app/app-routing.module.ts` 
* `src/app/app.module.ts` 

and new commands will be added to `package.json` scripts to run the server.  
To see a snap shot of the diff, take a look at the commit [38160a8](https://github.com/Tochukz/Angular/commit/38160a8cef2ffeb13ed5463713d8ec12ed82a371)

To start rendering your app with Universal, you can run the command 
```
> npm run dev:ssr
```
Note that this command is for the development server and not for production.
