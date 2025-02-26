// @ts-nocheck

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "@/components/ui/NavBar";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

const API_KEY = "c185f33502b44f99b29bb76561a7cc3c"; // Thay bằng API key thực tế
const API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=" +
  API_KEY;

export default function NewsApp() {
  const [page, setPage] = useState(1);
  const [highlightedNews, setHighlightedNews] = useState([]);
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNews = async (pageNumber = 1) => {
    try {
      const res = await axios.get(API_URL);
      const data = res.data.articles;
      setHighlightedNews(data.slice(0, 4));

      const start = (pageNumber - 1) * 20 + 4;
      const end = pageNumber * 20 + 4;
      setNews(data.slice(start, end));

      const totalNews = data.length - 4;
      setTotalPages(Math.ceil(totalNews / 20));
    } catch (error) {
      console.error("Lỗi khi tải tin tức:", error);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  return (
    <div>
      <NavBar />
      <div className="px-5">
        {/* Phần Tin Nổi Bật */}
        <div className="p-4 bg-red-800 mb-4 flex items-center space-x-2 rounded-md">
          <Star className="text-yellow-500" />
          <h1 className="text-2xl font-bold text-white">Tin Nổi Bật</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 mb-8 rounded-md">
          {highlightedNews.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.urlToImage || "https://via.placeholder.com/150"}
            />
          ))}
        </div>

        {/* Phần Tất Cả Tin Tức */}
        <div className="p-4 bg-red-800 mb-4 rounded-md">
          <h2 className="text-xl font-bold text-white">Tất Cả Tin Tức</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {news.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.urlToImage || "https://via.placeholder.com/150"}
            />
          ))}
        </div>

        {/* Phân trang */}
        <div className="flex space-x-2 mb-4 items-center">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-gray-200 rounded-md mr-4"
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                num === page
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 text-gray-700"
              }`}
              onClick={() => setPage(num)}
            >
              Trang {num}
            </button>
          ))}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-gray-200 rounded-md ml-4"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
