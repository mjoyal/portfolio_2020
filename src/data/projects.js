const tacoDescription = 
`A food ordering experience for a single restaurant (Taco Takeout). 
Customers can visit this website, select one or more dishes and 
place an order for pick-up. They will receive a text notification 
when their order is ready.

When an order is placed the restaurant receives the order via SMS. 
The restaurant can then specify how long it will take to fulfill 
it via the admin screen. Once they provide this information, the 
website updates for the client and also notifies them via SMS.

This app uses the Twilio API service to implement SMS 
commuication from the website to the customer and restaurant.`;

const tacoStack = `Express, Node.js, jQuery, EJS, SCSS`;

const schedulerDescription = 

`Scheduler is a React based application that makes scheduling 
interview appointments easy & fun! Add, edit and delete appointments 
easily for any day of the week. 

Enter the name of the student and select an instructor. Form 
validation will stop any requests to the database if there is no 
student name entered or interview selected. If there are errors saving 
or deleting Scheduler will let you know with an error message.`;

const schedulerStack = `React, SQL, Express, Node.js`;

const tweeterDescription = `
Tweeter is a simple, single-page Twitter clone. Users are able to 
submit new tweets which will immediately make a request to the server 
and render the tweet on the page in reverse-chronological order. 
The tweet history will show tweets with a user name and avatar, the 
tweet content, and display the time elapsed since the tweet was posted. 

The single-page app is optimized for desktop and tablet views. The 
navigation contains an animated button that will hide and show the 
textarea that creates new tweets. The textarea will be focused when 
shown. When users try to submit a tweet without any text or with text 
greater than 140 characters, an error message will be shown. Finally, 
a dynamic counter will show to update the user on the amount of characters 
they have left.`;

const tweeterStack = `jQuery, AJAX, HTML5, and SASS`;

const notatorDescription = `A note formatting application and predefined content manager. Used 
to format notes to be used on customer accounts and leverage local 
history to save predefined content and customer note history.`;

const notatorStack = `Vanilla JS, HTML5, SCSS`;

const gameDescription = `I’m baby literally taxidermy selfies artisan. Four loko hell of church-
key chicharrones bitters. Brunch pug raw denim artisan, you probably 
haven’t heard of them post-ironic kinfolk cornhole forage biodiesel. 
Sartorial flexitarian intelligentsia jean shorts fam pinterest echo park cloud 
bread. Vinyl retro celiac man bun, pitchfork try-hard authentic XOXO`;

const gameStack = `React, Rails, SCSS`;

const projects = [

  {
    id: 1, 
    title: "Taco Takeout", 
    desc: tacoDescription,
    stack: tacoStack, 
    image: '', 
    link: 'https://github.com/mjoyal/taco-takeout'
  },

  {
    id: 2, 
    title: "Interview Scheduler", 
    desc: schedulerDescription,
    stack: schedulerStack, 
    image: '', 
    link: 'https://github.com/mjoyal/scheduler'
  }, 

  {
    id: 3, 
    title: "Tweeter", 
    desc: tweeterDescription,
    stack: tweeterStack, 
    image: '', 
    link: 'https://github.com/mjoyal/tweeter'
  }, 

  {
    id: 4, 
    title: "The Notator", 
    desc: notatorDescription,
    stack: notatorStack, 
    image: '', 
    link: ''
  }, 

  {
    id: 5, 
    title: "The CrewlyWed Game", 
    desc: gameDescription,
    stack: gameStack, 
    image: '', 
    link: ''
  }
]

export default projects; 