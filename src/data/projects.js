const tacoDescription = 
`A food ordering experience for a single restaurant (Taco Takeout). 
Customers can visit this website, select one or more dishes, and place an order for pick-up. 
They will receive a text notification when their order is ready.
\n
When an order is placed the restaurant receives the order via SMS. 
The restaurant can then specify how long it will take to fulfill it via the admin screen. 
Once they provide this information, the 
website updates for the client and also notifies them via SMS.`;

const tacoStack = `Express, Node.js, jQuery, EJS, SCSS`;

const schedulerDescription = 

`Scheduler is a React-based application that makes scheduling 
interview appointments easy & fun! Add, edit, and delete appointments 
easily for any day of the week. 
\n
Enter the name of the student and select an instructor. Form 
validation will stop any requests to the database if there is no 
student name entered or interview selected. If there are errors when 
saving or deleting Scheduler will let you know with an error message.`;

const schedulerStack = `React, SQL, Express, Node.js`;

const tweeterDescription = `
Tweeter is a simple, single-page Twitter clone. Users can
submit new tweets which will immediately post data to the server 
and render the tweet on the page in reverse-chronological order. 
\n
When users try to submit a tweet without any text or with text 
greater than 140 characters, an error message will be shown. 
a dynamic counter will update the user on the amount of characters they have left.`;

const tweeterStack = `jQuery, AJAX, HTML5, and SASS`;

const notatorDescription = `A note formatting application and predefined content manager. Used 
to format notes to be used on customer accounts and leverage local 
history to save predefined content and customer note history. After deploying the application, 
the call centre saw a 33% gain in call time efficiency. 
`;

const notatorStack = `Vanilla JS, HTML5, SCSS`;

const gameDescription = `The newlywed game for you and your "crew"! Test your knowledge of your crew with this live browser-based game! A live-updating interactive React-based game. 
Users are able to join different game rooms in order to play with their friends. Live updates are achieved with websocket technology and rooms from the Socket.io API.`;

const gameStack = `React, Socket.io, React Router, SCSS, Express, Node, Postgres`;

const projects = [
  {
    id: 1, 
    title: "The CrewlyWed Game", 
    desc: gameDescription,
    stack: gameStack, 
    image: 'images/crewly-project.png', 
    link: ''
  },

  {
    id: 2, 
    title: "Taco Takeout", 
    desc: tacoDescription,
    stack: tacoStack, 
    image: 'images/taco-project.png', 
    link: 'https://github.com/mjoyal/taco-takeout'
  },
  {
    id: 3, 
    title: "The Notator", 
    desc: notatorDescription,
    stack: notatorStack, 
    image: 'images/notator-project.png', 
    link: ''
  }, 
  {
    id: 4, 
    title: "Interview Scheduler", 
    desc: schedulerDescription,
    stack: schedulerStack, 
    image: 'images/scheduler-project.png', 
    link: 'https://github.com/mjoyal/scheduler'
  }, 

  {
    id: 5, 
    title: "Tweeter", 
    desc: tweeterDescription,
    stack: tweeterStack, 
    image: 'images/tweeter-project.png', 
    link: 'https://github.com/mjoyal/tweeter'
  }, 

]

export default projects; 