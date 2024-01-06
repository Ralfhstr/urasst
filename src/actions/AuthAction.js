import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";

export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("users/" + success.user.uid)
      .set(dataBaru);
    //Local storage(Async Storage)
    storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
    const resDB = await FIREBASE.database()
      .ref("/users/" + success.user.uid)
      .once("value");

    if (resDB.val()) {
      // Local storage (Async Storage)
      await storeData("user", resDB.val());
      return resDB.val();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

export const addSchedule = async (data) => {
  try {
    // Ambil data yg sudah login dari fungsi 'getData'
    const userData = await getData("user");

    if (userData) {
      const dataBaru = {
        ...data,
        uid: userData.uid,
      };

      await FIREBASE.database()
        .ref("schedule/" + userData.uid)
        .push(dataBaru);

      console.log("Schedule added successfully");
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const getSchedule = async () => {
  const userData = await getData("user");
  const schedulesRef = FIREBASE.database().ref("schedule/" + userData.uid);

  return schedulesRef
    .once("value")
    .then((snapshot) => {
      const schedulesData = snapshot.val();
      if (schedulesData) {
        const schedulesArray = Object.entries(schedulesData).map(([scheduleId, scheduleData]) => ({
          scheduleId,
          ...scheduleData,
        }));
        return schedulesArray;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching user schedule:", error);
      return [];
    });
};

export const editNote = async (noteId, updatedData) => {
  try {
    // Ambil data pengguna yang sudah login dari fungsi 'getData'
    const userData = await getData("user");

    if (userData) {
      // Perbarui catatan berdasarkan noteId
      const noteRef = FIREBASE.database().ref(`notes/${userData.uid}/${noteId}`);
      const snapshot = await noteRef.once("value");
      const existingNote = snapshot.val();

      if (existingNote) {
        const updatedNote = {
          ...existingNote,
          ...updatedData,
        };

        await noteRef.update(updatedNote);
        console.log("Note updated successfully");
      } else {
        console.log("Note not found");
      }
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const userData = await getData("user");

    if (!userData) {
      Alert.alert("Error", "Login Terlebih Dahulu");
      return;
    }

    const noteRef = FIREBASE.database().ref(`notes/${userData.uid}/${noteId}`);
    const snapshot = await noteRef.once("value");
    const existingNote = snapshot.val();

    if (!existingNote) {
      console.log("Note not found");
      return;
    }

    // Hapus catatan dari database
    await noteRef.remove();
    console.log("Note deleted successfully");
  } catch (error) {
    throw error;
  }
};

export const addFinance = async (data) => {
  try {
    // Ambil data yg sudah login dari fungsi 'getData'
    const userData = await getData("user");

    if (userData) {
      // Tambah note sesuai uid
      const dataBaru = {
        ...data,
        uid: userData.uid,
      };

      await FIREBASE.database()
        .ref("finance/" + userData.uid)
        .push(dataBaru);

      console.log("Finance added successfully");
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const getFinance = async () => {
  const userData = await getData("user");
  const notesRef = FIREBASE.database().ref("finance/" + userData.uid);

  return notesRef
    .once("value")
    .then((snapshot) => {
      const financeData = snapshot.val();
      if (financeData) {
        const financeArray = Object.entries(financeData).map(([financeId, financeData]) => ({
          financeId,
          ...financeData,
        }));
        return financeArray;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching user finance:", error);
      return [];
    });
};

export const addFCategory = async (data) => {
  try {
    const userData = await getData("user");

    if (userData) {
      const dataBaru = {
        ...data,
        uid: userData.uid,
      };

      await FIREBASE.database()
        .ref("FCategory/" + userData.uid)
        .push(dataBaru);

      console.log("Finance Category added successfully");
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const getFCategory = async () => {
  const userData = await getData("user");
  const fcategorysRef = FIREBASE.database().ref("FCategory/" + userData.uid);

  return fcategorysRef
    .once("value")
    .then((snapshot) => {
      const fCategoryData = snapshot.val();
      if (fCategoryData) {
        const fCategoryArray = Object.entries(fCategoryData).map(([fCategoryId, fCategoryData]) => ({
          fCategoryId,
          ...fCategoryData,
        }));
        return fCategoryArray;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching user finance category:", error);
      return [];
    });
};

export const addSCategory = async (data) => {
  try {
    const userData = await getData("user");

    if (userData) {
      const dataBaru = {
        ...data,
        uid: userData.uid,
      };

      await FIREBASE.database()
        .ref("SCategory/" + userData.uid)
        .push(dataBaru);

      console.log("Schedule Category added successfully");
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const getSCategory = async () => {
  const userData = await getData("user");
  const scategorysRef = FIREBASE.database().ref("SCategory/" + userData.uid);

  return scategorysRef
    .once("value")
    .then((snapshot) => {
      const sCategoryData = snapshot.val();
      if (sCategoryData) {
        const sCategoryArray = Object.entries(sCategoryData).map(([sCategoryId, sCategoryData]) => ({
          sCategoryId,
          ...sCategoryData,
        }));
        return sCategoryArray;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching user finance category:", error);
      return [];
    });
};