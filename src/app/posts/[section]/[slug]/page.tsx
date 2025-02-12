import path from 'path';
import { promises as fsPromises } from 'fs';
import MarkdownIt from 'markdown-it';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {

  const { section, slug } = await params;

  // 获取文章文件夹路径和 markdown 文件路径
  const articleDir = path.join(process.cwd(), process.env.CONTENT_PATH, section, slug);
  const mdFilePath = path.join(articleDir, slug + '.md');

  // 读取 Markdown 内容
  const mdContent = await fsPromises.readFile(mdFilePath, 'utf-8');

  const md=new MarkdownIt();

  const htmlContent=md.render(mdContent);
  

  return (
    <div>
      <h1>{slug}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
}
