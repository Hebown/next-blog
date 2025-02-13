// src/app/posts/page.tsx
import fs from 'fs';
import path from 'path';

export default async function PostPage() {
  // 获取分区信息
  const sectionsDir = path.join(process.cwd(), process.env.POST_CONTENT_PATH); // 假设分区文件夹存储在content目录下
  const sectionFolders = fs.readdirSync(sectionsDir); // 获取目录中的文件夹列表

  // 创建分区信息数组
  const sections = sectionFolders.map((folder) => ({
    name: folder, // 文件夹名作为分区名称
    path: folder, // 使用文件夹名作为路径
  }));

  return (
    <div>
      <h1>文章分区</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.path}>
            <a href={`${section.path}`}>{section.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
