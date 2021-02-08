this assignment will have these proceeding factors or approach implemented:

- this "todos" are going to be objects that you'll want to dynamically create, which means either using factories or constructors/classes to generate them
- brainstorm what kind of properties your todo-items are going to have. at a minimum they should have a title, description, dueDate and priority. you might also want to include notes or even a checklist
- your todo list should have projects or separate lists of todos, when a user first opens the app, there should be some sort of "default" project to which all of their todos are put. Users should be able to create new projects and choose which project thier todos go into.
- you should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc) from DOM related stuff, so keep all those things in separate modules
- the look of the user interface is up to you, but it should  be able to do the following:
    - view all projects
    - view all todos in each project (probably just title and duedate, poerhaps changing color for different priorities)
    - expand a single todo to see/edit its details
    - delete a todo item

Improvements:
- use local storage to save user's project and todos between sessions
- since using webpack is a posibility for this project, try using this following library as well:
     - date-fns gives you a bunch of handy functions for formatting and manipulating dates and times