import axios from 'axios'

export const loginUser = async(data) => {

  if((data?.email === "" && data?.username === "") || data?.password === "") {
    return null;
  }

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {return response})
    .catch((error) => {
      console.log(error)
      return null;
    })

    return res;
} 

export const registerUser = async(data) => {

  if (
    data?.email === "" ||
    data?.username === "" ||
    data.fullname === "" ||
    data?.password === "" ||
    !data.avatar
  ) {
    return null;
  }

  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('username', data.username);
  formData.append('fullname', data.fullname);
  formData.append('password', data.password);
  formData.append('avatar', data.avatar);
  formData.append("coverImage", data.coverImage);


  const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {return response})
  .catch((error) => {
    console.log(error)
    return null;
  })

  return res;
}

export const logoutUser = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  }).then((response) => {return response})
  .catch((error) => {
    console.log(error)
    return null;
  })  

  res?.data.success && localStorage.removeItem("accessToken");
  res?.data.success && localStorage.removeItem("refreshToken");
  res?.data.success && localStorage.removeItem("user");

  return res;
}