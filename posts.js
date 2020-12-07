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
        title: 'Advanced Functions',
        subtitle: 'The one with functions everywhere',
        bodyOne: '<b>Intro to advanced functions</b><br>Advanced functions bring on the topic of recursion, stack, rest parameters, spread syntax, variable scope, and closures. Although these are considered some more advanced topics when it comes to functions, they are rather easy to get the hang of. We will talk more about why these topics are important for a syntactically sweet functions.<br><br>',
        tag: 'Info',
        imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Saturday September 12, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>Recursive Functions</b><br>A recursive function is simply a function that calls itself. This may by wierd at first to think about but it is important to remember in javascript that functions return values so at their core, a function is just a value. Often times we use a recursive function as an iterator that will continue executing until a base case is reached. Like any iteration we must have a base case so that javascript knows when to stop executing. <br>
        Here is a good use case for recursion. -- <br><pre><code>
        function factorial(num){
            if(num === 1) return 1;
            return num * factorial(num-1);
        }
        </code></pre>
        <br><b>Scopes and Closures</b><br>Scope refers to where variables and functions can be accessed/executed from. Global scope variables and functions can be accessed from anywhere inside your code. With local scope, variables and functions can only be accessed from within the function they were declared. Closures are when a function can access the scope of another function within the same function that it was declared in. These are important topics to understand to save you from hours of debugging and being able to write more complex, concise code. \
        <br><br><b>Spread Operator</b><br>Javascript was given a makeover with the release of es6, one of the features revealed in the makeover was the spread operator. The spread operator is easy to structure with simple adding “...” three dots followed by the variable you are working with. Some of the uses of the spread operator are: copying an array, creating arrays from characters in a string, concatenating arrays, destructuring objects, and adding items to an array. \
        <br> Example of the spread operator -- <pre><code>
        // spread operator concatenating arrays
        let arr = [1,2,3]; 
        let arr2 = [4,5]; 
          
        arr = [...arr,...arr2]; 
        console.log(arr); // [ 1, 2, 3, 4, 5 ] 
        </code></pre>
        <br><br>
        <pre><code>
        // spread operator for copying arrays 
        let arr = ['a','b','c']; 
        let arr2 = [...arr]; 
          
        console.log(arr); // [ 'a', 'b', 'c' ] 
          
        arr2.push('d'); //inserting an element at the end of arr2 
          
        console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 
        console.log(arr); // [ 'a', 'b', 'c' ] 
        </code></pre>
        `,
    },
    {
        id: 5,
        title: 'Todo App',
        subtitle: 'The one with Todo\'s',
        bodyOne: '<b>My Todo App</b><br>My attempt at a todo app using vanilla js was fun and educating experience.<br><br>',
        tag: 'App',
        imageUrl: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Saturday September 27, 2020',
        imageUrlInPost: 'https://i.imgur.com/XGUBNJB.png',
        bodyTwo: `<br><b>How it works</b><br>My app was built with a small amount of initial HTML and CSS, with a lot of Javascript. I utilized JS to add most of my markup by creating elements and appending those elements to parent containers. I found this approach to be rather easy since I have worked with it previously. However, there are definitely easier approaches than the way I built it after doing more research. I only had about 5 hours to build the app so I stuck with what I was familiar with in order to accomplish the task. I went with a very simplistic approach with my design that doesn’t require the user to manage many controls. Simple and straightforward was my style of building the app.Todo’s can be added by simply typing in the title and category of the todos. Categories are dynamically sorted based on user input. Each todo can be clicked on to cross off the todo as complete. Each todo also can be deleted by pressing on the delete button next to each todo item. Hiding done todos can be performed by pressing the button above the todo’s.<br>
        This is how my todo's were created. -- <br><pre><code>
        let li = document.createElement('li')
        li.setAttribute('id', \`tag\${todo.id}\`)
        li.addEventListener('click', doneTodo)
        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute('class', 'deleteBtn')
        deleteBtn.setAttribute('id', \`deleteBtn\${index}\`)
        deleteBtn.addEventListener('click', deleteTodo)
        li.innerText = todo.todo
        let ulToAppend = document.querySelector(\`.\${todo.category}List\`)
        ulToAppend.appendChild(li)
        li.appendChild(deleteBtn)
        </code></pre>
        <br><b>Challenges I faced</b><br>My biggest challenge were the time constraints I had in order to build the application. Between other classes and work I only had a total of about 4-5 hours to work on this assignment. I am planning on refactoring some of my code to be simpler and more bug free. Another challenge was trying to implement local storage. This was something I have never done before so I had to do a little bit of research on how to tackle this task. This was a fun project and I learned a ton about javascript and manipulating the DOM.\
        <br><br><b>What I would do differently</b><br>Like I mentioned I would love to spend more time on the project and build it in a more concise style. When I have more time I plan on creating the same app and use what I learned to fix some of the sloppy code and compare it with this application.`
    },
    {
        id: 6,
        title: 'NodeJs',
        subtitle: 'The one with server side JS',
        bodyOne: '<b>Why NodeJs</b><br>What exactly is Nodejs? Why should we use it? Join me as we take a dive into the world of javascript outside of the browser.<br><br>',
        tag: 'Server',
        imageUrl: 'https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday October 11, 2020',
        imageUrlInPost: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        bodyTwo: `<br><b>What it is</b><br>Node.js is a JavaScript framework for writing server-side apps. The simplest way to put it is that it allows you to trigger JavaScript programs from the terminal without any browser involved. For example, assuming node is installed if you write a JavaScript program in a file called main.js you can call node to execute and display the results inside of the terminal.<br>
        Our Javascript Program -- <br><pre><code>
        console.log('Hello World!');
        </code></pre>
        Run Node and Output -- <br><pre><code>
        $ node hello.js
        Hello World!
        </code></pre>
        <br><b>Why use Node?</b><br><ul><li>JavaScript is very convenient and straightforward for backend server side development. Node.js ensures that your app won't be outdated within a couple of years since you are using one of the most popular programming languages of all time.</li><li>Using Javascript on both the front-end and back-end make it easier to transition back and forth from front to back end development</li><li>Node.js is a great and easier solution for full-stack development. It reduces the amount of skills for programmers and eliminates the need to learn additional technologies in order to be a full-stack developer.</li><li>Node.js is an open-source technology that is free and doesn't require you to purchase licensing.</li></ul>\
        <br><br><b>How is it different from client side JS?</b><br>NodeJS contains basically everything that JS offers although it provides an API to support various system operations like being able to write to a file, communicating with other programs, executing commands. Another big difference is that it provides a “global” object, similar to “window” for browsers, that contains various methods and variables unique to Node.
        <br><br><b>What is Express JS?</b><br>Express.js is web application server framework for NodeJs, designed for building hybrid web applications, multi-page, and single-page apps. It is the de facto standard server framework for NodeJs. It is used to make routing, connecting to middleware, adding extensions, etc. in a more straight forward way.
        <br><br><b>Why use a templating engine?</b><br>The job of a templating system in NodeJS is simply to combine markup with data and produce html pages that are more dynamic. With this you can dynamically change what is displayed in any of your html pages by specifying what data should appear where on the page.
        <br><br><b>My templating choice</b><br>I chose to use handlebars as my templating engine. It seemed more straight forward than most of the other engines I looked at. I also thought it looked similar to how vueJs works with inserting data into html pages and I am pretty comfortable using Vue.`


    },
    {
        id: 7,
        title: 'Databases',
        subtitle: 'The one with storing data',
        bodyOne: '<b>Database Features</b><br>SQL databases are usually called as Relational Databases (RDBMS) and NoSQL database are usually called as non-relational or distributed database. SQL databases manipulate and store data in a structured relational way that requires predefined schemas that follow the same structure. On the other hand NoSQL are unstructed that can vary in any way that you need. Another type of database is called object databases that store data in the forms of objects instead of a table structure.<br><br>',
        tag: 'Data',
        imageUrl: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Tuesday October 20, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<b>When To Use Them?</b><br>SQL is primarily used when working with data that is very stuctured and when you know exactly what is going to be stored in it and how eveything will "link" together that provides declarative data integrity. On the other hand, NoSQL would be used in situation that the data isn't predefined and can grow without constraints of structed data. Object databases are similar to NoSQL databases since theses object are able to grow in any way with key value pairs.<br>
        <br><b>What are the differences?</b><br><ul><li>SQL is more structured</li><li>NoSQL is more dynamic</li><li>Object databases uses the power of object oriented design to structure complex data </li></ul>\
        <br><b>SQL Advantages</b><br><ul><li>Data Accuracy</li><li>Easy Access To Data</li> <li>Data Integrity</li><li>High Security</li><ul>
        <br><b>NoSQL Advantages</b><br><ul><li>Handle large amounts of data quickly</li><li>Store unstructured data</li> <li>Developer friendly/li><li>Easy to update schemas</li><ul>
        <br><b>Object Advantages</b><br><ul><li>Works well with OOP</li><li>Highly scalable</li> <li>Complex data can be retrieved quickly</li><li>Easy to update schemas</li><ul>`

    },
    {
        id: 8,
        title: 'Todo App Backend',
        subtitle: 'The one about the backend',
        bodyOne: '<b>Architecture</b><br>My to-do app’s architecture consisted of a frontend, backend, and a database. For my frontend I used vanillaJs that used fetch to communicate with my backend and was hosted on Netlify. My backend was entirely NodeJs that used mongoose to define my schemas. The database I decided to go with was MongoDB.<br><br>',
        tag: 'Data',
        imageUrl: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Tuesday October 27, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<b>Why I chose this design?</b><br>I chose this architecture because it makes the most sense to me. I like the fact that everything is decoupled from one another and that I can keep everything organized separately from the frontend, backend, and database.<br>
        <br><b>How I modeled my data</b><br>My modeling was fairly basic since the way my frontend already organizes my to-do categories. I simply created a model for my to-dos with the to-do name, to-do category, and completion. I think my modeling would have been slightly different if I decided to organize categories differently in the frontend since I may have needed to add another model for categories and reference those categories.<br>
        <br><b>Why documentation is important?</b><br>Documentation is important for several reasons. A few of the reasons that come to mind for me are: <ul><li>Allows other developers to quickly read over your documentation so that they can understand the architecture and design of your application. If they ever want to modify or consume your application, it is very helpful to have</li><li></li>It ensures you will always remember how you have your app setup so that you can easily modify it or fix bugs when needed.<li>So users can see how the app works and understand how it can benefit them.</li></ul><br>`

    },
    {
        id: 9,
        title: 'Recipe App Post 1',
        subtitle: 'Initial project setup',
        bodyOne: '<b>About the project</b><br>The recipe app will keep track of various recipes that you like to cook and eat. Users will be able to add their own recipes, including ingredients and directions. They will also be able to categorize recipes and rate them. The app will also function as a shopping list. Users will have the ability to add ingredients from their recipes to a shopping list.',
        tag: 'Application',
        imageUrl: 'https://images.pexels.com/photos/4191621/pexels-photo-4191621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday November 8, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/4191621/pexels-photo-4191621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>What I have accomplished this week</b><br>This week I have worked on a lot of the initial structuring of the application. The first thing I did was think about how I wanted to structure the database. As of right now I am using mongoDB, it is what I am familiar with and seemed like a good fit for tracking recipes. The schema I am using includes; name, description, category, rating, ingredients, and directions. At first, I was planning on making the ingredients another collection that would have their own unique ID’s but decided I was going to simply have them as an array of strings. I may change this in the future but for simplicity and getting things to flow how I want; I will stick with it for now. I also setup the basic template for displaying the recipe cards and being able to create new recipes with a modal pop-up.<br>
                  <br><b>What I plan on doing next week</b><br>Next week I plan on working with updating recipe information. I am thinking it will be another modal like the add new recipe, but it will populate with all of the current recipe information and allow you to edit it.                  <br>
        <br><b>What roadblocks have I encountered and how I overcame them</b><br>My biggest roadblock so far was thinking of the design of the database, but after talking with Landon I think I am on the right track.<br>`

    },
    {
        id: 10,
        title: 'Recipe App Post 2',
        subtitle: 'Part 2',
        bodyOne: '<b>What I have done this week</b><br>This week I worked on fixing my modal for editing or adding new recipes. I am using bootstrap and have a bootstrap modal that toggles whether you click on the add button to add a new recipe or click on the edit button for an existing recipe. If the edit button is clicked the fields are populated with the information depending on the id of the button that was clicked corresponding with the recipe information with the same id. When clicking on the add recipe button those fields are cleared out and the button to save the recipe allows you to add a completely new recipe. However, it defaulted to adding an entire new recipe after editing the fields with the edit button since it was the same modal and the same save button. I made it so that if an edit button was pushed a variable was set to an isEdit variable forcing an different block of code to execute within a “if” block. Another feature I completed was the ability to edit ingredients and directions. Before you could only simply add these two items, now you are able to edit them.',
        tag: 'Application',
        imageUrl: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday November 15, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>What I plan on doing next</b><br>Next week I plan on adding the sort by category feature. I plan on making it so that you can just type in a category and it will sort based on the user input. I was going to have a drop down box with all of the category names but I think that would look sloppy and wouldn’t scale very easily if there are hundreds of different recipe categories.<br>
                  <br><b>Roadblocks I encountered</b><br>A roadblock I ran into this week was trying to figure out how I could have one bootstrap modal that would perform two separate tasks. One for adding new recipes and editing existing recipes. I was going to just create two separate modals but it didn’t really make sense since they would be the exact same. I overcame this roadblock by doing research and watching tutorials online. <br>`

    },
    {
        id: 11,
        title: 'Recipe App Post 3',
        subtitle: 'Part 3',
        bodyOne: '<b>What I have done this week</b><br>This week I worked on adding the ability to search and sort for categories. I decided instead of giving the users a drop down menu with all of the available categories I would allow them to do a universal search to find categories they may be interested in. I felt for scalability this was an easier route to go so the dropdown wasn’t a long confusing list of categories. The users will know what categories that what and can easily type in a filter those categories. I also added an icon for where the shopping list will be accessed. I placed the icon above the add new recipe button in the bottom right hand corner to give the application a material design feel.',
        tag: 'Application',
        imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday November 22, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>What I plan on doing next</b><br>Next week I plan on adding the shopping list to the app. It will be a little pop-up box that users will be able to drag around the screen so they can view recipes and still place the shopping list where they want. I am thinking this won’t be too difficult to do and will probably try to find something on codepen that helps give me an idea of how this will work.<br>
                  <br><b>Roadblocks I encountered</b><br>A roadblock I ran into this week was trying to decide how I wanted to be able to sort by categories, but like I mentioned I decided to go with allowing the users to search categories instead of having a lengthy list of all the different possible categories they would have to read through. I overcame this by looking at different applications and deciding what looks the cleanest. <br>`

    },
    {
        id: 12,
        title: 'Recipe App Post 4',
        subtitle: 'Part 4',
        bodyOne: '<b>What I have done this week</b><br>This week I worked on adding the shopping list to the application. When the user clicks on the shopping list icon a draggable box will be displayed. I created a new collection in MongoDB to house all of the data for the shopping list. Users can then add new items, delete items. I am still working on the ability to check off items. I was surprised how easy it was to implement the draggable box, I was expecting it to be much more difficult. However, with a little JS and CSS it did the trick. I wanted it to be draggable since users will need to be able to see recipes on the main menu and see what items are in their shopping list.',
        tag: 'Application',
        imageUrl: 'https://images.pexels.com/photos/4032970/pexels-photo-4032970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday November 29, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/4032970/pexels-photo-4032970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>What I plan on doing next</b><br>Next week I plan on adding the ability to check off shopping list items. I keep running into issues with this so I am going to really dig into it. I am also going to do some major CSS/Styling changes to the app to be more user friendly.<br>
                  <br><b>Roadblocks I encountered</b><br>A roadblock I ran into this week was trying to figure out how to get items to cross off in the shopping list. The way I have my backend setup is making it difficult to get this to work. However, I am going to look at the code I used for my Todo app and mimic that.<br>`

    },
    {
        id: 13,
        title: 'Recipe App Post 5',
        subtitle: 'Part 5',
        bodyOne: '<b>What I have done this week</b><br>This week I worked on the ability for users to cross off shopping list items. I was struggling with this last week since I really wasn’t considering the backend of my application for crossing off the items. I have a “complete” property in my shopping item object but wasn’t utilizing this when crossing off the items. I implemented a patch request to set the item to complete with a click event. Then I check if the item is completed and add item.style.textDecoration = ‘line-through’. This worked great and now makes it easier and ensures the items aren’t crossed off without having a property of complete.',
        tag: 'Application',
        imageUrl: 'https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        date: 'Sunday December 6, 2020',
        imageUrlInPost: 'https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        bodyTwo: `<br><b>What I plan on doing next</b><br>Next week I plan on adding an image property so that users can place their own images via URL. This will make the app look more professional as well as give it some color. I also plan on doing some major refactoring to layouts and styles since the app is looking bland as of right now.<br>
                  <br><b>Roadblocks I encountered</b><br>A roadblock I ran into this week was when I was working in my backend with my patch statement. My patch statement had conditionals that would update a property if the property returned true or if it was simply just present in the JSON object. Since all of my shopping list items “complete” status default to false, I was never able to reach the code block to update the status. It was an easy fix but took me a while to get it figured out.<br>`

    },
]