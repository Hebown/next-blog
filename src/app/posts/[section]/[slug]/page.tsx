import path from 'path';
import { promises as fsPromises } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {

  const { section, slug } = await params;

  // 获取文章文件夹路径和 markdown 文件路径
  const articleDir = path.join(process.cwd(), process.env.POST_CONTENT_PATH, section, slug);
  const mdFilePath = path.join(articleDir, slug + '.mdx');

  // 读取 Markdown 内容
  const mdContent = await fsPromises.readFile(mdFilePath, 'utf-8');
  return (
    <div className='markdown-body'>
      <MDXRemote source={mdContent}/>
    </div>
  );
}
