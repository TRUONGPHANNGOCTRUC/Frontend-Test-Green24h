// import Link from 'next/link';

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   id: string | null;
// }

// export const Card = ({ title, description, imageUrl, id }: CardProps) => {
//   const truncateDescription = (text: string, maxLength: number) =>{
//     if(!text) return '';
//     return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
//   };

//   const articleId = id ? encodeURIComponent(id) : encodeURIComponent(title);

//   return (
//     <Link href={`/news/${articleId}`} passHref>
//       <div className="border p-4 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition flex flex-col">
//         <img
//           src={imageUrl || "https://via.placeholder.com/150"}
//           alt={title}
//           className="w-full h-40 object-cover rounded-md mb-2"
//         />
//         <h2 className="font-bold text-lg mb-1">{truncateDescription(title, 100)}</h2>
//         <p className="text-sm text-gray-600 flex-grow">
//           {truncateDescription(description, 100)}
//         </p>
//       </div>
//     </Link>
//   );
// };
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  id?: string | null;
}

export const Card = ({ title, description, imageUrl, id }: CardProps) => {
  const truncateDescription = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Sử dụng id nếu có, nếu không thì dùng title (mã hóa để tránh lỗi URL)
  const articleId = id ? encodeURIComponent(id) : encodeURIComponent(title);

  return (
    <Link href={`/news/${articleId}`} passHref>
      <div className="border p-4 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition flex flex-col">
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <h2 className="font-bold text-lg mb-1">{truncateDescription(title, 100)}</h2>
        <p className="text-sm text-gray-600 flex-grow">
          {truncateDescription(description, 100)}
        </p>
      </div>
    </Link>
  );
};
