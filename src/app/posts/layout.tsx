import React from "react";

export default function PostPage({children}:Readonly<{children:React.ReactNode;}>) {
    return (
      <div className="home-page">
          <div id="ops-nav">
            {/* 回到上级目录的按钮 最左侧*/}
            {/* 回到主页的按钮 最右侧 使用时给出询问 */}
          </div>

          {children}
      </div>
    );
  }
  