const handler = true;


new promise((resolve, reject) => {
    setTimeout(() => {
        if (handler === true) {
            resolve('resuelto');
        } else {
          reject('No resuelto');
        }
    }, 3000);

})
.then((response) => {
   console.log(response);
});