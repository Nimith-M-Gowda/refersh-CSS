```javascript
* {
    margin : 0 px;
    padding : 0 px;
}
body {
   color : #444;
   font-family : sans-serif;
   line-height : 4px;
}
.container {
    width : 700 px;
    margin : 0 auto ;
}
```

#### absolute vs relative position :

if we need to put one small component say button. to any particular position inside a container. then set that button as

```javascript
button {
position : absolute ;
bottom : 20 px ;
right : 20 px ;
}
```

and now set container as

```javascript
.container {
    position : relative ;
}
```
