import App from "components/App";
import { shallow } from 'enzyme';
import CommentList from "components/CommentList";
import CommentArea from "components/CommentArea";

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
})

it("renders comment area", () => {
    // using enzyme
    expect(wrapper.find(CommentArea).length).toEqual(1)

    // without using enzyme

    /* const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('CommentList');
    ReactDOM.unmountComponentAtNode(div); */
})

it("renders comment list", () => {
    expect(wrapper.find(CommentList).length).toEqual(1)
})