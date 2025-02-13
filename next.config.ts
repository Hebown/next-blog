import createMDX from "@next/mdx";
import { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  // 配置 `pageExtensions` 以包含 markdown 和 MDX 文件
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // 可选地，在此处添加任何其他 Next.js 配置
};
 
const withMDX = createMDX({
  // 在这里添加 markdown 插件，根据需要
});
 
// 将 MDX 配置与 Next.js 配置合并
export default withMDX(nextConfig);