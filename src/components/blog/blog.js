import "./blog.scss";
import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "Tất cả danh mục",
    children: [
      {
        key: "11",
        label: "Thực đơn theo mùa",
      },
      {
        key: "12",
        label: "Thực đơn theo nhóm",
      },
      {
        key: "13",
        label: "Thực đơn theo bữa",
        children: [
          { key: "131", label: "Bữa sáng" },
          { key: "132", label: "Bữa trưa" },
          { key: "133", label: "Bữa tối" },
          { key: "134", label: "Bữa phụ" },
        ],
      },
      {
        key: "14",
        label: "Được yêu thích",
      },
      {
        key: "15",
        label: "Thực đơn thông dụng",
        children: [{ key: "151", label: "Bữa sáng" }],
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
  const [stateOpenKeys, setStateOpenKeys] = useState(["1"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key));
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
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
