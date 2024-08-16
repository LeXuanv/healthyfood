import "./blog.scss";
import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "Thực đơn theo bữa ăn",
    children: [
      {
        key: "11",
        label: "Bữa sáng",
      },
      {
        key: "12",
        label: "Bữa trưa",
      },
      {
        key: "13",
        label: "bữa tối",
      },
      {
        key: "14",
        label: "Bữa phụ",
      },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "Các món ăn",
    children: [
      {
        key: "21",
        label: "Rau, củ, quả",
      },
      {
        key: "22",
        label: "Thịt",
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

const Blog = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["1", "13"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <div className="all-blog">
        <div className="menu-block">
          <Menu
            mode="inline"
            // openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 300,
            }}
            items={items}
          />
        </div>
        <div className="content-blog"></div>
      </div>
    </>
  );
};

export default Blog;
