const app = require('./app');

app.listen(app.get('PORT'),()=>{
    console.log(`server is active in http://localhost:${app.get('PORT')}`);
});