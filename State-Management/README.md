# Angular State Management
## NGRX Store  
__Installation of the store module__  
To install using `npm`
```
$ npm install @ngrx/store --save
```  
For projects using Angular CLI 6+, you can also install using `ng`
```
$ ng add @ngrx/store@latest
```  
If your Angular App is an older version say Angular v6 for example, you must install a compatible version of the store  
```
$ ng add @ngrx/store@6.1.2
```  
This will
* Install `@ngrx/store`
* Update `AppModule`'s `imports` to include the `StoreModule`  
* Generate `src/app/reducers` directory with a single reducer, `index.ts`

See [ngrx/store installation](https://ngrx.io/guide/store/install) for other flags and options for the `ng add @ngrx/store` command

For documentation on older version see [ngrx v7 Docs](https://v7.ngrx.io/guide/store)

__Installation of the effects module__  
To install using `npm`  
```
$ npm install @ngrx/effects
```
For project using Angular CLI 6+, you can also install using `ng`  
```
$ ng add @ngrx/effects@latest
```  
This will install `@ngrx/effects` and add the `EffectsModule` to the `AppModule`'s imports' array.  

See [ngrx/effect installation](https://ngrx.io/guide/effects/install) for flag and options for the `ng add @ngrx/effects@latest` command.


__Installation of the dev-tools module__   
Install using `npm`
```
$ npm install @ngrx/store-devtools
```
Install using `ng` for Angualar CLI 6+   
```
ng add @ngrx/store-devtools@latest
```
This will install the `@ngrx/store-devtools` package and add the `StoreDevtoolsModule` to the `imports` array of `AppModule`.

See [store-devtools install](https://ngrx.io/guide/store-devtools/install) for more installation options flags.

Ngrx dev tool works with the `Redux Dev Tools` chrome extension, allowing you to inspect your state in the browsers developer tool. 
