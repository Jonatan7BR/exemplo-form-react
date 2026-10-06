import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../models/person";
import {
  getPeople,
  getPerson,
  registerPerson,
  removePerson,
  updatePerson,
} from "../../api/people";

interface State {
  people: Person[];
  person?: Person;
}

const initialState: State = {
  people: [] as Person[],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPeople.fulfilled, (state, action) => {
        state.people = action.payload;
      })
      .addCase(getPerson.fulfilled, (state, action) => {
        state.person = action.payload;
      })
      .addCase(updatePerson.fulfilled, (state, action) => {
        state.person = action.payload;
      })
      .addCase(registerPerson.fulfilled, (state, action) => {
        state.person = action.payload;
      })
      .addCase(removePerson.fulfilled, (state, action) => {});
  },
});

export default peopleSlice.reducer;
