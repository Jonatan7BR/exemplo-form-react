import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum MessageType {
  Success = "success",
  Error = "error",
}

interface State {
  message: string;
  messageType: MessageType;
  messageVisible: boolean;
}

const initialState: State = {
  message: "",
  messageType: MessageType.Success,
  messageVisible: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.message = action.payload.message;
      state.messageType = action.payload.messageType || MessageType.Success;
      state.messageVisible = true;
    },
    closeMessage: (state, _action: PayloadAction<void>) => {
      state.messageVisible = false;
    },
  },
});

export const { sendMessage, closeMessage } = messageSlice.actions;

export default messageSlice.reducer;
