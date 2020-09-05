export default [
    {
        id: 1,
        title: 'A little about me',
        subtitle: 'The one about me',
        bodyOne: "My name is Tyson Elfors and I am from a small town in Utah called Grantsville. I enjoy playing sports, fishing, hunting, and all things technology. \
        My past javascript is contained to what I have learned here at UVU and from some freelance web development. My favorite part of web development is the fact \
        that I get to solve problems and be creative at the same time. I hope to gain a more in-depth knowledge about javascript because there are so many intricacies  \
        within the language, and who doesn't want to become a javascript wizard 🧙‍♂️?",
        tag: 'Info',
        imageUrl: 'https://images.pexels.com/photos/954289/pexels-photo-954289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Wednesday August 27, 2020'
    },
    {
        id: 2,
        title: 'The JAMstack',
        subtitle: 'The one about peanut butter and jam',
        bodyOne: "So what's this thing called the JAMstack? Well, it's a fairly new topic in the web development world that has created a lot of buzz. The stack \
        isn't so much about specific technologies like traditional stack i.e. (Lamp, Mern, Mevn, etc.), rather it is a new terminology. JAMstack stands for Javascript \
        Api's Markup. This new ecosystem of tools streamlines web development, delivers improved performance, higher security, lower cost of scaling, and a better developer experience.",
        tag: 'Stacks',
        imageUrl: 'https://images.pexels.com/photos/48817/jam-preparations-jars-fruit-48817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Wednesday August 27, 2020',
        imageUrlInPost: 'https://cdn-media-1.freecodecamp.org/images/uHGkEXe8lXJsmj6cZNQmIW3bpsEzn0mU9Eun',
        bodyTwo: 'But how exactly does this work? Well, JAMstack utilizes Javascript, Apis, and marku pto build blazing fast static sites that aren\'t all that static anymore. \
          This new set of modern technologies provides you with all of the featues you need to build static sites that appear to be dynamic sites. <br/> <br/> In most web architectures, the \
          front-end is coupled with the server. Each time you request a new page it as to contact the server, which gives you the data from the server and it is then parsed into HTML, \
          traveling through the network. <br/> <br/> When using the JAMstack, there isn\'t a need to build a page for each request. With JAMstack, the client requests the page once and is \
          delivered with the pre-rendered page. <br/> <br/> For example, my website is utilizing the JAMstack using nuxt that builds a server-rendered Vue.js application and SPA (best of both worlds) \
          and hosted over Netlify using a subdomian from my custom domain name. I wanted to use Nuxt, because like I said, it is the best of both worlds for a server-rendered application and single page \
          application. Also, I am familiar with Vue.js so it was an easy setup.',
    },
    {
        id: 3,
        title: 'Functions, Objects, and Arrays',
        subtitle: 'The one with wonderful javascript',
        bodyOne: '<b>Intro to Functions</b><br>A good way to think of a Javascript function is to think of a small computer program. We need functions in order to get our code to execute in Javascript. I often think of functions as a recipe, you start with certain set of ingredients, then follow certain steps using the ingredients, then you will get a finished product. With that being said, functions will usually take some kind of input and return an output, however it doesn\'t always have to be structured this way. <br><br>',
        tag: 'Javascript',
        imageUrl: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Saturday September 5, 2020',
        imageUrlInPost: 'https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        bodyTwo: `<br><b>Callback Functions</b><br>A callback function is simply a function that is passed as an argument to another function and can be called at a later time. This can be useful in order to write cleaner, more maintainable code. Another reason callback functions are useful is in situations when we need code to execute after a certain event and not necessarily sequentially, this is called Asynchronous Javascript.
        Here is an example -- <br><pre><code>
        function ourSum(numOne,numTwo){
            return numOne+numTwo
         }
         function calculate(numOne,numTwo,ourSum){ //ourSum is the call back function here
                return ourSum(numOne,numTwo);
          }
         var result = calculate(5,6,ourSum);
         console.log(result); // 11
        </code></pre>
        <br><b>Promises</b><br>Promises are usually used for a simpler way of handling asynchronous or blocking code, for things like, API calls, DB calls, file operations, etc. They work like promises do in real life, either the promise will be fulfilled or not. If it is fulfilled then you receive what ever was promised to you, if it isn\'t fulfilled there is a reason why it wasn\'t. Well, I guess that depends on the kind of people you are making promises with, luckily in Javascript we are always guaranteed one or the other. \
        <br><br><b>Objects</b><br>A simple definition of objects, is a collection of the same kind or different kinds of data. Objects contain key value pairs where the keys act similarly to the variable name and the values are the values of that key. The values can contain any javascript data type. Objects are defined using curly braces {}. You can easily loop through object using methods like (Object.keys, Object.values, Object.entries) \
        <br><br><b>Arrays</b><br>Arrays are objects that can hold different data types. An array also acts as a list, a queue or a stack in JavaScript. Arrays can have items of the same data type or a mixture of different data types. Arrays are defined using brackets []. Some common ways to loop through arrays are by using a for loop, forEach, map, etc. \
        <br> Example of for loop looping an array -- <pre><code>
            let myArray = ["Hello","World"];
            let arrayLength = myArray.length;
            for (let i = 0; i < arrayLength; i++) {
                console.log(myArray[i]);
                //Do something here
            }
        </code></pre>
        <br><b>Hightlight: Fetch</b><br> Using the fetch api is basically like sending a letter to another api and asking them to give you specific information back. If they can successfully find the information they will respond with the specified information. If not, they will respond with an error.
        <pre><code>
        fetch(url)
        .then(response => {
            // handle the response
        })
        .catch(error => {
            // handle the error
        });
        </code></pre>
        `,
    },
    {
        id: 4,
        title: 'My fourth post',
        subtitle: 'this is my fourth post',
        body: 'The one fourth post',
        tag: 'Info',
        imageUrl: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Wednesday August 27, 2020',
        imageUrlInPost: '',
        bodyTwo: '',
    },
]