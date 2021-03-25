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
Since I am using Angular CLI 6.0, I will install a compatible version of the store  
```
$ ng add @ngrx/store@6.1.2
```  
This will
* Install `@ngrx/store`
* Update `AppModule`'s `imports` to include the `StoreModule`  
* Generate `src/app/reducers` directory with a single reducer, `index.ts`

See [ngrx installation](https://ngrx.io/guide/store/install) for other flag options for `ng add @ngrx/store` command
