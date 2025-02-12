import fs from 'fs';
import path from 'path';

// 通过 `generateStaticParams` 获取动态路由参数
export async function generateStaticParams() {
    const sectionsDir = path.join(process.cwd(), 'content'); // 读取 content 目录
    const sectionFolders = fs.readdirSync(sectionsDir); // 获取分区文件夹列表

    return sectionFolders.map((folder) => ({
        section: folder, // 每个文件夹作为一个路由参数
    }));
}

// 获取分区下所有文章的链接
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params; // 从路径中获取当前分区名称

  // 假设文章存放在content文件夹下
  const sectionDir = path.join(process.cwd(), process.env.CONTENT_PATH, section); // 当前分区的路径
  const articleFolders = fs.readdirSync(sectionDir); // 获取该分区下的文件夹（每个文件夹代表一篇文章）

  // 获取每篇文章的信息
  const articles = articleFolders.map((folder) => {
    const title = folder; // 使用文件夹名称作为文章的标题（可以从md文件中读取标题）

    // 这里可以进一步解析md文件内容来提取文章标题，但暂时使用文件夹名称
    return {
      title, // 文章标题
      path: `/posts/${section}/${folder}`, // 文章的链接
    };
  });

  return (
    <div className='section-page'>
      <h1>分区：{section}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.path}>
            <a href={article.path}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
