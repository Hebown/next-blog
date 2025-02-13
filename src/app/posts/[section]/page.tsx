import fs from 'fs';
import path from 'path';

// 获取分区下所有文章的链接
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params; // 从路径中获取当前分区名称

  // 假设文章存放在content文件夹下
  const sectionDir = path.join(process.cwd(), process.env.POST_CONTENT_PATH, section); // 当前分区的路径
  const articleFolders = fs.readdirSync(sectionDir); // 获取该分区下的文件夹（每个文件夹代表一篇文章）

  // 获取每篇文章的信息
  const articles = articleFolders.map((folder) => {
    const title = folder; // 使用文件夹名称作为文章的标题（可以从md文件中读取标题）

    // 这里可以进一步解析md文件内容来提取文章标题，但暂时使用文件夹名称
    return {
      title, // 文章标题
      path: `${section}/${folder}`, // 文章的链接
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
