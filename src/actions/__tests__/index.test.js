import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

it("action has correct type and payload", () => {
    const action = saveComment("new comment");
    expect(action.type).toEqual(SAVE_COMMENT);
    expect(action.payload).toEqual("new comment");
})