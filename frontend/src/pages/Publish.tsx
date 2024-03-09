import Appbar from "../Components/Appbar";
import { useForm } from "react-hook-form";
import { CreateBlogInput } from "@sanskar2025/common";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";
const Publish = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: CreateBlogInput) => {
    console.log(data);
    console.log(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog/`,
        {
          title: data.title,
          content: data.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.post);
      navigate(`/blog/${res.data.post}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="max-w-screen-lg w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title")}
                type="text"
                className="focus:outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="Title"
              />
              <TextEditor register={register} />
              <button
                type="submit"
                className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Publish post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
function TextEditor({ register }: { register: any }) {
  return (
    <div className="mt-2">
      <div className="w-full mb-4 ">
        <div className="flex items-center justify-between border">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea
              {...register("content")}
              id="editor"
              rows={8}
              className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Publish;