# React testing best practices

1. We try while running the test of one component not to access the inner workings or actual implementation from another component.

2. We use Enzyme to write tests that are specifically configured for react applications

    * FOR ENZYME SET-UP -> we install Enzyme and @wojtekmaj/enzyme-adapter-react-17 (react-version-17)

    * then we create a setupTests.js file in the src dir

    * where we use *Enzyme.configure({ adaptor: new Adaptor()})* to configure adaptor to our react version

3. Enzyme Api
    1. Static render: only render static html, it only allows us to create an assertion about the html that was crated.
    2. Shallow render: renders only the component and not it's children

        * used when we want to test one component in isolation and not make any assertion about it's components

    3. Full DOM render: renders the component with all the children

        * used to render our whole application and test interactions with various components

>    docs: airbnb.io/enzyme/docs

4. beforeEach() function: It's used to extract and pull out logic that needs to occur before every test inside a file.

5. Steps for stimulating a change event => 
    1. Find the element
    2. Simulate a change event
    3. Provide a fake change object
    4. Force the component to update
    5. Assert that the value has changed or required change has happened

6. describe function is used to group together cerain type of tests that have some common logic.

7. simulate function simulate a change event and paas a mock event object

8. prop funtion returns the value of a prop passed to the specified prop

9. to check the text shown on the screen we use render().text() method as render() returns a cheerowrapper around the rendered HTML of current node's subtree and then text gives the text it contains.

10. Unit test vs Integeration test

11. We can't make api requests from within a jest dom environment bcz we are working with a fake browser environment. To make it work we use *moxios*, which trick axios into thinking that the request actually completed successfully.

12. For Moxios : 
    * in beforeEach -> moxios.install and moxios.stubRequest('url.com', {status: 200, response: dumy-data})
    * in afterEach -> moxios.uninstall
    * moxios.wait(*all code after request is over and finish with done()*   done is a argumet present in callback function in _it_)

13. Fetch data testing: 
    * Simulate click event => 
    * action creator gets called => issue request => 
    * moxios intercept the request => use moxios.wait to pause for the req handling => 
    * reducer picks comments => test is checked