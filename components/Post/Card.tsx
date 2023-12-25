import Image from "next/image";
import Link from "next/link";
type CardProps = {
  category: string;
  description: string;
  id?: string;
  imgLink: string;
  price: number;
  title: string;
  user: string;
  deletePost: (postId: string) => Promise<void>;
  button: boolean;
};
const Card = ({
  category,
  description,
  id,
  imgLink,
  price,
  title,
  user,
  deletePost,
  button,
}: CardProps) => {
  return (
    <div className="min-w-[94%] max-w-[95%] bg-gray-400/50 p-2 rounded-md mx-auto flex flex-col gap-2 justify-between text-gray-200">
      <Link
        href={`/posts/${id}`}
        className="w-full h-full flex flex-col justify-end"
      >
        <Image
          src={imgLink}
          alt="img"
          width={500}
          height={500}
          className="rounded-md aspect-[16/9] object-cover"
        />
        <div className="flex flex-col">
          <span>{title.slice(0, 35)}</span>
          <span>{description.slice(0, 85)}...</span>
        </div>

        <div className="flex justify-around">
          <span className="bg-green-600 p-1 rounded-md">{category}</span>
          <span className="bg-red-700 p-1 px-2 rounded-md">{price}$</span>
        </div>
        <div className=" flex justify-around">
          <span className="bg-purple-800 p-1 rounded-md">{user}</span>
          <span className="bg-blue-800 p-1 rounded-md text-sm">
            Date: 27.07.2027
          </span>
        </div>
      </Link>
      {button && <div className="h-[2px] w-[90%] bg-white/70 mx-auto "></div>}
      {button && <button onClick={() => deletePost(id!)}>Delete Item</button>}
    </div>
  );
};

export default Card;
