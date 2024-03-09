import { Link } from "react-router-dom";
interface BlogCardType {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardType) => {
  return (
    <>
      <Link to = {`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
          <div className="flex">
            {/* yha avatar ayega */}
            <AvatarComp name={authorName} />
            <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
              {authorName}
            </div>
            <div className="pl-2 flex flex-col justify-center">
              <Circle />
            </div>
            <div className="font-thin text-sm text-slate-500 flex flex-col justify-center pl-2">
              {publishedDate}
            </div>
          </div>
          <div className="text-xl font-semibold pt-2">{title}</div>
          <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
        </div>
      </Link>
    </>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function AvatarComp({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
