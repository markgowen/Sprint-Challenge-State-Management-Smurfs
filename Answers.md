1. What problem does the context API help solve?

   Prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are objects of information sent to the store and the only information sent to the store. Actions describe what changed but don't actually change the state.

   Reducers define how the state will change in response to the actions that are sent to the store. Reducers send the state to the store.

   The Store is where your application state is held.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state is a global state that all components can access.
   Component state can only pass state through props to its children components

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   Middleware that allows you to call action creators that return a function. Helps keep functions asychronous.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

   I like redux, I think it is the most efficient and effective way to manage state. Allowing your components to have access to state can be very useful.
