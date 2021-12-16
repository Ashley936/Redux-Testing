import commentReducer from "reducers/comment";
import { SAVE_COMMENT } from "actions/types";

it("gives empty array on not matching a type", () => {
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});

it("gives correct payload on save comment action", () => {
  const newState = commentReducer([], {
    type: SAVE_COMMENT,
    payload: "new comment",
  });
  expect(newState).toEqual(["new comment"]);
});
