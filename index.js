import express from 'express'
const app = express();

const port = process.env.PORT || 5000;
app.use(logger)
function logger(req, res, next) {
      var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                   /* GET HOURS OF THE DAY */
      var hours = new Date().getHours();
         /* GET THE DAY  */
            const event = new Date();
            const options = { weekday: 'long' };
            var day = event.toLocaleDateString('en-US', options)


                  if (weekDay.includes(day)) {
                        if (hours < 17 && 9 < hours) {
                  
                        next();
                  } else {
                  res.send("Closed! Please contact us later");
                        }
                        
                  } else {
                        res.send("Closed! We don't work in weekends! Please contact us later");
                  }
      }
            
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
      res.render(
            'Home',
            {title:'Home'}
      )
});

app.get('/views/contact.pug', (req, res, next) => {
      res.render(
            'contact',
            {title:'contactUs'}
      )
});


app.get('/views/services.pug', (req, res, next) => {
      res.render(
            'services',
            {title:'contactUs'}
      )
});


app.listen(port, (err) => {
      err ? console.log(err) : console.log(`app running on http://localhost:${port}`)
});