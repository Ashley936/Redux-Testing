import React from "react";
import { mount } from "enzyme"; // full dom render
import CommentList from "components/CommentList";
import { Root } from "Root";

let wrapped;
beforeEach(() => {
   wrapped = mount(
    <Root initialState={{ comments: ["comment 1", "comment 2"] }}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
    wrapped.unmount();
})

it("one li per comment", () => {
    expect(wrapped.find('li').length).toEqual(2);
})

it("li contains the expected content", () => {
    expect(wrapped.render().text()).toContain("comment 1");
    expect(wrapped.render().text()).toContain("comment 2");
})
