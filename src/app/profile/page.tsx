import path from "path"
import { promises as fsPromises } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
export default async function ProfilePage(){
    const profileName='profile.mdx';
    const profilePath=path.join(process.cwd(),process.env.PROFILE_CONTENT_PATH,profileName);
    // const profileMdContent=await fsPromises.readFile(profilePath,'utf-8');
    // const md=new MarkdownIt();
    // const htmlContent=md.render(profileMdContent);
    const res=await fsPromises.readFile(profilePath,'utf-8');
    return (
        <MDXRemote source={res}/>
    )
}