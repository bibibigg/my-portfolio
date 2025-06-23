import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    isShowModal: false,
    isDark: false,
    isShowList: false,
    selectedProject: null,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    openModal(state, action) {
      state.isShowModal = true;
    },
    closeModal(state, action) {
      state.isShowModal = false;
    },
    setInitialTheme(state, action) {
      state.isDark = action.payload;
    },
    toggleTheme(state, action) {
      state.isDark = !state.isDark;
    },
    toggleShowList(state, action) {
      state.isShowList = !state.isShowList;
    },
    selectProject(state, action) {
      state.selectedProject = action.payload;
    },
    clearSelectedProject(state, action) {
      state.selectedProject = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
