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
]