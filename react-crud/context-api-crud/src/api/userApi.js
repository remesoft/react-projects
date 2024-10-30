import { axiosInstance } from "./axiosInstance";

// Centralized user service functions
export const getRecords = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

export const createRecord = async (data) => {
  try {
    const response = await axiosInstance.post("/user", data);
    return response.data;
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

export const deleteRecord = async (id) => {
  try {
    const response = await axiosInstance.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
};

export const updateRecord = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/user/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};
