# Angular State Management
## NGRX Store  
__Installation__  
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

See [ngrx installation](https://ngrx.io/guide/store/install) for other flag options for the `ng add @ngrx/store` command

For documentation on older version see [ngrx v7 Docs](https://v7.ngrx.io/guide/store)

__Install Dev Tool__   
Install using `npm`
```
$ npm install @ngrx/store-devtools
```
Install using `ng` for Angualar CLI 6+   
```
ng add @ngrx/store-devtools@latest
```

See [store-devtools install](https://ngrx.io/guide/store-devtools/install) for more options
