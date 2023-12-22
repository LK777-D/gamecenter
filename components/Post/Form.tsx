"use client";
import { useFirebaseCtx } from "@/context/firebaseContext";
import Link from "next/link";
const PostForm = () => {
  const {
    setTitle,
    setDescription,
    setCategory,
    setImgLink,
    setPrice,
    addPost,
  } = useFirebaseCtx();

  return (
    <>
      <section className="bg-gray-500/70  rounded-lg w-[95%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg p-4 mx-auto">
        <h2 className="text-2xl text-center text-gray-200 fontbold  mb-4">
          Add New Item For Sale
        </h2>

        <p className="text-center text-gray-100 font-bold text-lg mb-6">
          Sell Your Console For The Best Price. All input fields are required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="text-gray-300 text-lg font-semibold "
            >
              Post Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              className=" bg-gray-100/10 formplaceholder text-white  border   rounded-lg w-full p-3 focus:outline-none focus:ring focus:border-blue-800 transition duration-300"
              placeholder="Enter Post Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="imgLink"
              className="text-gray-300 text-lg font-semibold "
            >
              Image Link
            </label>
            <input
              onChange={(e) => setImgLink(e.target.value)}
              type="text"
              id="imgLink"
              className=" bg-gray-100/10 formplaceholder text-white  border   rounded-lg w-full p-3 focus:outline-none focus:ring focus:border-blue-800 transition duration-300"
              placeholder="image link"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="text-gray-300 text-lg font-semibold"
            >
              Price
            </label>
            <input
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              type="number"
              required
              id="price"
              className="bg-gray-100/10 formplaceholder text-white border rounded-lg w-full p-3 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
              placeholder="Price"
            />
          </div>
          <div>
            <label
              htmlFor="topic"
              className="text-gray-100 text-lg font-semibold"
            >
              Choose a Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className=" bg-gray-100/10 formplaceholder w-full p-3 rounded-lg text-lg text-gray-100 border focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            >
              <option className="text-gray-800" value="Consoles(Xbox)">
                Consoles(Xbox)
              </option>
              <option className="text-gray-800" value="Accessories(Xbox)">
                Accessories(Xbox)
              </option>
              <option className="text-gray-800" value="Consoles(PlayStation)">
                Consoles(PlayStation)
              </option>
              <option className="text-gray-800" value="Accesories(PlayStation)">
                Accesories(PlayStation)
              </option>
              <option className="text-gray-800" value="Consoles(Nintendo)">
                Consoles(Nintendo)
              </option>
              <option className="text-gray-800" value="Accesories(Nintnedo)">
                Accesories(Nintnedo)
              </option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-gray-300 text-lg font-semibold mt-5"
          >
            Description
          </label>
          <textarea
            required
            id="description"
            className="bg-gray-100/10 formplaceholder text-white border rounded-lg p-3 h-[30vh] w-full focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter Post  Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 items-center mt-6">
          <button
            className="bg-gray-800/50 w-[60%] text-white text-lg px-4 py-2 rounded-3xl hover:bg-gray-600/70 focus:outline-none transition duration-300"
            type="submit"
            onClick={addPost}
          >
            Submit Post
          </button>
          <Link
            href=""
            className="text-lg w-[60%] text-white text-center border border-gray-400 px-4 py-2 rounded-3xl hover:border-gray-700 focus:outline-none transition duration-300"
          >
            Cancel
          </Link>
        </div>
      </section>
    </>
  );
};

export default PostForm;
