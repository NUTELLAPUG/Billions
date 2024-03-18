import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import avatarImg from "../../../assets/images/memoji/memoji-1.png";

const data = {
  users: [
    {
      id: 1,
      avatar: avatarImg,
      fullName: "Galen Slixby",
      company: "Yotz PVT LTD",
      role: "editor",
      username: "gslixby0",
      country: "El Salvador",
      contact: "(479) 232-9151",
      email: "gslixby0@abc.net.au",
      currentPlan: "enterprise",
      status: "inactive",
      informationText: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
      aboutText: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae",
    },
    {
      id: 2,
      avatar: avatarImg,
      fullName: "Halsey Redmore",
      company: "Skinder PVT LTD",
      role: "author",
      username: "hredmore1",
      country: "Albania",
      contact: "(472) 607-9137",
      email: "hredmore1@imgur.com",
      currentPlan: "team",
      status: "pending",
      informationText: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
      aboutText: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae",
    },
    {
      id: 3,
      avatar: "Marjory Sicely",
      fullName: "Marjory Sicely",
      company: "Oozz PVT LTD",
      role: "maintainer",
      username: "msicely2",
      country: "Russia",
      contact: "(321) 264-4599",
      email: "msicely2@who.int",
      currentPlan: "enterprise",
      status: "active",
      informationText: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
      aboutText: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae",
    },
    {
      id: 4,
      avatar: null,
      fullName: "Cyrill Risby",
      company: "Oozz PVT LTD",
      role: "maintainer",
      username: "crisby3",
      country: "China",
      contact: "(923) 690-6806",
      email: "crisby3@wordpress.com",
      currentPlan: "team",
      status: "inactive",
      aboutText: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae"
    },
    {
      id: 5,
      avatar: null,
      fullName: "Maggy Hurran",
      company: "Aimbo PVT LTD",
      role: "subscriber",
      username: "mhurran4",
      country: "Pakistan",
      contact: "(669) 914-1078",
      email: "mhurran4@yahoo.co.jp",
      currentPlan: "enterprise",
      status: "pending",
      informationText: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
      aboutText: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae",
    },
    {
      id: 6,
      avatar: null,
      fullName: "Silvain Halstead",
      company: "Jaxbean PVT LTD",
      role: "author",
      username: "shalstead5",
      country: "China",
      contact: "(958) 973-3093",
      email: "shalstead5@shinystat.com",
      currentPlan: "company",
      status: "active",
      informationText: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
      aboutText: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non euismod vitae",
    },
  ],
};

let instance = axios.create({
  baseURL: "https://localhost:3000/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});
let mock = new MockAdapter(instance);

// Get All Data
mock.onGet("/api/users/list/all-data").reply(200, data.users);

// Add New User
mock.onPost("/apps/users/add-user").reply((config) => {
  const user = JSON.parse(config.data);

  const { length } = data.users;
  let lastIndex = 0;
  if (length) {
    lastIndex = data.users[length - 1].id;
  }
  user.id = lastIndex + 1;

  data.users.unshift(user);

  return [201, { user }];
});

// Get Filter Data
mock.onGet("/api/users/list/data").reply((config) => {
  const {
    q = "",
  } = config;

  const queryLowered = q.toLowerCase();
  const filteredData = data.users.filter(
    (user) =>
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered))
  );

  return [
    200,
    {
      users: filteredData,
    },
  ];
});

// Get User
mock.onGet("/api/users/user").reply((config) => {
  const { id } = config;
  const user = data.users.find((i) => i.id === id);
  return [200, { user }];
});

// Delete User
mock.onDelete("/apps/users/delete").reply((config) => {
  let userId = config.id;
  userId = Number(userId);

  const userIndex = data.users.findIndex((t) => t.id === userId);
  data.users.splice(userIndex, 1);

  return [200];
});

export default instance;