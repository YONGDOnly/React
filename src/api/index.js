import ajax from "./ajax";

// 请求参数三到四个
// export  const reqLogin = ({username,password}) => ajax("/login", {username,password},"POST");
// 请求参数一到二个
export  const reqLogin = (username,password) => ajax("/login", {username,password},"POST");