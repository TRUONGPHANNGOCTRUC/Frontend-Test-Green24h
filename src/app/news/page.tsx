// // @ts-nocheck

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { NavBar } from "@/components/ui/NavBar";
// import { Card } from "@/components/ui/Card";
// import { Star } from "lucide-react";

// const API_KEY = "c185f33502b44f99b29bb76561a7cc3c"; // Thay bằng API key thực tế
// const API_URL =
//   "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=" +
//   API_KEY;

// export default function NewsApp() {
//   const [highlightedNews, setHighlightedNews] = useState([]);
//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetchNews = async (pageNumber = 1) => {
//     try {
//       const res = await axios.get(API_URL);
//       const data = res.data.articles;

//       setHighlightedNews(data.slice(0, 4));
//       setNews(data.slice((pageNumber - 1) * 20 + 4, pageNumber * 20 + 4));
//     } catch (error) {
//       console.error("Lỗi khi tải tin tức:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNews(page);
//   }, [page]);

//   return (
//     <div>
//       <NavBar />
//       <div className="px-5">
//         {/* Phần Tin Nổi Bật */}
//         <div className="p-4 bg-red-800 mb-4 flex items-center space-x-2 rounded-md">
//           <Star className="text-yellow-500" />
//           <h1 className="text-2xl font-bold text-white">Tin Nổi Bật</h1>
//         </div>

//         <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 mb-8 rounded-md">
//           {highlightedNews.map((item, index) => (
//             <Card
//               key={index}
//               title={item.title}
//               description={item.description}
//               imageUrl={item.urlToImage || "https://via.placeholder.com/150"}
//               id={item.source?.id || encodeURIComponent(item.title)}
//             />
//           ))}
//         </div>

//         {/* Phần Tất Cả Tin Tức */}
//         <div className="p-4 bg-red-800 mb-4 rounded-md">
//           <h2 className="text-xl font-bold text-white">Tất Cả Tin Tức</h2>
//         </div>

//         <div className="grid grid-cols-4 gap-4">
//           {news.map((item, index) => (
//             <Card
//               key={index}
//               title={item.title}
//               description={item.description}
//               imageUrl={item.urlToImage || "https://via.placeholder.com/150"}
//               id={item.source?.id || encodeURIComponent(item.title)}
//             />
//           ))}
//         </div>

//         {/* Phân trang */}
//         <div className="flex space-x-2 mt-8">
//           {[1, 2, 3, 4, 5, 6].map((num) => (
//             <button
//               key={num}
//               className={`px-4 py-2 rounded-md font-semibold transition ${
//                 num === page
//                   ? "bg-blue-500 text-white"
//                   : "border border-gray-300 text-gray-700"
//               }`}
//               onClick={() => setPage(num)}
//             >
//               Trang {num}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import Head from "next/head";

interface Article {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
}

async function fetchArticles(): Promise<Article[]> {
  return [
    { id: "test-article", title: "Đây là bài báo thử nghiệm", description: "Mô tả ngắn...", publishedAt: new Date().toISOString() },
    { id: "nextjs-14", title: "Next.js 14 có gì mới?", description: "Các tính năng mới của Next.js 14", publishedAt: new Date().toISOString() },
  ];
}

export default async function NewsList() {
  const articles = await fetchArticles();

  return (
    <>
      <Head>
        <title>Danh sách bài báo</title>
      </Head>
      <div className="w-full max-w-full lg:max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Danh sách bài báo</h1>
        <ul className="mt-4 space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="border p-4 rounded-lg shadow-sm">
              <Link href={`/news/${article.id}`} className="text-blue-500 font-semibold">
                {article.title}
              </Link>
              <p className="text-gray-500 text-sm">{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
