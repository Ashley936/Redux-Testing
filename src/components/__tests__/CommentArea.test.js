import React from "react";
import { mount } from "enzyme"; // full dom render
import CommentArea from "components/CommentArea";
import { Root } from 'Root';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentArea />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("check for button and textarea", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("Text Area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "New comment" },
    });
    wrapper.update();
    // setState is ansyncronous and thus any function after simulate won't wait for component to re-render so we use update funtion from enzyme
  });

  it("check for change event", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("New comment");
  });

  it("submit form empties the textarae", () => {
    // sumbit event on form
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
